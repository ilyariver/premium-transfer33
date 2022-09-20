import { FC } from 'react'
import style from './write-to-us.module.scss'
import MainButton from '../main-button/main-button'

const WriteToUs = () => {
	return (
		<>
			<div className={style.appeal_title}>Мы на связи</div>
			<div className={style.appeal_text}>свяжитесь с нами, если хотите узнать больше</div>
			<div className={style.button_group}>
				<MainButton text="Написать в whatsapp" className={style.button} />
				<MainButton text="Написать в telegram" className={style.button} />
			</div>
		</>
	)
}

export default WriteToUs
