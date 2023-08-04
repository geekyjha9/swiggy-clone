// import { useState, useEffect } from "react";

// const useRestroInfo = () => {
//   const [restroData, setRestroData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9715987&lng=77.5945627"
//     );

//     const json = await data.json();

//     setRestroData(json.data);
    
//   };

//   return restroData;
// };

// export default useRestroInfo;
