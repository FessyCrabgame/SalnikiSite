import { useState } from 'react'
import css from './RegistrationForm.module.css'

export default function RegistrationForm(){
    const[dataInputCheck, setdataInputCheck] = useState(['smth','smth']);


    return(
        <div className={css.mainRegDiv}>
            <div className={css.regForm1}>
                <p className={css.kontakti}>Контакты</p>
                <div className={css.regBigDiv1}>
                    <div className={css.mainNames}>
                        <p className={css.regDivPhone}>Телефон:</p>
                        <p className={css.regDivEmail}>E-mail:</p>
                    </div>
                    <div className={css.regDivData}>
                        <p className={css.regPhoneData}>8-863-204-62-95</p>
                        <p className={css.regEmanilData}>zakaz10@salnik24.ru</p>
                    </div>
                </div>
            </div>
            <div className={css.regForm2}>
                <p className={css.regDivNet}>Обратная связь</p>
                <div className={css.regDivFormReg}>
                    <input placeholder="Имя*" className={css.regDivFormRegName} onClick={() => setdataInputCheck([dataInputCheck[0], ''])} onInput={event=>setdataInputCheck([dataInputCheck[0], event.target.value])}/>
                    {dataInputCheck[1]==""?<div className={css.necesaryField}>Поле обязательно для заполнения</div> : ""}
                    <input type="tel" placeholder="Телефон" className={css.regDivFormRegPhone} onClick={() => setdataInputCheck(['', dataInputCheck[0]])} onInput={event=>setdataInputCheck([event.target.value, dataInputCheck[1]])}/>
                    {dataInputCheck[0]==""?<div className={css.necesaryField}>Поле обязательно для заполнения</div> : ""}
                    <div className={css.regDivFormRegCheck}>
                        <input type="checkbox" className={css.regDivFormRegCheckBox}/>
                        <p className={css.regDivFormRegSendData}> Нажимая кнопку «Отправить», я даю свое согласие на обработку моих персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в Согласии на обработку персональных данных *</p>
                    </div>
                    <div className={css.regDivFormRegSendDiv}>
                        <p onClick={() => console.log(dataInputCheck)} className={css.regDivFormRegSendButton}>Отправить</p>
                    </div>
                    <div className={css.regDivFormRegMessageDiv}>
                        <p className={css.regDivFormRegMistakeDiv}>Сообщить о нарушении</p>
                        <img className={css.regDivFormRegMessageImage} src={'../../public/assets/Без названия.svg'}/>
                    </div>
                </div>
            </div>
        </div>  
    )
}