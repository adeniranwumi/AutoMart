import UserModel from '../models/User';

const User = {
  create(req, res) {
    const {
      email, firstName, lastName, password, address,
    } = req.body;
    if (!email || !firstName || !lastName || !password || !address) {
      return res.status(400).send({ message: 'All fields are required!!!' });
    }
    const user = UserModel.create(req.body);
    // console.log(user);
    return res.status(201).send(user);
  },


  getAll(req, res) {
    const users = UserModel.findAll();
    return res.status(200).send(users);
  },

  login(req, res) {

  },
};

export default User;
