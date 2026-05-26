import { ArrowUpRight } from 'lucide-react'

type LiveProjectButtonProps = {
  className?: string
  href?: string
  label?: string
}

export function LiveProjectButton({
  className,
  href,
  label = 'Live Project',
}: LiveProjectButtonProps) {
  const classes = `inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base ${className ?? ''}`.trim()

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
      >
        {label}
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </a>
    )
  }

  return (
    <span
      className={`${classes} cursor-default opacity-70`}
      aria-disabled="true"
    >
      {label}
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </span>
  )
}
