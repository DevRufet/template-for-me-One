import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import './admin.scss'
function Admin() {
    const [datas, setdatas] = useState([])
    const [myinp, setmyinp] = useState("")
    useEffect(() => {
      products()
    }, [])
    async function getproduct() {
        const response = await fetch('http://localhost:3000/products');
        const movies = await response.json();
        return movies;
      }
      async function products(){
          let datam=await getproduct()
          setdatas(datam)
      }
      async function remove(id) {
        const response = await fetch('http://localhost:3000/products/'+id,{
            method:"delete"
        });
        products()
      }
      function az(item){
       setdatas(datas.toSorted((a,b) => (a[item] > b[item]) ? 1 : ((b[item] > a[item]) ? -1 : 0))) 
      }
      function za(item){
        setdatas(datas.toSorted((a,b) => (a[item] < b[item]) ? 1 : ((b[item] < a[item]) ? -1 : 0))) 
       }
  return (
      <>
       <Helmet>
        <title>Admin</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      
      <input type="text" value={myinp}  onChange={(e)=>setmyinp(e.target.value)}/>
      <br />
      <button onClick={()=>az('price')}
      >A-z</button>
      <br />
      <button  onClick={()=>za('price')}>Z-a</button>
        <table>
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Price</th>
    <th>Remove</th>
  </tr>
  {
   datas.filter((x)=>x.name.toLowerCase().includes(myinp.toLowerCase()))
  .map((x)=>
  <tr key={x._id}>
    <td>{x.name}</td>
    <td>{x.desc}</td>
    <td>{x.price}</td>
    <td><button onClick={()=>remove(x._id)}>Remove</button></td>
  </tr>)


  }
  
  
</table>


      
      </>
    
  )
}

export default Admin