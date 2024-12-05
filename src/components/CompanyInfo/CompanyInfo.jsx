import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import css from './CompanyInfo.module.css'


export default function CompanyInfo(){
    return(
        <div>
            <Header/>
            <div className={css.superDiv}>
                <p className={css.mainDivInfo}><strong>О нас</strong><p/><br/>Компания ООО “ИнРеС” занимается изготовлением сальников с 2017 года. ИнРеС имеет сеть собственных складов во многих субъектах Российской Федерации.<p/><br/><strong>Наши преимущества</strong><p/><br/>Оперативноеобслуживание клиентов<p/><br/>Отлаженная логистика<p/><br/>Прямые поставки с производства<p/><br/>Изготовление сальников по индивидуальным чертежам<p/><br/>Качество продукции подтверждено сертификатами<p/><br/>Строгое соблюдение сроков и договорных обязательств<p/><br/><strong>Суммарный тоннаж сальников</strong><p/><br/>54842<p/><br/>отгружено в 2018 году<p/><br/>77625<p/><br/>отгружено в 2019 году<p/><br/>98754<p/><br/>отгружено в 2020 году<p/><br/><strong>Наши награды</strong><p/><br/>Медаль за строительство Крымского моста была получена ООО “ИнРеС”в 2019 году. Диплом к памятной медали “За значительный вклад в строительство Крымского моста” был подписан Президентом РФ В. Путиным<p/><br/><strong>Отзывы</strong><p/><br/>“Сотрудничаем с Инрес около трех лет. За все это время заказывали около 20 сальников разного диаметра. Большинство из них было в наличии на складе. Несколько сальньков заказали изготовление по нашим чертежам. Изготовили быстро, в течении двух недель и доставили к нам на объект.  Будем и в дальнейшем обращаться в Инрес!”<p/><br/><strong>Сергей М.,</strong><p/><br/> специалист по снабжению<p/><br/>“Наша организация недавно начала сотрудничество с ООО “Инрес”. И с первого же заказа были приятно удивлены качеством деталей, оперативностью подготовки документов и сроками поставки. Будем рады дальнейшему сотрудничеству!”<p/><br/><strong>Дарья Андреевна С.</strong><p/><br/>Менеджер по снабжению<p/><br/>“Спасибо большое! Сработали на отлично! Заказ выполнили за 2 дня, рассчитали всю логистику до объекта и проконтролировали отгрузку. Все было сделано профессионально. Тот случай, когда заплатил, и спокойно занялся выполнением следующих задач, не беспокоясь о прибытии изделий. Всем советую!”<p/><br/><strong>Геннадий Анреевич Б.,</strong><p/><br/> Инженер – сметчик<p/><br/><strong>Наши поставки</strong><p/><br/><strong>География поставок</strong><p/><br/>Более 150 поставок в месяц.Более 90 городов РФ.Сроки поставки от 1 дня.Отлаженная система логистики позволит Вам не беспокоиться о сроках!</p>
            </div>
            <Footer/>
        </div>
    )
}