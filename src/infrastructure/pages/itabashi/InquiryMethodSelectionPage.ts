import BasePage from "../BasePage";
import CategorySelectionPage from "./CategorySelectionPage";

class InquiryMethodSelectionPage extends BasePage {
  async clickPurpose() {
    await this.click("tr:nth-child(2)")

    return new CategorySelectionPage(this.page)
  }
}

export default InquiryMethodSelectionPage
