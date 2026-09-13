import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

function Dropdown({
  trigger,
  items = [],
  align = 'left',
  disabled = false,
  onOpenChange,
}) {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (
        open &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false)
        onOpenChange?.(false)
      }
    }

    document.addEventListener(
      'mousedown',
      handlePointerDown,
    )

    return () => {
      document.removeEventListener(
        'mousedown',
        handlePointerDown,
      )
    }
  }, [open, onOpenChange])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!open) {
        return
      }

      if (event.key === 'Escape') {
        setOpen(false)
        onOpenChange?.(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener(
        'keydown',
        handleKeyDown,
      )
    }
  }, [open, onOpenChange])

  const toggleDropdown = () => {
    if (disabled) {
      return
    }

    const nextOpen = !open

    setOpen(nextOpen)
    onOpenChange?.(nextOpen)
  }

  const handleItemClick = (item) => {
    if (item.disabled) {
      return
    }

    item.onClick?.(item)
    setOpen(false)
    onOpenChange?.(false)
  }

  return (
    <div
      ref={dropdownRef}
      className="dropdown"
    >
      <button
        type="button"
        className={`dropdown-trigger ${
          open ? 'dropdown-trigger-active' : ''
        }`}
        onClick={toggleDropdown}
        disabled={disabled}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {trigger}

        <ChevronDown
          size={15}
          className={`dropdown-chevron ${
            open ? 'dropdown-chevron-open' : ''
          }`}
          aria-hidden="true"
        />
      </button>

      {open && (
        <div
          className={`dropdown-menu dropdown-align-${align}`}
          role="menu"
        >
          {items.map((item) => {
            if (item.separator) {
              return (
                <div
                  key={item.id || `separator-${item.label}`}
                  className="dropdown-separator"
                  role="separator"
                />
              )
            }

            const Icon = item.icon

            return (
              <button
                key={item.id || item.label}
                type="button"
                role="menuitem"
                className={`dropdown-item ${
                  item.danger
                    ? 'dropdown-item-danger'
                    : ''
                }`}
                disabled={item.disabled}
                onClick={() => handleItemClick(item)}
              >
                {Icon && (
                  <Icon
                    size={16}
                    aria-hidden="true"
                  />
                )}

                <span>{item.label}</span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Dropdown