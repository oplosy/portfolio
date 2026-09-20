import { chromium } from "playwright-core";

const executablePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const browser = await chromium.launch({ executablePath, headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();
await page.goto("http://127.0.0.1:43127", { waitUntil: "networkidle" });

const initialTransform = await page.locator(".project-track").evaluate((node) => getComputedStyle(node).transform);
await page.evaluate(() => {
  const work = document.querySelector(".work");
  const track = document.querySelector(".project-track");
  if (work && track) window.scrollTo(0, work.parentElement.offsetTop + (track.scrollWidth - innerWidth) * 0.55);
});
await page.waitForTimeout(900);
const movedTransform = await page.locator(".project-track").evaluate((node) => getComputedStyle(node).transform);
if (initialTransform === movedTransform || movedTransform === "none") throw new Error("Horizontal project track did not move");

const github = await page.locator('.contact a[href="https://github.com/oplosy"]').count();
if (github !== 1) throw new Error("GitHub contact link is missing");

const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: "reduce" });
const mobilePage = await mobile.newPage();
await mobilePage.goto("http://127.0.0.1:43127", { waitUntil: "networkidle" });
const mobileOverflow = await mobilePage.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
if (mobileOverflow) throw new Error("Mobile layout has horizontal overflow");
const mobilePanels = await mobilePage.locator(".project-panel").count();
if (mobilePanels !== 4) throw new Error(`Expected 4 project panels, found ${mobilePanels}`);

await mobile.close();
await context.close();
await browser.close();
console.log("interaction verification passed");
