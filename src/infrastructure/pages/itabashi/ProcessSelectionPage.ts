import BasePage from "../BasePage";
import InquiryMethodSelectionPage from "./InquiryMethodSelectionPage";

class ProcessSelectionPage extends BasePage {
  async clickInquiryReservation() {
    await this.click("#selectbox a")

    return new InquiryMethodSelectionPage(this.page)
  }
}

export default ProcessSelectionPage
