import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FileUpload from '@/Components/Form/FileUpload';
import Button from '@/Components/Shared/Button';
import useUploadEpisodeVideo from '@/repositories/Cameraman/useUploadVideo';

type UploadVideoFormProps = {
  episodeNumber: number;
};

type FormValues = {
  episode: number;
  files: FileList;
};

const UploadVideoForm: React.FC<UploadVideoFormProps> = ({ episodeNumber }) => {
  const [selectedEpisode, setSelectedEpisode] = useState<number | null>(1);
  const { register, handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: {
      episode: 1,
      files: undefined,
    },
  });

  const { uploadVideo, isLoading, error } = useUploadEpisodeVideo();

  const onSubmit = async (data: FormValues) => {
    if (data.files && data.files.length > 0) {
        console.log(data.files[0])
      const result = await uploadVideo({
        episode_id: data.episode,
        attachment: data.files[0],
      });

      if (result && result.success) {
        console.log('Video uploaded successfully:', result.file_id);
      }
    }
  };

  const handleEpisodeClick = (episode: number) => {
    setSelectedEpisode(episode === selectedEpisode ? null : episode);
    setValue('episode', episode);
  };

  const renderEpisodeDivs = () => {
    const radioButtons = [];
    for (let i = 1; i <= episodeNumber; i++) {
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

  return (
    <>
      <div>
        <h2 className="heading-6 font-semibold mb-2">Episode</h2>
        <div className="flex items-center gap-6 flex-wrap">{renderEpisodeDivs()}</div>
      </div>
      <form
        className="flex flex-col gap-12"
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
      >
        <FileUpload register={register} setValue={setValue} />
        {error && <p className="text-error-500">{error}</p>}
        <Button
          type="submit"
          label={isLoading ? "Uploading..." : "Upload"}
          style="Filled"
          color="Primary"
          width="Full"
          size="Large"
        />
      </form>
    </>
  );
};

export default UploadVideoForm;
