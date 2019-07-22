// reducer
export default function headerReducer(state={navbar_fixed: false}, action) {
  switch (action.type) {
    case 'NAVBAR_FIXED': 
      return {...state, navbar_fixed: true};

    case 'NAVBAR_FREE':
      return {...state, navbar_fixed: false,};

    default: 
      return state;
  }
}

// action types

export const NAVBAR_FIXED = 'NAVBAR_FIXED';
export const NAVBAR_FREE = 'NAVBAR_FREE';

// action creator
export function headerScrollCheck() {
  const bio_height = parseInt(
    getComputedStyle(document.getElementById("header_bio")).getPropertyValue("height")
  );
  const navbar_offset = ( bio_height );
  if (window.pageYOffset > navbar_offset) {
    return {
        type: NAVBAR_FIXED
    };
  } else {
    return {
      type: NAVBAR_FREE
    };
  };
}