import data from "../../../product_type_data.json";

var cities = []
for (let i = 0; i < data.length; ++i) {
  cities.push(data[i].location.city);
}

cities = cities.filter(function (v, i, self) {
  return i === self.indexOf(v);
});

export default cities;
