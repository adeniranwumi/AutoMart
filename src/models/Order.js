import moment from 'moment';
import uuid from 'uuid';

class Order{
    constructor(){
        if (typeof this.obj !== 'undefined') {
            return this.obj;
          }
          this.orders = {};
          this.obj = this;
          return this.obj;
    }

    create(data){
        const id = uuid.v4();

        this.orders[id] = {
            order_id: id,
            email: data.email || '',
            phone_number: data.phone_number || '', 
            billing_address: data.billing_address || '',
            quantity: data.quantity || '',
            car_id: data.car_id || '',
            created_on: moment.now(),
            status: data.status || '',
            price: data.price || '',
            price_offered: data.price_offered || '',
        }

        return this.orders[id];
    }
}

export default new Order();