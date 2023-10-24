import { transporter } from '@/app/config/nodemailer'
import { type NextRequest, NextResponse } from 'next/server'

import Mail from 'nodemailer/lib/mailer'

export async function POST(request: NextRequest) {
  const { email, name, phone, message } = await request.json()

  const mailOptions: Mail.Options = {
    from: 'info@aehgroup.es',
    to: 'info@aehgroup.es',
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Web: Mensaje de ${name}`,
    text: `
    Hola,
    Tienes un nuevo mensaje desde la web.
    Email: ${email}
    Teléfono: ${phone}
    Mensaje: ${message}

    Un saludo,
    AEH Group
    `,
  }

  const sendMailPromise = async () =>
    new Promise<string>((resolve, reject) => {
      transporter.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent')
        } else {
          console.log('err.message', err.message)
          reject(err.message)
        }
      })
    })

  try {
    await sendMailPromise()
    return NextResponse.json({ message: 'Email sent' })
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 })
  }
}
