exports.up = function(knex)
{
    return knex.schema.createTable('cars', tbl =>
    {
        tbl.increments();
        
        tbl.text(`vin`, 17).unique().notNullable();

        tbl.text(`make`, 35).notNullable();

        tbl.text(`model`, 35).notNullable();

        tbl.decimal(`mileage`).notNullable();

        tbl.integer(`transmissionType`).notNullable();
    });
};

exports.down = function(knex)
{
    return knex.schema.dropTableIfExists('cars');
};