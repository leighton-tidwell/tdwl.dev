import { useState, useRef, useEffect } from 'react'
import {
  Box,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
  Button,
  Label,
  Link,
} from 'theme-ui'
import { Element } from 'react-scroll'
import { SocialIcon } from '.'

const Contact = ({ toggleHeaderColor, scrollPosition }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [inquiry, setInquiry] = useState('')
  const [errors, setErrors] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)
  const [textAreaRows, setTextAreaRows] = useState(1)

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
    const emailFormat =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (name.length <= 0) {
      tempErrors['name'] = true
      isValid = false
    }

    console.log(email, email.match(emailFormat))

    if (email.length <= 0 || email.match(emailFormat) === null) {
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
    setErrors({ ...errors, name: false })
  }

  const handleEmailChange = e => {
    setEmail(e.target.value)
    setErrors({ ...errors, email: false })
  }

  const handleInquiryChange = e => {
    const { value } = e.target
    setErrors({ ...errors, inquiry: false })
    setTextAreaRows(Math.ceil(value.length / 40) || 1)
    setInquiry(value)
  }

  return (
    <>
      <Element
        style={{ width: '0px', height: '0px' }}
        id="contact"
        name="contact"
      />
      <Box
        sx={{
          background: 'white',
          color: 'black',
          minHeight: '100vh',
          pt: '54px',
          position: 'relative',
          overflow: 'hidden',
          p: ['3em 0', '3em 0', '10em 0'],
          scrollSnapAlign: 'center',
          '&:after': {
            content: '""',
            position: 'absolute',
            width: '0',
            height: '0',
            borderLeft: '0 solid transparent',
            borderRight: '300vw solid transparent',
            borderBottom: '40vh solid #141414',
            bottom: '-100px',
            left: '49%',
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
          },
        }}
        id="contact"
        ref={ref}
      >
        <Flex
          p="1em"
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: ['column', 'column', 'row'],
          }}
        >
          <Flex
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              flexGrow: '1',
              position: 'relative',
              width: ['100%', '100%', '50%'],
              '&:after': {
                content: ['none', 'none', '""'],
                position: 'absolute',
                right: '0',
                height: '150%',
                width: '1px',
                background: '#141414',
              },
            }}
          >
            <Heading
              as="h1"
              sx={{ fontSize: ['36px', '36px', '45px'], fontWeight: '300' }}
            >
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
              <Box
                sx={{
                  width: '100%',
                  position: 'relative',
                  label: {
                    color: errors?.name ? 'red' : '',
                  },
                  '& input:focus + label': {
                    transform: 'scale(0.8) translateY(-1.5em)',
                  },
                  '& input:not([value=""]) + label': {
                    transform: 'scale(0.8) translateY(-1.5em)',
                  },
                }}
              >
                <Input
                  autoComplete="off"
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  sx={{
                    borderBottom: errors?.name
                      ? '1px solid red'
                      : '1px solid black',
                  }}
                />
                <Label htmlFor="name">Name</Label>
              </Box>
              <Box
                sx={{
                  width: '100%',
                  position: 'relative',
                  label: {
                    color: errors?.email ? 'red' : '',
                  },
                  '& input:focus + label': {
                    transform: 'scale(0.8) translateY(-1.5em)',
                  },
                  '& input:not([value=""]) + label': {
                    transform: 'scale(0.8) translateY(-1.5em)',
                  },
                }}
              >
                <Input
                  autoComplete="off"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  sx={{
                    borderBottom: errors?.email
                      ? '1px solid red'
                      : '1px solid black',
                  }}
                />
                <Label htmlFor="email">Email</Label>
              </Box>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  label: {
                    color: errors?.inquiry ? 'red' : '',
                    transform: inquiry.length
                      ? 'scale(0.8) translateY(-1.5em)'
                      : '',
                  },
                  '& textarea:focus + label': {
                    transform: 'scale(0.8) translateY(-1.5em)',
                  },
                }}
              >
                <Textarea
                  autoComplete="off"
                  name="inquiry"
                  id="inquiry"
                  rows={textAreaRows}
                  value={inquiry}
                  onChange={handleInquiryChange}
                  sx={{
                    borderBottom: errors?.inquiry
                      ? '1px solid red'
                      : '1px solid black',
                  }}
                />
                <Label htmlFor="inquiry">Message</Label>
              </Box>
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
              flexGrow: '1',
              gap: '1em',
              width: ['100%', '100%', '50%'],
              mt: ['25%', '25%', '0'],
            }}
          >
            <Heading
              as="h1"
              sx={{ fontSize: ['36px', '36px', '45px'], fontWeight: '300' }}
            >
              Connect with us
            </Heading>
            <Text
              as="p"
              sx={{
                fontSize: '18px',
                fontWeight: '600',
                fontFamily: 'heading',
              }}
            >
              <Link
                sx={{ textDecoration: 'none', color: 'black' }}
                href="tel:+1210-646-4376"
              >
                (210) 646-4376
              </Link>
            </Text>
            <Text
              as="p"
              sx={{
                fontSize: '18px',
                fontWeight: '600',
                fontFamily: 'heading',
              }}
            >
              <Link
                sx={{ textDecoration: 'none', color: 'black' }}
                href="mailto:general@tdwl.dev"
              >
                general@tdwl.dev
              </Link>
            </Text>
            <Flex sx={{ gap: '1em' }}>
              <Link
                href="https://www.facebook.com/TDWLDevelopment"
                target="_blank"
              >
                <Box
                  sx={{
                    'svg:hover': {
                      fill: '#3b5998',
                    },
                    'svg:active': {
                      fill: '#3b5998',
                    },
                  }}
                >
                  <SocialIcon name="facebook" />
                </Box>
              </Link>
              <Link href="https://twitter.com/TDWLDevelopment" target="_blank">
                <Box
                  sx={{
                    'svg:hover': {
                      fill: '#1DA1F2',
                    },
                    'svg:active': {
                      fill: '#1DA1F2',
                    },
                  }}
                >
                  <SocialIcon name="twitter" />
                </Box>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default Contact
