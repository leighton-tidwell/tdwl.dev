import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

export default async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL,
      subject: 'Contact Form Submission',
      text: `${req.body.name} (${req.body.email}) says: ${req.body.inquiry}`,
    })
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}
