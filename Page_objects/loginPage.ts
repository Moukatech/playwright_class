import { Locator, Page } from "@playwright/test";
import { throws } from "assert";


export class Login{
    readonly page :Page
    readonly username: Locator
    readonly password: Locator
    readonly submitButton

    constructor (page:Page){
        this.page = page
        this.username = page.locator('#emailTrue')
        this.password = page.locator('#password')
        this.submitButton = page.locator('//*[@id="login-form"]/button')

    }


    async navigateToUrl(){
        await this.page.goto('https://kitfest.co.ke/login-form')
    }

    async signIn(username, password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.submitButton.click()

    }
}