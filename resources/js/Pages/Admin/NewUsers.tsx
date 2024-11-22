import SearchField from "@/Components/Dashboard/SearchField"
import Table from "@/Components/Dashboard/Table"
import { ADMIN_HEADER } from "@/Constants/TableHeader"
import { AdminMenus, UsersData } from "@/Constants/Temp"
import Layout from "@/Layout"
import { useEffect, useMemo, useState } from "react"

interface User {
    id: number;
    email: string;
    name: string;
    phone_number: string;
    employee_id: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
  }
  
  interface PaginatedUsersData {
    current_page: number;
    data: User[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Array<{url: string | null, label: string, active: boolean}>;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  }

  const NewUsers = ({ users }: { users: PaginatedUsersData }) => {
    const [searchInput, setSearchInput] = useState('');


    const handleSearch = (input: string) => {
        setSearchInput(input);
    };

    useEffect(() => {
        console.log("Users data:", users);
    }, [users]);

    const filterUsers = (users: User[], searchInput: string, isActive: boolean | null) => {
        return users.filter(
            (user: User) =>
              user.is_active === isActive &&
              (user.name.toLowerCase().includes(searchInput.toLowerCase()) ||
                user.email.toLowerCase().includes(searchInput.toLowerCase()))
          );
    };

    const filteredNewUsers = useMemo(() => {
        if (users && Array.isArray(users.data)) {
          return filterUsers(users.data, searchInput, null);
        }
        return [];
      }, [users, searchInput]);



  return (
    <Layout>
            <>
                <h1 className="heading-3 font-semibold">User Baru</h1>
                <div className="flex items-center gap-6">
                    <SearchField onSearch={handleSearch} />
                    <p className="caption-1">
                    <span className="font-semibold">{filteredNewUsers.length}</span> User Baru
                    </p>
                </div>
                {filteredNewUsers.length > 0 ? (
                    <Table
                    head={ADMIN_HEADER}
                    body={filteredNewUsers}
                    action={"new"}
                    pagination={true}
                    type="Admin"
                    paginationData={users}
                    />
                ) : (
                    <p className="body-1 font-semibol">Tidak ada user baru</p>
                )}
            </>
        </Layout>
  )
}

export default NewUsers
