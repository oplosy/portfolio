import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright-core";

const outputDir = path.join(process.cwd(), ".impeccable", "review");
const executablePath = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const url = process.env.URL ?? "http://localhost:3000";
await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ executablePath, headless: true });

const desktopShots = [
  ["top", null],
  ["approach", "#approach"],
  ["systems-head", "#work"],
  ["system-one", '.system[data-index="0"]'],
  ["system-three", '.system[data-index="2"]'],
  ["stack", "#stack"],
  ["contact", "#contact"],
];

const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();
await page.goto(url, { waitUntil: "networkidle" });
await page.waitForTimeout(1800);
for (const [name, selector] of desktopShots) {
  if (selector) await page.evaluate((s) => document.querySelector(s)?.scrollIntoView({ behavior: "instant" }), selector);
  await page.waitForTimeout(1400);
  await page.screenshot({ path: path.join(outputDir, `desktop-${name}.png`) });
}
await context.close();

const mobile = await browser.newContext({ viewport: { width: 390, height: 844 } });
const mobilePage = await mobile.newPage();
await mobilePage.goto(url, { waitUntil: "networkidle" });
await mobilePage.waitForTimeout(1800);
for (const [name, selector] of [["top", null], ["approach", "#approach"], ["system", '.system[data-index="0"]'], ["contact", "#contact"]]) {
  if (selector) await mobilePage.evaluate((s) => document.querySelector(s)?.scrollIntoView({ behavior: "instant" }), selector);
  await mobilePage.waitForTimeout(1200);
  await mobilePage.screenshot({ path: path.join(outputDir, `mobile-${name}.png`) });
}
await mobile.close();
await browser.close();
console.log("captured to", outputDir);
