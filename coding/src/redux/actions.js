export const ADD_USER = 'ADD_USER';
export const DEL_USER = 'DEL_USER';


export function addUser(user) {
    return { type: ADD_USER, user };
}

export function delUser(index) {
    return { type: DEL_USER, index };
}
