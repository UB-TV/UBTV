import SearchField from "@/Components/Dashboard/SearchField"
import Table from "@/Components/Dashboard/Table"
import { TABLE_HEADER } from "@/Constants/TableHeader"
import { Users, Menus } from "@/Constants/Temp"
import Layout from "@/Layout"
import { useMemo, useState } from "react"

const UsersDashboard = () => {
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
    
      const filteredUsers = useMemo(
        () => filterUsers(Users, searchInput),
        [Users, searchInput]
      );
    
      const handleDelete = (userId: number) => {
        // Implement your delete logic here
        console.log('Deleting user:', userId);
      };

    return (
        <Layout menus={Menus}>
            <>
                <h1 className="heading-3 font-semibold">User</h1>
                <div className="flex items-center gap-6">
                    <SearchField onSearch={handleSearch} />
                    <p className="caption-1">
                        <span className="font-semibold">{Users.length}</span> User
                    </p>
                </div>
                {filterUsers.length > 0 ? (
                    <Table head={TABLE_HEADER} body={filteredUsers} action={false} pagination={true} />
                ) : (
                    <p className="body-1 font-semibol">Tidak ada user</p>
                )}
            </>
        </Layout>
    )
}

export default UsersDashboard
