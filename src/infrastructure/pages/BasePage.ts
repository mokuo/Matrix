import { Page } from "playwright"

class BasePage {
  protected page: Page

  constructor(page: Page) {
    this.page = page
  }

  async waitForNavigation() {
    await this.page.waitForNavigation()
  }

  async click(selector: string) {
    await this.page.waitForSelector(selector)
    await this.page.click(selector)
  }
}

export default BasePage
