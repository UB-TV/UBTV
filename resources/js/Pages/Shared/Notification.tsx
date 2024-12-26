import { useMemo, useState } from "react";
// Data
import { EDITOR_MESSAGE_HEADER } from "@/Constants/TableHeader";
// Component
import SearchField from "@/Components/Dashboard/SearchField"
import Table from "@/Components/Dashboard/Table";
import Layout from "@/Layout"
import { IGeneralPaginationTable } from "@/models/generalinterfaces";
import { INotification } from "@/models/notificationinterfaces";

const Notification = ({
    data,
    links
}: IGeneralPaginationTable<INotification[]>) => {
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = (input: string) => {
        setSearchInput(input);
    };

    const filterNotification = (messages: INotification[], searchInput: string) => {
        if (!searchInput.trim()) return messages;

        const searchTerm = searchInput.toLowerCase();

        return messages.filter((message: INotification) => {
            return (
                message.message?.toLowerCase().includes(searchTerm) ||
                message.from?.toLowerCase().includes(searchTerm) ||
                message.episode_id?.toString().toLowerCase().includes(searchTerm)
            );
        });
    };

    const dispalyedNotification = useMemo(
        () => filterNotification(data, searchInput),
        [searchInput]
    );

    return (
        <Layout>
            <>
                <h1 className="heading-3 font-semibold">Pesan Masuk </h1>
                <div className="flex items-center gap-6">
                    <SearchField onSearch={handleSearch} />
                    <p className="caption-1">
                        <span className="font-semibold">{data.length}</span> Program
                    </p>
                </div>
                {dispalyedNotification.length > 0 ? (
                    <Table
                        head={EDITOR_MESSAGE_HEADER}
                        body={dispalyedNotification}
                        pagination={true}
                        pagination_link={links}
                        type="Message"
                    />
                ) : (
                    <p className="body-1 font-semibol">Tidak ada pesan yang ditemukan</p>
                )}
            </>
        </Layout>
    )
}

export default Notification
