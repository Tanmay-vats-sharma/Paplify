import { Loader2 } from 'lucide-react'

function Spinner({
  size = 20,
  label = 'Loading',
}) {
  return (
    <span className="spinner-wrapper">
      <Loader2
        size={size}
        className="spinner"
        aria-hidden="true"
      />

      <span className="sr-only">
        {label}
      </span>
    </span>
  )
}

export default Spinner