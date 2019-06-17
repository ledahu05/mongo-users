const assert = require('assert');
const User = require('../src/user');

describe('Update a user out of the database', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({name: 'Joe'});
        joe.save()
            .then(() => done());
    });

    it('instance type set n save', (done) => {
        
        //in memory only
        joe.set('name', 'Alex');
        //persist change to db
        joe.save()
            .then(() => User.find({}))
            .then((users) => {
                assert(users.length === 1);
                assert(users[0].name === 'Alex');
                done();
            })
            
        
    });

    it('model instance ', (done) => {
        done();
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