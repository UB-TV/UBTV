export const HandleSlugRedirect = (url: string, role:string, slug: string) => {
    let redirectUrl = '';

    redirectUrl += `/${url}/${role}/${slug}`;

    window.location.href = redirectUrl;
};
