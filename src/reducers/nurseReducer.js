// src/reducers/nurseReducer.js

import { UPDATE_NURSE, UPDATE_NURSE_AVAILABILITY } from '../actions/nurseActions';

const initialState = {
  nurseList: [
    { id: 1, name: 'Alice Smith', qualification: 'RN', availability: 'Full-time' },
    { id: 2, name: 'Bob Johnson', qualification: 'LPN', availability: 'Part-time' },
  ],
};

const nurseReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NURSE:
      return {
        ...state,
        nurseList: state.nurseList.map((nurse) =>
          nurse.id === action.payload.id ? action.payload : nurse
        ),
      };
    case UPDATE_NURSE_AVAILABILITY:
      return {
        ...state,
        nurseList: state.nurseList.map((nurse) =>
          nurse.id === action.payload.id
            ? { ...nurse, availability: action.payload.availability }
            : nurse
        ),
      };
    default:
      return state;
  }
};

export default nurseReducer;
