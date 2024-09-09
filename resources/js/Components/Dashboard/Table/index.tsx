import IconButton from "@/Components/Shared/IconButton.tsx"
import { useGetUserRole } from "@/util/RoleData";
import { HandleSlugRedirect } from "@/util/HandleSlugRedirect"
import { useEffect, useState } from "react"
import Button from "@/Components/Shared/Button";

type TableHeaderProps = {
    label: string;
    width: string
};

interface TableProps {
    head: TableHeaderProps[];
    body: any;
    action?: string;
    redirectUrl?: string;
    pagination: boolean;
    type: 'Program' | 'Program Status' | 'Status Episode' | 'Message' | 'User Permission' | 'User' | 'Admin';
};

const Table = ({
    head,
    body,
    action,
    redirectUrl,
    pagination,
    type
}: TableProps) => {
    const ITEMS_PER_PAGE = 10;
    const totalPages = Math.ceil(body.length / ITEMS_PER_PAGE);

    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedData, setPaginatedData] = useState<any[]>();

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

    const handleAccept = (userId: number) => {
        alert(`User added to Users: ${userId}`);
    };

    const handleReject = (userId: number) => {
        alert(`User rejected and data deleted: ${userId}`);
    };

    const handleDelete = (userId: number) => {
        alert(`User deleted: ${userId}`);
    };

    return (
        <div>
            <table className="table-fixed w-full rounded-md border border-solid border-grey-200">
                <thead>
                    <tr className="font-medium text-secondary-text text-left bg-grey-100 border-b border-grey-200 rounded-md">
                        {head.map((head, index) => (
                            <th key={index} className={`p-2 w-[${head.width}] whitespace-nowrap`}>{head.label}</th>
                        ))}
                        {(action && type === 'Admin') && (
                            <th className="text-center w-[10%]">Konfirmasi Assign</th>
                        )}
                        {(action && type !== 'Admin') && (
                            <th className="text-center w-[10%]">Aksi</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {paginatedData && paginatedData.map((body, index) => (
                        <tr key={index}>
                            {/* Please make one for User Permission and User Type for Admin Role */}
                            {type === 'Admin' ? (
                                <>
                                    <td className="p-2">{body.id}</td>
                                    <td className="p-2">{body.name}</td>
                                    <td className="p-2">{body.role}</td>
                                    <td className="p-2">{body.email}</td>
                                    <td className="p-2">{body.phone}</td>
                                    {action === 'new' && (
                                        <td className="flex justify-center gap-3 p-2">
                                            <Button
                                                type="button"
                                                icon="/icon/reject.svg"
                                                onClick={() => handleReject(body.id)}
                                                iconOnly
                                            />
                                            <Button
                                                type="button"
                                                icon="/icon/accept.svg"
                                                onClick={() => handleAccept(body.id)}
                                                iconOnly
                                            />
                                        </td>
                                    )}
                                    {action === 'accepted' && (
                                        <td className="flex justify-center p-2">
                                            <IconButton
                                                onClick={() => handleDelete(body.id)}
                                                icon="/icon/delete.svg"
                                                color="Error"
                                                style="Filled"
                                            />
                                        </td>
                                    )}
                                </>
                            ) : (
                                <>
                                    {type === 'Program' || type === 'Program Status' || type === 'Status Episode' ? (
                                        <>
                                            <td className="p-2">{body.code}</td>
                                            <td className="p-2">{body.name}</td>
                                            <td className="p-2">{body.premiere_at}</td>
                                            {type === 'Status Episode' && (
                                                <td className="p-2">{body.episode}</td>
                                            )}
                                            {(type === 'Status Episode' || type === 'Program Status') && (
                                                <td className="p-2">{body.status}</td>
                                            )}
                                        </>
                                    ) : type === 'Message' ? (
                                        <>
                                            <td className="p-2">{body.sender}</td>
                                            <td className="p-2">{body.programTitle}</td>
                                            <td className="p-2">{body.programEpisode}</td>
                                            <td className="p-2">{body.senderRole}</td>
                                            <td className="p-2">{body.message}</td>
                                        </>
                                    ) : (
                                        <>
                                            {/* Other types like User Permission, User */}
                                        </>
                                    )}
                                    {(action) && (
                                        <td className="flex justify-center p-2">
                                            <IconButton
                                                color="Primary"
                                                onClick={() => HandleSlugRedirect(`${redirectUrl}`, useGetUserRole(), `${body.slug}`)}
                                                icon="/icon/more-fill.svg"
                                                style="Filled"
                                            />
                                        </td>
                                    )}
                                </>
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
                        className={`cursor-pointer ${currentPage === 1 ? 'opacity-50' : ''} mr-3`}
                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
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
                        className={`cursor-pointer transform rotate-180  ${currentPage === totalPages ? 'opacity-50' : ''} ml-3`}
                        onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                    />
                </div>
            )}
        </div>
    );
}

export default Table;
