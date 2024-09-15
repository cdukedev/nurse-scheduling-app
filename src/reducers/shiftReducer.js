// src/reducers/shiftReducer.js
import {
    ADD_SHIFT,
    UPDATE_SHIFT,
    DELETE_SHIFT,
  } from '../actions/shiftActions';
  
  const initialState = {
    shiftList: [
      {
        id: 0,
        title: 'Morning Shift',
        start: new Date(),
        end: new Date(new Date().setHours(new Date().getHours() + 8)),
        conflict: false,
      },
      {
        id: 1,
        title: 'Evening Shift',
        start: new Date(new Date().setHours(new Date().getHours() + 8)),
        end: new Date(new Date().setHours(new Date().getHours() + 16)),
        conflict: false,
      },
    ],
  };
  
  const shiftReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_SHIFT:
        // Detect conflicts with existing shifts
        const hasConflict = state.shiftList.some(
          (shift) =>
            (action.payload.start >= shift.start && action.payload.start < shift.end) ||
            (action.payload.end > shift.start && action.payload.end <= shift.end) ||
            (action.payload.start <= shift.start && action.payload.end >= shift.end)
        );
  
        return {
          ...state,
          shiftList: [
            ...state.shiftList,
            {
              ...action.payload,
              conflict: hasConflict,
            },
          ],
        };
      case UPDATE_SHIFT:
        // Similar conflict detection can be implemented here if needed
        return {
          ...state,
          shiftList: state.shiftList.map((shift) =>
            shift.id === action.payload.id ? action.payload : shift
          ),
        };
      case DELETE_SHIFT:
        return {
          ...state,
          shiftList: state.shiftList.filter((shift) => shift.id !== action.payload),
        };
      default:
        return state;
    }
  };
  
  export default shiftReducer;
  