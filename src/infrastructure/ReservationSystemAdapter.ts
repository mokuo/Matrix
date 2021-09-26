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

    new TopPage(page)
      .load()
      .then(nextPage => nextPage.clickOnlyInquiry())
      .catch(error => { throw error })

    await page.screenshot({ path: "/Users/kida/ghq/github.com.private/mokuo/Advantage/tmp/hoge.png" })

    return [] // HACK
  }
}

export default ReservationSystemAdapter
