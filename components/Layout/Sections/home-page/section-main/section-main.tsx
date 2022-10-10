import { FC } from 'react'
import { FirstScreen } from '../../../../../types/first-screen'
import style from './section-main.module.scss'
import MainButton from '../../../../shared/main-button/main-button'
import ScrollDown from '../../../../shared/scroll-down/scroll-down'
import Link from 'next/link'

interface SectionMainTypes {
    data: FirstScreen
    logo: string
}

const SectionMain: FC<SectionMainTypes> = ({data, logo}) => {
    const { backgroundImage, buttonToFormText, linkToForm, hasScroll } = data

    return (
        <section
            className={style.section_main}
            style={{backgroundImage: `url(${backgroundImage})`}}
        >
            <div className="container">
                <div className={style.wrap}>
                    <Link href={linkToForm}>
                        <a>
                            <MainButton text={buttonToFormText}  className={style.button}/>
                        </a>
                    </Link>
                    <div className={style.logo} style={{backgroundImage: `url(${logo})`}} />
                    <div className={style.scrollIcon}>
                        { hasScroll ? <ScrollDown /> : '' }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionMain
