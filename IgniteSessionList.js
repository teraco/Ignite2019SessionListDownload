const puppeteer = require('puppeteer');

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
  await page.goto('https://myignite.techcommunity.microsoft.com/sessions?t=%257B%2522from%2522%253A%25222019-11-03T08%253A00%253A00-05%253A00%2522%252C%2522to%2522%253A%25222019-11-08T19%253A00%253A00-05%253A00%2522%257D')
  await page.setViewport({ width: 2560, height: 1339 })
  
  await navigationPromise
  
  let i = 0;
  while (i < 3) {
  // while (true) { # 本番用
    let j = 1;
    while (j <= 10) {
      let URL = await page.evaluate((selector) => {
      const list = Array.from(document.querySelectorAll(selector));
      return list.map(data => data.href);
      }, `#content-container > div > div.session-search__content > div > div.session-search__session-list.session-search__session-tile__isNotAuthenticated > div:nth-child(${j}) > div > div > div.session-block--list > div > a`);
      console.log(URL[0])
      console.log('-----')
      console.log(j++)
      }
    console.log('==============================')
    console.log(i++)
    //  next page
    await page.waitForSelector('.search-header-bar__pagination > mwf-pagination > .m-pagination > .mwf-pagination__page-arrow--right > .c-glyph')
    await page.click('.search-header-bar__pagination > mwf-pagination > .m-pagination > .mwf-pagination__page-arrow--right > .c-glyph')
    await navigationPromise
  }
  
})();

// #content-container > div > div.session-search__content > div > div.session-search__session-list.session-search__session-tile__isNotAuthenticated > div:nth-child(1) > div > div > div.session-block--list > div > a
// #content-container > div > div.session-search__content > div > div.session-search__session-list.session-search__session-tile__isNotAuthenticated > div:nth-child(2) > div > div > div.session-block--list > div > a
// #content-container > div > div.session-search__content > div > div.session-search__session-list.session-search__session-tile__isNotAuthenticated > div:nth-child(10) > div > div > div.session-block--list > div > a


// <div class="session-block__detail" data-grid="col-12">
//                 <a ng-href="/labs/87273?source=sessions" ng-class="{'no-underline not-active' : !vm.enableSessionCatalogDetailLink() }" telemetry-link="telemetry.session-detail" href="/labs/87273?source=sessions">
//                     <h5 class="c-heading-5 f-lean session-block__detail__title">
//                         HOL2015 - Using Azure Machine Learning&nbsp;service&nbsp;Model Versioning and Run History
//                         <!---->
//                     </h5>
//                 </a>

//                 <!---->

//                 <p class="c-paragraph-3 f-lean session-block__detail__abstract">
//                     <mwf-content-toggle length="3"><div class="c-content-toggle">
//     <!----><div ng-if="ctrl.hasTranscluded" data-f-expanded="false" ng-transclude="">
//                         <span>In this lab, use the capabilities of the Azure Machine Learning service to collect model performance metrics and to capture model version, as well as query the experimentation run history to retrieve captured metrics.</span>
//                     </div><!---->

//     <!---->

//     <!---->

//     <button telemetry-click="telemetry.content-toggle.expand" data-f-show="3" ng-i18next="__once__[i18next:data-f-more]translate.generic.actions.read-more;[i18next:data-f-less]translate.generic.actions.show-less;translate.generic.actions.more" data-f-more="read more" data-f-less="show less" style="display: none;">More</button>
// </div>
// </mwf-content-toggle>
//                 </p>
//             </div>