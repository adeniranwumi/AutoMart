import UserModel from '../models/User';
import { get } from 'https';

const User = {
    create(req, res){
        let body = req.body; 
        if(!body.email || !body.firstName || !body.lastName || !body.password || !body.address){
            return res.status(400).send({"message":"All fields are required!!!"});
        }
        const user = UserModel.create(body);
        // console.log(user);
        return res.status(201).send(user);
    }

}

export default User;