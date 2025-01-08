import { useRef } from 'react';
// Component
import Layout from "@/Layout";
import IconButton from '@/Components/Shared/IconButton.tsx';
import { IEpisode, IVideoWithStatus } from '@/models/episodeinterfaces';
import EpisodeCard from '@/Components/Shared/EpisodeCard';
import { useForm } from 'react-hook-form';
import SegmentTable from '@/Components/Shared/SegmentTable';
import Button from '@/Components/Shared/Button';
import Dialog from '@/Components/Shared/Dialog';
import NewEpisodeForm from '@/Components/Producer/NewEpisodeForm';
import useFormatDate from '@/util/useFormatDate';

interface IProgramDetail {
    id: number;
    code: string;
    slug: string;
    name: string;
    description: string;
    is_active: boolean;
    premiere_at: string;
    created_at: string;
    updated_at: string;
    episodes: IEpisode[]
}

const ProgramDetail = ({
    id,
    code,
    slug,
    name,
    description,
    is_active,
    premiere_at,
    created_at,
    updated_at,
    episodes
}: IProgramDetail) => {

    const { control } = useForm();

    const allVideos: IVideoWithStatus[] = episodes.reduce<IVideoWithStatus[]>((acc, episode) => {
        if (episode.videos) {
            const videosWithStatus = episode.videos.map(video => ({
                ...video,
                episodeStatus: episode.status || 'MCR_VALIDATION'
            }));
            return [...acc, ...videosWithStatus];
        }
        return acc;
    }, []);

    const isRevision = episodes[0]?.videos ? true : false;

    const dialogRef = useRef<HTMLDialogElement>(null);

    function toggleDialog() {
        if (!dialogRef.current) {
            return;
        }
        dialogRef.current.hasAttribute("open")
            ? dialogRef.current.close()
            : dialogRef.current.showModal();
    }

    const handleBackButton = () => {
        window.history.back();
    };

    return (
        <Layout>
            <>
                <IconButton color='Primary' onClick={handleBackButton} icon='/icon/back-arrow.svg' style='Filled' />
                <section className="w-full flex flex-col gap-3">
                    <div className="w-full flex items-start justify-between">
                        <div className="max-w-[48%] w-full flex flex-col gap-3">
                            <div>
                                <h1 className="heading-5 font-semibold mb-[6px]">Status Program</h1>
                                <p className="body-2 font-semibold text-secondary-text">{is_active ? 'Aktif' : 'Tidak Aktif'}</p>
                            </div>
                            <div>
                                <h1 className="heading-5 font-semibold mb-[6px]">Kode</h1>
                                <p className="body-2 font-semibold text-secondary-text">{code}</p>
                            </div>
                            <div>
                                <h1 className="heading-5 font-semibold mb-[6px]">Nama</h1>
                                <p className="body-2 font-semibold text-secondary-text">{name}</p>
                            </div>
                        </div>
                        <div className="max-w-[48%] w-full flex flex-col gap-3">
                            <div>
                                <h1 className="heading-5 font-semibold mb-[6px]">Waktu Premiere</h1>
                                <p className="body-2 font-semibold text-secondary-text">{useFormatDate(premiere_at)}</p>
                            </div>
                            <div>
                                <h1 className="heading-5 font-semibold mb-[6px]">Jumlah Episode</h1>
                                <p className="body-2 font-semibold text-secondary-text">{episodes.length}</p>
                            </div>
                            <div>
                                <h1 className="heading-5 font-semibold mb-[6px]">Tim</h1>
                                {/* TODO: Uncomment when member is provided in response */}
                                {/* <ol className="body-2 text-secondary-text font-semibold pl-5">
                                        {program.members.map((member, index) => {
                                            return (
                                                <li key={index} className="list-disc">{member.name}({member.role})</li>
                                            )
                                        })}
                                    </ol> */}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="heading-5 font-semibold mb-[6px]">Deskripsi</h1>
                        <p className="body-2 font-semibold text-secondary-text text-justify">{description}</p>
                    </div>
                </section>
                <section className="flex flex-col gap-3 w-full mt-6">
                    <div className="flex flex-col gap-3">
                        <h1 className="heading-5 font-semibold">Hasil Video</h1>
                        <div className='flex items-center gap-1'>
                            <div className='border-2 border-solid border-success-600 rounded-full w-3 h-3' />
                            <p className='body-2'>On Air</p>
                        </div>
                        <div className='flex gap-6 flex-wrap'>
                            {episodes.map((episode, index) => {
                                return (
                                    <EpisodeCard
                                        key={index}
                                        {...episode}
                                        program_id={id}
                                        epsideo_id={episode.id}
                                        thumbnail={'/image/program-thumbnail.jpg'}
                                        desc={episode.description}
                                        episodeNumber={index + 1}
                                        status={episode.status}
                                        productionDate={episode.start_production}
                                        airingStatus={episode.status ?? 'MCR_VALIDATION'}
                                        productionStatus={episode.status ?? 'MCR_VALIDATION'}
                                        segment={episode.segment_count ?? 0}
                                        isRevision={isRevision}
                                        enableDelete
                                        enableEdit
                                    />
                                )
                            })}
                        </div>
                    </div>
                </section>
                {allVideos.length > 0 && (
                    <section>
                        <div className='flex items-center justify-between my-4'>
                            <h1 className="heading-5 font-semibold">Episode</h1>
                            <Button
                                width='Fit'
                                style='Filled'
                                color='Primary'
                                label='Tambah Episode'
                                type='button'
                                size='Medium'
                                onClick={toggleDialog}
                            />
                        </div>
                        <SegmentTable
                            data={allVideos}
                            control={control}
                        />
                    </section>
                )}
                <Dialog size="Normal" toggleDialog={toggleDialog} ref={dialogRef}>
                    <h1 className="heading-2 font-semibold text-left">Tambah Episode</h1>
                    <NewEpisodeForm
                        onCloseDialog={toggleDialog}
                        programId={id}
                    />
                </Dialog>
            </>
        </Layout>
    );
};

export default ProgramDetail;
