const {
    expect
} = require("chai");
const request = require("request");
let cat = {
    title: "Testing Rocket",
    subTitle: "testing",
    describtion: "test post",
    path: "images/r2.jpeg"
};
let url = 'http://localhost:3000/api/cat';


describe('GET Request', function() {
    it('returns status 200 to check if api works', function(done) {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done()
        });
    });

    it('returns data from DB', function(done){
        request(url, function(error, response, body) {
            body = JSON.parse(body);
            expect(body.data).to.be.a('array');
            done();
        });
    });
});

describe('Post a cat', function(){
    it('insert a cat to database', function(done){
        request.post({url:url, form: cat}, function(error,response,body){
            done();
        });
    });
});


describe("test delete api", function() {
    it("delete cat from db", function(done) {
        request.delete({
            url: url,
            form: cat
        }, function(err, res, body) {
            done();
        });
    });
});