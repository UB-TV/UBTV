import { useState } from 'react';
import { useForm } from 'react-hook-form';
// Component
import FileUpload from '@/Components/Form/FileUpload';
import Button from '@/Components/Shared/Button';

type UploadSegmentFormProps = {
    episode: {
        episodeNumber: number;
        segmen: {
            segmentNumber: number;
            preview: string;
        }[];
    }[];
};

type FormValues = {
    episode: number;
    segment: number;
    files: FileList;
};

const UploadSegmentForm = ({ episode }: UploadSegmentFormProps) => {
    const [selectedEpisode, setSelectedEpisode] = useState(1);
    const [selectedSegment, setSelectedSegment] = useState(1);
    const { register, handleSubmit, setValue } = useForm<FormValues>({
        defaultValues: {
            episode: 1,
            segment: 1,
            files: undefined,
        },
    });

    const onSubmit = (data: FormValues) => {
        console.log('Form submitted:', data);
        // Add upload logic here
    };

    const handleEpisodeClick = (episode: any) => {
        setSelectedEpisode(episode === selectedEpisode ? null : episode);
        setValue('episode', episode);
    };

    const handleSegmentClick = (segment: any) => {
        setSelectedSegment(segment === selectedSegment ? null : segment);
        setValue('segment', segment);
    };

    const renderEpisodeDivs = () => {
        const radioButtons = [];

        for (let i = 1; i <= episode.length; i++) {
            const isSelected = i === selectedEpisode;
            const borderClass = isSelected ? 'border-success-500' : 'border-primary-500';

            radioButtons.push(
                <label
                    key={i}
                    className={`body-2 font-bold min-w-[46px] min-h-[46px] flex justify-center items-center p-3 border-2 border-solid rounded-md shadow-1 cursor-pointer ${borderClass}`}
                >
                    <input
                        type="radio"
                        {...register('episode')}
                        value={i}
                        checked={isSelected}
                        onChange={() => handleEpisodeClick(i)}
                        style={{ display: 'none' }}
                    />
                    {i}
                </label>
            );
        }

        return radioButtons;
    };

    const renderSegmentDivs = () => {
        const selectedEpisodeData = episode.find((ep) => ep.episodeNumber === selectedEpisode);
        if (!selectedEpisodeData) return null;

        const radioButtons = [];

        for (let i = 1; i <= selectedEpisodeData.segmen.length; i++) {
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
