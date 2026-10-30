export function WindowsMark({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true" fill="currentColor">
      <rect x="0" y="0" width="7.4" height="7.4" />
      <rect x="8.6" y="0" width="7.4" height="7.4" />
      <rect x="0" y="8.6" width="7.4" height="7.4" />
      <rect x="8.6" y="8.6" width="7.4" height="7.4" />
    </svg>
  )
}
