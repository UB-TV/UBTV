import { SEGMENT_HEADER } from "@/Constants/TableHeader"
import { IVideo, IVideoWithStatus } from "@/models/episodeinterfaces"
import Button from "../Button";
import Select from "@/Components/Form/Select";
import useUpdateVideoStatus from "@/repositories/shared/useUpdateVideoStatus";
import { useState } from "react";
import axios from "axios";

interface ISegmentTable {
    data: IVideoWithStatus[];
    control: any;
}
const SegmentTable = ({
    data,
    control
}: ISegmentTable) => {
    const { updateVideoStatus, isLoading, error: globalError } = useUpdateVideoStatus();
    const [updateErrors, setUpdateErrors] = useState<Record<string, string>>({});
    const [downloadingFiles, setDownloadingFiles] = useState<Record<string, boolean>>({});

    const statusOptions = [
        { optionLabel: "Producer Validation", value: "PRODUCER_VALIDATION" },
        { optionLabel: "MCR Validation", value: "MCR_VALIDATION" },
        { optionLabel: "Shooting", value: "SHOOTING" },
        { optionLabel: "Editing", value: "EDITING" },
        { optionLabel: "On Air", value: "ON_AIR" },
    ];

    const handleStatusChange = async (videoId: string, episodeId: string, newStatus: string) => {
        try {
            const response = await updateVideoStatus({
                video_id: videoId,
                episode_id: episodeId,
                status: newStatus
            });

            if (response) {
                console.log('res', response)
                return;
            }

            setUpdateErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[videoId];
                return newErrors;
            });

        } catch (err) {
            setUpdateErrors(prev => ({
                ...prev,
                [videoId]: 'An error occurred while updating status'
            }));
        }
    };

    const handleDownload = async (videoId: string, downloadUrl: string) => {
        setDownloadingFiles(prev => ({ ...prev, [videoId]: true }));

        try {

            const response = await axios({
                url: downloadUrl,
                method: 'GET',
                responseType: 'blob',
            });

            const blob = new Blob([response.data], { type: response.headers['content-type'] });
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement('a');
            link.href = url;
            link.download = `video-segment-${videoId}.mp4`;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);

        } catch (error) {
            setUpdateErrors(prev => ({
                ...prev,
                [videoId]: 'Failed to download file'
            }));
        } finally {
            setDownloadingFiles(prev => ({ ...prev, [videoId]: false }));
        }
    };


    return (
        <div>
            <table className="table-fixed w-full rounded-md border border-solid border-grey-200">
                <thead>
                    <tr className="font-medium text-secondary-text text-left bg-grey-100 border-b border-grey-200 rounded-md">
                        {SEGMENT_HEADER.map((dx, idx) => (
                            <th key={idx * 101} className={`p-2 w-[${dx.width}] text-center whitespace-nowrap`}>
                                {dx.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((dx, idx) => (
                        <tr key={idx * 101}>
                            <td className="p-2 text-center">{dx.episode_id}</td>
                            <td className="p-2 text-center">
                                <div className="flex flex-col gap-1">
                                    <Select
                                        id={`status-${dx.id}`}
                                        placeholder="Select Status"
                                        options={statusOptions}
                                        control={control}
                                        value={dx.episodeStatus}
                                        onChange={(value) => handleStatusChange(dx.id, dx.episode_id, value)}
                                        disabled={isLoading}
                                    />
                                    {updateErrors[dx.id] && (
                                        <span className="text-red-500 text-sm">
                                            {updateErrors[dx.id]}
                                        </span>
                                    )}
                                </div>
                            </td>
                            <td className="p-2 text-center">{dx.segment_number}</td>
                            <td className="p-2">
                                <img
                                    src='/image/program-thumbnail.jpg'
                                    alt='segment thumbnail'
                                    className="w-[170px] h-[120px] rounded-md"
                                />
                            </td>
                            <td className="p-2 text-center">
                                <div className="w-full h-full flex items-center justify-center">
                                <Button
                                        type="button"
                                        label= "Unduh"
                                        style="Filled"
                                        color="Primary"
                                        width="Fit"
                                        size="Small"
                                        onClick={() => handleDownload(dx.id, dx.url ?? '')}
                                    />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {globalError && (
                <div className="mt-4 p-2 bg-red-100 text-red-700 rounded">
                    {globalError}
                </div>
            )}
        </div>
    );
};

export default SegmentTable;
