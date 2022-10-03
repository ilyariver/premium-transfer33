import style from './write-to-us.module.scss'
import Link from 'next/link'
import useSWR from 'swr'
import { fetcher } from '../../../common/fetcher'

const WriteToUs = () => {
	const { data } = useSWR(`${process.env.API_HOST}/data`, fetcher)
	if (!data) return null
	const { writeUs: { buttons, text, title } } = data

	return (<section className={style.section}>
			<div className="container">
				<div className={style.appeal_title}><span>{title}</span></div>
				<div className={style.appeal_text}>{text}</div>
				<div className={style.button_group}>
					{buttons.map((item: {
						link: string
						text: string | undefined }) => {
							return (
								<div key={item.text} className={style.button_wrap}>
									<Link href={item.link} >
										<a className={style.button}>
											{item.text}
										</a>
									</Link>
								</div>
							)
						})
					}
				</div>
			</div>
		</section>
	)
}

export default WriteToUs
