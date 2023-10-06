'use client'

import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import LayoutWithMainTitleAnimation from '../../components/LayoutWithMainTitleAnimation'
import { useTranslations } from 'next-intl'

export default function Contacta() {
  const t = useTranslations('ContactPage')
  return (
    <LayoutWithMainTitleAnimation inputString={t('title')}>
      <div className="flex flex-col w-full ">
        <div className="flex flex-row justify-center">
          <h2 className="font-sans text-md lg:text-xl tracking-widest text-aeh_primary text-center w-2/3 lg:w-full py-10 lg:py-20">
            {t('subtitle')}
          </h2>
        </div>
        <div className="flex mt-20 lg:mt-52 mb-40 lg:px-40 px-10">
          <ContactForm />
        </div>
        <ContactInfo />
      </div>
    </LayoutWithMainTitleAnimation>
  )
}
