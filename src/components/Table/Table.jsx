import css from './Table.module.css'


export default function Table({tableData}){
    return(
        <table className={css.table}>
                    <tbody>
                        <tr className={css.tr}>
                            <td className={css.td1Type} rowSpan="2">Диаметр ⌀,мм</td>
                            <td className={css.td2Type} colSpan="2">Длина L=200</td>
                            <td className={css.td2Type} colSpan="2">Длина L=300</td>
                            <td className={css.td2Type} colSpan="2">Длина L=500</td>
                            <td className={css.td2Type} colSpan="2">Длина L=800</td>
                        </tr>
                            <tr className={css.tr}>
                            <td className={css.td1Type}>Маркировка</td>
                            <td className={css.td1Type}>вес, кг</td>
                            <td className={css.td1Type}>Маркировка</td>
                            <td className={css.td1Type}>вес, кг</td>
                            <td className={css.td1Type}>Маркировка</td>
                            <td className={css.td1Type}>вес, кг</td>
                            <td className={css.td1Type}>Маркировка</td>
                            <td className={css.td1Type}>вес, кг</td>
                        </tr>
                        {tableData.map(tableDataElement => (
                        <tr className={css.tr}>
                            {tableDataElement.map(tableDataSimvol => (
                                <td className={css.td3Type}>{tableDataSimvol}</td>
                            ))}
                        </tr>
                        ))}
                    </tbody>
        </table>
    )
}