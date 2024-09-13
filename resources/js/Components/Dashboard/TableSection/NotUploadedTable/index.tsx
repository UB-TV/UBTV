// Component
import Table from '@/Components/Dashboard/Table'
import Hyperlink from '@/Components/Shared/Hyperlink'
import { IVideoProgram } from '@/models/videprograminterfaces'
import { useGetUserRole } from '@/util/RoleData'

type NotUploadedTableProps = {
    header: any
    program: IVideoProgram[]
}

const NotUploadedTable = ({
    header,
    program
}: NotUploadedTableProps) => {

    const role = useGetUserRole();

    return (
        <section>
            <div className="flex items-end justify-between mb-3">
                <h2 className="heading-5 font-semibold">Belum Upload</h2>
                <Hyperlink url={`/${role}/pending`} label="Selengkapnya" />
            </div>
            <Table
                head={header}
                body={program}
                action="/icon/more-fill.svg"
                pagination={false}
                type="Program" redirectUrl='not-uploaded'
            />
        </section>
    )
}

export default NotUploadedTable
