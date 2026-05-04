type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};

type ProductSummary = Pick <Product,'id' | 'name' | 'price'>
type ProductWithOutStock = Omit<Product, 'stock' | 'color'>;
type ProductWithColor = Required<Product>

const product : ProductWithColor = {
  id: 2,
  name: "Mouse",
  price: "700",
  stock: 100,
  color: "black",
}

type OptionalProduct = Partial<Product>;
type ProductReadOnly = Readonly<Product>;

const emptyObj : Record <string, unknown> = {}

const product_1 = {
  id: 2,
  name: "Mouse",
  price: "700",

}

