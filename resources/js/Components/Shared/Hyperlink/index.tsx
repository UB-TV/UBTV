import { Link } from "@inertiajs/react"

type HyperlinkProps = {
    url: string
    label: string
}

const index = ({
    url,
    label
}: HyperlinkProps) => {
    return (
        <Link className="text-primary-500 hover:font-medium underline" href={url}>
            {label}
        </Link>
    )
}

export default index
