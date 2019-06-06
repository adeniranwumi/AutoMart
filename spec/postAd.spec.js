import fetch from 'node-fetch';
import server from '../src/server';
import { testAdData } from '../src/config/gens';
import { devDomain, carSaleAdUrl } from '../src/helpers/constants';

describe('Post a car ad', () => {   
        
    const postBody = testAdData;

    let data = {}, car = {};

    beforeAll((done) => {

        fetch(devDomain + carSaleAdUrl, { 
            method: 'POST',
            body: JSON.stringify(postBody),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            console.log(res);
            res.json().then(body => {
                console.log(body);
                data.body = body.data;
                car = data.body;
                console.log(car);
                data.status = body.status;
            })
            .catch( err => { console.log(err) });
            done();
        }).catch(err => { console.error(err); done(); })
    });

    it("should return status code 200", () => {
        expect(data.status).toEqual(200);
    });

    it("should return the seller email submitted", () => {
        expect(car.email).toEqual(testAdData.email);
    });

    it("should return the car manufacturer submitted", () => {
        expect(car.manufacturer).toEqual(testAdData.manufacturer);
    });

    it("should return the car model submitted", () => {
        expect(car.model).toEqual(testAdData.model);
    });

    it("should return the car bodyType submitted", () => {
        expect(car.bodyType).toEqual(testAdData.bodyType);
    });

    it("should return the car vehicleCondition submitted", () => {
        expect(car.vehicleCondition).toEqual(testAdData.vehicleCondition);
    });

    it("should return the car mileage submitted", () => {
        expect(car.mileage).toEqual(testAdData.mileage);
    });

    it("should return the car tyreExpiration submitted", () => {
        expect(car.tyreExpiration).toEqual(testAdData.tyreExpiration);
    });

    it("should return the carDoors submitted", () => {
        expect(car.carDoors).toEqual(testAdData.carDoors);
    });

    it("should return the noOfSeats submitted", () => {
        expect(car.noOfSeats).toEqual(testAdData.noOfSeats);
    });

    it("should return the imgFile submitted", () => {
        expect(car.imgFile).toEqual(testAdData.imgFile);
    });

});

