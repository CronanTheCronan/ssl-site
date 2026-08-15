import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const pub = path.join(__dirname, '..', 'public')
const assets = path.join(
  'C:',
  'Users',
  'mattc',
  '.grok',
  'sessions',
  'C%3A%5CUsers%5Cmattc%5Cdev%5CSolaceSignalLabs_Website',
  '01a003a2-ee1e-7492-9e26-e13d64c9134a',
  'assets',
)

const srcFull = path.join(assets, 'image-801a7944-f871-4659-ba7a-85aee279cd66.png')
const srcMark = path.join(assets, 'image-b73e9c60-877d-4304-8528-06b40d34cae8.png')

async function extractMark(inputPath, outPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })

  const { width, height } = info
  const out = Buffer.alloc(data.length)

  // Source is an app-icon style mark: black corners + white rounded card + blue logo.
  // Drop pure black frame corners and white card fill; keep blue/signal graphics.
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i]
    const g = data[i + 1]
    const b = data[i + 2]
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    const sat = max === 0 ? 0 : (max - min) / max
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b

    // Black / near-black frame outside rounded card
    if (lum < 28 && sat < 0.25) {
      out[i] = out[i + 1] = out[i + 2] = 0
      out[i + 3] = 0
      continue
    }
    // White / light gray card background
    if (min > 210) {
      out[i] = out[i + 1] = out[i + 2] = 0
      out[i + 3] = 0
      continue
    }
    // Soft fringe: residual light edges of the card (drop aggressively)
    if (min > 140 && sat < 0.18) {
      out[i] = out[i + 1] = out[i + 2] = 0
      out[i + 3] = 0
      continue
    }
    // Keep only saturated blues/cyans and structured dark navy mark strokes
    const isBlueish = b >= r && b >= g * 0.9 && (b - Math.min(r, g) > 12 || sat > 0.12)
    const isNavyStroke = lum < 120 && sat > 0.08 && b >= r * 0.85
    if (!isBlueish && !isNavyStroke) {
      out[i] = out[i + 1] = out[i + 2] = 0
      out[i + 3] = 0
      continue
    }
    out[i] = r
    out[i + 1] = g
    out[i + 2] = b
    out[i + 3] = 255
  }

  // Bounding box of opaque pixels
  let minX = width
  let minY = height
  let maxX = 0
  let maxY = 0
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const a = out[(y * width + x) * 4 + 3]
      if (a > 40) {
        if (x < minX) minX = x
        if (y < minY) minY = y
        if (x > maxX) maxX = x
        if (y > maxY) maxY = y
      }
    }
  }

  const pad = 16
  minX = Math.max(0, minX - pad)
  minY = Math.max(0, minY - pad)
  maxX = Math.min(width - 1, maxX + pad)
  maxY = Math.min(height - 1, maxY + pad)
  const cropW = maxX - minX + 1
  const cropH = maxY - minY + 1

  await sharp(out, { raw: { width, height, channels: 4 } })
    .extract({ left: minX, top: minY, width: cropW, height: cropH })
    .resize(512, 512, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(outPath)
}

async function darkFullLogo(inputPath, outPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })
  const out = Buffer.from(data)
  for (let i = 0; i < out.length; i += 4) {
    const r = out[i]
    const g = out[i + 1]
    const b = out[i + 2]
    if (r > 245 && g > 245 && b > 245) {
      out[i + 3] = 0
      continue
    }
    if (r > 225 && g > 225 && b > 225) {
      const avg = (r + g + b) / 3
      out[i + 3] = Math.max(0, Math.min(255, Math.round((255 - avg) * 6)))
      continue
    }
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    const sat = max === 0 ? 0 : (max - min) / max
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b
    if (lum < 100 && sat < 0.42) {
      const t = lum / 100
      out[i] = Math.round(210 + t * 30)
      out[i + 1] = Math.round(218 + t * 25)
      out[i + 2] = Math.round(228 + t * 20)
    }
  }
  await sharp(out, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .trim({ threshold: 5 })
    .resize({ width: 1400 })
    .png()
    .toFile(outPath)
}

async function main() {
  await extractMark(srcMark, path.join(pub, 'logo-mark.png'))
  await darkFullLogo(srcFull, path.join(pub, 'logo-full.png'))
  fs.copyFileSync(path.join(pub, 'logo-full.png'), path.join(pub, 'logo.png'))

  const logoBuf = await sharp(path.join(pub, 'logo-full.png'))
    .resize({ width: 720, height: 360, fit: 'inside' })
    .png()
    .toBuffer()
  const logoMeta = await sharp(logoBuf).metadata()
  const w = 1200
  const h = 630
  const lx = Math.max(0, Math.round((w - (logoMeta.width || 720)) / 2))
  const ly = Math.max(0, Math.round((h - (logoMeta.height || 200)) / 2) - 36)
  const taglineY = Math.min(h - 40, ly + (logoMeta.height || 200) + 48)
  const svg = Buffer.from(
    `<svg width="${w}" height="${h}"><rect width="100%" height="100%" fill="#0B1220"/><text x="50%" y="${taglineY}" text-anchor="middle" font-family="system-ui,Segoe UI,sans-serif" font-size="26" fill="#94A3B8">Human-governed AI for game creators</text></svg>`,
  )
  await sharp(svg)
    .composite([{ input: logoBuf, left: lx, top: ly }])
    .png()
    .toFile(path.join(pub, 'og-image.png'))

  for (const [s, name] of [
    [16, 'favicon-16.png'],
    [32, 'favicon-32.png'],
    [180, 'apple-touch-icon.png'],
    [512, 'icon-512.png'],
  ]) {
    const bg =
      s >= 180
        ? { r: 11, g: 18, b: 32, alpha: 1 }
        : { r: 0, g: 0, b: 0, alpha: 0 }
    await sharp(path.join(pub, 'logo-mark.png'))
      .resize(s, s, { fit: 'contain', background: bg })
      .png()
      .toFile(path.join(pub, name))
  }
  await sharp(path.join(pub, 'logo-mark.png'))
    .resize(32, 32, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(path.join(pub, 'favicon.png'))

  console.log('Clean mark + dark full logo ready')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
