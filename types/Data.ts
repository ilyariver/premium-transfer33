import { HeaderData } from './header-data'
import { FooterData } from './footer-data'
import { FirstScreen } from './first-screen'
import { SecondScreen } from './second-screen'
import { ThirdScreen } from './third-screen'
import { Cars } from './Cars'
import { ContactsPage } from './contacts'
import { About } from './about'
import { FormTypes } from './form'
import { WhatGet } from './what-get'
import { WriteUs } from './write-us'

export interface DataTypes {
	title: string
	header: HeaderData
	footer: FooterData
	firstScreen: FirstScreen
	secondScreen: SecondScreen
	thirdScreen: ThirdScreen
	formScreen: FormTypes
	whatGetScreen: WhatGet
	cars: Cars
	contactsPage: ContactsPage
	aboutCompany: About
	writeUs: WriteUs
}
