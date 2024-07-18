import React from 'react';
import { ACTIONS } from './App';

// DigitButton component that renders a button for each digit
export default function DigitButton({ dispatch, digit }) {
  return (
    // When the button is clicked, dispatch an action to add the digit
    <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>
      {digit}
    </button>
  );
}


// Key Points in Comments:

// Component Purpose: Added a comment explaining the purpose of the DigitButton component.
// Dispatch Action: Clarified what happens when the button is clicked (i.e., dispatching the ADD_DIGIT action)