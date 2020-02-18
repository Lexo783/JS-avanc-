import {
    ADD_SCORE,
    DEL_SCORE
} from './actions'

const initialState = {
    /**
     * Players scores [{Object}]
     *
     * @param      {String}  {name}
     * @param      {Number}  {nbTry}
     * @param       {Number} {nbToFind}
     */
    scores: []
};



const arrayHasIndex = (array, index) => Array.isArray(array) && array.hasOwnProperty(index);

export default function reducers(state = initialState, action) {
    console.log('reducers', action.type);
    switch (action.type) {

        case ADD_SCORE:
            return { ...state, scores: [ ...state.scores, action.score ] };


        case DEL_SCORE:
            if (arrayHasIndex(state.scores, action.index)) {
                return { ...state, scores: [ ...state.scores.filter((score, index) => index !== action.index) ] };
            }
            return state;

        default:
            return state;
    }
}
