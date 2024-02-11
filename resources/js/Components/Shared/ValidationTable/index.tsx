import { useId, useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
// Data
import { VALIDATION_HEADER } from '@/Constants/TableHeader';
// Component
import Button from '../Button';
import Select from '@/Components/Form/Select';
import Dialog from '../Dialog';
import IconButton from '../IconButton.tsx';

type dropdownOptionsProps = {
    optionLabel: string
    value: string
}

type ValidationTableProps = {
    body: any;
    dropdownOptions: dropdownOptionsProps[];
};

const schema = z.object({
    status: z.string()
});

type FormFields = z.infer<typeof schema>;

const ValidationTable = ({ body, dropdownOptions }: ValidationTableProps) => {

    const {
        handleSubmit,
        control,
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        console.log(data);
    };

    const handleSelectChange = async (index: number, selectedValue: string) => {
        toggleDialog()
        console.log('select -', index + 1, 'value: ', selectedValue);
    };

    const dialogRef = useRef<HTMLDialogElement>(null);

    function toggleDialog() {
        if (!dialogRef.current) {
            console.log('p');

            return;
        }
        dialogRef.current.hasAttribute("open")
            ? dialogRef.current.close()
            : dialogRef.current.showModal();
    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <table className="table-fixed w-full rounded-md border border-solid border-grey-200">
                    <thead>
                        <tr className="font-medium text-secondary-text text-left bg-grey-100 border-b border-grey-200 rounded-md">
                            {VALIDATION_HEADER.map((head, index) => (
                                <th key={index} className={`p-2 w-[${head.width}] text-center whitespace-nowrap`}>{head.label}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {body.map((episode: any) =>
                            episode.segmen.map((segment: any, index: number) => {
                                // making sure all select have a unique id
                                const selectId = useId();
                                return (
                                    <tr key={index}>
                                        <td className="p-2 text-center">{episode.episodeNumber}</td>
                                        <Select
                                            id={selectId}
                                            placeholder="Select Status"
                                            options={dropdownOptions}
                                            control={control}
                                            onChange={(selectedValue) => {
                                                handleSelectChange(index, selectedValue);
                                            }}
                                        />
                                        <td className="p-2 text-center">{segment.segmentNumber}</td>
                                        <td className="p-2">
                                            <div className='p-[6px] w-fit rounded-md shadow-1 flex justify-center'>
                                                <img src={segment.preview} alt={segment.segmentNumber} />
                                            </div>
                                        </td>
                                        <td className="flex flex-col justify-center items-center p-2">
                                            <Button type="button" label="Unduh" style="Filled" width="Fit" color="Primary" size="Small" />
                                        </td>
                                    </tr>
                                )
                            })
                        )}
                    </tbody>
                </table>
            </form>
            <Dialog size="Small" toggleDialog={toggleDialog} ref={dialogRef}>
                <div className='flex flex-col gap-12'>
                    <h4 className='heading-5 font-semibold'>Apakah Anda yakin untuk mengubah status progres?</h4>
                    <p className='body-1 text-secondary-text'>Setelah mengubah progres, data akan ditambahkan ke role yang bertanggungjawab</p>
                    <div className='flex items-center justify-between'>
                        <Button type='button' label='Batal' style='Outlined' color='Primary' width='Fit' size='Small' onClick={toggleDialog}  />
                        <div className='flex items-center gap-3'>
                            <IconButton icon='/icon/cancel.svg' color='Error' style='Filled' rounded={true} onClick={toggleDialog} />
                            <IconButton icon='/icon/success.svg' color='Success' style='Filled' rounded={true} />
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default ValidationTable;
