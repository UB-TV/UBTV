export const HandleSlugRedirect = (role: string, programStatus: boolean, slug: string) => {
    let url = '';

    if (programStatus) {
        url += 'uploaded'
    } else {
        url += 'not-uploaded'
    }

    url += `/${role}/${slug}`;

    window.location.href = url;
};
