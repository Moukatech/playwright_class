import {test, expect} from  "@playwright/test";
import { Login } from "../Page_objects/loginPage";
// import testdata from "./logindata.json"

test.beforeEach(async ({page}) => {
    const login_page = new Login(page)
    await login_page.navigateToUrl()
})
test('Login success', async ({page}) => {
    
    const login_page = new Login(page)
    await login_page.signIn("lewismocha1@gmail.com", "Test123")
})  

// test ("incorrect login", async ({page}) => {
//     const login_page = new Login(page)
//     await login_page.signIn(testdata.userName, testdata.Password)


// })

// testdata.forEach(data => {
//     test(`Login with ${data.userName}`, async ({ page }) => {
//       await page.fill('#username', data.userName);
//       await page.fill('#password', data.Password);
//       await page.click('#login');
//     });
//   });


// result = [{username,password}, {username, pasword}]
  