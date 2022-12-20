import React, { useState } from 'react'
import axios from 'axios'

function App() {

  const [foodItems, setFoodItems] = useState([])

  async function loadData() {
    const response = await axios.get('/food-items-by-category?category=breakfast')
    console.log(response.data);
    setFoodItems(response.data.data)
  }


  return (
    <>
      <h1>Food API</h1>
      <button onClick={loadData}>Make Api call </button>
      {
        foodItems.map((item) => {
          return (<h1>{item.title}</h1>)
        })
      }

    </>
  )
}
export default App;


