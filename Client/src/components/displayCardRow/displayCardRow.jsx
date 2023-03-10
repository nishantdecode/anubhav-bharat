import React from 'react'
import Title from '../title/title.jsx'
import { Grid } from '@mui/material'
import DisplayCard from '../displayCard/displayCard.jsx'


const DisplayCardRow = ({data, titleHeading, titleDesc}) => {
//   import { useState } from "react"
// let numbers = [64, 84, 22, 32, 83, 65, 51, 26, 23, 56]
// function App() {
//  const [filteredNumbers, setFilteredNumbers] = useState(numbers)
//  const radioChangeHandler = e => {
//    const value = e.target.value
//    if (value === "even") {
//       setFilteredNumbers(
//         numbers.filter(number => {
//           if (number % 2 === 0) {
//             return true
//           }
//           return false
//         })
//       )
//     } else {
//       setFilteredNumbers(
//         numbers.filter(number => {
//           if (number % 2 !== 0) {
//             return true
//           }
//           return false
//         })
//       )
//     }
//   }

//   return (
//     <div className="App">
//       <h2>Number filtering</h2>
//       <input
//         type="radio"
//         name="evenOrOdd"
//         id="even"
//         value="even"
//         onChange={radioChangeHandler}
//       />
//       <label htmlFor="even">Even</label>
//       <input
//         type="radio"
//         name="evenOrOdd"
//         id="odd"
//         value="odd"
//         onChange={radioChangeHandler}
//       />
//       <label htmlFor="odd">Odd</label>
//       <ul>
//         {filteredNumbers.map(number => {
//           return <li key={number}>{number} </li>
//         })}
//       </ul>
//     </div>
//   )
// }

// export default App
    return (
      <>
          <Title heading={titleHeading} desc={titleDesc} />
          <Grid container rowSpacing={2}>
                {data.map((card) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} key={card} sx={{display:'flex', justifyContent:'center' }}>
                            <DisplayCard heading={card.Heading} loc={card.SubHeading} image={card.img}/>
                        </Grid>
                    )
                })}
              
          </Grid>
      </>
    )
}

export default DisplayCardRow