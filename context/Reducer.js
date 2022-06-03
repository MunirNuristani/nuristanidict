export const initialState ={
    loadingPage: false,
    showMenu: false,
    shrinkHeader:false,
    showAlertModal: false,
    alertButton:'',
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
        case "SHOWMENU": {  
            return {
                ...state,
                showMenu: action.payload,
            };
        }
        case "SHRINKHEADER": {  
            return {
                ...state,
                shrinkHeader: action.payload,
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
        case "ALERTBUTTON": {  
            return {
                ...state,
                alertButton: action.payload,
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