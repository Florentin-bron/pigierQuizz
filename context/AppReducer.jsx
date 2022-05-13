export default function appReducer(state, action) {
    switch (action.type) {
      case "ADD_TEAM":
        return {
          ...state,
          teams: [...state.teams, action.payload],
        };
  
      case "REMOVE_TEAM":
        return {
          ...state,
          teams: state.teams.filter(
            (team) => team.id !== action.payload
          ),
        };
      case "EDIT_SCORE":
        return {
          ...state,
          teams: state.teams.map(
            (team) => team.id !== action.payload
          ),
        };
  
      default:
        return state;
    }
  };
  