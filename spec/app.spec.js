import fetch from 'node-fetch';
import server from '../src/server';
import { message, testRootUrl } from '../src/helpers/constants';

describe("Server GET Root API endpoint", () => {
    var data = {};
    beforeAll((done) => {
        fetch(testRootUrl, { method: 'GET'})
        .then(res => {
            res.json().then(body => {data.body = body.message})
            .catch(err => {console.log(err)});
            done();
        }).catch(err => { console.error(err); done(); })
    });

    it("should return specified message", () => {
        expect(data.body).toEqual(message);
    });
});