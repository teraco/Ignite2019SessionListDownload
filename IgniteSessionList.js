const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
  });

  const page = await browser.newPage();

  const navigationPromise = page.waitForNavigation()

  await page.goto('https://myignite.techcommunity.microsoft.com/sessions?t=%257B%2522from%2522%253A%25222019-11-03T08%253A00%253A00-05%253A00%2522%252C%2522to%2522%253A%25222019-11-08T19%253A00%253A00-05%253A00%2522%257D')
  await page.setViewport({ width: 2560, height: 1339 })
  
  await navigationPromise
  
  let i = 0;
  while (true) {
    let j = 1;
    while (j <= 10) {
      let URL = await page.evaluate((selector) => {
      const list = Array.from(document.querySelectorAll(selector));
      return list.map(data => data.href);
      }, `#content-container > div > div.session-search__content > div > div.session-search__session-list.session-search__session-tile__isNotAuthenticated > div:nth-child(${j}) > div > div > div.session-block--list > div > a`);
      console.log(URL[0])
      console.log(j++)
      }
    console.log(i++)
    //  next page
    await page.waitForSelector('.search-header-bar__pagination > mwf-pagination > .m-pagination > .mwf-pagination__page-arrow--right > .c-glyph')
    await page.click('.search-header-bar__pagination > mwf-pagination > .m-pagination > .mwf-pagination__page-arrow--right > .c-glyph')
    await navigationPromise
  }
  
})();
