// Component
import Table from '@/Components/Dashboard/Table'
import Hyperlink from '@/Components/Shared/Hyperlink'

type ProgramTableProps = {
    header: any
    program: any
}

const ProgramTable = ({
    header,
    program
}: ProgramTableProps) => {
    return (
        <section>
            <div className="flex items-end justify-between mb-3">
                <h2 className="heading-5 font-semibold">Program</h2>
                <Hyperlink url="/program" label="Selengkapnya" />
            </div>
            <Table head={header} body={program} action="/icon/more-fill.svg" pagination={false} type="Program Status" />
        </section>
    )
}

export default ProgramTable
