import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright-core";

const root = process.cwd();
const outputDir = path.join(root, ".impeccable", "review");
const executablePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const url = "http://127.0.0.1:43127";

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ executablePath, headless: true });

async function capture(name, viewport, progress, reducedMotion = "no-preference") {
  const context = await browser.newContext({ viewport });
  const page = await context.newPage();
  await page.emulateMedia({ reducedMotion });
  await page.goto(url, { waitUntil: "networkidle" });

  if (progress > 0) {
    await page.evaluate((targetProgress) => {
      const maximum = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo(0, maximum * targetProgress);
    }, progress);
    await page.waitForTimeout(1100);
  }

  await page.screenshot({ path: path.join(outputDir, `${name}.png`) });
  await context.close();
}

await capture("desktop-top", { width: 1440, height: 900 }, 0);
await capture("desktop-hero-zoom", { width: 1440, height: 900 }, 0.08);
await capture("desktop-system-open", { width: 1440, height: 900 }, 0.14);
await capture("desktop-system", { width: 1440, height: 900 }, 0.235);
await capture("desktop-about-enter", { width: 1440, height: 900 }, 0.3);
await capture("desktop-about", { width: 1440, height: 900 }, 0.375);
await capture("desktop-projects-enter", { width: 1440, height: 900 }, 0.47);
await capture("desktop-projects", { width: 1440, height: 900 }, 0.515);
await capture("desktop-detail", { width: 1440, height: 900 }, 0.65);
await capture("desktop-stack", { width: 1440, height: 900 }, 0.79);
await capture("desktop-record", { width: 1440, height: 900 }, 0.9);
await capture("desktop-contact", { width: 1440, height: 900 }, 0.985);
await capture("mobile-top", { width: 390, height: 844 }, 0);
await capture("mobile-hero-zoom", { width: 390, height: 844 }, 0.08);
await capture("mobile-system", { width: 390, height: 844 }, 0.235);
await capture("mobile-about", { width: 390, height: 844 }, 0.375);
await capture("mobile-projects", { width: 390, height: 844 }, 0.515);
await capture("mobile-detail", { width: 390, height: 844 }, 0.65);
await capture("mobile-stack", { width: 390, height: 844 }, 0.79);
await capture("mobile-contact", { width: 390, height: 844 }, 0.985);
await capture("reduced-motion", { width: 1440, height: 900 }, 0, "reduce");

await browser.close();
