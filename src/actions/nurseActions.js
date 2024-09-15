// src/actions/nurseActions.js
export const UPDATE_NURSE = 'UPDATE_NURSE';

export const updateNurse = (nurse) => ({
  type: UPDATE_NURSE,
  payload: nurse,
});
