 const getUserName = state => state.authorization.user.name;
const isLoggedIn = state => state.authorization.token;
const isGettingCurrentUser = state => state.authorization.isGettingCurrentUser;
const getError = state => state.authorization.error;;
 
export const AuthorizationSelectors = {
    getUserName, isLoggedIn, isGettingCurrentUser,getError
}
