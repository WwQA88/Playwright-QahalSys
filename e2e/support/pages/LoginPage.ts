import { Page, Locator, expect } from '@playwright/test'
import { CredentialsPattern } from '../../fixtures/CredentialsPattern'
import exp from 'constants'

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

        const iframe = this.page.frameLocator('#TB_iframeContent')
        const activeSession = iframe.locator("//*[@id='kt_body']//*[@id='id_sc_logged_user']")
        await this.page.waitForLoadState('networkidle')

        if (await activeSession.isVisible()) {
            activeSession.click()
            await this.page.waitForLoadState('networkidle')
            const burguerMenu = await this.page.locator('#bmenu').isVisible()
            await this.page.waitForLoadState('networkidle')
        } else {
            activeSession.isHidden
            const burguerMenu = await this.page.locator('#bmenu').isVisible()
            await this.page.waitForLoadState('networkidle')
        }
    }

    async loginFailAlert(text: string) {
        const alertMessage = this.page.locator('#swal2-content')
        await expect(alertMessage).toHaveText(text)
    }
}
