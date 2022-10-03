import style from './section-form.module.scss'
import MainButton from '../../../../shared/main-button/main-button'
import { FormTypes } from '../../../../../types/form'
import { FC, FormEvent, useState } from 'react'
import Input from 'react-phone-number-input/input'

interface SectionFormTypes {
	data: FormTypes
}

const SectionForm: FC<SectionFormTypes> = ({ data }) => {
	const ruCode: string = '+7'
	const [activeNameLabel, setActiveNameLabel] = useState<boolean>(false)
	const [activeMessageLabel, setActiveMessageLabel] = useState<boolean>(false)
	const [name, setName] = useState<string>('')
	const [phone, setPhone] = useState<string>(ruCode)
	const [message, setMessage] = useState<string>('')

	if (!data) return null

	const {
		title,
		text,
		img,
		form
	} = data


	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()

		const data = {
			name,
			phone,
			message
		}
		setName('')
		setPhone(ruCode)
		setMessage('')

		console.log(data)
	}

	return (
		<>
			<section
				className={style.section}
				id="orderForm">
				<div className={`container ${style.container}`}>
					<div className={`content ${style.content}`}>
						<div className={style.information}>
							<h3 className={style.title}>{ title }</h3>
							<p className={style.text}>{ text }</p>
						</div>
						<form className={style.form_content} onSubmit={handleSubmit}>
							<div className={style.item}>
								<label
									htmlFor={ form.name }
									className={`${style.label} ${activeNameLabel || name ? style.active : ''}`}
								>
									{ form.name }
								</label>
								<input
									required
									id={ form.name }
									type="text"
									minLength={1}
									className={style.input}
									value={name}
									onFocus={() => setActiveNameLabel(true)}
									onBlur={() => setActiveNameLabel(false)}
									onChange={event => setName(event.target.value)}
								/>
							</div>
							<div className={style.item}>
								<label
									htmlFor={ form.tel }
									className={`${style.label} ${phone ? style.active : ''}`}
								>
									{ form.tel }
								</label>
								<Input
									id={ form.tel }
									className={style.input}
									minLength="16"
									maxLength="16"
									required
									country="RU"
									international
									withCountryCallingCode
									value={phone}
									onChange={(value: string) => {
										setPhone(value);
									}}
								/>
							</div>
							<div className={style.item_textarea}>
								<label
									htmlFor={ form.textArea }
									className={`${style.label} ${style.label_textarea} ${activeMessageLabel || message ? style.active : ''}`}
								>
									{ form.textArea }
								</label>
								<textarea
									id={ form.textArea }
									required
									className={`${style.input} ${style.textarea}`}
									value={message}
									onFocus={() => setActiveMessageLabel(true)}
									onBlur={() => setActiveMessageLabel(false)}
									onChange={event => setMessage(event.target.value)}
								/>
							</div>
							<MainButton text={form.button} className={style.button} />
						</form>
					</div>
				</div>
			</section>
			<style jsx>
				{`
					.content {
					  position: relative;
					  display: flex;
					  justify-content: space-between;
					  align-items: center;
					  padding: 90px;
					  background-color: #181818;
					  border-radius: 10px;	
					}
					.content:before {
						content: "";
						position: absolute;
						top: 0;
						left: 0;
						right: 0;
						bottom: 0;
						background-image: url(${img});
						opacity: 0.2;
						z-index: 0;
					  }
				`}
			</style>
		</>
	)
}

export default SectionForm
