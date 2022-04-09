
export default (state = [], {type, payload}) => {
    switch (type) {
        case "create":
            return [...state, payload]
        default:
            return state
    }

    
}