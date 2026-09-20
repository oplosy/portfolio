import { chromium } from "playwright-core";

const browser = await chromium.launch({
  executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  headless: true,
});

async function pageAt(viewport) {
  const context = await browser.newContext({ viewport });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("http://127.0.0.1:43127", { waitUntil: "networkidle" });
  return { context, page, errors };
}

const desktop = await pageAt({ width: 1440, height: 900 });
const desktopOverflow = await desktop.page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
if (desktopOverflow) throw new Error("Desktop has horizontal overflow");

async function assertInertAt(progress, selector, expected) {
  await desktop.page.evaluate((targetProgress) => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo(0, max * targetProgress);
  }, progress);
  await desktop.page.waitForTimeout(450);
  const inert = await desktop.page.locator(selector).evaluate((element) => element.hasAttribute("inert"));
  if (inert !== expected) throw new Error(`${selector} inert=${inert} at progress ${progress}`);
}

await assertInertAt(0.421, ".project-layer", true);
await assertInertAt(0.515, ".project-layer", false);
await assertInertAt(0.561, ".detail-scene", true);
await assertInertAt(0.65, ".detail-scene", false);
await assertInertAt(0.826, ".record-scene", true);
await assertInertAt(0.9, ".record-scene", false);
await assertInertAt(0.926, ".contact-scene", true);
await assertInertAt(0.985, ".contact-scene", false);

await desktop.page.evaluate(() => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  window.scrollTo(0, max * 0.515);
});
await desktop.page.waitForTimeout(700);
await desktop.page.locator(".project-node--east").click();
await desktop.page.waitForTimeout(1200);

const selectedTitle = await desktop.page.locator("#detail-title").textContent();
const selectedOpacity = Number(await desktop.page.locator(".detail-scene").evaluate((element) => getComputedStyle(element).opacity));
if (selectedTitle !== "ycollab" || selectedOpacity < 0.75) {
  throw new Error(`Project transition failed: title=${selectedTitle}, opacity=${selectedOpacity}`);
}

await desktop.page.evaluate(() => window.scrollTo(0, 0));
await desktop.page.waitForTimeout(900);
const heroOpacity = Number(await desktop.page.locator(".hero-scene").evaluate((element) => getComputedStyle(element).opacity));
if (heroOpacity < 0.9) throw new Error(`Reverse scroll failed: hero opacity=${heroOpacity}`);
if (desktop.errors.length) throw new Error(`Desktop page errors: ${desktop.errors.join(" | ")}`);
await desktop.context.close();

const mobile = await pageAt({ width: 390, height: 844 });
const mobileOverflow = await mobile.page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
if (mobileOverflow) throw new Error("Mobile has horizontal overflow");
if (mobile.errors.length) throw new Error(`Mobile page errors: ${mobile.errors.join(" | ")}`);
await mobile.context.close();

await browser.close();
console.log("interaction verification passed");
