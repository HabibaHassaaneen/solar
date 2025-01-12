import React from 'react'

export default function AcmeLogo({
  fill = 'currentColor',
  filled,
  size,
  height,
  width,
  label,
  ...props
}) {
  return (
    <svg 
    width={size || width || 24}
    height={size || height || 24}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.45 2v3.55L15 3.77 11.45 2m-1 6L8 10.46l3.75 1.25L10.45 8M2 11.45L3.77 15l1.78-3.55H2M10 2H2v8c.57.17 1.17.25 1.77.25 3.58.01 6.49-2.9 6.5-6.5-.01-.59-.1-1.18-.27-1.75m7 20v-6h-3l5-9v6h3l-5 9z"
      fill={fill}
    />
  </svg>
  )
}

