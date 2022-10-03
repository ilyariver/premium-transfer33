import { FC } from 'react'
import { BreadcrumbsTypes } from '../../../types/breadcrumbs-types'
import Link from 'next/link'
import style from './breadcrumbs.module.scss'

const Breadcrumbs: FC<BreadcrumbsTypes> = ({pagesName, className, parentLink}) => {
	if (!pagesName) return null

	return (
		<div className={`${style.bread_cramps} ${className ? className : ''}`}>
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
								{pagesName.length !== idx + 1 ?  <Link href={parentLink}>
									<a>
										<div className={style.link} dangerouslySetInnerHTML={{ __html: page }} />
									</a>
								</Link> : <span className={style.page} dangerouslySetInnerHTML={{ __html: page }}/>}
							</li>
						)
					})
				}
			</ul>
		</div>
	)
}

export default Breadcrumbs
