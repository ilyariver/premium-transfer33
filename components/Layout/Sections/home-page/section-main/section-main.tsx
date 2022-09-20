import style from './section-main.module.scss'
import MainButton from '../../../../shared/main-button/main-button'

const SectionMain = () => {
    return (
        <section className={style.section_main}>
            <MainButton text="Забронировать" className={style.button}/>
        </section>
    )
}

export default SectionMain
