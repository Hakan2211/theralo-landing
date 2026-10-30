/** The Windows mark: four flat squares. */
export function WinMark() {
  return (
    <svg className="win" viewBox="0 0 16 16" aria-hidden="true" fill="currentColor">
      <rect x="0" y="0" width="7.5" height="7.5" />
      <rect x="8.5" y="0" width="7.5" height="7.5" />
      <rect x="0" y="8.5" width="7.5" height="7.5" />
      <rect x="8.5" y="8.5" width="7.5" height="7.5" />
    </svg>
  )
}
