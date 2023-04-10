const initState = {
    contactList: [],
    keyword: ""
}

function reducer(state = initState, action){
    const {type, payload} = action;

    switch (type) {
        case "ADD_CONTACT" :
            return {
                ...state,
                contactList : [
                    ...state.contactList,{
                        name: payload.name,
                        phoneNumber: payload.phoneNumber
                    }
                ]
            };
        case "SEARCH_CONTACT" : 
            return {
                ...state,
                keyword: payload.keyword
            };
    
        default:
            return {...state};
    }
}

export default reducer;