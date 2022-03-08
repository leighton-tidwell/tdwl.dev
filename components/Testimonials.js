import { useRef, useEffect } from 'react'
import { Flex, Heading, Box, Paragraph } from 'theme-ui'
import { Element } from 'react-scroll'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import classes from './testimonials.module.css'

const Testimonials = ({ toggleHeaderColor, scrollPosition }) => {
  const ref = useRef()

  useEffect(() => {
    const { offsetTop } = ref.current
    if (
      scrollPosition >= offsetTop &&
      scrollPosition <= offsetTop + ref.current.offsetHeight
    ) {
      toggleHeaderColor('white')
    }
  }, [scrollPosition, toggleHeaderColor])

  const testimonials = [
    {
      name: 'Komcore',
      quote:
        'Leighton was great to work with and he delivered the project ahead of schedule.',
    },
    {
      name: 'Key2Access',
      quote:
        'Very knowledgeable, Very professional, goes the extra mile to please the customer. pleasant to work with, HIGHLY recommended.',
    },
    {
      name: 'Dalnether',
      quote:
        'TDWL provide a quality service. Working effectively with our engineers to meet and often exceed our expectations.',
    },
    {
      name: 'Phil',
      quote:
        'Leighton is a pure problem solver. In my 27 years of experience with the government, I can say there are very few individuals that come around with his passion and desire to make a difference. Anyone would be lucky to have Leighton on their team. I can’t provide any higher recommendation for someone. ',
    },
  ]

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <>
      <Element
        style={{ width: '0px', height: '0px' }}
        id="testimonials"
        name="testimonials"
      />
      <Flex
        sx={{
          fontSize: ['28px', '28px', '36px'],
          fontWeight: '700',
          background: '#000',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          scrollSnapStop: 'always',
          scrollSnapAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          scrollSnapAlign: 'center',
        }}
        ref={ref}
      >
        <Heading as="h1" sx={{ textAlign: 'center' }}>
          Testimonials
        </Heading>
        <Carousel
          ssr={true}
          responsive={responsive}
          showDots={true}
          infinite={true}
          autoPlaySpeed={6000}
          autoPlay={true}
          containerClass={classes['carousel-container']}
          removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
        >
          {testimonials.map(({ name, quote }) => (
            <Box key={name} sx={{ textAlign: 'center', p: '0 1em' }}>
              <Paragraph
                sx={{ fontSize: ['18px', '24px', '30px'], fontWeight: '300' }}
              >
                {quote}
              </Paragraph>
              <Heading
                as="h2"
                sx={{ fontSize: ['22px', '26px', '28px'], fontWeight: '400' }}
              >
                - {name}
              </Heading>
            </Box>
          ))}
        </Carousel>
      </Flex>
    </>
  )
}

export default Testimonials
