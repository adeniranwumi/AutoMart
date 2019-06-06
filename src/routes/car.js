import Car from '../controllers/Car';
import { carSaleAdUrl } from '../helpers/constants';

function car(app){
    //create car sale ad
    app.post(carSaleAdUrl, Car.create);
}

export default car;