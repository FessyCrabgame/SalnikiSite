import css from './TableS590.module.css'

export default function TableS590({tableData, rowSpanChet}){
    return(
        <table className={css.table} border="1">
            <tbody>
                <tr className={css.tr}>
                    <td className={css.td1type} colSpan="2" rowSpan="2">Маркировка</td>
                    <td className={css.td2type} rowSpan="2">Наруж. диам</td>
                    <td className={css.td3type} colSpan="4">Вес, кг</td>
                </tr>
                <tr className={css.tr}>
                    <td className={css.td4type} width="48">0,3м</td>
                    <td className={css.td5type} width="48">0,4м</td>
                    <td className={css.td6type} width="50">0,5м</td>
                    <td className={css.td7type} width="50">0,6м</td>
                </tr>
                {tableData.map((tableDataElement)=>    
                            tableDataElement[1].map((tableDataSimvol, index) => (
                                <tr className={css.tr}>
                                    {index==0? <td className={css.td8type} rowSpan={`${rowSpanChet}`}>{tableDataElement[0]}</td>: ''}
                                    <td className={css.td9type} width="136">{tableDataSimvol[0]}</td>
                                    <td className={css.td10type} width="60">{tableDataSimvol[1]}</td>
                                    <td className={css.td11type} width="48">{tableDataSimvol[2]}</td>
                                    <td className={css.td12type} width="48">{tableDataSimvol[3]}</td>
                                    <td className={css.td13type} width="50">{tableDataSimvol[4]}</td>
                                    <td className={css.td14type} width="50">{tableDataSimvol[5]}</td>
                                </tr>
                            ))
                )}
            </tbody>
        </table>
    )
}