type IconButtonProps = {
    icon: string
    onClick?: () => void;
    style: 'Filled' | 'Outlined'
}
const IconButton = ({
    icon,
    onClick,
    style
}: IconButtonProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${style === 'Filled' ? 'bg-primary-500' : 'border-2 border-solid border-primary-500' } p-[9px] rounded-[10px]`}
        >
            <img src={icon} alt="Icon Button" />
        </button>
    )
}

export default IconButton
