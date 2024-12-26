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

test.describe('Login Validation', () => {

    test('Success Login Admin', async ({ page, browser }) => {
        const userNameAdm = data.userNameAdm as CredentialsPattern
        const passwordAdm = data.passwordAdm as CredentialsPattern
    
        await loginPage.accessWebSite()
        await loginPage.login(userNameAdm, passwordAdm)
        await logoutPage.logout()
    })

    test('Success Login Member', async ({ page, browser }) => {
        const userNameMember = data.userNameMember as CredentialsPattern
        const passwordMember = data.passwordMember as CredentialsPattern

        await loginPage.accessWebSite()
        await loginPage.login(userNameMember, passwordMember)
        await logoutPage.logout()
    })

    test('Invalid Credentials Login', async ({ page, browser }) => {
        const userInvalid = data.userInvalid as CredentialsPattern
        const passwordUnknown = data.passwordUnknown as CredentialsPattern

        await loginPage.accessWebSite()
        await loginPage.login(userInvalid, passwordUnknown)
        await loginPage.loginFailAlert('ERROR: Usuário ou senha inválidos')
    })

    test('Incorrect Password Login', async ({ page, browser }) => {
        const userNameMember = data.userInvalid as CredentialsPattern
        const passwordUnknown = data.passwordUnknown as CredentialsPattern

        await loginPage.accessWebSite()
        await loginPage.login(userNameMember, passwordUnknown)
        await loginPage.loginFailAlert('ERROR: Usuário ou senha inválidos')
    })

    test('Missing username Login', async ({ page, browser }) => {
        const userNameEmpty = data.emptyUserName as CredentialsPattern
        const passwordUnknown = data.passwordUnknown as CredentialsPattern

        await loginPage.accessWebSite()
        await loginPage.login(userNameEmpty, passwordUnknown)
        await loginPage.loginFailAlert('ERROR: Você precisa preencher suas informações de acesso.')
    })

    test('Missing password Login', async ({ page, browser }) => {
        const userInvalid = data.userInvalid as CredentialsPattern
        const passwordEmpty = data.emptyPassword as CredentialsPattern
        const browserName = browser.browserType().name()

        await loginPage.accessWebSite()
        await loginPage.login(userInvalid, passwordEmpty)
        await loginPage.loginFailAlert('ERROR: Você precisa preencher suas informações de acesso.')
    })
})
