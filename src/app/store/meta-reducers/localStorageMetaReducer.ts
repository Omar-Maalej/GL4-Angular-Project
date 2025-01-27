import { ActionReducer, INIT, UPDATE } from '@ngrx/store';

export function localStorageMetaReducer<S>(reducer: ActionReducer<S>): ActionReducer<S> {
  return (state: S | undefined, action: any) => {
    // Load state from localStorage on INIT or UPDATE actions
    if (action.type === INIT || action.type === UPDATE) {
      const storedState = localStorage.getItem('appState');
      if (storedState) {
        try {
          return { ...JSON.parse(storedState), ...state };
        } catch (error) {
          console.error('Error parsing localStorage state:', error);
        }
      }
    }

    const nextState = reducer(state, action);

    // Save specific slices of state to localStorage
    const stateToPersist = { auth: (nextState as any)['auth'] }; // Specify slices to persist
    localStorage.setItem('appState', JSON.stringify(stateToPersist));

    return nextState;
  };
}
