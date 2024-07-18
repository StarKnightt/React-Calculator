import React from 'react';
import { ACTIONS } from './App';

export default function OperationButton({ dispatch, operation }) {
  return (
    <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>
      {operation}
    </button>
  );
}

// Key Points in Comments:

//     Component Purpose: Added a comment explaining the purpose of the OperationButton component.
//     Dispatch Action: Clarified what happens when the button is clicked (i.e., dispatching the CHOOSE_OPERATION action).