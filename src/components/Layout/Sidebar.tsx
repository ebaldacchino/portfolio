import React from "react"
import Links from "../../constants/links"
import SocialLinks from "../../constants/socialLinks"
import { FaTimes } from "react-icons/fa"

interface SidebarProps {
  isOpen: boolean
  toggleSidebar: () => void
}

const TRANSITION_DURATION_MILLISECONDS = 300

const Sidebar = ({ toggleSidebar, ...props }: SidebarProps) => {
  let timer = React.useRef<NodeJS.Timeout | null>(null)
  const [isOpenInternal, setIsOpenInternal] = React.useState(false)

  React.useEffect(() => {
    if (props.isOpen) {
      setIsOpenInternal(true)
    } else {
      close()
    }

    return () => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
    }
  }, [props.isOpen])

  function close() {
    timer.current = setTimeout(() => {
      setIsOpenInternal(false)
    }, TRANSITION_DURATION_MILLISECONDS)
  }

  const isRendered = isOpenInternal || props.isOpen

  if (!isRendered) {
    return null
  }

  const isOpen = props.isOpen && isOpenInternal

  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
      <button onClick={toggleSidebar} className="close-btn">
        <FaTimes />
      </button>
      <div className="side-container">
        <Links
          styleClass={`sidebar-links-style ${isOpen ? "sidebar-links" : ""}`}
        />
        <SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`} />
      </div>
    </aside>
  )
}

export default Sidebar
