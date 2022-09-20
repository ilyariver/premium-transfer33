import style from  './input.module.scss'
import { SetStateAction, useState } from 'react'
import { FC } from 'react'
import { InputTypes } from '../../../types/input'
import Input from 'react-phone-number-input/input'

const InputForm: FC<InputTypes> = ({label, type}) => {
	const [activeLabel, setActiveLabel] = useState(false)
	const [textValue, setTextValue] = useState(`${type === 'phone' ? '+7' : ''}`)

	return (
		<div>
			<label
				htmlFor={label}
				className={`${style.label} ${type === 'textarea' ? style.label_textarea : ''} ${activeLabel || textValue !== '' ? style.active : ''}`}
			>
				{label}
			</label>
			{type === 'name' && <input
				required
				id={label}
				type="text"
				minLength={12}
				className={style.input}
				value={textValue}
				onFocus={() => setActiveLabel(true)}
				onBlur={() => setActiveLabel(false)}
				onChange={event => setTextValue(event.target.value)}
			/>}
			{type === 'phone' && <Input
				className={style.input}
				minLength="16"
				maxLength="16"
				required
				country="RU"
				international
				withCountryCallingCode
				value={textValue}
				onChange={(value: string) => {
					setTextValue(value);
				}}
				onFocus={() => setActiveLabel(true)}
				onBlur={() => setActiveLabel(false)}
			/>}
			{type === 'textarea' && <textarea
				id={label}
				required
				className={`${style.input} ${style.textarea}`}
				value={textValue}
				onFocus={() => setActiveLabel(true)}
				onBlur={() => setActiveLabel(false)}
				onChange={event => setTextValue(event.target.value)}
			/>}
		</div>
	)
}

export default InputForm
