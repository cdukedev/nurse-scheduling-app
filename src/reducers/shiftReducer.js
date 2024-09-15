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
      },
      {
        id: 1,
        title: 'Evening Shift',
        start: new Date(new Date().setHours(new Date().getHours() + 8)),
        end: new Date(new Date().setHours(new Date().getHours() + 16)),
      },
    ],
  };
  
  const shiftReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_SHIFT:
        return {
          ...state,
          shiftList: [...state.shiftList, action.payload],
        };
      case UPDATE_SHIFT:
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
  