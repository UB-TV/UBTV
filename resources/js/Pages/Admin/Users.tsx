import SearchField from "@/Components/Dashboard/SearchField";
import Table from "@/Components/Dashboard/Table";
import { ADMIN_HEADER } from "@/Constants/TableHeader";
import Layout from "@/Layout";
import { useMemo, useState } from "react";

interface User {
    id: number;
    email: string;
    name: string;
    phone_number: string;
    employee_id: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    role?: string;
}

interface PaginatedUsersData {
    current_page: number;
    data: User[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Array<{ url: string | null; label: string; active: boolean }>;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}

const Users = ({ users }: { users: PaginatedUsersData }) => {
    const [searchInput, setSearchInput] = useState("");

    const handleSearch = (input: string) => {
        setSearchInput(input);
    };

    const filterUsers = (
        users: User[],
        searchInput: string,
        isActive: boolean
    ) => {
        return users.filter(
            (user: User) =>
                user.is_active === isActive &&
                (user.name.toLowerCase().includes(searchInput.toLowerCase()) ||
                    user.email
                        .toLowerCase()
                        .includes(searchInput.toLowerCase()))
        );
    };

    const filteredUsers = useMemo(() => {
        if (users && Array.isArray(users.data)) {
            return filterUsers(users.data, searchInput, true);
        }
        return [];
    }, [users, searchInput]);

    return (
        <Layout>
            <>
                <h1 className="heading-3 font-semibold">User</h1>
                <div className="flex items-center gap-6">
                    <SearchField onSearch={handleSearch} />
                    <p className="caption-1">
                        <span className="font-semibold">
                            {filteredUsers.length}
                        </span>{" "}
                        User
                    </p>
                </div>
                {filteredUsers.length > 0 ? (
                    <Table
                        head={ADMIN_HEADER}
                        body={filteredUsers}
                        action="accepted"
                        pagination={true}
                        type="Admin"
                        paginationData={users}
                        pagination_link={users.links}
                    />
                ) : (
                    <p className="body-1 font-semibold">Tidak ada user baru</p>
                )}
            </>
        </Layout>
    );
};

export default Users;
