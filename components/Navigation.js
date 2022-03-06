import { Flex, Grid, Box } from 'theme-ui'
import { Drawer } from '.'
import { AnimatePresence, motion } from 'framer-motion'

const MotionBox = motion(Box)

const topVariants = {
  click: {
    // transform: 'translateY(8px)',
    rotate: '-45deg',
    translateY: '8px',
    transition: { duration: 0.5, rotate: { delay: 0.5, duration: 0.5 } },
  },
  stop: {
    rotate: '0deg',
    translateY: '0px',
    transition: { duration: 0.5, translateY: { delay: 0.5, duration: 0.5 } },
  },
}

const middleVariants = {
  click: {
    width: '25px',
    transform: 'rotate(45deg)',
    transition: {
      duration: 0.5,
      transform: { delay: 0.5, duration: 0.5 },
    },
  },
  stop: {
    width: '20px',
    transform: 'rotate(0deg)',
    transition: { duration: 0.5, width: { delay: 0.5, duration: 0.5 } },
  },
}

const bottomVariants = {
  click: {
    opacity: 0,
    transform: 'translateY(-9px)',
    transition: { duration: 0.5, opacity: { delay: 0.5, duration: 0.1 } },
  },
  stop: {
    opacity: 1,
    transform: 'translateY(0px)',
    transition: { delay: 0.5, duration: 0.5 },
  },
}

const Navigation = ({ show, toggle, headerColor }) => {
  return (
    <>
      <AnimatePresence>
        {show && <Drawer show={show} toggle={toggle} />}
      </AnimatePresence>
      <Flex sx={{ flex: '1 1 auto', justifyContent: 'flex-end' }}>
        <Grid
          sx={{ height: '25px', cursor: 'pointer' }}
          gap={0}
          onClick={toggle}
        >
          <MotionBox
            variants={topVariants}
            animate={show ? 'click' : 'stop'}
            sx={{
              background: headerColor,
              height: '1px',
              width: '25px',
            }}
          />
          <MotionBox
            variants={middleVariants}
            animate={show ? 'click' : 'stop'}
            sx={{
              background: headerColor,
              height: '1px',
              width: '20px',
              marginLeft: 'auto',
            }}
          />
          <MotionBox
            variants={bottomVariants}
            animate={show ? 'click' : 'stop'}
            sx={{
              background: headerColor,
              height: '1px',
              width: '15px',
              marginLeft: 'auto',
            }}
          />
        </Grid>
      </Flex>
    </>
  )
}

export default Navigation
