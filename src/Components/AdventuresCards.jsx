import { useEffect, useState } from "react"
import AdventuresCard from "./AdventuresCard"
import 'animate.css';

<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</head>



export default function AdventuresCards() {
  const [adventuresCards, setData] = useState([])
  // console.log(adventuresCards)
  useEffect(() => {
    fetch('adventures.json')
      .then(res => res.json())
      .then(data =>setData(data))
  }, [])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 
    lg:grid-cols-3 gap-4 animate__animated animate__zoomIn">
        {
          adventuresCards.map(data=><AdventuresCard key={data.id} data={data}></AdventuresCard>)
        }
    </div>


  
  )
}
