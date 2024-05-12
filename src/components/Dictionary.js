import React, { useState } from 'react'


const dictionary ={

    


      React: "A JavaScript library for building user interfaces." ,

    Component: "A reusable building block in React." ,

      State: "An object that stores data for a component." 



}


const Dictionaryapp = () => {

    
         
    const [searchTerm , setSearchTerm] = useState("")
    const[searchResult , setSearchResult]= useState("")


    const handleChange = (e)=>{

          setSearchTerm(e.target.value)
    }

     const handleClick =()=>{

         if(dictionary[searchTerm]){
            setSearchResult(dictionary[searchTerm])
         }

         else{

            setSearchResult('Word not found in the dictionary.');
         }
     }

  return (
    <div>
        <input type="text"  value={searchTerm} onChange={handleChange}/>

          <button onClick={handleClick}>Search</button>

          

          <h1>Definition : {searchResult && <p>{searchResult}</p>}</h1>
    </div>
  )
}

export default Dictionaryapp