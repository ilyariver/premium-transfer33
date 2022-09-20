import Image from 'next/image'
import style from './section-benefits.module.scss'
import oval1 from '../../../../../public/images/oval1.svg'
import oval2 from '../../../../../public/images/oval2.svg'
import oval3 from '../../../../../public/images/oval3.png'
import car from '../../../../../public/images/audiQ3.png'
import car2 from '../../../../../public/images/audiQ3right.png'
import car3 from '../../../../../public/images/vito.png'

const SectionBenefits = () => {

    return (
        <section className={style.section_benefits} id="benefits">
            <div className="container">
                <h1 className={style.main_title}>
                    Наша компания <strong>PREMIUM TRANSFER 33</strong> предоставляет
                    трансферные услуги на машинах бизнес-класса:
                </h1>
                <div className={style.benefits}>
                    <ul className={style.list}>
                        <li className={style.item}>
                            <div className={style.img} style={{backgroundImage: `url(${oval1.src})`}}>
                              <div className={`${style.link} ${style.link_1}`}>
                                  <Image src={car} />
                              </div>
                            </div>
                            <div className={style.description}>
                                <div className={`${style.index} ${style.index_right}`}>1</div>
                                <div className={style.text}>Трансфер в любой <br/> город России</div>
                            </div>
                        </li>
                        <li className={style.item}>
                            <div className={style.description}>
                                <div className={`${style.index} ${style.index_left}`}>2</div>
                                <div className={style.text}>Свадебные кортежи</div>
                            </div>
                            <div className={style.img} style={{backgroundImage: `url(${oval2.src})`}}>
                                <div className={`${style.link} ${style.link_2}`}>
                                    <Image src={car2} />
                                </div>
                            </div>
                        </li>
                        <li className={style.item}>
                            <div className={style.img} style={{backgroundImage: `url(${oval3.src})`}}>
                                <div className={`${style.link} ${style.link_1}`}>
                                </div>
                            </div>
                            <div className={style.description}>
                                <div className={`${style.index} ${style.index_right}`}>3</div>
                                <div className={style.text}>Деловые поездки</div>
                            </div>
                        </li>
                        <li className={style.item}>
                            <div className={style.description}>
                                <div className={`${style.index} ${style.index_left}`}>4</div>
                                <div className={`${style.text} ${style.text_left}`}>Сопровождение и<br/>
                                    обслуживание делегаций,<br/>
                                    экономических форумов</div>
                            </div>
                            <div className={style.img} style={{backgroundImage: `url(${oval2.src})`}}>
                                <div className={`${style.link} ${style.link_2}`}>
                                    <Image src={car3} />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SectionBenefits
