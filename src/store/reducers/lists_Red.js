export default function(state = {
    PATBO: {},
    PFTWF: {},
    PMHATBO: {},
    SP: {},
    IYM: {},
    OFOTW: {}
}, action) {
    switch (action.type) {
        case 'POPULARATTHEBOXOFFICE':       
            return {
                ...state,
                PATBO: action.obj
            }
        case 'PREMIERESFORTHEWHOLEFAMILY':       
            return {
                ...state,
                PFTWF: action.obj
            }
        case 'PREMIERESMUSTHAVEATTHEBOXOFFICE':       
            return {
                ...state,
                PMHATBO: action.obj
            }
        case 'SPANISHPREMIERES':       
            return {
                ...state,
                SP: action.obj
            }
        case 'IFYOUMISSED':       
            return {
                ...state,
                IYM: action.obj
            }
        case 'OURFAVORITESOFTHEWEEK':       
            return {
                ...state,
                OFOTW: action.obj
            }
        default:
            return state
    }
}