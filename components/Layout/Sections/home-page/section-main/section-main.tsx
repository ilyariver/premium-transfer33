import { FC } from 'react'
import { FirstScreen } from '../../../../../types/first-screen'
import { Logo } from '../../../../../types/header-data'
import style from './section-main.module.scss'
import MainButton from '../../../../shared/main-button/main-button'
import ScrollDown from '../../../../shared/scroll-down/scroll-down'

interface SectionMainTypes {
    data: FirstScreen
    logo: Logo
}

const SectionMain: FC<SectionMainTypes> = ({data, logo}) => {
    const { backgroundImage, buttonText, hasScroll } = data

    return (
        <section
            className={style.section_main}
            style={{backgroundImage: `url(${backgroundImage})`}}
        >
            <div className="container">
                <div className={style.wrap}>
                    <MainButton text={buttonText} className={style.button}/>
                    <div className={style.logo} style={{backgroundImage: `url(${logo.img})`}} />
                    <div className={style.scrollIcon}>
                        { hasScroll && <ScrollDown /> }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionMain
