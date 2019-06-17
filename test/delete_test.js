const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user out of the database', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({name: 'Joe'});
        joe.save()
            .then(() => done());
    });

    it('model instance remove', (done) => {
        joe.remove()
            .then(() => User.findOne({name: 'Joe'}))
            .then((user) => {
                assert(user === null);
                done();
            });
    });

    it('class method remove', (done) => {
        done();
    });

    it('class method findAndRemove', (done) => {
        done();
    });

    it('class method findByIdAndRemove', (done) => {
        done();
    });
});