import { Locator, Page } from "playwright"

export class LogoutPage {

    readonly page: Page
    readonly account: Locator
    readonly exit: Locator

    constructor(page: Page) {

        this.page = page
        this.account = page.locator('a[class="account"]')
        this.exit = page.locator('span[class="exit"]')
    }

    async logout() {

        await this.account.isVisible()
        await this.account.click()
        await this.exit.isVisible()
        await this.exit.click()
    }

}

