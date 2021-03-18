import * as Cookies from 'js-cookie';

export const setUserCookie = (session) => {
    Cookies.remove('userCookie');
    Cookies.set('userCookie', session, { expires: 15 });
};

export const getUserCookie = () => {
    const sessionCookie = Cookies.get('userCookie');

    if (sessionCookie === undefined) {
        return null;
    }
    return JSON.parse(sessionCookie);
};

// export const getDataCookie = () => {
//     console.log('sad',getUserCookie())
//     const user = getUserCookie(//     return user[0].original.data
// };


export const removeUserCookie = () => {
    Cookies.remove('userCookie');
};


