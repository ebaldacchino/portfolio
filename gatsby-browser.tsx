import React from "react"
import { AnimatePresence } from "framer-motion"
import "./src/css/main.css"
import "./src/css/scroll-top.css"
import "./src/css/navbar.css"
import "./src/css/sidebar.css"
import "./src/css/footer.css"

export const onClientEntry = () => window.scrollTo(0, 0)

export const wrapPageElement = ({ element }) => (
  <AnimatePresence mode="wait">{element}</AnimatePresence>
)
export const onRouteUpdate = ({ location, prevLocation }) => {
  if (location && location.state)
    location.state.referrer = prevLocation ? prevLocation.pathname : null
}
