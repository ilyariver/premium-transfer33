import style from './section-form.module.scss'
import MainButton from '../../../../shared/main-button/main-button'
import InputForm from '../../../../shared/input/input'

const SectionForm = () => {

	return (
		<section className={style.section} id="orderForm">
			<div className="container">
				<div className={style.content}>
					<div className={style.information}>
						<h3 className={style.title}>
							Вы можете оставить заявку
							на бронирование автомобиля
						</h3>
						<p className={style.text}>
							Оставьте свои данные в форме и мы
							перезвоним вам
						</p>
					</div>
					<form className={style.form_content}>
						<div className={style.item}>
							<InputForm label="Имя" type="name" />
						</div>
						<div className={style.item}>
							<InputForm label="Телефон" type="phone" />
						</div>
						<div className={style.item_textarea}>
							<InputForm label="Дополнительное инфо:" type="textarea" />
						</div>
						<MainButton text="Забронировать" className={style.button} />
					</form>
				</div>
			</div>
		</section>
	)
}

export default SectionForm
