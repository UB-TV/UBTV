type IconButtonProps = {
    icon: string
    onClick?: () => void;
    transparent ?: boolean
}
const IconButton = ({
    icon,
    onClick,
    transparent
}: IconButtonProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${transparent ? 'bg-transparent' : 'bg-error-500'} p-[9px] rounded-[10px]`}
        >
            <img src={icon} alt="Icon Button" />
        </button>
    )
}

export default IconButton
