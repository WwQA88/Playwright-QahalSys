import { test, expect, Locator, Page } from '@playwright/test'
import { LoginPage } from './support/pages/LoginPage'
import { CredentialsPattern } from './fixtures/CredentialsPattern'
import data from './fixtures/credentials.json'


let loginPage: LoginPage

test.beforeEach(({ page }) => {
    loginPage = new LoginPage(page)
})

test.describe('Login Validation', () => {

    test.only('Success Login Admin', async ({ page }) => {
        const userNameAdm = data.userNameAdm as CredentialsPattern
        const passwordAdm = data.passwordAdm as CredentialsPattern

        await loginPage.accessWebSite()
        await loginPage.login(userNameAdm, passwordAdm)   
    })

    test('Success Login Member', async ({ page }) => {
        const userNameMember = data.userNameMember as CredentialsPattern
        const passwordMember = data.passwordMember as CredentialsPattern

        await loginPage.accessWebSite()
        await loginPage.login(userNameMember, passwordMember)   
    })

    test('Invalid Credentials Login', async ({ page }) => {
        const userInvalid = data.userInvalid as CredentialsPattern
        const passwordUnknown = data.passwordUnknown as CredentialsPattern

        await loginPage.accessWebSite()
        await loginPage.login(userInvalid, passwordUnknown)
        await loginPage.loginFailAlert('ERROR: Usuário ou senha inválidos')   
    })

    test('Incorrect Password Login', async ({ page }) => {
        const userNameMember = data.userInvalid as CredentialsPattern
        const passwordUnknown = data.passwordUnknown as CredentialsPattern

        await loginPage.accessWebSite()
        await loginPage.login(userNameMember, passwordUnknown)
        await loginPage.loginFailAlert('ERROR: Usuário ou senha inválidos')   
    })

    test('Missing username Login', async ({ page }) => {
        const userNameEmpty = data.emptyUserName as CredentialsPattern
        const passwordUnknown = data.passwordUnknown as CredentialsPattern

        await loginPage.accessWebSite()
        await loginPage.login(userNameEmpty, passwordUnknown)
        await loginPage.loginFailAlert('ERROR: Você precisa preencher suas informações de acesso.')
    })

    test('Missing password Login', async ({ page }) => {
        const userInvalid = data.userInvalid as CredentialsPattern
        const passwordEmpty = data.emptyPassword as CredentialsPattern

        await loginPage.accessWebSite()
        await loginPage.login(userInvalid, passwordEmpty)
        await loginPage.loginFailAlert('ERROR: Você precisa preencher suas informações de acesso.')
    })
})