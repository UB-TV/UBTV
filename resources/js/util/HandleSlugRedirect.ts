export const HandleSlugRedirect = (role: string, programStatus: boolean, slug: string) => {
    let url = '';

    if (programStatus) {
        url += 'process-program'
    } else {
        url += 'registered-program'
    }

    url += `/${role}/${slug}`;

    window.location.href = url;
};
