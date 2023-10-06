import { useForm } from 'react-hook-form'
import Input from './Input'
import useContactForm from '../hooks/useContactForm'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

export default function ContactForm() {
  const [aceptaPoliticas, setAceptaPoliticas] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, isSubmitting },
  } = useForm()

  const t = useTranslations('ContactPage.form')
  const { sendContactForm } = useContactForm()

  const onSubmit = async (data: any) => {
    await sendContactForm(data)
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit(onSubmit)}
      className="w-full"
    >
      <div className="w-full space-y-10 lg:space-y-20">
        <Input
          register={register}
          required
          label={t('email')}
          name="email"
          placeholder={t('placeholder_email')}
          type="text"
        />
        <Input
          register={register}
          required
          label={t('message')}
          name="message"
          placeholder={t('placeholder_message')}
          type="message"
        />
        <div className="flex flex-row items-center space-x-4">
          <input
            id="default-checkbox"
            type="checkbox"
            checked={aceptaPoliticas}
            onChange={() => setAceptaPoliticas(!aceptaPoliticas)}
            className="w-8 h-8 text-aeh_primary bg-gray-100 border-gray-300 rounded focus:ring-aeh_primary dark:focus:ring-aeh_primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <p className="font-sans text-gray-600 text-xl lg:text-3xl tracking-widest">
            {t('conditions')}
          </p>
        </div>
        <input
          disabled={!isValid || isSubmitting || !aceptaPoliticas}
          type="submit"
          className={`flex flex-row text-lg lg:text-2xl text-aeh_primary font-sans tracking-widest w-fit items-center justify-between bg-aeh_secondary lg:py-4 lg:px-6 py-2 px-4 rounded-full space-x-6 cursor-pointer shadow-lg ${
            !isValid || isSubmitting || !aceptaPoliticas ? 'opacity-40' : ''
          } `}
          value={t('send')}
        />
      </div>
    </form>
  )
}
