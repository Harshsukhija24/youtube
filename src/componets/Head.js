import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YouTube_search_api } from "../utils/contants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch=useDispatch();
   const searchCache=useSelector((store)=>store.search)

  const[searchValue,setSearchValue]=useState(" ");
  const[suggest,setSuggest]=useState([]);
  const[showSuggestions,setShowsuggestions]=useState(false);


  useEffect(()=>{
    const timer= setTimeout(()=>{
    if(searchCache[searchValue]){
      setSuggest(searchCache[searchValue]);
      }
      else{
       Getyoutubevalue(); 
      }
    
    },200); 
    
    return()=>{
      clearTimeout(timer);
    };
  },[searchValue]);

  

 const Getyoutubevalue=async()=>{
     const data= await fetch(YouTube_search_api+searchValue);
     const json= await data.json();
     setSuggest(json[1]);
     dispatch(cacheResults({
      [searchValue]:json[1],
     })
     );

    }


  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  }

  return (
    <div className=" grid grid-flow-col p-5 m-2 shadow-lg ">
    <div className=" flex col-span-1">
      <img 
      onClick={()=>toggleMenuHandler()} 
      className=" h-8 cursor-pointer"
      alt="menu"
      src="https://www.svgrepo.com/show/520763/hamburger.svg"
      />
      <a href="/">
      <img className=" h-8 mx-2"
      alt="youtube logo"
      src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"
      />
      </a>
    </div>
    <div className=" col-span-10 px-10">
    <input className=" w-1/2 border border-gray-400 rounded-l-full"
     type="text"
    value={searchValue}
    onChange={(e)=>{setSearchValue(e.target.value)}}
    onFocus={()=>setShowsuggestions(true)}
    onBlur={()=>setShowsuggestions(false)}   
    />
    <button className=" border border-gray-100 px-5 py-2 rounded-r-full " >🔍</button>
    </div>
  { showSuggestions &&(
    <div className="  absolute m-8 p-4  bg-white py-2 px-3 w-[34rem] shadow-lg rounded-lg border border-gray-200">
    <ul>
    {suggest.map((s)=>(  
      <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100"> 🔍  {s} </li>
  ))}
    </ul>
    </div>)}
    <div>
    <img className=" h-8"
    alt="user"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png"
    />
    </div>
    </div>
  )
} 

export default Head;
