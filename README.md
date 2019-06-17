# mongo-users

Covers CRUD operations in mongo database.

There is no front-end, all operations are done using the mocha test framework.

A Collection of Users is created in MongoDB and it is wired to moogose.

/src/users.js maps mongoose and mongo together
/test/create_test.js: create a user to the database
/test/read_test.js: read a user from the database
/test/update_test.js: update a user to the database
/test/destroy_test.js: delete a user from the database

