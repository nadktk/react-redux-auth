export default function (state = 'User', action) {
    switch (action.type) {
        case "SET_USERNAME":
            return action.payload;
        default: 
            return state;
    }
}