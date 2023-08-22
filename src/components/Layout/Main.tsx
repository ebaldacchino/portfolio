import React from "react"
import { motion } from "framer-motion"
import { links } from "../../constants/links"
import { useLocation } from "@reach/router"

interface MainProps {
  children: React.ReactNode
  style?: string
}

const Main = ({ children, style }: MainProps) => {
  const { pathname, state } = useLocation()

  const urls = links.map(({ url }) => url)
  const prevIndex = state ? urls.indexOf(state.referrer) : 0

  const currentIndex = urls.indexOf(pathname)

  const fromLeft =
    (prevIndex === -1 && currentIndex !== -1) ||
    (currentIndex !== -1 && prevIndex > currentIndex)
  return (
    <motion.main
      className={style ?? ""}
      initial={{ opacity: 0, x: fromLeft ? "-10vw" : "10vw" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
      }}
    >
      {children}
    </motion.main>
  )
}

export default Main
