interface Action {
    type: string,
    payload: object
}

export interface State {
    count: number
}

const initialState: State = {
    count: 0
  };

export const reducer = (state: State = initialState, action: Action):State => {
    switch (action.type) {
        case 'Increment': return ({count: state.count + 1})
        case 'Decrement': return ({count: state.count - 1})
        default: return state
    }
}