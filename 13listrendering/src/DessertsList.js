/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
function DessertsList(props) {
  // Implement the component here.
  const lowCaloriesDesserts = props.data 
 .filter((dessert) => { 
   return dessert.calories < 500; 
 }).sort((a,b)=>a.calories-b.calories).map((item) =>
  { 
  //   let res = `${item.name}-${item.calories} calories`
  //  return <li>{res}</li>
   return <li>{item.name}-{item.calories} calories</li>
   }
  )
  return <ul>{lowCaloriesDesserts}</ul>
}
export default DessertsList;