import Link from 'next/link'
import { FC } from 'react'
import style from './breadcrumbs.module.scss'
import { BreadcrumbsTypes } from '../../../types/breadcrumbs-types'

const Breadcrumbs: FC<BreadcrumbsTypes> = ({pagesName, className}) => {

	return (
		<div className={`${style.bread_cramps} ${className}`}>
			<ul className={style.list}>
				<li className={style.item}>
					<Link href="/">
						<a>
							<span className={style.link}>Главная</span>
						</a>
					</Link>
				</li>
				{
					pagesName.map((page, idx) => {
						return (
							<li className={style.item} key={page}>
								{pagesName.length !== idx + 1 ?  <Link href="/">
									<a>
										<div className={style.link}>{page}</div>
									</a>
								</Link> : <span className={style.page}>{page}</span>}
							</li>
						)
					})
				}
			</ul>
		</div>
	)
}

export default Breadcrumbs
