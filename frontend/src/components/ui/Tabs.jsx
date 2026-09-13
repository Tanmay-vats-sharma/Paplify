function Tabs({
  items = [],
  value,
  onChange,
  className = '',
}) {
  return (
    <div className={`tabs ${className}`}>
      {items.map((item) => {
        const active = item.value === value

        return (
          <button
            key={item.value}
            type="button"
            className={`tab ${active ? 'tab-active' : ''}`}
            onClick={() => onChange?.(item.value)}
            aria-selected={active}
            role="tab"
          >
            {item.icon}
            {item.label}
          </button>
        )
      })}
    </div>
  )
}

export default Tabs