import React from 'react'
import Keg from './Keg'
export default KegList

var masterKegList = [
  {
    brewery: 'Left Hand',
    name: 'Milk Stout (Nitro)',
    pint: '9',
    growler: 'N/A',
    origin: 'CO',
    abv: '6.0'
  },
  {
    brewery: 'Modern Times',
    name: 'Black House w/ Coconut/Cocoa (Nitro)',
    pint: '6.5',
    growler: 'N/A',
    origin: 'CA',
    abv: '5.8'
  },
  {
    brewery: 'Ground Breaker',
    name: 'IPA #5 (Gluten Free)',
    pint: '8.5',
    growler: '26',
    origin: 'OR',
    abv: '5.6'
  },
  {
    brewery: '2 Towns',
    name: 'Pacific Pineapple Cider',
    pint: '5.50',
    growler: '17',
    origin: 'OR',
    abv: '5.0'
  },
  {
    brewery: 'Whitewood',
    name: 'Lil\' Rosybloom Crabapple Cider',
    pint: '6.5',
    growler: '38',
    origin: 'WA',
    abv: '10.7'
  },
  {
    brewery: 'Reverend Nat\'s',
    name: 'Sacrilege Sour Cherry Cider',
    pint: '5.5',
    growler: '17',
    origin: 'OR',
    abv: '6.5'
  },
  {
    brewery: 'Schilling',
    name: 'London Dry Cider',
    pint: '6.5',
    growler: '20',
    origin: 'WA',
    abv: '6.5'
  },
  {
    brewery: 'Finnriver',
    name: 'Oaken Haben Cider',
    pint: '10.50',
    growler: '32',
    origin: 'WA',
    abv: '6.5'
  },
  {
    brewery: 'Seattle Mead Company',
    name: 'Double Berry Tart Mead',
    pint: '9',
    growler: 'N/A',
    origin: 'WA',
    abv: '9.5'
  },
  {
    brewery: 'Mirage/Chuck\'s',
    name: 'I Know Kung Fu Hazy IPA',
    pint: '7',
    growler: '21',
    origin: 'WA',
    abv: '6.2'
  },
  {
    brewery: 'Stoup',
    name: 'Kristallweizen',
    pint: '5',
    growler: '15',
    origin: 'WA',
    abv: '4.8'
  },
  {
    brewery: 'Standard	',
    name: 'Last Beer on the Left IPA',
    pint: '5.5',
    growler: '17',
    abv: '6.0'
  },
  {
    brewery: 'Stoup',
    name: 'Kristallweizen',
    pint: '5',
    growler: '15',
    origin: 'WA',
    abv: '4.8'
  },
  {
    brewery: 'Stoup',
    name: 'Kristallweizen',
    pint: '5',
    growler: '15',
    origin: 'WA',
    abv: '4.8'
  },
  {
    brewery: 'Stoup',
    name: 'Kristallweizen',
    pint: '5',
    growler: '15',
    origin: 'WA',
    abv: '4.8'
  },
  {
    brewery: 'Stoup',
    name: 'Kristallweizen',
    pint: '5',
    growler: '15',
    origin: 'WA',
    abv: '4.8'
  },
  {
    brewery: 'Stoup',
    name: 'Kristallweizen',
    pint: '5',
    growler: '15',
    origin: 'WA',
    abv: '4.8'
  },
  {
    brewery: 'Stoup',
    name: 'Kristallweizen',
    pint: '5',
    growler: '15',
    origin: 'WA',
    abv: '4.8'
  },
  {
    brewery: 'Stoup',
    name: 'Kristallweizen',
    pint: '5',
    growler: '15',
    origin: 'WA',
    abv: '4.8'
  },
  {
    brewery: 'Stoup',
    name: 'Kristallweizen',
    pint: '5',
    growler: '15',
    origin: 'WA',
    abv: '4.8'
  },
  {
    brewery: 'Stoup',
    name: 'Kristallweizen',
    pint: '5',
    growler: '15',
    origin: 'WA',
    abv: '4.8'
  },
  {
    brewery: 'Stoup',
    name: 'Kristallweizen',
    pint: '5',
    growler: '15',
    origin: 'WA',
    abv: '4.8'
  },
  {
    brewery: 'Stoup',
    name: 'Kristallweizen',
    pint: '5',
    growler: '15',
    origin: 'WA',
    abv: '4.8'
  },
  {
    brewery: 'Stoup',
    name: 'Kristallweizen',
    pint: '5',
    growler: '15',
    origin: 'WA',
    abv: '4.8'
  },
  {
    brewery: 'Stoup',
    name: 'Kristallweizen',
    pint: '5',
    growler: '15',
    origin: 'WA',
    abv: '4.8'
  },
  {
    brewery: 'Stoup',
    name: 'Kristallweizen',
    pint: '5',
    growler: '15',
    origin: 'WA',
    abv: '4.8'
  },
  {
    brewery: 'Stoup',
    name: 'Kristallweizen',
    pint: '5',
    growler: '15',
    origin: 'WA',
    abv: '4.8'
  },
  {
    brewery: 'Stoup',
    name: 'Kristallweizen',
    pint: '5',
    growler: '15',
    origin: 'WA',
    abv: '4.8'
  },
  {
    brewery: 'Stoup',
    name: 'Kristallweizen',
    pint: '5',
    growler: '15',
    origin: 'WA',
    abv: '4.8'
  }
]

function KegList(){

  return (
    <div>
      background-color: lightblue;
      <hr/>
      {masterKegList.map((keg, index) =>
        <Keg brewery={keg.brewery}
          type={keg.type}
          name={keg.name}
          growler={keg.growler}
          key={index}/>
      )}
      
    </div>
  )}
