import {
    ADD_USER,
    DEL_USER,
    ADD_FAVORITE,
    DEL_FAVORITE
} from './actions'
import favorite from "../Component/Favorite";

const initialState = {
    /**
     * Players scores [{Object}]
     *
     * @param      {String}  {firstName}
     * @param      {String}  {lastName}
     * @param      {String}  {birthDate}
     * @param      {String}  {bio}
     * @param      {String}  {city}
     * @param       {Array}  {favoriteGamesName}
     */
    users: [],

    /**
     *
     * Favorites games [{Object}]
     * @param   {String}    {name}
     */
    favoritesGame : []
};

const arrayHasIndex = (array, index) => Array.isArray(array) && array.hasOwnProperty(index);

export default function reducers(state = initialState, action) {
    console.log('reducers', action.type);
    let nextState;
    switch (action.type) {

        case ADD_USER:
            let table = [ ...state.users, action.user ];
            return { ...state, users: table};


        case DEL_USER:
            if (arrayHasIndex(state.users, action.index)) {
                return { ...state, users: [ ...state.users.filter((user, index) => index !== action.index) ] };
            }
            return state;




        case ADD_FAVORITE:
            return  {
                ...state, favoritesGame : [...state.favoritesGame, action.gameName]
            }

        case DEL_FAVORITE:
            const ind = state.favoritesGame.indexOf(action.gameName);
            nextState = {
                ...state, favoritesGame : state.favoritesGame.filter( (item, index) => index !== ind)
            }

            return nextState;

        default:
            return state;
    }
}
