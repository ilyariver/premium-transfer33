import { FC } from 'react'
import style from './scroll-down.module.scss'

const ScrollDown = () => {
	return (
		<div className={style.scroll}>
			<p className={style.mouse}></p>
			<div className={style.text}>cкроль</div>
		</div>

	)
}

export default ScrollDown
