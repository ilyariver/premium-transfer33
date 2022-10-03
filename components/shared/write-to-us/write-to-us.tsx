import { useEffect, useState } from 'react'
import style from './write-to-us.module.scss'
import { DataTypes } from '../../../types/Data'
import Link from 'next/link'

const WriteToUs = () => {
	const [data, setData] = useState<DataTypes>()

	const getData = async () => {
		const res = await fetch(`https://premium-transfer33-469d.vercel.app/api/data`)
		const data = await res.json()
		console.log(data)
		setData(data)
	}

	useEffect(() => {
		getData()
	},[])

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
