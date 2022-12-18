import React from 'react'
import axios from 'axios'

function App (){

async function loadData(){
 const response=  await axios.get('/food-items-by-category?category=breakfast')
  console.log(response.data.data);
}


return(
  <>
  <h1>Food Api</h1>
   <button onClick = {loadData}>Make Api call </button>
  </>
)
}
  export default App

  
