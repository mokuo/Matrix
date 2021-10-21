import { JSDOM } from "jsdom";
import KeyValueQueue from "./KeyValueQueue";

const parseHtmlTable = (htmlTable: string): string[][] => {
  const table: string[][] = []
  const queue = new KeyValueQueue()

  const {document} = new JSDOM(htmlTable).window
  const trNodeList = document.querySelectorAll("table[summary='選択した施設・時間帯の空き状況を確認するための表。'] tbody tr")

  // 各行の中で forEach で回して、スタックから取って詰めていく
  trNodeList.forEach((trElement, rowIndex) => {
    const row: string[] = []
    const cellNodeList = trElement.querySelectorAll("th,td") // cell = <th> or <td>

    const endOfRow = false
    let columnIndex = 0
    while (endOfRow) {
      // キューにあれば使う
      // なければ cellNodeList を使う
        // rowspan, colspan があればスタックする
      const poppedCell = queue.dequeue(`${rowIndex}:${columnIndex}`)
      if (poppedCell) {
        table[rowIndex][columnIndex] = poppedCell
      } else {
        const cellElement = cellNodeList[columnIndex]
        table[rowIndex][columnIndex] = cellElement.textContent || ""

        // TODO: rowspan, colspan があればスタックする
      }

      columnIndex += 1
      // TODO: endOfRow の判定処理
    }

    table.push(row)
  })

  return table
}

export default parseHtmlTable
