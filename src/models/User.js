import moment from 'moment';
import { generateId } from '../config/gens';

class User {
  constructor() {
    if (typeof this.obj !== 'undefined') {
      return this.obj;
    }
    this.users = {};
    this.obj = this;
    return this.obj;
  }

  create(data) {
    const id = generateId(data.email);
    this.users[id] = {
      id,
      email: data.email || '',
      firstName: data.firstName || '',
      lastName: data.lastName || '',
      password: data.password || '',
      address: data.address || '',
      is_admin: data.is_admin,
      createdOn: moment.now(),
    };

    return this.users[id];
  }

  update(data) {
    this.users[data.id] = { ...data };
  }

  findAll() {
    return this.users;
  }

  getUser(userId) {
    return this.users[userId];
  }

  delete(userId) {
    delete this.users[userId];
  }
}

export default new User();
