import { test, expect, Locator, Page, BrowserContext } from '@playwright/test'
import { LoginPage } from './support/pages/LoginPage'
import { CredentialsPattern } from './fixtures/CredentialsPattern'
import data from './fixtures/credentials.json'
import { LogoutPage } from './support/pages/LogoutPage'
import playwright from 'playwright'

let loginPage: LoginPage
let logoutPage: LogoutPage

test.beforeEach(({ page }) => {
    loginPage = new LoginPage(page)
    logoutPage = new LogoutPage(page)
})

test.describe('Active Session Validation', () => {

    test('Active Session Proceed with Multiple Browsers', async ({ page, browser }) => {
        const userNameAdm = data.userNameAdm as CredentialsPattern
        const passwordAdm = data.passwordAdm as CredentialsPattern

        await loginPage.accessWebSite()
        await loginPage.login(userNameAdm, passwordAdm)

        // Opening Firefox
        const firefox = await playwright['firefox'].launch({ channel: 'firefox' })
        const firefoxContext = await firefox.newContext()
        const firefoxPage = await firefoxContext.newPage()       

        // Perform actions on Firefox
        const firefoxLoginPage = new LoginPage(firefoxPage)
        const firefoxLogoutPage = new LogoutPage(firefoxPage)
        await firefoxPage.goto('/app/signin/')
        await firefoxLoginPage.activeSessionProceed(userNameAdm, passwordAdm)
    })

    test('Active Session Abort', async ({ page, browser }) => {
        const userNameMember = data.userNameMember as CredentialsPattern
        const passwordMember = data.passwordMember as CredentialsPattern

        await loginPage.accessWebSite()
        await loginPage.login(userNameMember, passwordMember)

        // Opening Firefox
        const firefox = await playwright['firefox'].launch({ channel: 'firefox' })
        const firefoxContext = await firefox.newContext()
        const firefoxPage = await firefoxContext.newPage()

        // Perform actions on Firefox
        const firefoxLoginPage = new LoginPage(firefoxPage)
        await firefoxPage.goto('/app/signin/')
        await firefoxLoginPage.activeSessionAbort(userNameMember, passwordMember)
    })

})