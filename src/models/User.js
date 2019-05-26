import moment from 'moment';
import uuid from 'uuid';

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
        const id = uuid.v4();

        this.users[id] = {
            email: data.email,
            firstName: data.firstname,
            lastName: data.lastName,
            password: data.password,
            address: data.address,
            is_admin: data.is_admin,
            createdOn: moment.now()
        }
    }

    update(data) {

    }

    getAll() {

    }

    getUser(user_id) {

    }

    delete(user_id) {
        delete this.users[user_id];
    }
}

export default User;