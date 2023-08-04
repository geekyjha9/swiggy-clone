import React, { useEffect, useState } from "react";
import { SWIGGY_MENU_API_URL } from "./contents";

const useRestroMenuInfo = (resId) => {

  const [restroMenuData, setRestroMenuData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_MENU_API_URL + resId);

    const json = await data.json();
    setRestroMenuData(json.data);
  };

  return restroMenuData;
};

export default useRestroMenuInfo;
