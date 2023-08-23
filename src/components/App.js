
import React, { useState } from "react";
import './../styles/App.css';

const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
  "Item 13",
  "Item 14",
  "Item 15",
  "Item 16",
  "Item 17",
  "Item 18",
  "Item 19",
  "Item 20",
  "Item 21",
  "Item 22",
  "Item 23",
  "Item 24",
  "Item 25",
  "Item 26",
  "Item 27",
  "Item 28",
  "Item 29",
  "Item 30"
];


let count = 0;
const App = () => {
  
  let moreItems = [];
  let [loaded,setLoaded] = useState([]);
  let [button,setButton] = useState(true)

  const loadMore = () =>{
    count += 10;
    if(count == 30){
      setButton(false);
    }
    for (let i = 0; i < count; i++) {
      moreItems[i] =  items[i];    
    }
    setLoaded(moreItems);
  }

  return (
    <div>
      {/* Do not remove the main div */}
    <ul>
      {
        loaded.map((value,index)=>(
          <li key={index}>{value}</li>
        ))
      }
    </ul>
    {
      button && <button onClick={loadMore}>Load More</button>
    }
    </div>
  )
}

export default App
