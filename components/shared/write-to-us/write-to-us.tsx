import { useEffect, useState } from 'react'
import style from './write-to-us.module.scss'
import Link from 'next/link'
import { url } from '../../../common/urlData'
import { WriteUs } from '../../../types/write-us'

const WriteToUs = () => {
	const [data, setData] = useState<WriteUs>()

	const getData = async () => {
		const res = await fetch(`${url}/wp-json/wp/v2/pages?_embed`)
		const data = await res.json()
		setData(data[2].CFS)
	}

	useEffect(() => {
		getData()
	},[])

	if (!data) return null
	const { writeToUsButtonList, writeToUsText, writeToUsTitle } = data

	return (<section className={style.section}>
			<div className="container">
				<div className={style.appeal_title}><span>{writeToUsTitle}</span></div>
				<div className={style.appeal_text}>{writeToUsText}</div>
				<div className={style.button_group}>
					{writeToUsButtonList.map((item) => {
							return (
								<div key={item.writeToUsTextButton} className={style.button_wrap}>
									<Link href={item.writeToUsLinkButton} >
										<a className={style.button}>
											{item.writeToUsTextButton}
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
