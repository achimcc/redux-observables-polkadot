interface Action {
    type: string,
    payload?: object
}

const initialState: State = {
    count: 0
  };

export const reducer = (state: State = initialState, action: Action):State => {
    switch (action.type) {
        case 'Inc': return ({count: state.count + 1})
        case 'Dec': return ({count: state.count - 1})
        default: return state
    }
}