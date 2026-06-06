import puppeteer from 'puppeteer-core'
import { mkdirSync, writeFileSync } from 'fs'
import path from 'path'

const OUT = 'portfolio-shots'
mkdirSync(OUT, { recursive: true })

const browser = await puppeteer.launch({
  executablePath: '/usr/bin/google-chrome',
  args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
  headless: true,
})

async function prepare(page) {
  // Hide Next.js dev overlay/badge and force all animated elements visible
  await page.addStyleTag({
    content: `
      nextjs-portal,
      [data-nextjs-dialog],
      [data-nextjs-dialog-overlay],
      #__nextjs-portal,
      #__next-build-watcher,
      [class*="nextjs-toast"],
      [class*="nextjs-container"],
      iframe[src*="_next"],
      [data-next-hide-fouc] { display: none !important; }

      *, *::before, *::after {
        animation-duration: 0s !important;
        transition-duration: 0s !important;
        animation-delay: 0s !important;
        transition-delay: 0s !important;
      }
    `,
  })
  await page.evaluate(() => {
    // Force all framer-motion hidden elements visible
    document.querySelectorAll('*').forEach(el => {
      const s = window.getComputedStyle(el)
      if (s.opacity === '0') el.style.setProperty('opacity', '1', 'important')
      if (el.style.transform && el.style.transform !== 'none') {
        el.style.setProperty('transform', 'none', 'important')
      }
    })
    // Also nuke shadow-DOM next portals
    document.querySelectorAll('nextjs-portal').forEach(el => el.remove())
  })
  await new Promise(r => setTimeout(r, 1000))
}

async function shot(page, filename, scrollY) {
  await page.evaluate(y => window.scrollTo(0, y), scrollY)
  await new Promise(r => setTimeout(r, 700))
  // Re-hide badge after scroll (Next might re-inject it)
  await page.evaluate(() => {
    document.querySelectorAll('nextjs-portal').forEach(el => el.remove())
  })
  const buf = await page.screenshot()
  writeFileSync(path.join(OUT, filename), buf)
  console.log(`✓ ${filename}`)
}

// ── Desktop 1440×900 @2x ────────────────────────────────────────────────────
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 })
await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' })
await prepare(page)

const tops = await page.evaluate(() =>
  Object.fromEntries(
    Array.from(document.querySelectorAll('section[id]')).map(el => [
      el.id,
      Math.round(el.getBoundingClientRect().top + window.scrollY),
    ])
  )
)

await shot(page, '01-hero-desktop.png', 0)
await shot(page, '03-pillars-section.png', tops.pilares ?? 1472)
await shot(page, '05-beneficios.png', tops.beneficios ?? 4648)
await shot(page, '06-funcionalidades.png', tops.funcionalidades ?? 6902)
await shot(page, '07-planos.png', tops.planos ?? 8380)
await shot(page, '08-team.png', tops.team ?? 9388)

// ── Mobile 390×844 @2x ──────────────────────────────────────────────────────
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 })
await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' })
await prepare(page)
writeFileSync(path.join(OUT, '09-hero-mobile.png'), await page.screenshot())
console.log('✓ 09-hero-mobile.png')

await browser.close()
console.log(`\nDone → ${OUT}/`)
