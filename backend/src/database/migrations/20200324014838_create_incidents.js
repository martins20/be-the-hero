// Metodoupé Responsável pela Criação da tabela
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments()
        
        table.string('title').notNullable() 
        table.string('description').notNullable() 
        table.string('value').notNullable()

        table.string('ong_id').notNullable()

        table.foreign('ong_id').references('id').inTable('ongs')
    });
};

//Metodo down é para casos de erros
exports.down = function(knex) {
  return knex.shema.dropTable('incidents');
};
