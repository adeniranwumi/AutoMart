import fetch from 'node-fetch';
import { server } from '../src/server';
import { testUserData } from '../src/config/gens';
import { devDomain, userSignInUrl, userSignUpUrl } from '../src/helpers/constants';

describe("User SignIn", () => {
    const postBody = {        
        email: testUserData.email,
        password: testUserData.password
    }

    let data = {}, user = {};

    beforeAll((done) => {

        fetch(devDomain + userSignInUrl, { 
            method: 'POST',
            body: JSON.stringify(postBody),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            console.log(res);
            res.json().then(body => {
                console.log(body);
                data.body = body.data;
                user = data.body.user;
                data.status = body.status;
            })
            .catch( err => { console.log(err) });
            done();
        }).catch(err => { console.error(err); done(); })
    });

    it("should return status code 200", () => {
        expect(data.status).toEqual(200);
    });

    it("should return a token string", () => {
        expect(typeof data.body.token).toBe("string");
    });

    it("should return the user id", () => {
        expect(user.id).toBeDefined();
    });

    it("should return the user email submitted", () => {
        expect(user.email).toEqual(testUserData.email);
    });

    it("should return the user firstName submitted", () => {
        expect(user.firstName).toEqual(testUserData.firstName);
    });

    it("should return the user lastName submitted", () => {
        expect(user.lastName).toEqual(testUserData.lastName);
    });

    it("should return the user password submitted", () => {
        expect(user.password).toEqual(testUserData.password);
    });

    it("should return the user address submitted", () => {
        expect(user.address).toEqual(testUserData.address);
    });

    it("should return the user creation timestamp", () => {
        expect(user.createdOn).toBeDefined();
    });
});