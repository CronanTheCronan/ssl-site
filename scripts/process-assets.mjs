import sharp from 'sharp'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const pub = path.join(root, 'public')
const mark = path.join(pub, 'logo-mark.png')
const full = path.join(pub, 'logo-full.png')

async function main() {
  const sizes = [
    [16, 'favicon-16.png'],
    [32, 'favicon-32.png'],
    [180, 'apple-touch-icon.png'],
    [512, 'icon-512.png'],
  ]
  for (const [s, name] of sizes) {
    await sharp(mark)
      .resize(s, s, {
        fit: 'contain',
        background: { r: 11, g: 18, b: 32, alpha: 1 },
      })
      .png()
      .toFile(path.join(pub, name))
  }

  await sharp(mark)
    .resize(32, 32, {
      fit: 'contain',
      background: { r: 11, g: 18, b: 32, alpha: 1 },
    })
    .png()
    .toFile(path.join(pub, 'favicon.png'))

  // Founder photo optimized
  const founderSrc = path.join(pub, 'matt-cronan.jpg')
  const founderTmp = path.join(pub, 'matt-cronan-tmp.jpg')
  await sharp(founderSrc)
    .resize(800, 1000, { fit: 'cover' })
    .jpeg({ quality: 82 })
    .toFile(founderTmp)
  fs.renameSync(founderTmp, founderSrc)

  // Optimize logos
  const fullTmp = path.join(pub, 'logo-full-tmp.png')
  await sharp(full).resize({ width: 1400 }).png().toFile(fullTmp)
  fs.renameSync(fullTmp, full)

  const markTmp = path.join(pub, 'logo-mark-tmp.png')
  await sharp(mark).resize({ width: 512 }).png().toFile(markTmp)
  fs.renameSync(markTmp, mark)

  // OG image 1200x630 — constrain logo so composite always fits
  const w = 1200
  const h = 630
  const logoBuf = await sharp(full)
    .resize({ width: 720, height: 360, fit: 'inside' })
    .png()
    .toBuffer()
  const logoMeta = await sharp(logoBuf).metadata()
  const lw = logoMeta.width || 720
  const lh = logoMeta.height || 200
  const lx = Math.max(0, Math.round((w - lw) / 2))
  const ly = Math.max(0, Math.round((h - lh) / 2) - 36)
  const taglineY = Math.min(h - 40, ly + lh + 48)

  const svgText = Buffer.from(
    `<svg width="${w}" height="${h}">
      <rect width="100%" height="100%" fill="#0B1220"/>
      <text x="50%" y="${taglineY}" text-anchor="middle"
        font-family="system-ui,Segoe UI,sans-serif" font-size="26" fill="#94A3B8">
        Human-governed AI for game creators
      </text>
    </svg>`,
  )

  await sharp(svgText)
    .composite([{ input: logoBuf, left: lx, top: ly }])
    .png()
    .toFile(path.join(pub, 'og-image.png'))

  // Public logo.png alias for JSON-LD
  fs.copyFileSync(full, path.join(pub, 'logo.png'))

  console.log('Assets processed successfully')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
