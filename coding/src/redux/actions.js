export const ADD_USER = 'ADD_USER';
export const DEL_USER = 'DEL_USER';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export  const DEL_FAVORITE = 'DEL_FAVORITE';


export function addUser(user) {
    return { type: ADD_USER, user };
}

export function delUser(index) {
    return { type: DEL_USER, index };
}

export function addFavorite(gameName) {
    return { type: ADD_FAVORITE, gameName };
}

export function delFavorite(gameName) {
    return { type: DEL_FAVORITE, gameName };
}

