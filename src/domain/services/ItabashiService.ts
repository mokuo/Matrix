import TennisCourt from "@src/domain/models/TennisCourt"
import { chromium, Page } from "playwright"

class ItabashiService {
  // TODO: ページオブジェクトに切り出す
  public static async findReservableTennisCourts(): Promise<TennisCourt[]> {
    const browser = await chromium.launch()
    const page = await browser.newPage()
    const navigationPromise = page.waitForNavigation()
    

    await page.goto("https://www.itabashi-shisetsu-yoyaku.jp/eshisetsu/menu/Login.cgi")

    await page.setViewportSize({ width: 1920, height: 946 })

    await navigationPromise

    await page.waitForSelector(".loginboxr > .inbox > .formcontent > a > .pngfix")
    await page.click(".loginboxr > .inbox > .formcontent > a > .pngfix")

    await navigationPromise

    await page.waitForSelector("#selectbox > .clfix > li > a > strong")
    await page.click("#selectbox > .clfix > li > a > strong")

    await navigationPromise

    await page.waitForSelector(".tablebox > table > tbody > .hovered > td")
    await page.click(".tablebox > table > tbody > .hovered > td")

    await navigationPromise

    await page.waitForSelector(".tablebox > table > tbody > .hovered > td")
    await page.click(".tablebox > table > tbody > .hovered > td")

    await navigationPromise

    await page.waitForSelector(".tablebox > table > tbody > .hovered > td")
    await page.click(".tablebox > table > tbody > .hovered > td")

    await navigationPromise

    await page.waitForSelector(".tablebox > table > tbody > .hovered > td:nth-child(1)")
    await page.click(".tablebox > table > tbody > .hovered > td:nth-child(1)")

    await page.waitForSelector("#fmaincolumn > #pagerbox > span > a:nth-child(2) > .pngfix")
    await page.click("#fmaincolumn > #pagerbox > span > a:nth-child(2) > .pngfix")

    await navigationPromise

    await page.waitForSelector("#radioshowmonth")
    await page.click("#radioshowmonth")

    await page.waitForSelector("#selectbox > ul > li > a > .pngfix")
    await page.click("#selectbox > ul > li > a > .pngfix")

    await navigationPromise

    // 当日から31日分表示

    await browser.close()
    return []
  }
}

export default ItabashiService;
