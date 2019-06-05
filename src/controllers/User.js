import UserModel from '../models/User';
import Response from '../helpers/Response';
import { generateToken } from '../config/jwt';
import { generateId } from '../config/gens';

const User = {
  create(req, res) {
    const {
      email, firstName, lastName, password, address,
    } = req.body;

    if (!email || !firstName || !lastName || !password || !address) {
      return res.send(Response.error('All fields are required!!!'));
    }

    const user = UserModel.create(req.body);

    const data = {
      token: generateToken(user.id),
      user,
    };

    return res.send(Response.success(data));
  },

  login(req, res) {
    const {
      email, password,
    } = req.body;

    if (!email || !password) {
      return res.send(Response.error('All fields are required!!!'));
    }

    // Fetch user
    const user = UserModel.getUser(generateId(email));

    if (!user) {
      return res.send(Response.error('User not found.'));
    }

    if (user.password !== password) {
      return res.send(Response.error('Incorrect login details.'));
    }

    const data = {
      token: generateToken(user.id),
      user,
    };

    return res.send(Response.success(data));
  },

};

export default User;
