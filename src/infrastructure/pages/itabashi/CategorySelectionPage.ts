import BasePage from "../BasePage";

class CategorySelectionPage extends BasePage {
  async clickCategory() {
    await this.click("tr[onclick*='E00']")
  }
}

export default CategorySelectionPage
