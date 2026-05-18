import React from "react";
import SingleCat from "./SingleCat";
import tiger from "../images/tiger.jpg"
import jaguar from "../images/jaguar.jpg"
import { useState } from "react";

function BigCats() {
  const cats = [
    {
  id: 1,
  name: "Cheetah",
  latinName: "Acinonyx jubatus",
  image: tiger,
    },
    {
      id: 2,
      name: 'aCougar',
      latinName: 'Puma concolor',
      image: jaguar
    },
    {
      id: 3,
      name: 'Jaguar',
      latinName: 'Panthera onca',
      image: 'https://source.unsplash.com/200x200/?jaguar'
    },
    {
      id: 4,
      name: 'Leopard',
      latinName: 'Panthera pardus',
      image: 'https://source.unsplash.com/200x200/?leopard'
    },
    {
      id: 5,
      name: 'Lion',
      latinName: 'Panthera leo',
      image: 'https://source.unsplash.com/200x200/?lion'
    },
    {
      id: 6,
      name: 'Snow leopard',
      latinName: 'Panthera uncia',
      image: 'https://source.unsplash.com/200x200/?snow-leopard'
    },
    {
      id: 7,
      name: 'Tiger',
      latinName: 'Panthera tigris',
      image: 'https://source.unsplash.com/200x200/?tiger'
    }

  ]

  const[currentCats, setCurrentCats] = useState(cats)

  const handeSortBigCats = () => {

  let newBigCats = [...currentCats];
  newBigCats.sort((a, b) => a.name.localeCompare(b.name));
setCurrentCats(newBigCats)
  }

  const handleReverseBigCats = () => {

  let newBigCats = [...currentCats];
  newBigCats.reverse();
  setCurrentCats(newBigCats);
}

  const handleFilterCats = () => {
        let newCats = currentCats.filter(cat => cat.latinName.startsWith('Panthera'));
        setCurrentCats(newCats);
    }

    const handleResetCats = () => {
        setCurrentCats(cats);
    }    
  return (
  <>
  <button onClick={handeSortBigCats}>Sort Cats</button>
  <button onClick={handleReverseBigCats}>Reverse Cats</button>
  <button onClick={handleFilterCats}>Filter Panthera Cats</button>
  <button onClick={handleResetCats}>Reset Cats</button>
    
    <ul> 
      {currentCats.map((cat) => (
        <SingleCat
          key={cat.id}
          name={cat.name}
          latinName={cat.latinName}
          image={cat.image}
        ></SingleCat>
      ))}
    </ul>
  </>

  
  );
}

export default BigCats;
