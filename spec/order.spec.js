import fetch from 'node-fetch';
import server from '../src/server';
import { testOrderData } from '../src/config/gens';
import { devDomain, purchaseOrderUrl } from '../src/helpers/constants';

describe('Make a purchase order', () => {
    const postBody = testOrderData;

    let data = {}, order = {};

    beforeAll((done) => {
        fetch(devDomain + purchaseOrderUrl, {
            method: 'POST',
            body: JSON.stringify(postBody),
            header: {'Content-Type': 'application/json'}
        })
        .then(res => {
            console.log(res);    
            res.json().then(body =>{
                console.log(body);
                data.body = body.data;
                order = data.body;
                data.status = body.status;
            }).catch( err => {console.log(err)});
            done();
        }).catch(err => {console.log(err); done();})
    });

    it('should return status code 200', () =>{
        expect(data.status).toEqual(200);
    });
});