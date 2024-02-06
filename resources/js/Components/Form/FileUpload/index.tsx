import Button from '@/Components/Shared/Button';
import { useCallback, useState } from 'react';
import { useDropzone, FileRejection, DropEvent } from 'react-dropzone';

type FileUploadProps = {
    register: any;
    setValue: any;
    maxFiles?: number;
};

type PreviewInfo = {
    url: string;
    name: string;
    maxFiles?: number;
};

const FileUpload = ({
    register,
    setValue,
    maxFiles = 5
}: FileUploadProps) => {
    const [previews, setPreviews] = useState<PreviewInfo[]>([]);
    const [rejected, setRejected] = useState<FileRejection[]>([]);

    const onDrop = useCallback(
        (acceptedFiles: File[], fileRejections: FileRejection[], event: DropEvent) => {
            const newPreviews: PreviewInfo[] = [];

            acceptedFiles.forEach((file) => {
                const reader = new FileReader();

                reader.onload = () => {
                    newPreviews.push({ url: reader.result as string, name: file.name });
                    setPreviews([...previews, ...newPreviews]);
                    setValue('files', acceptedFiles);
                };

                reader.readAsDataURL(file);
            });

            if (fileRejections?.length) {
                setRejected((previousFiles) => [...previousFiles, ...fileRejections]);
            }
        },
        [previews, setValue, register]
    );

    const {
        getRootProps,
        getInputProps,
        isDragActive,
    } = useDropzone({
        onDrop,
        accept: {
            'video/*': [],
        },
        maxFiles: maxFiles,
        multiple: true,
    });

    return (
        <div>
            <div className="w-full min-h-[216px] h-fit p-3 mb-2 rounded-md border border-solid border-grey-300">
                <div
                    {...getRootProps()}
                    className={`${isDragActive ? 'bg-info-200' : ''} w-full min-h-[inherit] border border-dashed border-grey-300 rounded-sm flex justify-center items-center p-6 ease-in-out duration-300`}
                >
                    <input {...getInputProps()} {...register('files')} />
                    {isDragActive ? (
                        <p className="body-2 text-secondary-text">Lepas file disini...</p>
                    ) : (
                        <div className="flex flex-col gap-3 justify-center items-center">
                            <img src="/icon/upload.svg" alt="Upload File" className="w-12 h-12" />
                            <Button
                                type="button"
                                label="Jelajah"
                                style="Filled"
                                color="Primary"
                                width="Fit"
                                size="Large"
                            />
                            <p className="body-2 text-secondary-text">
                                Atau tarik dan lepas file di sini untuk menambahkannya.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {previews.map((preview, index) => (
                                    <div key={index}>
                                        <video key={index} controls className="max-w-48 max-h-48">
                                            <source src={preview.url} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                        <p className="caption-1 text-secondary-text text-center mt-2">
                                            {preview.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {rejected.length > 0 && (
                <div className="text-error-500 p-3 bg-error-100 rounded-md">
                    {rejected.map((fileRejection) => (
                        <p key={fileRejection.file.name} className="body-2">
                            {fileRejection.file.name} -{' '}
                            {fileRejection.errors.length > 0
                                ? fileRejection.errors[0].message
                                : 'Unknown error'}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FileUpload;
