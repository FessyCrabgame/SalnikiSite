import css from './Warning.module.css'

export default function Warning(){
    return(
        <div className={css.additionalDiv}> 
            <p className={css.fat1}>Изготовление сальников от 10 штук</p>
            <p className={css.fat2}>Просьба не беспокоить торгующие и проектные организации. Спасибо за понимание!</p>
        </div>
    )
}