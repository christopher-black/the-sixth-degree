const scriptReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_SCRIPTS':
            console.log('hello again', action.payload);
            return action.payload;
        default:
            return state;
    }
};

// scripts will be on the redux state at:
// store.script
export default scriptReducer;