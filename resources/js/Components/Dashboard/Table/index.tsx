import IconButton from "@/Components/Shared/IconButton.tsx";
import { useGetUserRole } from "@/util/RoleData";
import { useEffect, useState } from "react";
import Button from "@/Components/Shared/Button";
import { Link } from "@inertiajs/react";
import Pagination from "../Pagination/Index";
import { IPaginationLink } from "@/models/generalinterfaces";
import { useFetchNewUsers } from "@/repositories/Admin/useFetchNewUsers";
import { useProgramService } from "@/repositories/HeadOfProgram/useProgramService";
import useFormatDate from "@/util/useFormatDate";

type TableHeaderProps = {
    label: string;
    width: string;
};

interface TableProps {
    head: TableHeaderProps[];
    body: any;
    action?: string;
    redirectUrl?: string;
    isRedirectPrefix?: boolean;
    pagination: boolean;
    type:
        | "Program"
        | "Program Status"
        | "Status Episode"
        | "Message"
        | "User Permission"
        | "User"
        | "Admin";
    pagination_link?: IPaginationLink[];
    paginationData?: any;
    showDelete?: boolean;
}

const Table = ({
    head,
    body,
    action,
    redirectUrl,
    isRedirectPrefix = false,
    pagination,
    type,
    pagination_link,
    showDelete = false,
}: TableProps) => {
    const role = useGetUserRole();

    useEffect(() => {
        localStorage.setItem("userRole", "admin");
    }, []);

    const { updateUserStatus, deleteUser } = useFetchNewUsers();
    const { deleteProgram } = useProgramService();

    const handleAccept = async (userId: number) => {
        try {
            await updateUserStatus(userId, true);
            window.location.reload();
        } catch (err) {
            console.error("Error accepting user:", err);
        }
    };

    const handleReject = async (userId: number) => {
        try {
            await updateUserStatus(userId, false);
            window.location.reload();
        } catch (err) {
            console.error("Error rejecting user:", err);
        }
    };

    const handleDeleteUser = async (userId: number) => {
        try {
            await deleteUser(userId);
            window.location.reload();
        } catch (err) {
            console.error("Error deleting user:", err);
            alert("Failed to delete user. Please try again.");
        }
    };

    const handleDeleteProgram = async (programSlug: string) => {
        try {
            await deleteProgram(programSlug);
            window.location.reload();
        } catch (err) {
            console.error("Error deleting program:", err);
            alert("Failed to delete program. Please try again.");
        }
    };

    const getStatusLabel = (status: string): string => {
        switch (status) {
            case "SHOOTING":
                return "Shooting";
            case "PRODUCER_VALIDATION":
                return "Validasi Produser";
            case "EDITING":
                return "Editing";
            case "MCR_VALIDATION":
                return "Validasi MCR";
            case "ON_AIR":
                return "On Air";
            default:
                return status
                    .replace(/_/g, " ")
                    .toLowerCase()
                    .replace(/\b\w/g, (char) => char.toUpperCase());
        }
    };

    const normalizedRole = role.replace(/_/g, "-");

    function formatDate(dateString: string) {
        const days = [
            "Minggu",
            "Senin",
            "Selasa",
            "Rabu",
            "Kamis",
            "Jumat",
            "Sabtu",
        ];
        const months = [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
        ];

        const date = new Date(dateString);

        const dayName = days[date.getDay()];
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");

        return `${dayName}, ${day} ${month} ${year} ${hours}:${minutes}`;
    }

    return (
        <div>
            <table className="table-fixed w-full rounded-md border border-solid border-grey-200">
                <thead>
                    <tr className="font-medium text-secondary-text text-left bg-grey-100 border-b border-grey-200 rounded-md">
                        {head.map((head, index) => (
                            <th
                                key={index}
                                className={`p-2 w-[${head.width}] whitespace-nowrap`}
                            >
                                {head.label}
                            </th>
                        ))}
                        {action && type === "Admin" && (
                            <th className="text-center w-[10%]">
                                Konfirmasi Assign
                            </th>
                        )}
                        {action && type !== "Admin" && (
                            <th className="text-center w-[10%]">Aksi</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {body.map((body: any, index: number) => (
                        <tr key={index}>
                            {/* Please make one for User Permission and User Type for Admin Role */}
                            {type === "Admin" ? (
                                <>
                                    <td className="p-2">{body.id}</td>
                                    <td className="p-2">{body.name}</td>
                                    <td className="p-2">{body.role}</td>
                                    <td className="p-2">{body.email}</td>
                                    <td className="p-2">{body.phone_number}</td>
                                    {action === "new" && (
                                        <td className="flex justify-center gap-3 p-2">
                                            <Button
                                                type="button"
                                                icon="/icon/reject.svg"
                                                onClick={() =>
                                                    handleReject(body.id)
                                                }
                                                iconOnly
                                            />
                                            <Button
                                                type="button"
                                                icon="/icon/accept.svg"
                                                onClick={() =>
                                                    handleAccept(body.id)
                                                }
                                                iconOnly
                                            />
                                        </td>
                                    )}
                                    {action === "accepted" && (
                                        <td className="flex justify-center p-2">
                                            <IconButton
                                                onClick={() =>
                                                    handleDeleteUser(body.id)
                                                }
                                                icon="/icon/delete.svg"
                                                color="Error"
                                                style="Filled"
                                            />
                                        </td>
                                    )}
                                </>
                            ) : (
                                <>
                                    {type === "Program" ||
                                    type === "Program Status" ||
                                    type === "Status Episode" ? (
                                        <>
                                            <td className="p-2">{body.code}</td>
                                            <td className="p-2">{body.name}</td>
                                            <td className="p-2">
                                                {useFormatDate(
                                                    body.premiere_at
                                                )}
                                            </td>
                                            {(type === "Status Episode" ||
                                                type === "Program Status") && (
                                                <>
                                                    <td className="p-2">
                                                        {body.episodes_count}
                                                    </td>
                                                    <td className="p-2">
                                                        {getStatusLabel(
                                                            body.status
                                                        )}
                                                    </td>
                                                </>
                                            )}
                                            {type === "Program" && (
                                                <td className="p-2">
                                                    {body.is_active
                                                        ? "Aktif"
                                                        : "Tidak Aktif"}
                                                </td>
                                            )}
                                        </>
                                    ) : type === "Message" ? (
                                        <>
                                            <td className="p-2">{body.from}</td>
                                            <td className="p-2 capitalize">
                                                {body.program_name}
                                            </td>
                                            <td className="p-2">
                                                {body.episode_id}
                                            </td>
                                            <td className="p-2">
                                                {body.role_name}
                                            </td>
                                            <td className="p-2">
                                                {body.message}
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            {/* Other types like User Permission, User */}
                                        </>
                                    )}
                                    {action && (
                                        <td className="flex justify-center p-2">
                                            {isRedirectPrefix ? (
                                                <>
                                                    <div className="flex gap-1">
                                                        {showDelete && (
                                                            <IconButton
                                                                onClick={() =>
                                                                    handleDeleteProgram(
                                                                        body.slug
                                                                    )
                                                                }
                                                                icon="/icon/delete.svg"
                                                                color="Error"
                                                                style="Filled"
                                                            />
                                                        )}
                                                        <Link
                                                            href={`/${normalizedRole}/${redirectUrl}/${body.slug}`}
                                                        >
                                                            <IconButton
                                                                color="Primary"
                                                                icon="/icon/more-fill.svg"
                                                                style="Filled"
                                                            />
                                                        </Link>
                                                    </div>
                                                </>
                                            ) : (
                                                <Link
                                                    href={`/${normalizedRole}/${body.slug}`}
                                                >
                                                    <IconButton
                                                        color="Primary"
                                                        icon="/icon/more-fill.svg"
                                                        style="Filled"
                                                    />
                                                </Link>
                                            )}
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
};

export default Table;
