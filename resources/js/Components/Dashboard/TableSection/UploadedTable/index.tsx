// Component
import Hyperlink from '@/Components/Shared/Hyperlink'
import Table from '@/Components/Dashboard/Table'

type UploadedTableProps = {
    header: any
    program: any
}

const UploadedTable = ({
    header,
    program
}: UploadedTableProps) => {
    return (
        <section>
            <div className="flex items-end justify-between mb-3">
                <h2 className="heading-5 font-semibold">Sudah Upload</h2>
                <Hyperlink url="/uploaded" label="Selengkapnya" />
            </div>
            <Table head={header} body={program} action="/icon/more-fill.svg" pagination={false} type='Program' redirectUrl='uploaded' />
        </section>
    )
}

export default UploadedTable
