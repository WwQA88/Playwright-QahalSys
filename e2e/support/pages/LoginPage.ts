import { Page, Locator, expect } from '@playwright/test'
import { CredentialsPattern } from '../../fixtures/CredentialsPattern'

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

    async login(userName: CredentialsPattern, password: CredentialsPattern) {
        await this.inputUserName.fill(userName.name)
        await this.inputPassword.fill(password.secret)
        await this.submitButtonEnter.click()
    }

    async loginFailAlert(text: string) {
        const alertMessage = this.page.locator('#swal2-content')
        await expect(alertMessage).toHaveText(text)
    }
}
