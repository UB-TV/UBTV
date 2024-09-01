import SearchField from "@/Components/Dashboard/SearchField"
import Table from "@/Components/Dashboard/Table"
import { TABLE_HEADER } from "@/Constants/TableHeader"
import { Menus, NewUsers } from "@/Constants/Temp"
import Layout from "@/Layout"
import { useMemo, useState } from "react"

const NewUsersDashboard = () => {
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = (input: string) => {
        setSearchInput(input);
    };

    const filterUsers = (users: any, searchInput: string) => {
        const filteredUsers = users.filter((user: any) =>
          user.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          user.email.toLowerCase().includes(searchInput.toLowerCase())
        );
        return filteredUsers;
      };

      const filteredNewUsers = useMemo(
        () => filterUsers(NewUsers, searchInput),
        [NewUsers, searchInput]
      );

    return (
        <Layout menus={Menus}>
            <>
                <h1 className="heading-3 font-semibold">User Baru</h1>
                <div className="flex items-center gap-6">
                    <SearchField onSearch={handleSearch} />
                    <p className="caption-1">
                        <span className="font-semibold">{NewUsers.length}</span> User Baru
                    </p>
                </div>
                {filteredNewUsers.length > 0 ? (
                    <Table head={TABLE_HEADER} body={filteredNewUsers} action={true} pagination={true} />
                ) : (
                    <p className="body-1 font-semibol">Tidak ada user baru</p>
                )}
            </>
        </Layout>
    )
}

export default NewUsersDashboard
