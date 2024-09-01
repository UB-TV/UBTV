import Button from "@/Components/Shared/Button"
import IconButton from "@/Components/Shared/IconButton.tsx"
import { useEffect, useState } from "react"
import { NewUsers } from "@/Constants/Temp";

type TableBodyProps = {
    id: number;
    name: string;
    role: string;
    email: string;
    phone: string;
}

type TableHeaderProps = {
    label: string;
    width: string
};

type TableProps = {
    head: TableHeaderProps[];
    body: TableBodyProps[];
    action?: boolean;
    pagination: boolean;
};

const Table = ({
    head,
    body,
    action,
    pagination,
}: TableProps) => {
    const [users, setUsers] = useState<TableBodyProps[]>(NewUsers);
    const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

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

    const handleAccept = (userId: number) => {
        setUsers(users.filter(user => user.id !== userId));
    
        alert(`User added to Users: ${userId}`);
      };
      
      const handleReject = (userId: number) => {
        setUsers(users.filter(user => user.id !== userId));
    
        alert(`User rejected and data deleted: ${userId}`);
      };
      
      const handleDelete = (userId: number) => {
        setUsers(users.filter(user => user.id !== userId));
    
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
                        {action === true ? (
                            <th className="text-center w-[10%]">Konfirmasi Assign</th>
                        ) : (
                            <th className="text-center w-[10%]">Action</th>
                        )
                        }
                    </tr>
                </thead>
                <tbody>
                    {paginatedData && paginatedData.map((body, index) => (
                        <tr key={index}>
                            <td className="p-2">{body.id}</td>
                            <td className="p-2">{body.name}</td>
                            <td className="p-2">{body.role}</td>
                            <td className="p-2">{body.email}</td>
                            <td className="p-2">{body.phone}</td>
                            {action === true ? (
                                <td className="flex justify-center gap-3 p-2">
                                    <Button
                                    type="button"
                                    icon="/icon/reject.svg"
                                    key={index}
                                    onClick={() => handleReject(body.id)}
                                    iconOnly
                                    />

                                    <Button
                                    type="button"
                                    icon="/icon/accept.svg"
                                    key={index}
                                    onClick={() => handleAccept(body.id)}
                                    iconOnly
                                    />
                                </td>
                            ) : (
                                <td className="flex justify-center p-2">
                                    <IconButton
                                        onClick={() => handleDelete(body.id)}
                                        icon="/icon/delete.svg"
                                    />
                                </td>
                            )
                        }
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
