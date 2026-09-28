import { chromium } from "playwright-core";

const executablePath = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const url = process.env.URL ?? "http://localhost:3000";
const browser = await chromium.launch({ executablePath, headless: true });

const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();
await page.goto(url, { waitUntil: "networkidle" });

const counter = page.locator(".systems-panel-head span").last();
await page.evaluate(() => document.querySelector('.system[data-index="2"]')?.scrollIntoView({ block: "center", behavior: "instant" }));
await page.waitForTimeout(800);
const active = (await counter.textContent())?.trim();
if (active !== "03 / 04") throw new Error(`Systems panel did not follow scroll, shows "${active}"`);

const github = await page.locator('.contact a[href="https://github.com/oplosy"]').count();
if (github !== 1) throw new Error("GitHub contact link is missing");

const mobile = await browser.newContext({ viewport: { width: 390, height: 844 }, reducedMotion: "reduce" });
const mobilePage = await mobile.newPage();
await mobilePage.goto(url, { waitUntil: "networkidle" });
const mobileOverflow = await mobilePage.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
if (mobileOverflow) throw new Error("Mobile layout has horizontal overflow");
const inlinePipelines = await mobilePage.locator(".system-inline .pipeline:visible").count();
if (inlinePipelines !== 4) throw new Error(`Expected 4 inline pipelines on mobile, found ${inlinePipelines}`);

await mobile.close();
await context.close();
await browser.close();
console.log("interaction verification passed");
