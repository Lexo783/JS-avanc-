export const ADD_SCORE = 'ADD_SCORE';
export const DEL_SCORE = 'DEL_SCORE';


export function addScore(score) {
    return { type: ADD_SCORE, score };
}

export function delScore(index) {
    return { type: DEL_SCORE, index };
}
