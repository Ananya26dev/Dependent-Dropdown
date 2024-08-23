import "./App.css";
import { useState } from "react";
const App = () => {
  const [categories, setCategories] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [isSubCategoryEnabled, setIsSubCategoryEnabled] = useState(false);

  const category = ["Fruits", "Vegetables", "Dairy"];
  const subCategories = {
    Fruits: ["Apple", "Banana", "Mango", "Orange"],
    Vegetables: ["Carrot", "Broccoli"],
    Dairy: ["Milk", "Cheese", "Paneer", "Yogurt"],
  };
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategories(selectedCategory);
    setSubCategory("");
    setIsSubCategoryEnabled(true);
  };
  const handleSubCategoryChange = (e) => {
    setSubCategory(e.target.value);
  };
  return (
    <div className="container">
      <h3>Dependent Dropdown</h3>
      <label htmlFor="category">Select Category:</label>
      <select
        name="category"
        id="category"
        onChange={handleCategoryChange}
        value={categories}
      >
        <option value="">--Select--</option>
        {category.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <br />
      <label htmlFor="subCategory">Select Sub-Category:</label>
      <select
        name="subCategory"
        id="subCategory"
        onChange={handleSubCategoryChange}
        value={subCategory}
        disabled={!isSubCategoryEnabled}
      >
        <option value="">--Select--</option>
        {isSubCategoryEnabled &&
          subCategories[categories].map((subItem, subindex) => (
            <option key={subindex} value={subItem}>
              {subItem}
            </option>
          ))}
      </select>
    </div>
  );
};

export default App;
