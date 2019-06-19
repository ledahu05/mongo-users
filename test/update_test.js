const assert = require('assert');
const User = require('../src/user');

describe('Update a user out of the database', () => {
    let joe;

    beforeEach((done) => {
        joe = new User({name: 'Joe', postCount: 0});
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

    it('a model class can update', (done) => {
        assertName(User.update({ name: 'Joe'}, { name: 'Alex'}), done);
    });

    it('a model class can update one record', (done) => {
        assertName(User.findOneAndUpdate({ name: 'Joe'}, { name: 'Alex'}), done);
    });

    it('a model class can find a record with an ID and update', (done) => {
        assertName(User.findByIdAndUpdate(joe._id, { name: 'Alex'}), done);   
    });

    xit('A user can have their postcount incremented by 1 ', (done) => {
        User.updateMany({ name: 'Joe'}, { $inc: {postCount: 1}})
            .then(() => User.findOne({name: 'Joe'}))
            .then((user) => {
                assert(user.postCount === 1);
                done();
            })
    });


});