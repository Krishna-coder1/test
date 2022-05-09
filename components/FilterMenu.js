import React, { useEffect, useState } from "react";
import instance from "../axios";
import { useRouter } from "next/router";
import axios from "axios";
import Checkbox from "antd/lib/checkbox/Checkbox";

function FilterMenu() {
  const [items, setItems] = useState({});
  const [expand, setExpand] = useState(false);
  const [subItems, setsubitems] = useState({ name: "" });
  const router = useRouter();
  useEffect(() => {
    getFilters();
  }, []);
  async function getFilters() {
    try {
      const { data } = await instance.get("/filters");
      setItems(() => data);
    } catch (error) {
      console.log(error);
    }
  }

  const { searchFilter } = items;
  let categories = searchFilter?.categories;
  let brands = searchFilter?.brands;

  return (
    <div className="border-2  px-5 shadow-xl hover:shadow-2xl w-3/12">
      <h2 className=" mt-5 pb-5 text-xl">Categories</h2>
      {categories &&
        categories?.map((val) => {
          return (
            <>
              <div className="flex-col  ml-4 align-baseline ">
                <div className=" flex-col relative">
                  <div>
                    {" "}
                    <div className=" mr-3 float-left ">
                      <input
                        className="  align-baseline"
                        type="checkbox"
                        onChange={(e) => {
                          setsubitems((prev) => {
                            return { ...prev, name: val?.name };
                          });
                          console.log(subItems);
                          setExpand(!expand);
                        }}
                      />
                    </div>
                  </div>{" "}
                  <p className=" mb-4">{val?.name}</p>
                  <div
                    style={{
                      display: expand ? "block" : "none",
                      paddingLeft: "10px",
                    }}
                  >
                    {val?.name === subItems.name ? (
                      <p>
                        {val?.subCategories.map((val) => {
                          return (
                            <>
                              <div className=" flex-col relative ">
                                <div className=" pt-2 mr-3 align-middle float-left ">
                                  <input
                                    className=" float-left "
                                    type="checkbox"
                                  />
                                </div>

                                <p className=" mb-2 last:mb-5 ">{val.name}</p>
                              </div>
                            </>
                          );
                        })}
                      </p>
                    ) : (
                      ""
                    )}
                    <div></div>
                  </div>
                </div>
              </div>
            </>
          );
        })}

      <h2 className=" text-xl mb-3">Brands</h2>
      {brands &&
        brands?.map((val) => {
          return (
            <>
              <div className="ml-4 align-middle m-4">
                <div className=" float-left mr-4">
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      setsubitems((prev) => {
                        return { ...prev, name: val?.name };
                      });
                      console.log(subItems);
                      setExpand(!expand);
                    }}
                  />
                </div>
                <p>{val?.name}</p>
                <div
                  style={{
                    display: expand ? "block" : "none",
                    paddingLeft: "10px",
                  }}
                >
                  {val?.name === subItems.name ? (
                    <p>
                      {val?.subCategories?.map((val) => {
                        return (
                          <>
                            <input type="checkbox" style={{ float: "left" }} />
                            <p>{val.name}</p>
                          </>
                        );
                      })}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
}

export default FilterMenu;
