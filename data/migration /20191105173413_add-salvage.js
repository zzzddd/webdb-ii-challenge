exports.up = function(knex) {
  return knex.schema.table("cars", tbl => {
    tbl.boolean("salvage", 64);
  });
};

exports.down = function(knex) {
  return knex.schema.table("cars", tbl => {
    tbl.dropColumn("salvage");
  });
};
