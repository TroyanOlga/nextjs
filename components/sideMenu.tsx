import { useState, useEffect } from "react";
import axios from 'axios';

const SideMenu = () => {
  const [ categories, setCategories ] = useState(null);
  const [ menuIsOpen, toggleMenu ] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('https://fakestoreapi.com/products');
      const categories = [ ...new Set(result.data.map((data) => data.category))];
      setCategories(categories);
    };
    fetchData();
  }, []);
  const categoriesDisplay = () => {
    if (menuIsOpen) {
      return categories.map((category, index) => {
        return <div key={index}>{category}</div>
      });
    }
  }
  return (
    <>
      <button onClick={() => toggleMenu(!menuIsOpen)}>{ menuIsOpen ? 'Open' : 'Closed' }</button>
      {categoriesDisplay()}
    </>
  );
}
export default SideMenu;
