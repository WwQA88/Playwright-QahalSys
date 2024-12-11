import { test, expect, Locator, Page } from '@playwright/test'
import { LoginPage } from './support/pages/LoginPage'
import { CredentialsCore } from './fixtures/CredentialsCore'
import data from './fixtures/credentials.json'


let loginPage: LoginPage

test.beforeEach(({ page }) => {
    loginPage = new LoginPage(page)
})

test('Success Admin Login', async ({ page }) => {
    const userNameAdm = data.userNameAdm as CredentialsCore
    const passwordAdm = data.passwordAdm as CredentialsCore

    await loginPage.accessWebSite()
    await loginPage.performLogin(userNameAdm, passwordAdm);   
})
