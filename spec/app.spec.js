import fetch from 'node-fetch';
import { server, test_message } from '../server';

describe("Server", () => {
    afterAll(() => {
        server.close();
    });

    describe("GET /", () => {
        var data = {};
        beforeAll((done) => {
            fetch("http://localhost:3000/", { method: 'GET'})
            .then(res => {
                res.json().then(body => {data.body = body.test_message})
                .catch(err => {console.log(err)});
                done();
            }).catch(err => { console.error(err); done(); })
        });

        it("should return specified message", () => {
            expect(data.body).toEqual(test_message);
        });
    });


});