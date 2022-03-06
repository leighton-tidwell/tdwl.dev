import { useState, useRef, useEffect } from 'react'
import { Box, Flex, Heading, Input, Text, Textarea, Button } from 'theme-ui'
import { Element } from 'react-scroll'
import { SocialIcon } from '.'

const Contact = ({ toggleHeaderColor, scrollPosition }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [inquiry, setInquiry] = useState('')
  const [errors, setErrors] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)

  const ref = useRef()

  useEffect(() => {
    const { offsetTop } = ref.current
    if (
      scrollPosition >= offsetTop &&
      scrollPosition <= offsetTop + ref.current.offsetHeight
    ) {
      toggleHeaderColor('black')
    }
  }, [scrollPosition, toggleHeaderColor])

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

  const handleInquiryChange = e => {
    setInquiry(e.target.value)
  }

  return (
    <Box
      sx={{
        background: 'white',
        color: 'black',
        height: '100vh',
        pt: '54px',
      }}
      id="contact"
      ref={ref}
    >
      <Element
        style={{ width: '0px', height: '0px' }}
        id="contact"
        name="contact"
      />
      <Flex
        p="1em"
        sx={{
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Flex
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Heading as="h1" sx={{ fontSize: '36px', fontWeight: '300' }}>
            Lets get in touch
          </Heading>
          <Flex
            as="form"
            onSubmit={handleSubmit}
            sx={{
              width: '60%',
              flexDirection: 'column',
              gap: '1.5em',
              mt: '4em',
              alignItems: 'center',
            }}
          >
            <Input
              autoComplete="off"
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              sx={{
                borderBottom: errors?.name
                  ? '1px solid red'
                  : '1px solid black',
              }}
            />
            <Input
              autoComplete="off"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              sx={{
                borderBottom: errors?.email
                  ? '1px solid red'
                  : '1px solid black',
              }}
            />
            <Textarea
              autoComplete="off"
              name="inquiry"
              placeholder="Message"
              rows={1}
              value={inquiry}
              onChange={handleInquiryChange}
              sx={{
                borderBottom: errors?.inquiry
                  ? '1px solid red'
                  : '1px solid black',
              }}
            />
            {showSuccess ? (
              <Text
                sx={{
                  fontSize: '18px',
                  fontWeight: '400',
                  fontFamily: 'heading',
                  textAlign: 'center',
                }}
              >
                We have recieved your message and will write back soon
              </Text>
            ) : (
              <Button variant="primary" sx={{ width: '100%', mt: '1em' }}>
                SEND
              </Button>
            )}
          </Flex>
        </Flex>
        <Flex
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '1em',
            mt: '25%',
          }}
        >
          <Heading as="h1" sx={{ fontSize: '36px', fontWeight: '300' }}>
            Connect with us
          </Heading>
          <Text
            as="p"
            sx={{ fontSize: '18px', fontWeight: '600', fontFamily: 'heading' }}
          >
            (210) 646-4376
          </Text>
          <Text
            as="p"
            sx={{ fontSize: '18px', fontWeight: '600', fontFamily: 'heading' }}
          >
            general@tdwl.dev
          </Text>
          <Flex sx={{ gap: '1em' }}>
            <Box
              sx={{
                'svg:hover': {
                  fill: '#3b5998',
                },
              }}
            >
              <SocialIcon name="facebook" />
            </Box>
            <Box
              sx={{
                'svg:hover': {
                  fill: '#1DA1F2',
                },
              }}
            >
              <SocialIcon name="twitter" />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Contact
