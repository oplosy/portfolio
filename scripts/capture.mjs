import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright-core";

const outputDir = path.join(process.cwd(), ".impeccable", "review");
const executablePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const url = "http://127.0.0.1:43127";
await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ executablePath, headless: true });

async function desktop(name, scrollTarget) {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: "networkidle" });
  if (scrollTarget) {
    await page.evaluate(scrollTarget);
    await page.waitForTimeout(900);
  }
  await page.screenshot({ path: path.join(outputDir, `${name}.png`) });
  await context.close();
}

await desktop("new-desktop-top");
await desktop("new-desktop-hero-motion", () => window.scrollTo(0, window.innerHeight * 1.05));
await desktop("new-desktop-about", () => document.querySelector(".manifesto")?.scrollIntoView());
await desktop("new-desktop-work-intro", () => document.querySelector(".work")?.scrollIntoView());
await desktop("new-desktop-project-one", () => {
  const work = document.querySelector(".work");
  const track = document.querySelector(".project-track");
  if (work && track) window.scrollTo(0, work.parentElement.offsetTop + (track.scrollWidth - innerWidth) * 0.22);
});
await desktop("new-desktop-project-three", () => {
  const work = document.querySelector(".work");
  const track = document.querySelector(".project-track");
  if (work && track) window.scrollTo(0, work.parentElement.offsetTop + (track.scrollWidth - innerWidth) * 0.7);
});
await desktop("new-desktop-stack", () => document.querySelector(".stack")?.scrollIntoView());
await desktop("new-desktop-contact", () => document.querySelector(".contact")?.scrollIntoView());

const mobile = await browser.newContext({ viewport: { width: 390, height: 844 } });
const mobilePage = await mobile.newPage();
await mobilePage.goto(url, { waitUntil: "networkidle" });
for (const [name, selector] of [["top", ".hero"], ["about", ".manifesto"], ["project", ".project-panel"], ["contact", ".contact"]]) {
  await mobilePage.locator(selector).first().scrollIntoViewIfNeeded();
  await mobilePage.waitForTimeout(500);
  await mobilePage.screenshot({ path: path.join(outputDir, `new-mobile-${name}.png`) });
}
await mobile.close();
await browser.close();
