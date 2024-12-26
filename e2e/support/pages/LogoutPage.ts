import exp from "constants"
import { Locator, Page } from "playwright"
import { expect } from "playwright/test"

export class LogoutPage {

  readonly page: Page
  readonly account: Locator
  readonly exit: Locator

  constructor(page: Page) {

    this.page = page
    this.account = page.locator('li[class="menudropdown userpanel"]')
    this.exit = page.locator('//*[@class="menudropdown userpanel show"]//span[@class="exit"]')
  }

  async logout() {
    
    await this.account.isVisible()
    await this.account.click()
    await this.page.waitForTimeout(1000)
    await this.exit.click()
  }

}

