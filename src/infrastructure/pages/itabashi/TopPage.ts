import BasePage from "../BasePage";
import ProcessSelectionPage from "./ProcessSelectionPage";

const URL = "https://www.itabashi-shisetsu-yoyaku.jp/eshisetsu/menu/Login.cgi"

class TopPage extends BasePage {
  async load() {
    await this.page.goto(URL)

    return new TopPage(this.page)
  }

  async clickOnlyInquiry() {
    await this.click("img[alt='空き照会のみのかたはこちら…ボタン']")

    return new ProcessSelectionPage(this.page)
  }
}

export default TopPage
