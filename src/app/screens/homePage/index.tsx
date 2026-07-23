import React, { useEffect } from "react";
import ActiveUsers from "./ActiveUsers";
import Advertisement from "./Advertisement";
import Events from "./Events";
import NewDishes from "./NewDishes";
import PopularDishes from "./PopularDishes";
import Statistics from "./Statistics";
import "../../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});
const popularDishesRetriever = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({ popularDishes }),
);

export default function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(popularDishesRetriever);
  // Selector: Store => Data

  
  useEffect(() => {
    // Backend server data request => Data
    const result = [
      {
        _id: "6a34a84221c76b6da2d5d51a",
        productStatus: "PROCESS",
        productCollection: "DISH",
        productName: "Kebab",
        productPrice: 14,
        productLeftCount: 75,
        productSize: "NORMAL",
        productVolume: 1,
        productDesc: "This is a delicious Kebab.",
        productImages: [
          "uploads/products/77e9562f-bb11-42da-954b-fae05d2b31d8.jpg",
          "uploads/products/2d384bd1-c678-4354-82cf-f1c5d64d7067.jpg",
        ],
        productViews: 2,
        createdAt: "2026-06-19T02:24:02.671Z",
        updatedAt: "2026-07-10T06:48:17.686Z",
        __v: 0,
      },
      {
        _id: "6a34a4a521c76b6da2d5d510",
        productStatus: "PROCESS",
        productCollection: "DISH",
        productName: "Steak",
        productPrice: 17,
        productLeftCount: 50,
        productSize: "LARGE",
        productVolume: 1,
        productDesc: "This is the most delicious Steak.",
        productImages: [
          "uploads/products/60da6446-8a75-4b0a-80cc-e8134abed2a1.jpg",
          "uploads/products/dabb58c1-fafb-4710-aa24-ed166b367d72.jpg",
        ],
        productViews: 2,
        createdAt: "2026-06-19T02:08:37.122Z",
        updatedAt: "2026-07-09T14:44:00.011Z",
        __v: 0,
      },
    ];
    // Slice: Data => Store
    // @ts-ignore
    setPopularDishes(result);

    return () => {};
  }, []);

  console.log("popularDishes: ", popularDishes);

  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
