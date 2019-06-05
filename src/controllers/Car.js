import CarModel from '../models/Car';
import Response from '../helpers/Response';

const User = {
    create(req, res){
        const {
            email,
            manufacturer,
            model,
            bodyType,
            vehicleCondition,
            mileage,
            tyreExpiration,
            carDoors,
            noOfSeats,
            imgFile,
        } = req.body;

        if(!email || !manufacturer || !model || !bodyType || !vehicleCondition || !mileage || !tyreExpiration || !carDoors || !noOfSeats || imgFile){
            return res.send(Response.error('All fields are required!!!'));
        }

        const car = CarModel.create(req.body);

        return res.send(Response.success(data));
    },
}