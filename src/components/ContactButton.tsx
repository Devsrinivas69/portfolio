type ContactButtonProps = {
  className?: string
  href?: string
  label?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

export function ContactButton({
  className,
  href,
  label = 'Contact Me',
  type = 'button',
  disabled = false,
  onClick,
}: ContactButtonProps) {
  const classes = `rounded-full bg-[linear-gradient(123deg,#18011F_7%,#B600A8_37%,#7621B0_72%,#BE4C00_100%)] px-8 py-3 text-xs font-medium uppercase tracking-widest text-white shadow-[0px_4px_4px_rgba(181,1,167,0.25),inset_4px_4px_12px_#7721B1] outline outline-2 outline-offset-[-3px] outline-white transition-opacity sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base ${className ?? ''}`.trim()

  if (href) {
    return (
      <a href={href} className={classes}>
        {label}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={`${classes} disabled:cursor-not-allowed disabled:opacity-60`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
