type ButtonProps = {
    type: "submit" | "button"
    label?: string
    style?: "Filled" | "Outlined",
    color?: "Primary" | "Error",
    icon?: string
    iconPosition?: "Left" | "Right",
    onClick?: () => void;
    width?: "Fit" | "Full"
    size?: "Small" | "Medium" | "Large" | "Center"
    className?: string
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
    className,
    iconOnly
}: ButtonProps) => {
    const buttonClasses = `
        ${style === "Filled" ? "bg-primary-500 text-white" :
            style === "Outlined" && color === "Primary" ? "border-2 border-solid border-primary-500 text-primary-500" : 
            style === "Outlined" && color === "Error" ? "border-2 border-solid border-error-600 text-error-600" :
            "bg-transparent text-black"
        }
        ${width === "Fit" ? "w-fit flex justify-center" : "w-full flex justify-center"}
        ${size === "Small" ? "caption-2" : size === "Medium" ? "caption-1" : size === "Large" ? "body-2" : "body-1"}
        ${iconPosition === "Left" ? "flex items-center gap-2" : "flex flex-row-reverse items-center gap-2"}
        font-medium rounded-[10px] py-3 px-6 ${className}
    `;
    if (iconOnly) {
        return (
            <button
                type={type}
                onClick={onClick}
            >
                <img src={icon} alt={label} />
            </button>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={buttonClasses}
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
    );
}

export default Button
