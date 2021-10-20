import { readFile } from "fs/promises";
import { join } from "path";
import { path as appRootPath } from "app-root-path";
import parseHtmlTable, { TableCellsStock } from "../parseHtmlTable";

describe("TableCellsStock", () => {
  
})

describe("parseHtmlTable()", () => {
  // TODO: src/lib/__tests__/__fixtures__/20211001_31_higashi_itabashi_3_4.html を読み込む
  // const tableInnerHTML = ""

  it("hoge", async () => {
    const htmlPath = join(appRootPath, "src", "lib", "__tests__", "__fixtures__","20211010_31_higashi_itabashi_3_4.html.txt")
    const tableInnerHTML = await readFile(htmlPath)
    const table = parseHtmlTable(tableInnerHTML.toString())

    expect(table).toEqual("hoge")
  })
})
