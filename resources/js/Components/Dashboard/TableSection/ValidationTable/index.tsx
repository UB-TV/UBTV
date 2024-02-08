// Component
import Table from '@/Components/Dashboard/Table'
import Hyperlink from '@/Components/Shared/Hyperlink'

type ValidationTableProps = {
    header: any
    program: any
}

const ValidationTable = ({
    header,
    program
}: ValidationTableProps) => {
    return (
        <section>
            <div className="flex items-end justify-between mb-3">
                <h2 className="heading-5 font-semibold">Perlu Validasi</h2>
                <Hyperlink url="/validation" label="Selengkapnya" />
            </div>
            <Table head={header} body={program} action="/icon/more-fill.svg" pagination={false} type="Program" />
        </section>
    )
}

export default ValidationTable
