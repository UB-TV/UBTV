import Table from "@/Components/Dashboard/Table";
import Hyperlink from "@/Components/Shared/Hyperlink";
import { IVideoProgram } from "@/models/videprograminterfaces";
import { useGetUserRole } from "@/util/RoleData";

type ActiveTableProps = {
    header: any;
    program: IVideoProgram[];
};

const ActiveTable = ({ header, program }: ActiveTableProps) => {
    const role = useGetUserRole();

    return (
        <section>
            <div className="flex items-end justify-between mb-3">
                <h2 className="heading-5 font-semibold">Proses</h2>
                <Hyperlink
                    url={`/head-of-program/actives`}
                    label="Selengkapnya"
                />
            </div>
            <Table
                head={header}
                body={program}
                action="/icon/more-fill.svg"
                pagination={false}
                type="Program Status"
                redirectUrl="actives"
            />
        </section>
    );
};

export default ActiveTable;
