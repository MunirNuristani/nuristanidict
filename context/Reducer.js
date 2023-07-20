export const initialState = {
  loadingPage: false,
  showMenu: false,
  showAlertModal: false,
  language : "prs",
  showLanguageModal: false,
  alertButton: "",
  alertModalMessage: "",
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
    case "SHOWLANGUAGEMODAL": {
      return {
        ...state,
        showLanguageModal: action.payload,
      };
    }
    case "LANGUAGE": {
      return {
        ...state,
        language: action.payload,
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