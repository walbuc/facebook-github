const puppeteer = require('puppeteer');
let browser;
let page;

beforeEach(async () => {
  browser = await puppeteer.launch({
    headless: false
  });
  page = await browser.newPage();
  await page.goto('localhost:3000');
});

afterEach(async () => {
  await browser.close();
});

test('The header has the correct text', async () => {
  const text = await page.$eval('h2.display-3', el => el.innerHTML);
  expect(text).toEqual('facebook - GitHub SPA!');
});


test('Detail list has contributors from github API', async () => {
  await page.waitFor('.repo-detail .list-group li');
  const text = await page.$eval('.repo-detail .list-group li', el => el.innerHTML);
  expect(text).toBeTruthy();
});

test('Detail list has contributors names from github API', async () => {
  await page.waitFor('.repo-detail .list-group li');
  const text = await page.$eval('.repo-detail .list-group li', el => el.innerHTML);
  expect(text).toContain('media-heading');
});

test('Detail list has number of contributions from github API', async () => {
  await page.waitFor('.details .list-group li');
  const text = await page.$eval('.repo-detail .list-group li', el => el.innerHTML);
  expect(text).toContain('Number of contributions:');
});

test('Repositories list loads repos names from GitHub API ', async () => {
  await page.waitFor('#right li');
  const text = await page.$eval('#right li .media-heading', el => el.innerHTML);
  expect(text).toBeTruthy();
});
