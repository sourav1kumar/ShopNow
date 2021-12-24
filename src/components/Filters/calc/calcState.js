import data from "../../../product_type_data.json";

var states = [];
for (let i = 0; i < data.length; ++i) {
  states.push(data[i].location.state);
}

states = states.filter(function (v, i, self) {
  return i === self.indexOf(v);
});

export default states;
