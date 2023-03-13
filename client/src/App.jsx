import { useEffect, useState } from 'react'
import './App.css'
import { Users } from './User'
import axios from 'axios'
import Table from './Table'

// simple search without api


const App = () => {
  const [query, setQuery] = useState("")
  return (
    <div className="body">
    <div className="app">
      <input type="text" className="search" placeholder='Search....'
        onChange={(e) => setQuery(e.target.value.toLowerCase())
        } />

      <ul className="list">{Users.filter((asd) => asd.first_name.toLowerCase().includes(query)
      ).map((user) => (<li className='listItem' key={user.id}>
        <p>{user.first_name}</p>
        <p>{user.email}</p>
      </li>
      ))}</ul>
    </div>
    </div>
  )
}

export default App

///////////////////////SEARCH ON A DATATABLE


// const App = () => {
//   const [query , setQuery] = useState("");
//   const keys = ["first_name" , "last_name" , "email"];

//   const search = (data) =>{
//     return data.filter((item)=>
//     keys.some((key)=> item[key].toLowerCase().includes(query))
//     );

//   };

//   return (
//     <div className="body">
//     <div className='app'>
//       <input type="text" className='search' 
//       placeholder='Search...'
//       onChange={(e)=>setQuery(e.target.value.toLowerCase())}/>
//       {<Table data = {search(Users)}/>}
//     </div>
//     </div>
//   )
// }

// export default App

////////////////////// API SEARCH


// const App = () => {
//   const [query , setQuery] = useState("")
//   const [data , setData] = useState([])

//   useEffect(()=>{
//     const fetchData = async () => {
//       const res =  await axios.get(`http://localhost:5000?q=${query}`);
//       setData(res.data);
//     };

//     if (query.length === 0 || query.length > 2) fetchData();
//   }, [query])
//   return (
//    <div className="app">
//     <input type="text" className="search" placeholder='Search....' 
//     onChange={(e)=>setQuery(e.target.value.toLowerCase())}/>
//     {<Table data={data}/>}
//    </div>
//   )
// }

// export default App

