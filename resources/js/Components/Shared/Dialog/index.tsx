import { forwardRef } from "react";

type Props = {
    size: "Small" | "Normal"
    children: React.ReactNode;
    toggleDialog: () => void;
};

const Dialog = forwardRef<HTMLDialogElement, Props>(
    ({
        size,
        children,
        toggleDialog }, ref) => {
        return (
            <dialog
                ref={ref}
                onClick={(e) => {
                    if (e.currentTarget === e.target) {
                        toggleDialog();
                    }
                }}
                className={`${size === "Small" ? 'w-[30%]' : 'w-[90%]'} mx-auto p-6 md:p-12 rounded-lg`}
            >
                <div className="flex flex-col justify-center gap-12">
                    {children}
                </div>
            </dialog>
        );
    }
);
export default Dialog;
