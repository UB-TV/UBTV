import { Link } from "@inertiajs/react"

type MenuProps = {
    link: string,
    label: string
}

const Menu = ({ link, label }: MenuProps) => {
    const currentPath = window.location.pathname;
    const isActive = link === '/' ? currentPath === link : currentPath.startsWith(link);

    return (
        <Link href={link} className={`${isActive ? 'text-white bg-primary-900' : 'text-secondary-text'} body-2 font-medium w-full px-3 py-[6px] rounded-[10px]`} >
            {label}
        </Link>
    );
};


export default Menu
