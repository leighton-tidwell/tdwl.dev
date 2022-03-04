import { useState } from 'react'
import {
  Grid,
  Box,
  Heading,
  Paragraph,
  Input,
  Label,
  Textarea,
  Button,
} from 'theme-ui'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [inquiry, setInquiry] = useState('')
  const [errors, setErrors] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)

  const handleValidation = () => {
    let tempErrors = {}
    let isValid = true

    if (name.length <= 0) {
      tempErrors['name'] = true
      isValid = false
    }

    if (
      email.length <= 0 ||
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false
    ) {
      tempErrors['email'] = true
      isValid = false
    }

    // if (phone.length <= 0) {
    //   tempErrors['phone'] = true
    //   isValid = false
    // }

    if (inquiry.length <= 0) {
      tempErrors['inquiry'] = true
      isValid = false
    }

    setErrors({ ...tempErrors })
    return isValid
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const isValidForm = handleValidation()

    if (isValidForm) {
      const res = await fetch('/api/mail', {
        body: JSON.stringify({
          name,
          email,
          phone,
          inquiry,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      const { error } = await res.json()
      if (error) {
        console.log(error)
        setShowError(true)
        setShowSuccess(false)
        return
      }
      setEmail('')
      setName('')
      setPhone('')
      setInquiry('')
      setShowError(false)
      setShowSuccess(true)
    }
  }

  const handleNameChange = e => {
    setName(e.target.value)
  }

  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const handlePhoneChange = e => {
    setPhone(e.target.value)
  }

  const handleInquiryChange = e => {
    setInquiry(e.target.value)
  }

  return (
    <Grid
      sx={{
        background: '#070707',
        color: 'white',
      }}
      as="form"
      onSubmit={handleSubmit}
    >
      <Box p="1em">
        <Heading
          as="h1"
          sx={{ fontSize: '37px', fontFamily: 'heading' }}
          mb={2}
        >
          Get in Touch
        </Heading>
        <Paragraph sx={{ fontSize: '18px' }}>
          Whether you have a project in mind or just want to say hello, we would
          love to hear from you.
        </Paragraph>
      </Box>
      <Box p="1em">
        <Label htmlFor="name">Name*</Label>
        <Input
          onChange={handleNameChange}
          value={name}
          name="name"
          id="name"
          type="text"
        />
        {errors?.name && (
          <Paragraph sx={{ pt: '1em', color: 'red', fontSize: '18px' }}>
            You must include a name.
          </Paragraph>
        )}
      </Box>
      <Box p="1em">
        <Label htmlFor="email">Email*</Label>
        <Input
          onChange={handleEmailChange}
          value={email}
          name="email"
          id="email"
          type="email"
        />
        {errors?.email && (
          <Paragraph sx={{ pt: '1em', color: 'red', fontSize: '18px' }}>
            You must include an email.
          </Paragraph>
        )}
      </Box>
      <Box p="1em">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          onChange={handlePhoneChange}
          value={phone}
          name="phone"
          id="phone"
          type="tel"
        />
        {errors?.phone && (
          <Paragraph sx={{ pt: '1em', color: 'red', fontSize: '18px' }}>
            You must have a valid phone number.
          </Paragraph>
        )}
      </Box>
      <Box p="1em">
        <Label htmlFor="inquiry">Inquiry*</Label>
        <Textarea
          onChange={handleInquiryChange}
          value={inquiry}
          name="inquiry"
          id="inquiry"
          rows={8}
        />
        {errors?.inquiry && (
          <Paragraph sx={{ pt: '1em', color: 'red', fontSize: '18px' }}>
            You must include a message.
          </Paragraph>
        )}
      </Box>
      {showSuccess && (
        <Paragraph sx={{ p: '1em', color: 'green', fontSize: '18px' }}>
          We have recieved your message and will respond as soon as possible.
        </Paragraph>
      )}
      {showError && (
        <Paragraph sx={{ p: '1em', color: 'red', fontSize: '18px' }}>
          There was an error sending your message. Please try again later.
        </Paragraph>
      )}
      <Box p="1em">
        <Button variant="secondary" sx={{ float: 'right' }}>
          Send
        </Button>
      </Box>
    </Grid>
  )
}

export default Contact
