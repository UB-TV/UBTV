import { useState } from 'react';
import { useForm } from 'react-hook-form';
// Models
import { IEpisode } from '@/models/episodeinterfaces';
// Component
import Button from '@/Components/Shared/Button';
import FileUpload from '@/Components/Form/FileUpload';
import useUploadSegment from '@/repositories/Editor/useUploadSegment';

type UploadSegmentFormProps = {
    episode: IEpisode[]
};

type FormValues = {
    episode: number;
    segment: number;
    files: FileList;
};

const UploadSegmentForm = ({ episode }: UploadSegmentFormProps) => {
    const [selectedEpisode, setSelectedEpisode] = useState<number>(episode[0].id);
    const [selectedSegment, setSelectedSegment] = useState<number>(1);
    const { register, handleSubmit, setValue } = useForm<FormValues>({
        defaultValues: {
            episode: 1,
            segment: 1,
            files: undefined,
        },
    });

    const {
        uploadSegment,
        isLoading,
        error,
    } = useUploadSegment();

    const onSubmit = async (data: FormValues) => {
        if (data.files && data.files.length > 0) {

            const result = await uploadSegment({
                episode_id: data.episode,
                segment_number: data.segment,
                attachment: data.files[0],
            });

            if (result && result.success) {
                console.log('Video uploaded successfully:', result.message);
            } else {
                console.error('Upload failed:', result?.message || 'Unknown error');
            }
        }
    };

    const handleEpisodeClick = (episodeId: number) => {
        setSelectedEpisode(episodeId);
        setValue('episode', episodeId);
    };

    const handleSegmentClick = (segment: number) => {
        setSelectedSegment(segment);
        setValue('segment', segment);
    };

    const renderEpisodeDivs = () => {
        return episode.map((ep, i) => {
            const isSelected = ep.id === selectedEpisode;
            const borderClass = isSelected ? 'border-success-500' : 'border-primary-500';

            return (
                <label
                    key={ep.id}
                    className={`body-2 font-bold min-w-[46px] min-h-[46px] flex justify-center items-center p-3 border-2 border-solid rounded-md shadow-1 cursor-pointer ${borderClass}`}
                >
                    <input
                        type="radio"
                        {...register('episode')}
                        value={ep.id}
                        checked={isSelected}
                        onChange={() => handleEpisodeClick(ep.id)}
                        style={{ display: 'none' }}
                    />
                    {i + 1}
                </label>
            );
        });
    };

    const renderSegmentDivs = () => {
        const selectedEpisodeData = episode.find((ep) => ep.id === selectedEpisode);
        if (!selectedEpisodeData) return null;

        const segmentCount = selectedEpisodeData.segment_count ?? 0;
        const radioButtons = [];

        for (let i = 1; i <= segmentCount; i++) {
            const isSelected = i === selectedSegment;
            const borderClass = isSelected ? 'border-success-500' : 'border-primary-500';

            radioButtons.push(
                <label
                    key={i}
                    className={`body-2 font-bold min-w-[46px] min-h-[46px] flex justify-center items-center p-3 border-2 border-solid rounded-md shadow-1 cursor-pointer ${borderClass}`}
                >
                    <input
                        type="radio"
                        {...register('segment')}
                        value={i}
                        checked={isSelected}
                        onChange={() => handleSegmentClick(i)}
                        style={{ display: 'none' }}
                    />
                    {i}
                </label>
            );
        }

        return radioButtons;
    };

    return (
        <>
            <div className='flex items-start justify-between'>
                <div className='w-[45%]'>
                    <h2 className="heading-6 font-semibold mb-2">Episode</h2>
                    <div className="flex items-center gap-6 flex-wrap">{renderEpisodeDivs()}</div>
                </div>
                <div className='w-[45%]'>
                    <h2 className="heading-6 font-semibold mb-2">Segmen</h2>
                    <div className="flex items-center gap-6 flex-wrap">{renderSegmentDivs()}</div>
                </div>
            </div>
            <form
                className="flex flex-col gap-12"
                onSubmit={handleSubmit(onSubmit)}
                encType="multipart/form-data"
            >
                <FileUpload register={register} setValue={setValue} maxFiles={1} />
                <Button type="submit" label="Upload" style="Filled" color="Primary" width="Full" size="Large" />
            </form>
        </>
    );
};

export default UploadSegmentForm;
