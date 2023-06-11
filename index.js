import puppeteer from "puppeteer";

async function openWebPage() {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 200,
  });
  const page = await browser.newPage();
  await page.goto("https://www.example.com");
  await browser.close();
}

//openWebPage();

async function captureScreenshot() {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 200,
  });
  const page = await browser.newPage();
  await page.goto("https://www.youtube.com");
  await page.screenshot({ path: "./screenshot.png" });
  await browser.close();
}
//captureScreenshot();

async function navigateWeb() {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 400,
  });
  const page = await browser.newPage();
  await page.goto("https://www.quotes.toscrape.com");
  await page.click('a[href="/login"]'),
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  await browser.close();
}
//navigateWeb();

async function getDataFromWebPage() {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 200,
  });
  const page = await browser.newPage();
  await page.goto("https://www.example.com");
  const data = await page.evaluate(() => {
    let title = document.querySelector("h1").innerText;
    let description = document.querySelector("p").innerText;
    return {
      title,
      description,
    };
  });
  console.log(data);
  await browser.close();
}

//getDataFromWebPage();

async function handleDynamicWebPage() {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 200,
  });
  const page = await browser.newPage();
  await page.goto("https://quotes.toscrape.com");
  //   await page.waitForSelector('div[data-loaded="true"]'); // Asegúrate de reemplazar esto con el selector de CSS correcto.
  const data = await page.evaluate(() => {
    const quotes = document.querySelectorAll(".quote");
    const data = [...quotes].map((quote) => {
      const quoteText = quote.querySelector(".text").innerText;
      const author = quote.querySelector(".author").innerText;
      const tags = [...quote.querySelectorAll(".tag")].map(
        (tag) => tag.innerText
      );
      return {
        quoteText,
        author,
        tags,
      };
    });
    return data;
  });
  console.log(data);
  await browser.close();
}

handleDynamicWebPage();
