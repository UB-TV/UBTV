type SegmentCardProps = {
    segmentNumber: number
    thumbnailUrl: string
}

const SegmentCard = ({
    segmentNumber,
    thumbnailUrl
}: SegmentCardProps) => {
    return (
        <div className='max-w-[172px] h-fit flex flex-col gap-3 p-3 shadow-1 rounded-md'>
            <img src={thumbnailUrl} alt={`segment ${segmentNumber}`} className="w-[148px] h-[111px] rounded-md" />
            <div className="flex items-center justify-between">
                <p className="body-2 font-semibold">Segmen {segmentNumber}</p>
                <span>
                    <img src="/icon/download-filled.svg" alt="Donwload Outlined" />
                </span>
            </div>
        </div>
    )
}

export default SegmentCard
