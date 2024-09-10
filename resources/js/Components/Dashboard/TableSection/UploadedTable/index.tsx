// Component
import Hyperlink from '@/Components/Shared/Hyperlink'
import Table from '@/Components/Dashboard/Table'
import { useGetUserRole } from '@/util/RoleData'
import { IVideoProgram } from '@/models/videprograminterfaces'

type UploadedTableProps = {
    header: any
    program: IVideoProgram[]
}

const UploadedTable = ({
    header,
    program
}: UploadedTableProps) => {

    const role = useGetUserRole();

    return (
        <section>
            <div className="flex items-end justify-between mb-3">
                <h2 className="heading-5 font-semibold">Sudah Upload</h2>
                <Hyperlink
                    url={`/${role}/uploaded`}
                    label="Selengkapnya"
                />
            </div>
            <Table
                head={header}
                body={program}
                action="/icon/more-fill.svg"
                pagination={false}
                type='Program'
                redirectUrl='uploaded'
            />
        </section>
    )
}

export default UploadedTable
