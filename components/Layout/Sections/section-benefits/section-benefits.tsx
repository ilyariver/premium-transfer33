import style from './section-benefits.module.scss'

const SectionBenefits = () => {
    return (
        <section className={style.section_benefits}>
            <div className="container">
                <h1 className={style.main_title}>
                    Наша компания <strong>PREMIUM TRANSFER 33</strong> предоставляет
                    трансферные услуги на машинах бизнес-класса:
                </h1>
            </div>
        </section>
    )
}

export default SectionBenefits
