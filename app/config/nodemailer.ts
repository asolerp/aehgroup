import nodemailer from 'nodemailer'

const email = 'info@aehgroup.es'
const pass = '(ne]PHTcXf2v)c'

export const transporter = nodemailer.createTransport({
  host: 'smtp.dondominio.com',
  port: 587,
  secure: false,
  auth: {
    user: email,
    pass,
  },
})
