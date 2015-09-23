import AppDispatcher from "../dispatcher"
import actionTypes from "../constants"

AppDispatcher.register(action => {
   switch (action.actionType) {
     case actionTypes.RECEIVED_TWEETS:

       break;
     default:
      // no operations
   }
});
