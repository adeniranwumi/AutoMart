import UserModel from '../models/User';
import Response from '../helpers/Response';
import { generateToken } from '../config/jwt';

const User = {
  create(req, res) {
    const {
      email, firstName, lastName, password, address
    } = req.body;

    if (!email || !firstName || !lastName || !password || !address) {
      return res.send(Response.error('All fields are required!!!'));
    }
    
    const user = UserModel.create(req.body);

    const data = {
      token: generateToken(user.id),
      user: user
    }
    
    return res.send(Response.success(data));
  },

  login(req, res) {

  },

};

export default User;
