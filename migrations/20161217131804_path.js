// inside brewery seed file
exports.up = function(knex, Promise) {
    // return knex.raw('TRUNCATE brewery RESTART IDENTITY CASCADE;')
    //     .then(() => {
    return knex.schema.createTable('path', function(table) { //this creates the database in the format below
            table.increments(); //this equates to id with type serial
            table.string('number');
            table.string('time');
            table.float('hour');
            table.float('minute');
            table.float('day');
            table.float('month');
            table.float('year');
            table.float('lat');
            table.float('long');
        })
        // insert breweries with primary key IDs
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('path');
};
