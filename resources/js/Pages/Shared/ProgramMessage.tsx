import { useMemo, useState } from "react";
// Data
import { EDITOR_MESSAGE_HEADER } from "@/Constants/TableHeader";
import { MessageData } from "@/Constants/Temp"
// Component
import SearchField from "@/Components/Dashboard/SearchField"
import Table from "@/Components/Dashboard/Table";
import Layout from "@/Layout"
import { getLayoutMenu } from "@/util/RoleData";

const ProgramMessage = () => {
    const [searchInput, setSearchInput] = useState('');


    const handleSearch = (input: string) => {
        setSearchInput(input);
    };

    const filterMessage = (messages: any, searchInput: string) => {
        const filteredMessage = messages.filter((message: any) =>
            message.programTitle.toLowerCase().includes(searchInput.toLowerCase())
        );
        return filteredMessage;
    };

    const displayedMessage = useMemo(
        () => filterMessage(MessageData, searchInput),
        [MessageData, searchInput]
    );

    return (
        <Layout>
            <>
                <h1 className="heading-3 font-semibold">Pesan Masuk </h1>
                <div className="flex items-center gap-6">
                    <SearchField onSearch={handleSearch} />
                    <p className="caption-1">
                        <span className="font-semibold">{MessageData.length}</span> Program
                    </p>
                </div>
                {displayedMessage.length > 0 ? (
                    <Table head={EDITOR_MESSAGE_HEADER} body={displayedMessage} pagination={true} type="Message" />
                ) : (
                    <p className="body-1 font-semibol">Tidak ada pesan yang ditemukan</p>
                )}
            </>
        </Layout>
    )
}

export default ProgramMessage
