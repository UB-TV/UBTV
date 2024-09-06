import { useEffect, useRef } from 'react';
import { ProgramMenus, ListPrograms } from "@/Constants/Temp";
// Component
import Button from "@/Components/Shared/Button";
import ProgramCard from "@/Components/ProgramHead/ProgramCard";
import Dialog from "@/Components/Shared/Dialog";
import Layout from "@/Layout";
import EditProgramButton from '@/Components/ProgramHead/EditProgram';

type EpisodeType = {
    code: string;
    duration: "30 Minute" | "60 Minute" | "90 Minute";
    productionDate: string;
    theme: string;
    desc: string;
    thumbnail: string; 
    statusEpisode: "shooting" | "editing" | "validasi produser" | "validasi qc mcr" | "on air"; 
    segment: number
}

type ProgramType = {
    slug: string;
    status: "Aktif" | "Tidak Aktif";
    code: string;
    title: string;
    premiere: string;
    episode: EpisodeType[];
    members: Array<{ name: string; role: string; }>;
    desc: string;
};

const ProgramDetail = () => {
    const slug = window.location.pathname.split('/').pop();
    const program = ListPrograms.find((program) => program.slug === slug) as ProgramType;

    const handleBack = () => {
        window.history.back();
      };

    useEffect(() => {
        if (!program) {
            window.location.href = '/';
        }
    }, [slug, program]);

    return (
        <Layout menus={ProgramMenus}>
            {program && (
                <>
                    <section className="w-full flex flex-col gap-3">
                            <div className='w-full justify-between flex mb-12'>
                                <div onClick={handleBack} className='p-5 cursor-pointer bg-primary-500 rounded-lg flex items-center justify-center h-fit'>
                                <img src="/icon/arrow-back.svg" alt="" />
                                </div>
                                <div className=''>
                                <EditProgramButton program={program} />
                                </div>          
                            </div>
                        <div className="w-full flex items-start justify-between">
                            <div className="max-w-[48%] w-full flex flex-col gap-3">
                                <div>
                                    <h1 className="heading-5 font-semibold mb-[6px]">Status Program</h1>
                                    <p className="body-2 font-semibold text-secondary-text">{program.status}</p>
                                </div>
                                <div>
                                    <h1 className="heading-5 font-semibold mb-[6px]">Kode</h1>
                                    <p className="body-2 font-semibold text-secondary-text">{program.code}</p>
                                </div>
                                <div>
                                    <h1 className="heading-5 font-semibold mb-[6px]">Nama</h1>
                                    <p className="body-2 font-semibold text-secondary-text">{program.title}</p>
                                </div>
                                <div>
                                    <h1 className="heading-5 font-semibold mb-[6px]">Waktu Premiere</h1>
                                    <p className="body-2 font-semibold text-secondary-text">{program.premiere}</p>
                                </div>
                            </div>
                            <div className="max-w-[48%] w-full flex flex-col gap-3">
                            <div>
                                    <h1 className="heading-5 font-semibold mb-[6px]">Jumlah Episode</h1>
                                    <p className="body-2 font-semibold text-secondary-text">{program.episode.length}</p>
                                </div>
                                <div>
                                    <h1 className="heading-5 font-semibold mb-[6px]">Tim</h1>
                                    <ol className="body-2 text-secondary-text font-semibold pl-5">
                                        {program.members.map((member, index) => {
                                            return (

                                                <li key={index} className="list-disc">{member.name}({member.role})</li>
                                            )
                                        })}
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="heading-5 font-semibold mb-[6px]">Deskripsi</h1>
                            <p className="body-2 font-semibold text-secondary-text text-justify">{program.desc}</p>
                        </div>
                    </section>
                    
                    {program.episode.length > 0 && (
                        <section className="flex flex-col gap-3 w-full mt-6">
                            <h1 className="heading-5 font-semibold mb-[6px]">Episode</h1>
                            <p className='heading-6 flex gap-1 items-center w-max h-full'><span className='h-full mb-1.5 text-success-600'>o</span> On Air</p>
                            <div className="flex gap-6 flex-wrap">
                                {program.episode.map((episode, index) => {
                                    
                                    return (
                                        <>
                                        <ProgramCard 
                                        key={index}
                                        episodeNumber={index + 1}
                                        {...episode}
                                        />
                                        </>
                                    );
                                })}
                            </div>
                        </section>
                    )}

                </>
            )}
        </Layout>
    );
};

export default ProgramDetail;
