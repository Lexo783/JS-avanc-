
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
            let table = [ ...state.scores, action.score ].sort((a,b)=>{
                if (b.nbTry===-1 || (a.nbTry < b.nbTry && a.nbTry>0 && b.nbTry>0)){
                    return -1;
                }
                else if(a.nbTry < b.nbTry && a.nbTry>0 && b.nbTry>0){
                    return +1
                }
                else {
                    return 0;
                }
            }) ;
            if (table.length>5) {
                table.pop();
            }
            return { ...state, scores: table};




        case DEL_SCORE:
            if (arrayHasIndex(state.scores, action.index)) {
                return { ...state, scores: [ ...state.scores.filter((score, index) => index !== action.index) ] };
            }
            return state;

        default:
            return state;
    }
}
