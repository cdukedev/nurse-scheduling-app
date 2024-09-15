// src/actions/nurseActions.js

export const UPDATE_NURSE = 'UPDATE_NURSE';
export const UPDATE_NURSE_AVAILABILITY = 'UPDATE_NURSE_AVAILABILITY';

export const updateNurse = (nurse) => ({
  type: UPDATE_NURSE,
  payload: nurse,
});

export const updateNurseAvailability = (availabilityData) => ({
  type: UPDATE_NURSE_AVAILABILITY,
  payload: availabilityData,
});
