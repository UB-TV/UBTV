import SearchField from "@/Components/Dashboard/SearchField"
import Table from "@/Components/Dashboard/Table"
import { ADMIN_HEADER } from "@/Constants/TableHeader"
import { AdminMenus, UsersData } from "@/Constants/Temp"
import Layout from "@/Layout"
import { useMemo, useState } from "react"

const Users = () => {
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = (input: string) => {
        setSearchInput(input);
    };

    const filterUsers = (users: any, searchInput: string) => {
        return users.filter((user: any) =>
            user.status === 'accepted' &&
            (user.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            user.email.toLowerCase().includes(searchInput.toLowerCase()))
        );
    };

      const filteredUsers = useMemo(
        () => filterUsers(UsersData, searchInput),
        [UsersData, searchInput]
      );

  return (
    <Layout>
        <>
            <h1 className="heading-3 font-semibold">User</h1>
            <div className="flex items-center gap-6">
                <SearchField onSearch={handleSearch} />
                <p className="caption-1">
                    <span className="font-semibold">{filteredUsers.length}</span> User
                </p>
            </div>
            {filteredUsers.length > 0 ? (
                    <Table
                    head={ADMIN_HEADER}
                    body={filteredUsers}
                    action={"accepted"}
                    pagination={true}
                    type="Admin"
                    />
                ) : (
                    <p className="body-1 font-semibol">Tidak ada user baru</p>
                )}
        </>
    </Layout>
  )
}

export default Users
