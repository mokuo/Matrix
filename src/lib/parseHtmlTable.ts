import { JSDOM } from "jsdom";

type Cell = {
  rowIndex: number
  columnIndex: number
  value: string
}
export class TableCellsStock {
  private stock: Cell[]

  constructor() {
    this.stock = []
  }

  public findCell(rowIndex: number, columnIndex: number): string | undefined {
    const cell = this.stock.find(_cell => _cell.rowIndex === rowIndex && _cell.columnIndex === columnIndex)
    return cell && cell.value
  }

  public stockCell(rowIndex: number, columnIndex: number, value: string) {
    
  }
}

const parseHtmlTable = (htmlTable: string): string[][] => {
  const table: string[][] = []

  const {document} = new JSDOM(htmlTable).window
  const trNodeList = document.querySelectorAll("table[summary='選択した施設・時間帯の空き状況を確認するための表。'] tbody tr")
  // 各行の中で forEach で回して、スタックから取って詰めていく
  trNodeList.forEach((trElement, rowIndex) => {
    const row: string[] = []
    const cellNodeList = trElement.querySelectorAll("th,td") // th か td

    const endOfRow = false
    const columnIndex = 0
    while (endOfRow) {
      // column のスタックがあれば使う
      // j を渡して row のスタックがあれば使う
      // なければ cellNodeList を使う
        // rowspan, colspan があればスタックする

      j += 1
    }

    table.push(row)
  })

  return table
}

export default parseHtmlTable
