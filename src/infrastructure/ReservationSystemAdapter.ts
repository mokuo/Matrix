import { chromium } from "playwright";
import TopPage from "./pages/itabashi/TopPage";
import TennisCourt from "@src/domain/models/TennisCourt";
import IReservationSystemAdapter from "@src/usecase/IReservationSystemAdapter";

/* eslint max-classes-per-file: 0 */
export class ReservationSystemScrapingError extends Error {}

class ReservationSystemAdapter implements IReservationSystemAdapter {
  async getTennisCourts(): Promise<TennisCourt[]> {
    const browser = await chromium.launch()
    const page = await browser.newPage()

    const topPage = await new TopPage(page).load()
    const processSelectionPage = await topPage.clickOnlyInquiry()
    const inquiryMethodSelectionPage = await processSelectionPage.clickInquiryReservation()
    const categorySelectionPage = await inquiryMethodSelectionPage.clickPurpose()
    await categorySelectionPage.clickCategory()

    await page.screenshot({ path: "/Users/kida/ghq/github.com.private/mokuo/Advantage/tmp/test001.png" })

    return [] // HACK
  }
}

export default ReservationSystemAdapter
