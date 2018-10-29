// don't forget to set the state to null because this will throw undefined
export default (state = null, action) => {
    switch(action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};
