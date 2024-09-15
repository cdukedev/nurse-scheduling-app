// src/actions/shiftActions.js
export const ADD_SHIFT = 'ADD_SHIFT';
export const UPDATE_SHIFT = 'UPDATE_SHIFT';
export const DELETE_SHIFT = 'DELETE_SHIFT';

export const addShift = (shift) => ({
  type: ADD_SHIFT,
  payload: shift,
});

export const updateShift = (shift) => ({
  type: UPDATE_SHIFT,
  payload: shift,
});

export const deleteShift = (shiftId) => ({
  type: DELETE_SHIFT,
  payload: shiftId,
});
