import { Page, Locator, expect, FrameLocator } from '@playwright/test'
import { CredentialsPattern } from '../../fixtures/CredentialsPattern'

export class LoginPage {

    readonly page: Page
    readonly inputUserName: Locator
    readonly inputPassword: Locator
    readonly submitButtonEnter: Locator
    readonly iframe: FrameLocator
    readonly activeSessionIframeContBtn: Locator
    readonly activeSessionIframeCnclBtn: Locator
    readonly burguerMenu: Locator
    constructor(page: Page) {

        this.page = page
        this.inputUserName = page.locator('#id_sc_field_login')
        this.inputPassword = page.locator('#id_sc_field_password')
        this.submitButtonEnter = page.locator('#kt_login_signin_submit')
        this.iframe = page.frameLocator('#TB_iframeContent')
        this.activeSessionIframeContBtn = this.iframe.locator("//*[@id='kt_body']//*[@id='id_sc_logged_user']")
        this.activeSessionIframeCnclBtn = this.iframe.locator('button[data-dismiss*=modal]')
        this.burguerMenu = page.locator('#bmenu')
    }

    async accessWebSite() {

        await this.page.goto('/app/signin/')
    }

    async login(userName: CredentialsPattern, password: CredentialsPattern) {
        await this.inputUserName.fill(userName.name)
        await this.inputPassword.fill(password.secret)
        await this.submitButtonEnter.click()

        await this.page.waitForTimeout(5000)
        
        if (await this.activeSessionIframeContBtn.isVisible()) {

            await this.activeSessionIframeContBtn.click()
            this.burguerMenu.isVisible()
        } else {

            this.activeSessionIframeContBtn.isHidden
            this.burguerMenu.isVisible()
        }
    }

    async loginFailAlert(text: string) {

        const alertMessage = this.page.locator('#swal2-content')
        await expect(alertMessage).toHaveText(text)
    }

    async activeSessionProceed(userName: CredentialsPattern, password: CredentialsPattern) {

        await this.inputUserName.fill(userName.name)
        await this.inputPassword.fill(password.secret)
        await this.submitButtonEnter.click()
        this.activeSessionIframeContBtn.isVisible()
        await this.activeSessionIframeContBtn.click()
        this.burguerMenu.isVisible()
    }

    async activeSessionAbort(userName: CredentialsPattern, password: CredentialsPattern) {

        await this.inputUserName.fill(userName.name)
        await this.inputPassword.fill(password.secret)
        await this.submitButtonEnter.click()
        this.activeSessionIframeCnclBtn.isVisible()
        await this.activeSessionIframeCnclBtn.click()
    }
}