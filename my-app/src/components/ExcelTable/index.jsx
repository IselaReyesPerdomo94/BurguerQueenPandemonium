import React, { useState, useEffect } from 'react';
import ReactExport from 'react-export-excel';
import FlatButton from '../Buttons/flatButton/index';
import TableView from '../Table/table'
import ExcelColumn from 'react-export-excel/dist/ExcelPlugin/elements/ExcelColumn';


const DownloadExcel = (props) => {
    const ExcelFile = ReactExport.ExcelFile;
    const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
    const ExcelColumn = ReactExport.ExcelFile.Excelcolumn;
    const {handleExportShopping} = props;
    const [lowSupplies, setLowSupplies] = useState([]);

    const supplies = localStorage.getItem('tableData') ? JSON.parse(localStorage.getItem('tableData')) : []

    const transformToNumber = () => {
        const suppliesNumber = supplies.map((element) => {
            let available = parseFloat(element.disponible);
            let needed = parseFloat(element.necesario);
            let weekly = parseFloat(element.semanal);
        return {
            ...element,
            disponible: available,
            necesario: needed,
            semanal: weekly
        }
        })
        return suppliesNumber;
    }

    const verifyWeeklyAvailable = () => {
        const transformedSupplies = transformToNumber();
        const lowWeekly = transformedSupplies.filter(element => element.disponible < element.semanal/3)
        const lowWeeklyReduce = lowWeekly.map(item => {
            return {
                name:item.nombre,
                disponible: `${item.disponible} ${item.medida}`,
                semanal: `${item.semanal} ${item.medidaSemanal}`
            }
        })
        setLowSupplies(lowWeeklyReduce)
    }
    const verifyEmptyShopping = () => {
        if(!supplies.length || supplies == null){
            const emptyInventoryShopping  = [{
                    categoria: "",
                    nombre: "",
                    disponible: "",
                    medida: "",
                    necesario: "",
                    medidaDelDia: "",
                    semanal: "",
                    medidaSemanal: ""
            }]
            localStorage.setItem('tableData', JSON.stringify(emptyInventoryShopping))
        }
    }

    useEffect(() => {
        verifyEmptyShopping();
        verifyWeeklyAvailable();
    }, []);
    
    return(
        <ExcelFile element={<FlatButton text="Exportar" className="export-button" onClick={handleExportShopping} />}>
            <ExcelSheet lowSupplies={lowSupplies} name="Compras Semanales">
                <ExcelColumn label="Nombre de Producto" value={lowSupplies.name}/>
                <ExcelColumn label="Cantidad Semanal" value={lowSupplies.semanal} />
                <ExcelColumn label="Cantidad Disponible" value={lowSupplies.disponible} />
            </ExcelSheet>
        </ExcelFile>
    )
}

export default DownloadExcel;