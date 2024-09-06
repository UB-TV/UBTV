type IconButtonProps = {
    icon: string
    onClick?: () => void;
    color?: string
}
const IconButton = ({
    icon,
    onClick,
    color = "bg-primary-500"
}: IconButtonProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${color} p-[9px] rounded-[10px]`}
        >
            <img src={icon} alt="Icon Button" />
        </button>
    )
}

export default IconButton
