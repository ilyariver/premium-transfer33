import { FC } from 'react'
import { SecondScreen } from '../../../../../types/second-screen'
import Image from 'next/image'
import style from './section-benefits.module.scss'

interface SecondScreenTypes {
    data: SecondScreen
}

const SectionBenefits: FC<SecondScreenTypes> = ({data}) => {
    const { benefitsList, title } = data

    return (
        <section className={style.section_benefits} id="benefits">
            <div className="container">
                <h1 className={style.main_title} dangerouslySetInnerHTML={{ __html: title }} />
                <div className={style.benefits}>
                    <ul className={style.list}>

                        {
                            benefitsList.map((benefit, idx) => {
                                if (idx % 2 === 0) {
                                    return (
                                        <li key={idx} className={style.item}>
                                            <div className={style.img} style={{backgroundImage: `url(${benefit.back})`}}>
                                                <div className={`${style.link} ${style.link_1}`}>
                                                    {
                                                        benefit.img && <Image alt={benefit.title} src={benefit.img} width={540} height={404}/>
                                                    }
                                                </div>
                                            </div>
                                            <div className={style.description}>
                                                <div className={`${style.index} ${style.index_right}`}>{ idx + 1 }</div>
                                                <div className={style.text} dangerouslySetInnerHTML={{ __html: benefit.title }} />
                                            </div>
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li key={idx} className={`${style.item} ${style.even_item}`}>
                                            <div className={style.description}>
                                                <div className={`${style.index} ${style.index_left}`}>{ idx + 1 }</div>
                                                <div
                                                    className={`${style.text} ${style.text_even}`}
                                                    dangerouslySetInnerHTML={{ __html: benefit.title }}
                                                />
                                            </div>
                                            <div className={style.img} style={{backgroundImage: `url(${benefit.back})`}}>
                                                <div className={`${style.link} ${style.link_2}`}>
                                                    {
                                                        benefit.img && <Image alt={benefit.title} src={benefit.img} width={540} height={404}/>
                                                    }
                                                </div>
                                            </div>
                                        </li>
                                    )
                                }
                            })
                        }

                        {/*<li className={style.item}>*/}
                        {/*    <div className={style.img} style={{backgroundImage: `url(${oval1.src})`}}>*/}
                        {/*      <div className={`${style.link} ${style.link_1}`}>*/}
                        {/*          <Image alt="Картинка" src={car} />*/}
                        {/*      </div>*/}
                        {/*    </div>*/}
                        {/*    <div className={style.description}>*/}
                        {/*        <div className={`${style.index} ${style.index_right}`}>1</div>*/}
                        {/*        <div className={style.text}>Трансфер в любой <br/> город России</div>*/}
                        {/*    </div>*/}
                        {/*</li>*/}

                        {/*<li className={style.item}>*/}
                        {/*    <div className={style.description}>*/}
                        {/*        <div className={`${style.index} ${style.index_left}`}>2</div>*/}
                        {/*        <div className={style.text}>Свадебные кортежи</div>*/}
                        {/*    </div>*/}
                        {/*    <div className={style.img} style={{backgroundImage: `url(${oval2.src})`}}>*/}
                        {/*        <div className={`${style.link} ${style.link_2}`}>*/}
                        {/*            <Image alt="Картинка" src={car2} />*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</li>*/}

                        {/*<li className={style.item}>*/}
                        {/*    <div className={style.img} style={{backgroundImage: `url(${oval3.src})`}}>*/}
                        {/*        <div className={`${style.link} ${style.link_1}`}>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className={style.description}>*/}
                        {/*        <div className={`${style.index} ${style.index_right}`}>3</div>*/}
                        {/*        <div className={style.text}>Деловые поездки</div>*/}
                        {/*    </div>*/}
                        {/*</li>*/}

                        {/*<li className={style.item}>*/}
                        {/*    <div className={style.description}>*/}
                        {/*        <div className={`${style.index} ${style.index_left}`}>4</div>*/}
                        {/*        <div className={`${style.text} ${style.text_left}`}>Сопровождение и<br/>*/}
                        {/*            обслуживание делегаций,<br/>*/}
                        {/*            экономических форумов</div>*/}
                        {/*    </div>*/}
                        {/*    <div className={style.img} style={{backgroundImage: `url(${oval2.src})`}}>*/}
                        {/*        <div className={`${style.link} ${style.link_2}`}>*/}
                        {/*            <Image alt="Картинка" src={car3} />*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</li>*/}

                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SectionBenefits
