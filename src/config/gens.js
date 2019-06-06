// import bcrypt from 'bcrypt'
import md5 from 'md5';

export function generateId(from) {
  // md5 is used here to obscure result and not meant to be secure
  return md5(from);
}

export const testUserData = {
  email: 'abc123@email.com',
  firstName: 'Pete',
  lastName: 'Love',
  password: 'abcdef',
  address: '12 Stuff rd',
};

export const testAdData = {
  email: 'abcdefg@email.com',
  manufacturer: 'Toyota',
  model: 'Corolla 9pij',
  bodyType: 'Car',
  vehicleCondition: 'New',
  color: 'Pink',
  mileage: '6000 km',
  tyreExpiration: '2021',
  carDoors: '4',
  noOfSeats: '5',
  seatType: 'leather',
  imgFile: 'ugbjn.ujiooo',
};
