import {INCREMENT, DECREMENT} from '../actions';

const initCount = {
    number: 0
};
const countReducers = (state = initCount, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                number: state.number + 1
            };
        case DECREMENT:
            return {
                number: state.number - 1
            };
        default:
            return state
    }
};
export default countReducers;
