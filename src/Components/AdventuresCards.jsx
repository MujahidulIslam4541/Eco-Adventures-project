import { useEffect, useState } from "react"
import AdventuresCard from "./AdventuresCard"



export default function AdventuresCards() {
  const [adventuresCards, setData] = useState([])
  // console.log(adventuresCards)
  useEffect(() => {
    fetch('adventures.json')
      .then(res => res.json())
      .then(data =>setData(data))
  }, [])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          adventuresCards.map(data=><AdventuresCard key={data.id} data={data}></AdventuresCard>)
        }
    </div>


  
  )
}
