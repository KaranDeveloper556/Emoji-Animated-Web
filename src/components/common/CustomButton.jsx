import React from 'react'

const CustomButton = ({
  LeadIcons,
  TailIcons,
  text = "Button",
  onClick,
  type = "button",
  disabled = false,
  ariaLabel,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel || text}
      className={`flex items-center justify-center gap-2 border-2 bg-transparent text-white hover:bg-slate-800 font-semibold px-4 py-2 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none ${className}`}
    >
      {LeadIcons && Array.isArray(LeadIcons) ? (
        LeadIcons.map((LeadIcon, index) => (
          <LeadIcon key={index} className="w-5 h-5" />
        ))
      ) : LeadIcons && (<LeadIcons className="w-5 h-5" />)}

      {text && <span>{text}</span>}

      {TailIcons && Array.isArray(TailIcons) ? (
        TailIcons.map((TailIcon, index) => (
          <TailIcon key={index} className="w-5 h-5" />
        ))
      ) : TailIcons && (
        <TailIcons className="w-5 h-5" />
      )}
    </button>
  )
}

export default CustomButton