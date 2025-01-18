import React, { useState } from 'react'
import { IoIosCloseCircleOutline, IoIosMenu } from 'react-icons/io'
import LogoWithText from './LogoWithText'

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { CustomLink } from './CustomLink'
const navItems = [
  {
    id: 0,
    name: 'Features',
    link: '#features',
  },

  {
    id: 3,
    name: 'Blog',
    link: '/blog',
  },
]
const Navbar = () => {
  const { scrollY } = useScroll()
  const delta = useTransform(scrollY, [0, 24], [0, 24], { clamp: true })

  return (
    <div className="-mx-6 sticky -top-6 z-[99]">
      <motion.div
        className="flex w-full inset-x-0 flex-row items-center justify-between py-8 mx-auto"
        style={{
          paddingBottom: useTransform(
            delta,
            (value) => `calc(2rem - ${value}px)`,
          ),
        }}
      >
        <BackDrop />
        <div className="relative z-[1] max-w-[83rem] flex flex-row items-center justify-between w-full mx-auto">
          <LogoWithText
            textClassName="font-bold text-lg tracking-normal text-zinc-700"
            logoClassName="h-3 w-3 font-bold"
          />
          <div className="md:flex flex-row flex-1 hidden items-center justify-center space-x-14 text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200">
            <DesktopNav navItems={navItems} />
          </div>
          <a
            href="https://flowdown.app"
            className="hidden md:block relative px-5 py-2 text-sm rounded-full font-semibold bg-accent text-white transition duration-200"
          >
            Buy Now
          </a>
          <div className="flex md:hidden">
            <MobileNav navItems={navItems} />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const item = {
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.3,
      deplay: 0.9,
    },
  },
  show: {
    height: '100vh',
    opacity: 1,
    transition: { duration: 0.3, staggerChildren: 0.2 },
  },
  hidden: {
    opacity: 0,
    height: 0,
  },
}

const childItems = {
  hidden: { x: '-2vw', opacity: 0 },
  show: { x: 0, opacity: 1 },
}

const MobileNav = ({ navItems }: any) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <IoIosMenu onClick={() => setOpen(!open)} />
      <AnimatePresence>
        {open && (
          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-0 bg-white z-50 flex flex-col justify-center items-center space-y-10  text-xl font-bold text-zinc-600  hover:text-zinc-800 transition duration-200"
          >
            <IoIosCloseCircleOutline
              className="absolute right-8 top-8 h-5 w-5 "
              onClick={() => setOpen(!open)}
            />
            {navItems.map((navItem: any, idx: number) => (
              <CustomLink key={`link=${idx}`} href={navItem.link}>
                <motion.span variants={childItems} className="block">
                  {navItem.name}
                </motion.span>
              </CustomLink>
              // <Link href={navItem.link} key={navItem.link}>
              //   <motion.a variants={childItems}>{navItem.name}</motion.a>
              // </Link>
            ))}
            <motion.a
              variants={childItems}
              href="mailto:youremail@yourgmail.com"
              className="relative px-0.5 py-1 text-zinc-600 text-sm rounded-full font-semibold bg-gradient-to-br from-[rgba(5,45,255,.6)] to-[rgba(62,243,255,.6)] hover:shadow-md  hover:shadow-blue-500/30"
            >
              <span className="w-24 h-10 flex items-center justify-center bg-zinc-100 rounded-full mx-0.5 ">
                Contact
              </span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const DesktopNav = ({ navItems }: any) => {
  return (
    <>
      {navItems.map((navItem: any, idx: number) => (
        // <Link href={navItem.link} key={navItem.link}>
        //   <a>{navItem.name}</a>
        // </Link>
        <CustomLink key={`link=${idx}`} href={navItem.link}>
          <span>{navItem.name}</span>
        </CustomLink>
      ))}
    </>
  )
}

const BackDrop = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [30, 150], [0, 1])

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 backdrop-blur bg-white/80 border-b border-zinc-200"
    />
  )
}
export default Navbar
