import SearchField from "@/Components/Dashboard/SearchField";
import Table from "@/Components/Dashboard/Table";
import { ACTIVE_HEAD_OF_PROGRAM_HEADER } from "@/Constants/TableHeader";
import Layout from "@/Layout";
import { useMemo, useState } from "react";

interface Program {
    id: number;
    code: string;
    slug: string;
    name: string;
    description: string;
    is_active: boolean;
    premiere_at: string;
    created_at: string | null;
    updated_at: string | null;
    episodes_count: number;
}

interface PaginatedProgramData {
    current_page: number;
    data: Program[];
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

const ActiveProgram = ({ programs }: { programs: PaginatedProgramData }) => {
    const [searchInput, setSearchInput] = useState("");

    const handleSearch = (input: string) => {
        setSearchInput(input);
    };

    const filterPrograms = (programs: Program[], searchInput: string) => {
        return programs.filter(
            (program) =>
                program.name
                    .toLowerCase()
                    .includes(searchInput.toLowerCase()) ||
                program.code
                    .toLowerCase()
                    .includes(searchInput.toLowerCase()) ||
                program.description
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
        );
    };

    const filteredPrograms = useMemo(() => {
        if (programs && Array.isArray(programs.data)) {
            return filterPrograms(programs.data, searchInput);
        }
        return [];
    }, [programs, searchInput]);

    return (
        <Layout>
            <>
                <h1 className="heading-3 font-semibold">Proses</h1>
                <div className="flex items-center gap-6">
                    <SearchField onSearch={handleSearch} />
                    <p className="caption-1">
                        <span className="font-semibold">
                            {filteredPrograms.length}
                        </span>{" "}
                        Program
                    </p>
                </div>
                {filteredPrograms.length > 0 ? (
                    <Table
                        head={ACTIVE_HEAD_OF_PROGRAM_HEADER}
                        body={filteredPrograms}
                        action="draft"
                        pagination={true}
                        type="Program Status"
                        paginationData={programs}
                        pagination_link={programs.links}
                        showDelete={true}
                    />
                ) : (
                    <p className="body-1 font-semibold">
                        Tidak ada program aktif
                    </p>
                )}
            </>
        </Layout>
    );
};

export default ActiveProgram;
