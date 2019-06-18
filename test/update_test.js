const assert = require('assert');
const User = require('../src/user');

describe('Update a user out of the database', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({name: 'Joe'});
        joe.save()
            .then(() => done());
    });

    function assertName(operation, done) {
        operation
            .then(() => User.find({}))
            .then((users) => {
                assert(users.length === 1);
                assert(users[0].name === 'Alex');
                done();
            })
    }
    it('instance type set n save', (done) => {
        
        //in memory only
        joe.set('name', 'Alex');
        //persist change to db
        assertName(joe.save(), done)
    });

    it('a model instance can update', (done) => {
        assertName(joe.update({name : 'Alex'}), done);
    });

    it('class method ', (done) => {
        done();
        
    });

    it('class method ', (done) => {
        done();
        
    });

    it('class method ', (done) => {
        done();
        
    });
});