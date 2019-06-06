import moment from 'moment';
import uuid from 'uuid';

class Car{
    constructor(){
        if (typeof this.obj !== 'undefined') {
            return this.obj;
          }
          this.cars = {};
          this.obj = this;
          return this.obj;
    }

    create(data){
        const id = uuid.v4();

        this.cars[id] = {
            carId: id,
            // ownerId: data.ownerId,
            email: data.email || '',
            createdOn: moment.now(),
            manufacturer: data.manufacturer || '',
            model: data.model || '',
            bodyType: data.bodyType || '',
            vehicleCondition: data.vehicleCondition || '',
            color: data.color || '',
            mileage: data.mileage || '',
            tyreExpiration: data.tyreExpiration || '',
            carDoors: data.carDoors || '',
            noOfSeats: data.noOfSeats || '',
            seatType: data.seatType || '',
            imgFile: data.imgFile || '',
        }

        return this.cars[id];

    }
}

export default new Car();