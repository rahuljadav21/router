import React,{useState,useEffect} from 'react'

 function  ItemDetail({match}) {
  
 useEffect(()=>{
     fetchItem(); 
    // console.log(item)
 },[]);
 const imgStyle = {
    width : '33%'
}
 const [item,setItem] = useState({data:{ item:{images:{}} },});

 const fetchItem = async()=>{
     const data = await fetch(
         `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
     );
     let item = await data.json();
     setItem(item)
     console.log(item)
    }
     
     return (
        <div>
            <p></p>
           <h1>{item.data.item.name}</h1>
           <p>Description :{item.data.item.description} </p>
           <img style={imgStyle} src= {item.data.item.images.icon} />
           <img style={imgStyle} src= {item.data.item.images.background} />
           <img style={imgStyle} src= {item.data.item.images.information} />

        </div>
    )
}

export default ItemDetail
