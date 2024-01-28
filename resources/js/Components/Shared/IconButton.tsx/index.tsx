type IconButtonProps = {
    icon: string
    onClick?: () => void;
}
const IconButton = ({
    icon,
    onClick
}: IconButtonProps) => {
  return (
    <button
    type="button"
    onClick={onClick}
    className="bg-primary-500 p-[9px] rounded-[10px]"
    >
        <img src={icon} alt="Icon Button" />
    </button>
  )
}

export default IconButton
