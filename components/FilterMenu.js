import React, { useEffect, useState } from "react";
import instance from "../axios";
import { useRouter } from "next/router";

function FilterMenu() {
  const [items, setItems] = useState({});
  const [subCategory, isSubcategory] = useState(false);
  const [subcateitems, setsubcatitems] = useState([]);
  useEffect(() => {
    getFilters();
  }, []);
  async function getFilters() {
    try {
      const { data } = await instance.get("/filters");
      console.log("from items", items);
      setItems(() => data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log("fromStorage", items);

  const { searchFilter } = items;
  let categories = searchFilter?.categories;
  let brands = searchFilter?.brands;

  console.log("Cat", categories);

  return (
    <div>
      <h2>Categories</h2>
      {categories &&
        categories.map((val) => {
          return (
            <div>
              <input name={val?.name} type="checkbox" />
              <p
                onClick={(e) => {
                  if (val?.subCategories) {
                    isSubcategory(true);
                    setsubcatitems(() => val?.subCategories);
                  }
                }}
              >
                {val?.name}
              </p>
              <p>
                {subCategory ? (
                  <p>
                    {subcateitems.map((val) => {
                      return (
                        <>
                          {" "}
                          <p>{val?.name}</p>{" "}
                        </>
                      );
                    })}
                  </p>
                ) : (
                  ""
                )}
              </p>
            </div>
          );
        })}
      <h2>Brands</h2>
      {/* {brands.map((val) => {
        return <p>{val?.name}</p>;
      })} */}
    </div>
  );
}

export default FilterMenu;
