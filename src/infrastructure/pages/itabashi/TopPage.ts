import BasePage from "../BasePage";

const URL = "https://www.itabashi-shisetsu-yoyaku.jp/eshisetsu/menu/Login.cgi"

class TopPage extends BasePage {
  async load(): Promise<TopPage> {
    await this.page.goto(URL)
    await this.page.setViewportSize({ width: 1920, height: 946 })
    await this.waitForNavigation()

    return new TopPage(this.page)
  }

  async clickOnlyInquiry() {
    await this.click("img[alt='空き照会のみのかたはこちら…ボタン']")
  }
}

export default TopPage
