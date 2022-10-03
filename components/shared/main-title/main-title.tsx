import { FC } from 'react'
import style from './main-title.module.scss'

interface TitleTypes {
	pageTitle: string
}

const MainTitle: FC<TitleTypes> = ({pageTitle}) => {
	if (!pageTitle) return null

	return (
		<>
			<h1 className={style.title}>
				<span dangerouslySetInnerHTML={{ __html: pageTitle }} />
			</h1>
		</>
	)
}

export default MainTitle
