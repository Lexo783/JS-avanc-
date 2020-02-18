import {
  ADD_STUDENT,
  EDIT_STUDENT,
  DEL_STUDENT
} from './actions'


const initialState = {
/**
 * Student datas [{Object}]
 *
 * @param      {String}  {name}
 * @param      {Number}  {age}
 * @param      {Number}  {group}
 */
	students: []
};

const arrayHasIndex = (array, index) => Array.isArray(array) && array.hasOwnProperty(index);

export default function reducer(state = initialState, action) {
	console.log('reducer', action.type);
	switch (action.type) {

		case ADD_STUDENT:
			return { ...state, students: [ ...state.students, action.student ] };

		case EDIT_STUDENT:
			if (arrayHasIndex(state.students, action.datas.index)) {
				return {...state, students: state.students.map((student, index) => {
					if ( index === action.datas.index ) {
						return action.datas.student;
					}
					return student;
				})};
			}
			return state;

		case DEL_STUDENT:
			if (arrayHasIndex(state.students, action.index)) {
				return { ...state, students: [ ...state.students.filter((student, index) => index !== action.index) ] };
			}
			return state;

		default:
			return state;
	}
}