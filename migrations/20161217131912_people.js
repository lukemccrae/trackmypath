// inside brewery seed file
exports.up = function(knex, Promise) {
    // return knex.raw('TRUNCATE brewery RESTART IDENTITY CASCADE;')
    //     .then(() => {
    return knex.schema.createTable('people', function(table) { //this creates the database in the format below
        table.increments(); //this equates to id with type serial
        table.string('name');
        table.string('phone');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('people');
};
