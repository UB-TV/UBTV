type IconButtonProps = {
    icon: string
    onClick?: () => void;
    style: 'Filled' | 'Outlined'
    color: 'Primary' | 'Error' | 'Success'
    rounded?: boolean
}
const IconButton = ({
    icon,
    onClick,
    style,
    color,
    rounded = false
}: IconButtonProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${style === 'Filled' ?
                `${color === 'Primary' ? 'bg-primary-500' :
                    `${color === 'Error' ? 'bg-error-500' : 'bg-success-500'}`
                }` : 'border-2 border-solid border-primary-500'} ${rounded ? 'rounded-full' : 'rounded-[10px]'} p-[9px]`}
        >
            <img src={icon} alt="Icon Button" />
        </button>
    )
}

export default IconButton
