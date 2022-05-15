export const initialState ={
    loadingPage: false,
    showMenu: false,
    showAlertModal: false,
    alertModalMessage:""
}


export const AppReducer = (state, action) => {
    switch (action.type) {
        case "LOADINGPAGE": {  
            return {
                ...state,
                loadingPage: action.payload,
            };
        }
        case "SHOWALERTMODAL": {  
            return {
                ...state,
                showAlertModal: action.payload,
            };
        }
        case "ALERTMODALMESSAGE": {  
            return {
                ...state,
                alertModalMessage: action.payload,
            };
        }
        case "SHOWMENU": {  
            return {
                ...state,
                showMenu: action.payload,
            };
        }
        case "MULTIPLE_ASSIGNMENT": {
            return {
                ...state, ...action.payload
            }
        }
        default:
            return 
                state
            
    }
}