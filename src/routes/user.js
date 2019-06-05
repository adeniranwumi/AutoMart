import User from '../controllers/User';
import { userSignUpUrl, userSignInUrl, userDetailsUrl } from '../helpers/constants';


function user (app) {
    //sign up user
    app.post(userSignUpUrl, User.create);

    //sign in user
    app.post(userSignInUrl, User.login);

    //get user raw details
    // app.get(userDetailsUrl, User.getAll);
}

export default user;