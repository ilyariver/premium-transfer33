import style from './section-form.module.scss'
import MainButton from '../../../../shared/main-button/main-button'
import { FormTypes } from '../../../../../types/form'
import { FC, FormEvent, useEffect, useState } from 'react'
import Input from 'react-phone-number-input/input'
import axios from 'axios'

interface SectionFormTypes {
	data: FormTypes
}

const SectionForm: FC<SectionFormTypes> = ({ data }) => {
	const ruCode: string = '+7'
	const [toast, setToast] = useState<boolean>(false)
	const [activeNameLabel, setActiveNameLabel] = useState<boolean>(false)
	const [activeMessageLabel, setActiveMessageLabel] = useState<boolean>(false)
	const [name, setName] = useState<string>('')
	const [phone, setPhone] = useState<string>(ruCode)
	const [message, setMessage] = useState<string>('')

	useEffect(() => {
		const timeoutToast = setTimeout(() => setToast(false), 10_000)

		return () => {
			clearTimeout(timeoutToast)
		}
	}, [toast])

	useEffect(() => {

	}, [])

	if (!data) return null

	const {
		titleForm,
		textForm,
		imgBackForm,
		nameInput,
		telInput,
		textAreaInput,
		formButton
	} = data

	function sendMessageToTelegram(data:any) {
		const TOKEN = '5606052460:AAHNgToUBAqm8_ZgfwreIqCPBO9O7RIHzno'
		const CHAT_ID = '-1001802745454'
		const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

		let message = `<strong>Заявка с сайта!</strong>\n`
		message += `<b>Отправитель: </b> <i>${data.name}</i>\n`
		message += `<b>Номер телефона: </b><i>${data.phone}</i>\n`
		message += `<b>Примечание: </b><i>${data.message}</i>`

		axios.post(URI_API, {
			chat_id: CHAT_ID,
			parse_mode: 'html',
			text: message
		})
			.then(res => {
				setToast(true)
			})
			.catch(error => {
				console.error(error.message)
			})
	}

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

		sendMessageToTelegram(data)
	}

	return (
		<>
			<section
				className={style.section}
				id="orderForm">
				<div className={`container ${style.container}`}>
					<div className={`content ${style.content}`}>
						<div className={style.information}>
							<h3 className={style.title}>{ titleForm }</h3>
							<p className={style.text}>{ textForm }</p>
						</div>
						<form className={style.form_content} onSubmit={handleSubmit}>
							<div className={style.item}>
								<label
									htmlFor={ nameInput }
									className={`${style.label} ${activeNameLabel || name ? style.active : ''}`}
								>
									{ nameInput }
								</label>
								<input
									required
									id={ nameInput }
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
									htmlFor={ telInput }
									className={`${style.label} ${phone ? style.active : ''}`}
								>
									{ telInput }
								</label>
								<Input
									id={ telInput }
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
									htmlFor={ textAreaInput }
									className={`${style.label} ${style.label_textarea} ${activeMessageLabel || message ? style.active : ''}`}
								>
									{ textAreaInput }
								</label>
								<textarea
									id={ textAreaInput }
									required
									className={`${style.input} ${style.textarea}`}
									value={message}
									onFocus={() => setActiveMessageLabel(true)}
									onBlur={() => setActiveMessageLabel(false)}
									onChange={event => setMessage(event.target.value)}
								/>
							</div>
							<MainButton text={formButton} className={style.button} />
						</form>
					</div>
				</div>
				{
					toast && <div className={style.toast_container}>
						<div className={style.toast}>
							<div className={style.toast__header}>Спасибо!</div>
							<div className={style.toast__body}>Заявка успешно отправлена...</div>
							<div className={style.toast__close} onClick={() => setToast(false)}/>
						</div>
					</div>
				}
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
						background-image: url(${imgBackForm});
						opacity: 0.2;
						z-index: 0;
					  }
				`}
			</style>
		</>
	)
}

export default SectionForm
