import IconButton from "@/Components/Shared/IconButton.tsx"
import { useEffect, useState } from "react"

type TableBodyProps = {
    code: string
    title: string
    premiere: string
}

type TableHeaderProps = {
    label: string;
    width: string
};

type TableProps = {
    head: TableHeaderProps[];
    body: TableBodyProps[];
    action?: string;
    pagination: boolean;
};

const Table = ({
    head,
    body,
    action,
    pagination,
}: TableProps) => {
    const ITEMS_PER_PAGE = 10;
    const totalPages = Math.ceil(body.length / ITEMS_PER_PAGE);

    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedData, setPaginatedData] = useState<TableBodyProps[]>();

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    useEffect(() => {
        const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIdx = Math.min(startIdx + ITEMS_PER_PAGE, body.length);
        setPaginatedData(body.slice(startIdx, endIdx));
    }, [currentPage, body]);

    const getVisiblePages = () => {
        const visiblePages = [];
        const maxVisiblePages = 3;

        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage < maxVisiblePages - 1) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            visiblePages.push(i);
        }

        return visiblePages;
    };

    return (
        <div>
            <table className="table-fixed w-full rounded-md border border-solid border-grey-200">
                <thead>
                    <tr className="font-medium text-secondary-text text-left bg-grey-100 border-b border-grey-200 rounded-md">
                        {head.map((head, index) => (
                            <th key={index} className={`p-2 w-[${head.width}] whitespace-nowrap`}>{head.label}</th>
                        ))}
                        {action && (
                            <th className="text-center w-[10%]">Aksi</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {paginatedData && paginatedData.map((body, index) => (
                        <tr key={index}>
                            <td className="p-2">{body.code}</td>
                            <td className="p-2">{body.title}</td>
                            <td className="p-2">{body.premiere}</td>
                            {action && (
                                <td className="flex justify-center p-2"><IconButton icon="/icon/more-fill.svg" /></td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
            {pagination && (
                <div className="flex gap-3 items-center justify-center mt-4">
                    <img
                        src="/icon/pagination-arrow.svg"
                        alt="pagination arrow"
                        className={`cursor-pointer${currentPage === 1 ? 'opacity-50' : ''}`}
                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                        style={{ opacity: currentPage === 1 ? 0.5 : 1, marginRight: '12px' }}
                    />
                    {getVisiblePages().map((page) => (
                        <button
                            key={page}
                            className={`${currentPage === page ? 'text-grey-900' : 'text-grey-400'} overlie-2 font-semibold`}
                            onClick={() => handlePageChange(page)}
                        >
                            {page}
                        </button>
                    ))}
                    <img
                        src="/icon/pagination-arrow.svg"
                        alt="pagination arrow"
                        className={`cursor-pointer transform rotate-180  ${currentPage === totalPages ? 'opacity-50' : ''}`}
                        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                        style={{ marginLeft: '12px' }}
                    />
                </div>
            )}
        </div>
    );
}

export default Table;
