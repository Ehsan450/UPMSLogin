const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://tkdcsqa2.tallykhata.com/login", { waitUntil: "domcontentloaded" });
  await page.fill('input[type="text"]', '******');
  await page.waitForTimeout(5000);
  await page.fill('input[type="password"]', '******');
  await page.waitForTimeout(5000);
  await page.click('button:has-text("LOG IN")');
  await page.waitForTimeout(5000);
  
  // Wait for the search icon to be available and click on it
  //await page.waitForSelector('svg.search_search_icon__RD3Nq');
 // await page.click('svg.search_search_icon__RD3Nq');

  // Wait for the search input to appear, then type a query
  //await page.waitForSelector('input[placeholder="Type to search"]');
  //await page.fill('input[placeholder="Type to search"]', "Online Shop");
  //await page.keyboard.press('Enter'); 

  //await browser.close();
})();
