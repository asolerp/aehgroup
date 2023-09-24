import Button from '@/app/components/Button'
import Input from './Input'

export default function ContactForm() {
  return (
    <div className="w-full space-y-10 lg:space-y-20">
      <Input
        label="EMAIL"
        placeholder="PRUEBA@PRUEBA.COM"
        type="text"
        onChange={(value) => console.log(value)}
      />
      <Input
        label="MENSAJE"
        placeholder="TU MENSAJE AQUÍ..."
        type="message"
        onChange={(value) => console.log(value)}
      />
      <div className="flex flex-row items-center space-x-4">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-8 h-8 text-aeh_primary bg-gray-100 border-gray-300 rounded focus:ring-aeh_primary dark:focus:ring-aeh_primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <p className="font-sans text-gray-600 text-xl lg:text-3xl tracking-widest">
          Acepto los términos y condiciones
        </p>
      </div>
      <Button text="ENVIAR" />
    </div>
  )
}
