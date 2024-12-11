import { Page, Locator } from '@playwright/test'
import { CredentialsCore } from '../../fixtures/CredentialsCore'

export class LoginPage {
    readonly page: Page
    readonly inputUserName: Locator
    readonly inputPassword: Locator
    readonly submitButtonEnter: Locator

    constructor(page: Page) {
        this.page = page
        this.inputUserName = page.locator('#id_sc_field_login')
        this.inputPassword = page.locator('#id_sc_field_password')
        this.submitButtonEnter = page.locator('#kt_login_signin_submit')
    }

    async accessWebSite() {
       await this.page.goto('/app/signin/')
    }

    async performLogin(userName: CredentialsCore, password: CredentialsCore) {
        await this.inputUserName.fill(userName.name)
        await this.inputPassword.fill(password.secret)
        await this.submitButtonEnter.click()
    }
}
