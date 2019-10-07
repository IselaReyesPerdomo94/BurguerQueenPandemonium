import React from 'react';
import ReactExport from 'react-export-excel';
import FlatButton from '../Buttons/flatButton/index'


const DownloadExcel = () => {
    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const Excelcolumn = ReactExport.ExcelFile.Excelcolumn;

    
    return(
        <ExcelFile element={<FlatButton text="Exportar" className="export-button" />}>
            
        </ExcelFile>
        <div>hei</div>
    )
}

export default DownloadExcel;