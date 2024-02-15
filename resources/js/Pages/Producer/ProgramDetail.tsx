import { useEffect, useRef } from 'react';
import { ProducerProgram } from "@/Constants/Temp";
// Component
import Dialog from "@/Components/Shared/Dialog";
import Layout from "@/Layout";
import IconButton from '@/Components/Shared/IconButton.tsx';
import Button from '@/Components/Shared/Button';
import { getLayoutMenu } from '@/util/RoleData';
import ProgramCard from '@/Components/Producer/ProgramCard';
import ValidationTable from '@/Components/Shared/ValidationTable';
import { PRODUCERVALIDATIOn } from '@/Constants/FormOptions';

const ProgramDetail = () => {
    const slug = window.location.pathname.split('/').pop();
    const program = ProducerProgram.find((program) => program.slug === slug);

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
    }

    const handleBackButton = () => {
        window.history.back();
    };

    return (
        <Layout menus={getLayoutMenu()}>
            {program && (
                <>
                    <IconButton color='Primary' onClick={handleBackButton} icon='/icon/back-arrow.svg' style='Filled' />
                    <section className="w-full flex flex-col gap-3">
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
                    <section className="flex flex-col gap-3 w-full mt-6">
                        <div className="flex flex-col gap-3">
                            <h1 className="heading-5 font-semibold">Hasil Video</h1>
                            <div className='flex gap-6 flex-wrap'>
                                {program.episode.map((episode, index) => {
                                    return (
                                        <ProgramCard key={index} {...episode} segment={episode.segmen.length}  />
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col gap-3 w-full mt-6">
                        <div className="flex flex-col gap-3">
                            <div className='flex items-center justify-between'>
                                <h1 className="heading-5 font-semibold">Episode</h1>
                                <Button type='button' label="Tambah Episode" style='Filled' color='Primary' width='Fit' size='Medium' icon='/icon/plus-white.svg' iconPosition='Left' onClick={toggleDialog} />
                            </div>
                            <ValidationTable body={program.episode} dropdownOptions={PRODUCERVALIDATIOn} />
                        </div>
                    </section>
                </>
            )}
        </Layout>
    );
};

export default ProgramDetail;
