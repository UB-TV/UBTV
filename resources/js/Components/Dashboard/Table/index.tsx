import IconButton from "@/Components/Shared/IconButton.tsx"
import { useGetUserRole } from "@/util/RoleData";
import { useEffect, useState } from "react"
import Button from "@/Components/Shared/Button";
import { Link } from "@inertiajs/react";
import Pagination from "../Pagination/Index";
import { IPaginationLink } from "@/models/generalinterfaces";

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
    pagination_link?: IPaginationLink[]
};

const Table = ({
    head,
    body,
    action,
    redirectUrl,
    pagination,
    type,
    pagination_link
}: TableProps) => {

    const role = useGetUserRole();

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
                    {body.map((body: any, index: number) => (
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
                                            <Link
                                                href={`/${role}/${body.slug}`}
                                            >
                                                <IconButton
                                                    color="Primary"
                                                    icon="/icon/more-fill.svg"
                                                    style="Filled"
                                                />
                                            </Link>
                                        </td>
                                    )}
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
            {pagination && pagination_link && (
                <Pagination links={pagination_link} />
            )}
        </div>
    );
}

export default Table;
