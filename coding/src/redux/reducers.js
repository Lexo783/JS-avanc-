import {
    ADD_USER,
    DEL_USER
} from './actions'

const initialState = {
    /**
     * Players scores [{Object}]
     * 
     * @param      {String}  {firstName}
     * @param      {String}  {lastName}
     * @param      {String}  {birthDate}
     * @param      {String}  {bio}
     * @param      {String}  {city}
     */
    users: []
};



const arrayHasIndex = (array, index) => Array.isArray(array) && array.hasOwnProperty(index);

export default function reducers(state = initialState, action) {
    console.log('reducers', action.type);
    switch (action.type) {

        case ADD_USER:
            let table = [ ...state.users, action.user ];
            return { ...state, users: table};




        case DEL_USER:
            if (arrayHasIndex(state.users, action.index)) {
                return { ...state, users: [ ...state.users.filter((user, index) => index !== action.index) ] };
            }
            return state;

        default:
            return state;
    }
}
