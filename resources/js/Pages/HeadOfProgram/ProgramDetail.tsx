import { useEffect, useRef } from "react";
// Component
import Button from "@/Components/Shared/Button";
import ProgramCard from "@/Components/Cameraman/ProgramCard";
import Dialog from "@/Components/Shared/Dialog";
import Layout from "@/Layout";
import IconButton from "@/Components/Shared/IconButton.tsx";
import EditProgramButton from "@/Components/HeadOfProgram/EditProgramButton";

interface IEpisode {
    id: number;
    program_id: number;
    code: string;
    duration: number;
    theme: string;
    segment_count: number;
    start_production: string;
    description: string;
    created_at: string;
    updated_at: string;
}

interface IVideoProgram {
    id: number;
    code: string;
    slug: string;
    name: string;
    description: string;
    is_active: boolean;
    premiere_at: string;
    created_at: string;
    updated_at: string;
    episodes?: IEpisode[];
}

interface IProgramDetail {
    program: IVideoProgram;
}

const ProgramDetail = ({ program }: IProgramDetail) => {
    const slug = window.location.pathname.split("/").pop();

    useEffect(() => {
        if (!program) {
            window.location.href = "/";
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

    function formatDate(dateString: string) {
        const days = [
            "Minggu",
            "Senin",
            "Selasa",
            "Rabu",
            "Kamis",
            "Jumat",
            "Sabtu",
        ];
        const months = [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
        ];

        const date = new Date(dateString);

        const dayName = days[date.getDay()];
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");

        return `${dayName}, ${day} ${month} ${year} ${hours}:${minutes}`;
    }

    const handleBackButton = () => {
        window.history.back();
    };

    const hasEpisodes =
        program?.episodes &&
        Array.isArray(program.episodes) &&
        program.episodes.length > 0;

    return (
        <Layout>
            {program && (
                <>
                    <div className="w-full justify-between items-center flex ">
                        <IconButton
                            color="Primary"
                            onClick={handleBackButton}
                            icon="/icon/back-arrow.svg"
                            style="Filled"
                        />
                        <div>
                            {/* <EditProgramButton program={program} /> */}
                            ini edit
                        </div>
                    </div>
                    <section className="w-full flex flex-col gap-3">
                        <div className="w-full flex items-start justify-between">
                            <div className="max-w-[48%] w-full flex flex-col gap-3">
                                <div>
                                    <h1 className="heading-5 font-semibold mb-[6px]">
                                        Status Program
                                    </h1>
                                    <p className="body-2 font-semibold text-secondary-text">
                                        {program.is_active
                                            ? "Aktif"
                                            : "Tidak Aktif"}
                                    </p>
                                </div>
                                <div>
                                    <h1 className="heading-5 font-semibold mb-[6px]">
                                        Kode
                                    </h1>
                                    <p className="body-2 font-semibold text-secondary-text">
                                        {program.code}
                                    </p>
                                </div>
                                <div>
                                    <h1 className="heading-5 font-semibold mb-[6px]">
                                        Nama
                                    </h1>
                                    <p className="body-2 font-semibold text-secondary-text">
                                        {program.name}
                                    </p>
                                </div>
                                <div>
                                    <h1 className="heading-5 font-semibold mb-[6px]">
                                        Waktu Premiere
                                    </h1>
                                    <p className="body-2 font-semibold text-secondary-text">
                                        {formatDate(program.premiere_at)}
                                    </p>
                                </div>
                            </div>
                            <div className="max-w-[48%] w-full flex flex-col gap-3">
                                <div>
                                    <h1 className="heading-5 font-semibold mb-[6px]">
                                        Jumlah Episode
                                    </h1>
                                    <p className="body-2 font-semibold text-secondary-text">
                                        {hasEpisodes
                                            ? program?.episodes?.length
                                            : "-"}
                                    </p>
                                </div>
                                <div>
                                    <h1 className="heading-5 font-semibold mb-[6px]">
                                        Tim
                                    </h1>
                                    <p className="body-2 font-semibold text-secondary-text">
                                        belum sih ini
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 className="heading-5 font-semibold mb-[6px]">
                                Deskripsi
                            </h1>
                            <p className="body-2 font-semibold text-secondary-text text-justify">
                                {program.description}
                            </p>
                        </div>
                    </section>
                    {hasEpisodes && program.episodes && (
                        <section className="flex flex-col gap-3 w-full mt-6">
                            <h1 className="heading-5 font-semibold mb-[6px]">
                                Episode
                            </h1>
                            <p className="heading-6 flex gap-1 items-center w-max h-full">
                                <span className="h-full mb-1.5 text-success-600">
                                    o
                                </span>{" "}
                                On Air
                            </p>
                            <div className="flex gap-6 flex-wrap">
                                {program.episodes.map(
                                    (episode: IEpisode, index: number) => (
                                        <ProgramCard
                                            key={episode.id}
                                            episodeNumber={index + 1}
                                            code={episode.code}
                                            duration={episode.duration.toString()}
                                            theme={episode.theme}
                                            productionDate={
                                                episode.start_production
                                            }
                                            desc={episode.description}
                                        />
                                    )
                                )}
                            </div>
                        </section>
                    )}
                </>
            )}
        </Layout>
    );
};

export default ProgramDetail;
