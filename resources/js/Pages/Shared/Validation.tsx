import { useMemo, useState } from "react";
// Function
import { getLayoutMenu, getPrograms } from "@/util/RoleData";
// Data
import { MCR_VALIDATION_HEADER } from "@/Constants/TableHeader";
// Component
import SearchField from "@/Components/Dashboard/SearchField";
import Layout from "@/Layout";
import Table from "@/Components/Dashboard/Table";

const Validation = () => {
    const [searchInput, setSearchInput] = useState('');

    const ProgramsData = getPrograms();

    const handleSearch = (input: string) => {
        setSearchInput(input);
    };


    const filterPrograms = (programs: any, searchInput: string) => {
        const filteredPrograms = programs.filter((program: any) =>
            program.title.toLowerCase().includes(searchInput.toLowerCase())
        );
        console.log(filteredPrograms);

        return filteredPrograms;
    };

    const filteredValidationFalsePrograms = useMemo(
        () => filterPrograms(
            ProgramsData.filter((program: any) => program.episode.some((episode: any) => !episode.validationStatus)),
            searchInput
        ),
        [ProgramsData, searchInput]
    );

    const validatedFalseSectionVisible = filteredValidationFalsePrograms.length > 0;

    return (
        <Layout menus={getLayoutMenu()}>
            <>
                <h1 className="heading-3 font-semibold">Perlu Validasi </h1>
                <div className="flex items-center gap-6">
                    <SearchField onSearch={handleSearch} />
                    <p className="caption-1">
                        <span className="font-semibold">{filteredValidationFalsePrograms.length}</span> Program
                    </p>
                </div>
                {validatedFalseSectionVisible ? (
                    <Table head={MCR_VALIDATION_HEADER} body={filteredValidationFalsePrograms} action="/icon/more-fill.svg" pagination={true} type="Program" redirectUrl="validation" />
                ) : (
                    <p className="body-1 font-semibol">Tidak ada program yang ditemukan</p>
                )}
            </>
        </Layout>
    );
};

export default Validation;
