type ButtonProps = {
    type: "submit" | "button"
    label?: string
    style?: "Filled" | "Outlined" | "transparent",
    color?: "Primary" | "Error" | "Transparent",
    icon?: string
    iconPosition?: "Left" | "Right",
    onClick?: () => void;
    width?: "Fit" | "Full"
    size?: "Small" | "Medium" | "Large" | "Center"
    iconOnly?: boolean
}

const Button = ({
    type,
    label,
    style,
    color,
    icon,
    iconPosition,
    onClick,
    width,
    size,
    iconOnly
}: ButtonProps) => {
    return (
        <>
      {iconOnly ? (
        <button
          type={type}
          onClick={onClick}
        >
          <img src={icon} alt={label} />
        </button>
      ) : (
        <button
          type={type}
          onClick={onClick}
          className={`
            ${style === "Filled" ? "bg-primary-500 text-white" :
              style === "Outlined" && color === "Primary" ? "border-2 border-solid border-primary-500 text-primary-500" : "border-2 border-solid border-error-600 text-error-600"
            }
            ${width === "Fit" ? "w-fit" : "w-full flex justify-center"}
            ${size === "Small" ? "caption-2" : size === "Medium" ? "caption-1" : "body-2"}
            ${iconPosition === "Left" ? "flex items-center gap-2" : "flex flex-row-reverse items-center gap-2"}
            font-medium rounded-[10px] py-3 px-6
          `}
        >
          
            {icon ? (
                <>
                    <img src={icon} alt={label} />
                    <span>{label}</span>
                </>
                ) : (
                    <span>{label}</span>
            )}
        </button>
      )}
    </>
    )
}

export default Button
