import { FC } from 'react'
import style from './main-button.module.scss'
import { ButtonTypes } from '../../../types/button'


const MainButton: FC<ButtonTypes> = ({text, className}) => {
    return (
        <button className={`${style.button} ${className}`}>
            { text || 'Текст' }
        </button>
    )
}

export default MainButton
