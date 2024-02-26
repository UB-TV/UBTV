//  This is just a temp function to mimic the server response
//  You can set the role in local storage manually

import {
    CameramanMenus,
    CameramanPrograms,
    EditoProgram,
    EditorMenus,
    MCRMenus,
    MCRProgram,
} from "@/Constants/Temp";

export const getUserRole = (): string => {
    const storedRole = localStorage.getItem("role");

    const role: string = storedRole ?? "";

    return role;
};

export const getLayoutMenu = (): any => {
    const role: string = getUserRole();

    if (!role) return;

    switch (role) {
        case "cameraman":
            return CameramanMenus;

        case "editor":
            return EditorMenus;

        case "mcr":
            return MCRMenus;

        default:
            return "";
    }
};

export const getPrograms = (): any => {
    const role: string = getUserRole();

    if (!role) return;

    switch (role) {
        case "cameraman":
            return CameramanPrograms;

        case "editor":
            return EditoProgram;

        case "mcr":
            return MCRProgram;

        default:
            return "";
    }
};
