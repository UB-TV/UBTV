// Component
import Table from '@/Components/Dashboard/Table'
import Hyperlink from '@/Components/Shared/Hyperlink'

type NotUploadedTableProps = {
    header: any
    program: any
}

const NotUploadedTable = ({
    header,
    program
}: NotUploadedTableProps) => {
    return (
        <section>
            <div className="flex items-end justify-between mb-3">
                <h2 className="heading-5 font-semibold">Belum Upload</h2>
                <Hyperlink url="/not-uploaded" label="Selengkapnya" />
            </div>
            <Table head={header} body={program} action="/icon/more-fill.svg" pagination={false} type="Program" redirectUrl='not-uploaded' />
        </section>
    )
}

export default NotUploadedTable
