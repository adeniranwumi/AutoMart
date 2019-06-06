import OrderModel from '../models/Order';
import Response from '../helpers/Response';

const Order = {
    create(req,res){
        const {
            email,
            phone_number, 
            billing_address,
            quantity,
            car_id,
            price,
            price_offered,
        } = req.body;

        if(!email || !phone_number || !billing_address || !quantity || !car_id || !price || !price_offered){
            return res.send(Response.error('All fields are required!!!'));
        }

        const order = OrderModel.create(req.body);

        return res.send(Response.success(order));
        
    }
}

export default Order;