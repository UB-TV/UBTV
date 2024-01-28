import IconButton from "@/Components/Shared/IconButton.tsx"

type TableBodyProps = {
    code: string
    title: string
    premiere: string
}

type TableHeaderProps = {
    label: string;
    width: string
};

type TableProps = {
    head: TableHeaderProps[]
    body: TableBodyProps[]
    action?: string
}

const Table = ({
    head,
    body,
    action
}: TableProps) => {
    return (
        <table className="table-fixed w-full rounded-md border border-solid border-grey-200">
            <thead>
                <tr className="font-medium text-secondary-text text-left bg-grey-100 border-b border-grey-200 rounded-md">
                    {head.map((head, index) => {
                        return (
                            <th key={index} className={`p-2 w-[${head.width}] whitespace-nowrap`}>{head.label}</th>
                        )
                    })}
                    {action && (
                        <th className="text-center w-[10%]">Aksi</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {body.map((body, index) => {
                    return (
                        <tr key={index}>
                            <td className="p-2">{body.code}</td>
                            <td className="p-2">{body.title}</td>
                            <td className="p-2">{body.premiere}</td>
                            {action && (
                                <td className="flex justify-center p-2"><IconButton icon="/icon/more-fill.svg" /></td>
                            )}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table
