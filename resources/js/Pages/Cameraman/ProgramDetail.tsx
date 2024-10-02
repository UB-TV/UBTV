import { useEffect, useRef } from 'react';
// Component
import Button from "@/Components/Shared/Button";
import ProgramCard from "@/Components/Cameraman/ProgramCard";
import UploadVideoForm from "@/Components/Cameraman/UploadVideoForm";
import Dialog from "@/Components/Shared/Dialog";
import Layout from "@/Layout";
import IconButton from '@/Components/Shared/IconButton.tsx';
import { IVideoProgram } from '@/models/videprograminterfaces';
import { IEpisode } from '@/models/episodeinterfaces';
import useFormatDate from '@/util/useFormatDate';


interface IProgramDetail {
    program: IVideoProgram;
    episodes: IEpisode[];
}

const ProgramDetail = ({
    program,
    episodes
}: IProgramDetail) => {
    const slug = window.location.pathname.split('/').pop();

    useEffect(() => {
        if (!program) {
            window.location.href = '/';
        }
    }, [slug, program]);

    const dialogRef = useRef<HTMLDialogElement>(null);

    function toggleDialog() {
        if (!dialogRef.current) {
            return;
        }
        dialogRef.current.hasAttribute("open")
            ? dialogRef.current.close()
            : dialogRef.current.showModal();
    };

    const handleBackButton = () => {
        window.history.back();
    };

    return (
        <Layout>
            {program && (
                <>
                    <IconButton color='Primary' onClick={handleBackButton} icon='/icon/back-arrow.svg' style='Filled' />
                    <section className="w-full flex flex-col gap-3">
                        <div className="w-full flex items-start justify-between">
                            <div className="max-w-[48%] w-full flex flex-col gap-3">
                                <div>
                                    <h1 className="heading-5 font-semibold mb-[6px]">Status Program</h1>
                                    <p className="body-2 font-semibold text-secondary-text">{program.is_active}</p>
                                </div>
                                <div>
                                    <h1 className="heading-5 font-semibold mb-[6px]">Kode</h1>
                                    <p className="body-2 font-semibold text-secondary-text">{program.code}</p>
                                </div>
                                <div>
                                    <h1 className="heading-5 font-semibold mb-[6px]">Nama</h1>
                                    <p className="body-2 font-semibold text-secondary-text">{program.name}</p>
                                </div>
                                <div>
                                    <h1 className="heading-5 font-semibold mb-[6px]">Jumlah Episode</h1>
                                    <p className="body-2 font-semibold text-secondary-text">{episodes.length}</p>
                                </div>
                            </div>
                            <div className="max-w-[48%] w-full flex flex-col gap-3">
                                <div>
                                    <h1 className="heading-5 font-semibold mb-[6px]">Waktu Premiere</h1>
                                    <p className="body-2 font-semibold text-secondary-text">{program.premiere_at}</p>
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
                            <p className="body-2 font-semibold text-secondary-text text-justify">{program.description}</p>
                        </div>
                    </section>
                    <section className="flex flex-col gap-3 w-full mt-6">
                        <div className="flex items-center justify-between">
                            <h1 className="heading-5 font-semibold">Upload Video</h1>
                            <Button type="button" label="Upload Video" style="Filled" color="Primary" width="Fit" size="Medium" icon="/icon/plus-white.svg" iconPosition="Left" onClick={toggleDialog} />
                        </div>
                        <div className="flex gap-6 flex-wrap">
                            {episodes.map((episode, index) => {
                                return (
                                    <ProgramCard
                                        key={index}
                                        episodeNumber={index + 1}
                                        code={episode.code}
                                        duration={episode.duration}
                                        desc={episode.description}
                                        productionDate={useFormatDate(episode.start_production)}
                                        theme={episode.themes}
                                    />
                                )
                            })}
                        </div>
                        <Dialog size="Normal" toggleDialog={toggleDialog} ref={dialogRef}>
                            <h1 className="heading-2 font-semibold text-left">Upload Video</h1>
                            <UploadVideoForm episodeNumber={episodes.length} />
                        </Dialog>
                    </section>
                </>
            )}
        </Layout>
    );
};

export default ProgramDetail;
