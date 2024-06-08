const initialState = {

}

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'test': return {
            ...state
        }
    }
}

export default testReducer;