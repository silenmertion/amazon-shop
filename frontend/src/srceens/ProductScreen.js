import { getProduct } from "../api";
import { parceRequestUrl } from "../utils";

const ProductScreen = {
  render: async () => {
    const request = parceRequestUrl();
    const product = await getProduct(request.id);
    return `<h1>${product.name}</h1>`;
  },
};

export default ProductScreen;
