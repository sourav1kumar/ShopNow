import data from "../../../product_type_data.json";

var products = [];
for (let i = 0; i < data.length; ++i) {
  products.push(data[i].product_type);
}

products = products.filter(function (v, i, self) {
  return i === self.indexOf(v);
});

export default products;
