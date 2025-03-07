import { IVideo, IVideoWithStatus } from "@/models/episodeinterfaces";
import { useMemo, useState } from "react";

import Button from "../Button";
import { SEGMENT_HEADER } from "@/Constants/TableHeader";
import Select from "@/Components/Form/Select";
import axios from "axios";
import { router } from "@inertiajs/react";
import useUpdateVideoStatus from "@/repositories/shared/useUpdateVideoStatus";

interface ISegmentTable {
    data: IVideoWithStatus[];
    control: any;
}

const SegmentTable = ({ data, control }: ISegmentTable) => {
    const {
        updateVideoStatus,
        isLoading,
        error: globalError,
    } = useUpdateVideoStatus();
    const [updateErrors, setUpdateErrors] = useState<Record<string, string>>(
        {}
    );
    const [downloadingFiles, setDownloadingFiles] = useState<
        Record<string, boolean>
    >({});

    const groupedData = useMemo(() => {
        const grouped: Record<string, IVideoWithStatus[]> = {};

        data.forEach((video) => {
            if (!grouped[video.episode_id]) {
                grouped[video.episode_id] = [];
            }
            grouped[video.episode_id].push(video);
        });

        return grouped;
    }, [data]);

    const episodeData = useMemo(() => {
        return Object.keys(groupedData).map((episodeId) => {
            const segments = groupedData[episodeId];
            const firstSegment = segments[0];

            return {
                episodeId,
                status: firstSegment.episodeStatus,
                segments,
                thumbnail: "/image/program-thumbnail.jpg",
            };
        });
    }, [groupedData]);

    const statusOptions = [
        { optionLabel: "Producer Validation", value: "PRODUCER_VALIDATION" },
        { optionLabel: "MCR Validation", value: "MCR_VALIDATION" },
        { optionLabel: "Shooting", value: "SHOOTING" },
        { optionLabel: "Editing", value: "EDITING" },
        { optionLabel: "On Air", value: "ON_AIR" },
    ];

    const handleStatusChange = async (episodeId: string, newStatus: string) => {
        try {
            const firstVideoId = groupedData[episodeId][0].id;

            const response = await updateVideoStatus({
                video_id: firstVideoId,
                episode_id: episodeId,
                status: newStatus,
            });

            if (response) {
                router.reload();
                return;
            }

            setUpdateErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[episodeId];
                return newErrors;
            });
        } catch (err) {
            setUpdateErrors((prev) => ({
                ...prev,
                [episodeId]: "An error occurred while updating status",
            }));
        }
    };

    const handleDownload = async (videoId: string, downloadUrl: string) => {
        setDownloadingFiles((prev) => ({ ...prev, [videoId]: true }));

        try {
            const response = await axios({
                url: downloadUrl,
                method: "GET",
                responseType: "blob",
            });

            const blob = new Blob([response.data], {
                type: response.headers["content-type"],
            });
            const url = window.URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = `video-segment-${videoId}.mp4`;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            setUpdateErrors((prev) => ({
                ...prev,
                [videoId]: "Failed to download file",
            }));
        } finally {
            setDownloadingFiles((prev) => ({ ...prev, [videoId]: false }));
        }
    };

    return (
        <div>
            <table className="table-fixed w-full rounded-md border border-solid border-grey-200">
                <thead>
                    <tr className="font-medium text-secondary-text text-left bg-grey-100 border-b border-grey-200 rounded-md">
                        <th className="p-2 text-left whitespace-nowrap">
                            Episode ID
                        </th>
                        <th className="p-2 text-left whitespace-nowrap">
                            Status
                        </th>
                        <th className="p-2 text-left whitespace-nowrap">
                            Segments
                        </th>
                        <th className="p-2 text-left whitespace-nowrap">
                            Thumbnail
                        </th>
                        <th className="p-2 text-left whitespace-nowrap">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {episodeData.map((episode, idx) => (
                        <tr key={idx * 101} className="border-b">
                            <td className="p-2">{episode.episodeId}</td>
                            <td className="p-2">
                                <div className="flex flex-col gap-1">
                                    <Select
                                        id={`status-${episode.episodeId}`}
                                        placeholder="Select Status"
                                        options={statusOptions}
                                        control={control}
                                        value={episode.status}
                                        onChange={(value) =>
                                            handleStatusChange(
                                                episode.episodeId,
                                                value
                                            )
                                        }
                                        disabled={isLoading}
                                    />
                                    {updateErrors[episode.episodeId] && (
                                        <span className="text-red-500 text-sm">
                                            {updateErrors[episode.episodeId]}
                                        </span>
                                    )}
                                </div>
                            </td>
                            <td className="p-2">
                                <div>
                                    {episode.segments.map((segment, i) => (
                                        <div
                                            key={i}
                                            className="inline-block mr-2 mb-1 px-2 py-1 bg-gray-100 rounded-md text-sm"
                                        >
                                            Segment {segment.segment_number}
                                        </div>
                                    ))}
                                </div>
                            </td>
                            <td className="p-2">
                                <div className="p-2 rounded-md shadow-lg w-fit">
                                    <img
                                        src={episode.thumbnail}
                                        alt="episode thumbnail"
                                        className="w-[150px] h-[100px] rounded-md"
                                    />
                                </div>
                            </td>
                            <td className="p-2">
                                <div className="mt-2 grid grid-cols-2 gap-2">
                                    {episode.segments.map((segment, i) => (
                                        <Button
                                            key={i}
                                            type="button"
                                            label={`Segment ${segment.segment_number}`}
                                            style="Outlined"
                                            color="Primary"
                                            width="Fit"
                                            size="Small"
                                            onClick={() =>
                                                handleDownload(
                                                    segment.id,
                                                    segment.url ?? ""
                                                )
                                            }
                                        />
                                    ))}
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
