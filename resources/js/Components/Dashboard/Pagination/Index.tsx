import { Link } from '@inertiajs/react';
import { IPaginationLink } from '@/models/generalinterfaces';

interface IPagination {
    links: IPaginationLink[];
}

const Pagination= ({ links }: IPagination) => {
    return (
        <div className="flex gap-4 items-center justify-center mt-4">
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.url || '#'}
                    className={`${
                        link.active ? 'text-grey-900' : 'text-grey-400'
                    } font-semibold ${
                        !link.url ? 'opacity-50 pointer-events-none' : ''
                    }`}
                >
                    <span dangerouslySetInnerHTML={{ __html: link.label }} />
                </Link>
            ))}
        </div>
    );
};

export default Pagination;
