export const publicUrl = (url) =>
    `${process.env.PUBLIC_URL}${url.startsWith("/") ? "" : "/"}${url}`;
