import { sellingFreeData } from "../../../public/data/sellingFreeData";
import css from "./SellingFreeMainInfo.module.css";

export default function SellingFreeMainInfo() {
  return (
    <div className={css.superDiv}>
      <p className={css.freeSel}>Распродажа сальников</p>
      <p className={css.zagolovok1}>
        <strong>Набивные сальники из наличия!</strong>
      </p>
      {sellingFreeData.map((sellingFreeDataElement, index) => (
        <p className={css.textMain} key={index}>
          <p>{`${sellingFreeDataElement[0]}`}</p>{" "}
          <p>{`${sellingFreeDataElement[1]}`}</p>{" "}
          <p>{`${sellingFreeDataElement[2]}`}</p>
        </p>
      ))}
      <p className={css.textMain1}>
        Доставим сальники набивные в любой город РФ транспортной компанией,
        возможен самовывоз со склада. <p />
        <br />
        Адреса складов: Московская область, г. Химки; Ростовская область, г.
        Новочеркасск. <p />
        <br />
        Оставьте заявку, и наш менеджер поможет Вам подобрать сальники набивные
        по Вашим размерам. <p />
        <br />
        Возможна отгрузка сальников набивных в день оплаты.
        <p />
        <br />
        Успейте заказать сальники набивные по выгодным ценам!
      </p>
    </div>
  );
}
