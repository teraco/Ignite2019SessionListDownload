const puppeteer = require('puppeteer');

// (async () => {
//   // Puppeteerの起動
//   const browser = await puppeteer.launch({
//     headless: false, //HeadLessモードでの起動有無
//     slowMo: 50, // 指定のミリ秒スローモーションで実行する
//   });

//   // 新しい空のページを開く
//   const page = await browser.newPage();

//   // Promise定義
//   const navigationPromise = page.waitForNavigation()

//   // view portの設定
//   await page.goto('https://myignite.techcommunity.microsoft.com/sessions?t=%257B%2522from%2522%253A%25222019-11-03T08%253A00%253A00-05%253A00%2522%252C%2522to%2522%253A%25222019-11-08T19%253A00%253A00-05%253A00%2522%257D')
//   await page.setViewport({ width: 2560, height: 1339 })
  
//   await navigationPromise
  
//   let i = 0;
//   while (i < 0) {
//   // while (true) { # 本番用
//     let j = 1;
//     while (j <= 10) {
//       let URL = await page.evaluate((selector) => {
//       const list = Array.from(document.querySelectorAll(selector));
//       return list.map(data => data.href);
//       }, `#content-container > div > div.session-search__content > div > div.session-search__session-list.session-search__session-tile__isNotAuthenticated > div:nth-child(${j}) > div > div > div.session-block--list > div > a`);
//       console.log(URL[0])
//       console.log('-----')
//       console.log(j++)
//       }
//     console.log('==============================')
//     console.log(i++)
//     //  next page
//     await page.waitForSelector('.search-header-bar__pagination > mwf-pagination > .m-pagination > .mwf-pagination__page-arrow--right > .c-glyph')
//     await page.click('.search-header-bar__pagination > mwf-pagination > .m-pagination > .mwf-pagination__page-arrow--right > .c-glyph')
//     await navigationPromise
//   }
  
// })();

(async () => {
  // Puppeteerの起動
  const browser = await puppeteer.launch({
    headless: false, //HeadLessモードでの起動有無
    slowMo: 50, // 指定のミリ秒スローモーションで実行する
  });

  // 新しい空のページを開く
  const page = await browser.newPage();

  // Promise定義
  const navigationPromise = page.waitForNavigation()

  // view portの設定
  await page.goto('https://myignite.techcommunity.microsoft.com/sessions/84601?source=sessions')
  await page.setViewport({ width: 2560, height: 1339 })
  
  await navigationPromise

  // session title
  const session_title_element = "#content-container > div > div > div:nth-child(4) > div:nth-child(1) > header > div > h3"

  // Speakers
  const speakers_element = "#content-container > div > div > div:nth-child(4) > div:nth-child(1) > speaker-detail-link > div"

  // text
  const text_element = "#content-container > div > div > div:nth-child(4) > div:nth-child(1) > p"

  // session code
  const session_code_element = "#content-container > div > div > div:nth-child(4) > detail-side-bar > div > div > mwf-content-toggle > div > div > div:nth-child(1) > div"

  // session type
  const session_type_element = "#content-container > div > div > div:nth-child(4) > detail-side-bar > div > div > mwf-content-toggle > div > div > div:nth-child(2) > div"

  // Level
  const level_element = "#content-container > div > div > div:nth-child(4) > detail-side-bar > div > div > mwf-content-toggle > div > div > div:nth-child(4) > div"

  // Product
  const product_element = "#content-container > div > div > div:nth-child(4) > detail-side-bar > div > div > mwf-content-toggle > div > div > div:nth-child(5) > div"

  // Format
  const format_element = "#content-container > div > div > div:nth-child(4) > detail-side-bar > div > div > mwf-content-toggle > div > div > div:nth-child(6) > div"

  // Topic
  const topic_element = "#content-container > div > div > div:nth-child(4) > detail-side-bar > div > div > mwf-content-toggle > div > div > div:nth-child(7) > div"

  elements = [
    session_title_element,
    speakers_element,
    text_element,
    session_code_element,
    session_type_element,
    level_element,
    product_element,
    format_element,
    topic_element
  ]
  for (const element of elements) {
    let output_data = await page.evaluate((selector) => {
      const list = Array.from(document.querySelectorAll(selector));
      return list.map(data => data.innerText);
      }, element);
    console.log(output_data[0])
  }
})();
