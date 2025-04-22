import { test, expect } from '@playwright/test';
import path from 'path';

// test('Verify Playwright Homepage Title', async ({ page }) => {
//   await page.goto('https://testautomationpractice.blogspot.com/');
//   await expect(page).toHaveTitle(/Automation Testing Practice/);
//   await page.locator("//*[contains(@name,'start')]").click()
//   await page.getByRole('button', { name: 'Confirmation Alert' }).click();
//   page.on('dialog', async dialog => {
    // console.log(dialog.message());
//     await dialog.accept();
//   });
// await page.click('#alertButton');
// await page.locator('button#OK').click()
// await new Promise(resolve => setTimeout(resolve, 3000));
// const message = await page.locator('//*[@id="demo"]')
// await expect(message).toHaveText('You pressed OK!')

// //   await page.getByPlaceholder('Enter Name').fill('testers');
// //   await page.locator('#email').fill('test@gmail.com');
 
// });

// test('verify pop up', async ({page}) => {
//     await page.goto('');
//     await page.getByRole('button', { name: 'Click for JS Alert' }).click();
//     // await page.locator('button#OK').click()
//     page.on('dialog', async dialog => {
//             await dialog.accept();
//     });
//     const message = await page.locator('//*[@id="result"]')
//     await expect(message).toHaveText('You successfully clicked an alert')
//     await new Promise(resolve => setTimeout(resolve, 3000));
// })

// test ('verify iframes', async ({page}) =>{
//     await page.goto('https://www.w3schools.com/html/html_iframe.asp');
//     // const frame = await page.frame({ name: 'W3Schools HTML Tutorial' });
//     // await frame?.click('button');
//     const locator = page.locator('//*[@id="main"]/div[3]/iframe').contentFrame().locator('//*[@id="subtopnav"]/a[5]').nth(1);
//     await locator.click();
//     await new Promise(resolve => setTimeout(resolve, 3000));
// })

test('Upload file', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.setInputFiles('#singleFileInput', '/Users/macbook/Projects/playwright_class/file.txt');
    await page.locator('//*[@id="singleFileInput"]').click();
    // page.on('filechooser', async fileChooser =>  {
    // // const fileChooserPromise = page.waitForEvent('filechooser');
    // await fileChooser.setFiles(path.join(__dirname, '/Users/macbook/Projects/playwright_class/file.txt'));
    // })
    const file = page.locator('//*[@id="singleFileInput"]')
    await expect(file).toContainText('file.txt')
    await new Promise(resolve => setTimeout(resolve, 3000));
  });
  