export const publicUrl = (url) =>
    `${process.env.PUBLIC_URL}${url.startsWith("/") ? "" : "/"}${url}`;

export const nearestPerfectSquare = (num) => {
    let i = 1;
    while (i < num) {
        if (i * i >= num) return i;
        i += 1;
    }
};

export const nearestPerfectCube = (num) => {
    let i = 1;
    while (i < num) {
        if (i * i * i >= num) return i;
        i += 1;
    }
};
