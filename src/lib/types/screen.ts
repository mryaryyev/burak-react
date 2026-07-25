import { Member } from "./member";
import { Product } from "./product";

/** REACT APP STATE */
export interface AppRootState {
  homePage: HomePageState;
  productPage: ProductPageState;
  //   productsPage: ProductsPageState;
  //   ordersPage: OrdersPageState;
}

/** HOMEPAGE */
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

export interface ProductPageState {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}

/** PRODUCTS PAGE */

/** ORDERS PAGE */
