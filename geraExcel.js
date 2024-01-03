//onst xl = require("excel4node");
import xl from 'excel4node';
const wb = new xl.Workbook();
const ws = wb.addWorksheet('FoundExplorer');

export function geraExcel(data){
    const headingColumnNames = [
        "Fundo","Setor","Preço Atual","Liquidex Diária","Dividendo","Yield","Yields 3 Meses","Yields 6 Meses","Yields 12 Meses"
    ];

    let headingColumnIndex = 1;
    headingColumnNames.forEach(heading => {
        ws.cell(1, headingColumnIndex++).string(heading);
    });
    
    let rowIndex = 2;
    data.forEach(record => {
        let columnIndex = 1;
        Object.keys(record).forEach(columnName =>{
            ws.cell(rowIndex, columnIndex++).string(record[columnName])
        });
        rowIndex++;
    });

    wb.write('FoundsExplorer.xlsx');

}