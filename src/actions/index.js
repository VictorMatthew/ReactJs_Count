export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const incAction = () => {
    return {
        type: INCREMENT
    }
};

export const decAction = () => {
    return {
        type: DECREMENT
    }
};
