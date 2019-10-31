const puppeteer = require('puppeteer');
const fs = require('fs');
const csv = require('csv');

// read csv
let lists = []
fs.createReadStream('lists.csv')
.pipe(csv.parse(function(err, data) {

  data.forEach((element, index, array) => {
    console.log(element[0])
    lists.push(element[0])
  })
}));

(async () => {

  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
  });
  
  // Login
  const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));
  
  const page = await browser.newPage()
  
  const navigationPromise = page.waitForNavigation()
  
  await page.goto('https://msfteventsb2c.b2clogin.com/msfteventsb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_signin_Ignite2019_Intergen&ui_locales=&appId=ec922bed-131f-4c7b-8f24-b3f7a523d291&client_id=ec922bed-131f-4c7b-8f24-b3f7a523d291&response_type=token%20id_token&redirect_uri=https%3A%2F%2Fmyignite.techcommunity.microsoft.com%2Flogin&state=%7B%22client_id%22%3A%22ec922bed-131f-4c7b-8f24-b3f7a523d291%22%2C%22network%22%3A%22adB2CSignIn%22%2C%22display%22%3A%22page%22%2C%22callback%22%3A%22_hellojs_8vumb327%22%2C%22state%22%3A%22https%3A%2F%2Fmyignite.techcommunity.microsoft.com%2Fhome%22%2C%22redirect_uri%22%3A%22https%3A%2F%2Fmyignite.techcommunity.microsoft.com%2Flogin%22%2C%22scope%22%3A%22openid%2Cec922bed-131f-4c7b-8f24-b3f7a523d291%22%2C%22page_uri%22%3A%22https%3A%2F%2Fmyignite.techcommunity.microsoft.com%2Flogin%22%7D&scope=openid%20ec922bed-131f-4c7b-8f24-b3f7a523d291')
  await page.setViewport({ width: 1368, height: 812 })
  
  await navigationPromise
  
  await page.waitForSelector('#api #MicrosoftAccountExchange')

  await sleep(5000);

  await page.click('#api #MicrosoftAccountExchange')

  await navigationPromise

  await sleep(5000);

  await page.type('div #i0116', yourud)
  
  await page.waitForSelector('.row #idSIButton9')
  await page.click('.row #idSIButton9')
  
  await navigationPromise
  
  await sleep(10000);

  await page.waitForSelector('div #i0118')
  await page.click('div #i0118')

  await page.type('div #i0118', yourpassword)
  
  await sleep(5000);

  await page.waitForSelector('.position-buttons #idChkBx_PWD_KMSI0Pwd')
  await page.click('.position-buttons #idChkBx_PWD_KMSI0Pwd')
  
  await page.waitForSelector('.row #idSIButton9')
  await page.click('.row #idSIButton9')
  
  await navigationPromise
  
  await navigationPromise

  
  await page.waitForSelector('div > div > .c-paragraph-3 > mwf-button > .mwf-button')
  await page.click('div > div > .c-paragraph-3 > mwf-button > .mwf-button')
  
  await navigationPromise
  
  await navigationPromise
  
  await navigationPromise
  
  await navigationPromise

  await sleep(30000);

  // Session infomation

  // session datetime
  const session_datetime_element = "#content-container > div > div > div:nth-child(4) > detail-side-bar > div > div > authorized > ng-transclude > session-actions > div > div > h5:nth-child(1)"

  // session location
  const session_location_element = "#content-container > div > div > div:nth-child(4) > detail-side-bar > div > div > authorized > ng-transclude > session-actions > div > div > a > h5"

  // session hoge
  const session_hoge_element = "#content-container > div > div > div:nth-child(4) > detail-side-bar > div > div > authorized > ng-transclude > session-actions > div > div > h5:nth-child(3)"

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
  
  for (const list of lists) {

    console.log(list + 'start')

    await page.goto(`https://myignite.techcommunity.microsoft.com/sessions/${list}`)
    await page.setViewport({ width: 1368, height: 812 })  
  
    await new Promise(r => setTimeout(r, 1 * 5000));

    const page_title_element = "#content-container > header-banner > div > div > h3"
  
    let page_title = await page.evaluate((selector) => {
      const list = Array.from(document.querySelectorAll(selector));
      return list.map(data => data.innerText);
      }, page_title_element);
    if(page_title === "Page not found") {
      continue
    }

    await page.waitForSelector(session_code_element)
  
    elements = [
      session_datetime_element,
      session_location_element,
      session_hoge_element,
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
    
    let row = [];

    for (const element of elements) {
      let output_data = await page.evaluate((selector) => {
        const list = Array.from(document.querySelectorAll(selector));
        return list.map(data => data.innerText);
        }, element);
      console.log(output_data[0])
      if(typeof output_data[0] === "undifiend") {
        row.push("NULLDATA");
      } else {
        row.push(output_data);
      }
    }

    const input = [["session_date_element","session_location_element","session_time_element","session_title_element","speakers_element","text_element","session_code_element","session_type_element","level_element","product_element","format_element","topic_element"], row ];
    csv.stringify(input, function(err, output){
      fs.writeFile(`lists/${list}.csv`,output,(error)=>{
          console.log(list + 'end');
      })
    });

  }

})();
