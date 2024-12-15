import Table from '@/Components/Dashboard/Table'
import Hyperlink from '@/Components/Shared/Hyperlink'
import { IVideoProgram } from '@/models/videprograminterfaces'
import { useGetUserRole } from '@/util/RoleData'

type EditedProgramTableProps = {
    header: any
    program: IVideoProgram[]
}

const EditedProgramTable = ({
    header,
    program
}: EditedProgramTableProps) => {
    const role = useGetUserRole();

    return (
        <section>
            <div className="flex items-end justify-between mb-3">
                <h2 className="heading-5 font-semibold">Sudah Diedit</h2>
                <Hyperlink url={`/${role}/uploaded`} label="Selengkapnya" />
            </div>
            <Table
                head={header}
                body={program}
                action="/icon/more-fill.svg"
                pagination={false}
                type="Program"
                redirectUrl='edited'
            />
        </section>
    )
}

export default EditedProgramTable
