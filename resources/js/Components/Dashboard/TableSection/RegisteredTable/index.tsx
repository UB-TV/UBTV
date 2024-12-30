import Table from "@/Components/Dashboard/Table";
import Hyperlink from "@/Components/Shared/Hyperlink";
import { IVideoProgram } from "@/models/videprograminterfaces";
import { useGetUserRole } from "@/util/RoleData";

type RegisteredTableProps = {
    header: any;
    program: IVideoProgram[];
};

const RegisteredTable = ({ header, program }: RegisteredTableProps) => {
    const role = useGetUserRole();

    return (
        <section>
            <div className="flex items-end justify-between mb-3">
                <h2 className="heading-5 font-semibold">Terdaftar</h2>
                <Hyperlink
                    url={`/head-of-program/drafts`}
                    label="Selengkapnya"
                />
            </div>
            <Table
                head={header}
                body={program}
                action="/icon/more-fill.svg"
                pagination={false}
                type="Program"
                redirectUrl="drafts"
                isRedirectPrefix
            />
        </section>
    );
};

export default RegisteredTable;
