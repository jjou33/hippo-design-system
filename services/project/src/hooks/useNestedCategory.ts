// import axios from "axios";
// import { useEffect, useState } from "react";

// export const useNestedCategories = () => {
//   const [nestedCategories, setNestedCategories] = useState({});

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const { data } = await axios.get("/api/categories"); // API 호출

//         const tree = data.reduce((acc, item) => {
//           const { maincategory, category, subcategory } = item;

//           if (!acc[maincategory]) {
//             acc[maincategory] = {};
//           }
//           if (!acc[maincategory][category]) {
//             acc[maincategory][category] = [];
//           }
//           if (!acc[maincategory][category].includes(subcategory)) {
//             acc[maincategory][category].push(subcategory);
//           }

//           return acc;
//         }, {});

//         setNestedCategories(tree);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return { data: nestedCategories };
// };
