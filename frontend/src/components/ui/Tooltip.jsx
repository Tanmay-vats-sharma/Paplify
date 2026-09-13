import { useState } from 'react'

function Tooltip({
  content,
  children,
  side = 'top',
  delay = 400,
}) {
  const [visible, setVisible] = useState(false)
  const [timer, setTimer] = useState(null)

  const showTooltip = () => {
    const timeout = window.setTimeout(() => {
      setVisible(true)
    }, delay)

    setTimer(timeout)
  }

  const hideTooltip = () => {
    if (timer) {
      window.clearTimeout(timer)
    }

    setTimer(null)
    setVisible(false)
  }

  return (
    <span
      className="tooltip-wrapper"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}

      {visible && content && (
        <span
          className={`tooltip tooltip-${side}`}
          role="tooltip"
        >
          {content}
        </span>
      )}
    </span>
  )
}

export default Tooltip