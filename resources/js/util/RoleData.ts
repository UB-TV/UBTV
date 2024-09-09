//  This is just a temp function to mimic the server response
//  You can set the role in local storage manually

import {
    CameramanMenus,
    CameramanPrograms,
    EditoProgram,
    EditorMenus,
    MCRMenus,
    MCRProgram,
    ProducerMenus,
    ProducerProgram,
    AdminMenus
} from "@/Constants/Temp";
import { ILayoutMenu } from "@/models/generalinterfaces";
import { usePage } from "@inertiajs/react";

export const useGetUserRole = (): string => {
    const { user } = usePage<any>().props;

    return user.roles[0];
};

export const getLayoutMenu = (role: string): ILayoutMenu[] => {


    switch (role) {
        case "cameraman":
            return CameramanMenus;

        case "editor":
            return EditorMenus;

        case "mcr":
            return MCRMenus;

        case "producer":
            return ProducerMenus;

        case "admin":
            return AdminMenus;

        default:
            return [];
    }
};

export const getPrograms = (): any => {

    const role: string = useGetUserRole();

    if (!role) return;

    switch (role) {
        case "cameraman":
            return CameramanPrograms;

        case "editor":
            return EditoProgram;

        case "mcr":
            return MCRProgram;

        case "producer":
            return ProducerProgram;

        default:
            return "";
    }
};
