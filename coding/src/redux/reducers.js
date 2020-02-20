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

/*
export function reducerFavorite( initialState, action){
    let nextState
    switch (action.type) {
        case ADD_FAVORITE :
            nextState = {...state, name : action.gameName};

    }
}*/

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
/*
            let t = [...state.favoritesGame];
            console.log(action.gameName + "     -   " + action.gameName)

            if(t.includes(action.gameName)){
                return state;
                nextState = t;
                console.log("contient deja:  " + action.gameName)
            }
            else {
                nextState = {
                    ...state, favoritesGame : [...state.favoritesGame, action.gameName]
                }
                console.log("nop:  " + action.gameName)
            }
            console.log(nextState);
            return nextState || state;
*/



            return  {
                ...state, favoritesGame : [...state.favoritesGame, action.gameName]
            }



/*
            console.log(action.gameName);

            const favIndex = state.favoritesGame.findIndex(item => item.id === action.gameName.id);
            if(favIndex !== -1){
                nextState = {
                    ...state, favoritesGame : state.favoritesGame.filter( (item, index) => index !== favIndex)
                }
                console.log("deleting")
            }
            else {
                nextState = {
                    ...state, favoritesGame : [...state.favoritesGame,  action.gameName]
                }
                console.log("adding")
            }
            console.log("reducer addFav : " + nextState + "    -" + action.gameName);
            console.log(nextState)
            return nextState || state;
*/

            /*
            let t = [...state.favorites];
            if (t.includes(action.gameName)){
                console.log("contient deja ")
            }
            else {
                console.log("ne contient pas")
            }
            console.log(t);
            let tableGame = [ ...state.favorites, action.gameName ];
            console.log(tableGame)
            return { ...state, favorites: tableGame};*/





            /*
            let tableGame = [ ...state.users,  action.gameName];
            console.log(action.gameName);
            console.log(tableGame);
            return { ...state.users, favoriteGamesName : tableGame};*/

        case DEL_FAVORITE:
            const favIndex = state.favoritesGame.findIndex(item => item.id === action.gameName.id);

                nextState = {
                    ...state, favoritesGame : state.favoritesGame.filter( (item, index) => index !== favIndex)
                }


            return nextState;

        default:
            return state;
    }
}
