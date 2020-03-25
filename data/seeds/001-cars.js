exports.seed = function(knex)
{
  return knex('cars').del()
    .then(function ()
    {
      return knex('cars').insert([
        {id: 1, VIN: '1C1PJLDS6FW608443', make:"GMC", model:"Sierra", mileage:"4500", transmissionType:"1"},
        {id: 2, VIN: '1C2PJLDS6FW608443', make:"Ford", model:"F150", mileage:"2000", transmissionType:"1"},
        {id: 3, VIN: '1C3PJLDS6FW608443', make:"Tesla", model:"CyberTruck", mileage:"100", transmissionType:"1"}
      ]);
    });
};