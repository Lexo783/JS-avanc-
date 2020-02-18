/*
 * action types
 */

export const ADD_STUDENT = 'ADD_STUDENT';
export const EDIT_STUDENT = 'EDIT_STUDENT';
export const DEL_STUDENT = 'DEL_STUDENT';

/*
 * action creators
 */

/**
 * Add student to store
 *
 * @param      {String}  {type}  Reducer action
 * @param      {Object}  {student:{name, age, groupe}}  Student datas
 * @return     {Object}  Redux Store Object
 */

export function addStudent(student) {
  return { type: ADD_STUDENT, student };
}

/**
 * Edit student from store
 *
 * @param      {String}  {type}  Reducer action
 * @param      {Number}  {index}  Student index
 * @param      {Object}  {student:{name, age, groupe}}  Student datas
 * @return     {Object}  Redux Store Object
 */

export function editStudent(datas) {
  return { type: EDIT_STUDENT, datas };
}


/**
 * Delete student from store
 *
 * @param      {String}  {type}  Reducer action
 * @param      {Number}  {index}  Student index
 * @return     {Object}  Redux Store Object
 */

export function delStudent(index) {
  return { type: DEL_STUDENT, index };
}