import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Keg from './Keg'
export default KegList

var masterKegList = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}))

function createData(brewery, name, pint, growler, origin, abv) {
  return { brewery, name, pint, growler, origin, abv }
}

const rows = [
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
    brewery: 'Dwinell Country Ales',
    name: 'Horsethief Farmhouse Pale',
    pint: '7',
    growler: '21',
    origin: 'WA',
    abv: '7.1'
  },
  {
    brewery: 'Fremont',
    name: 'Brother IIPA	',
    pint: '8.50',
    growler: '26',
    origin: 'WA',
    abv: '8.5'
  },
  {
    brewery: 'Gigantic',
    name: 'Most Most Premium Stout',
    pint: '6.50',
    growler: 'N/A',
    origin: 'OR',
    abv: '10.0'
  },
  {
    brewery: 'Lost Abbey',
    name: 'Judgment Day Quad',
    pint: '7.50',
    growler: '23',
    origin: 'CA',
    abv: '10.2'
  },
  {
    brewery: 'White Bluffs',
    name: 'Red Altbier',
    pint: '7',
    growler: '21',
    origin: 'WA',
    abv: '6.4'
  },
  {
    brewery: 'Cloudburst',
    name: 'Art Deco Stuff IIPA',
    pint: '6.5',
    growler: '20',
    origin: 'WA',
    abv: '8.3'
  },
  {
    brewery: 'Wander',
    name: 'Earlybird BA Breakfast Stout',
    pint: '8',
    growler: '48',
    origin: 'WA',
    abv: '9.6'
  },
  {
    brewery: 'Boulevard',
    name: 'Tank 7 Saison',
    pint: '8',
    growler: '24',
    origin: 'MO',
    abv: '8.0'
  },
  {
    brewery: 'Cloudburst',
    name: 'In Those Jeans IPA',
    pint: '5.5',
    growler: '17',
    origin: 'WA',
    abv: '7.0'
  },
  {
    brewery: 'Upright',
    name: 'Heart\'s Beat Cherry Sour',
    pint: '7.5',
    growler: '23',
    origin: 'OR',
    abv: '6.8'
  },
  {
    brewery: 'Skookum',
    name: 'Next New IPA',
    pint: '6',
    growler: '18',
    origin: 'WA',
    abv: '7.1'
  },
  {
    brewery: 'Founders',
    name: 'Blushing Monk Raspberry Belgian',
    pint: '5.5',
    growler: '33',
    origin: 'MI',
    abv: '9.2'
  },
  {
    brewery: 'Matchless',
    name: 'Cherry Matchless Bar Stout',
    pint: '7',
    growler: '41',
    origin: 'WA',
    abv: '11.2'
  },
  {
    brewery: 'Bale Breaker',
    name: 'Mango IPA',
    pint: '7.5',
    growler: '23',
    origin: 'WA',
    abv: '5.9'
  },
  {
    brewery: 'Wayfinder	',
    name: 'Songs of Courtship Kellerbier',
    pint: '7',
    growler: '21',
    origin: 'OR',
    abv: '5.5'
  },
  {
    brewery: 'Cloudburst',
    name: 'This Is My Friday Keller Pilsner',
    pint: '5.5',
    growler: '17',
    origin: 'WA',
    abv: '5.3'
  },
  {
    brewery: 'Matchless',
    name: 'Sunbreak Summer IPA',
    pint: '5.5',
    growler: '17',
    origin: 'WA',
    abv: '6.3'
  },
  {
    brewery: 'Holy Mountain',
    name: 'Kristallweizen',
    pint: '6.5',
    growler: 'N/A',
    origin: 'WA',
    abv: '5.5'
  },
  {
    brewery: 'Mazama',
    name: 'Rye BA Baltic Porter',
    pint: '7',
    growler: '42',
    origin: 'OR',
    abv: '9.0'
  },
  {
    brewery: 'Schöfferhofer',
    name: 'Grapefruit Hefeweizen Radler',
    pint: '5',
    growler: '15',
    origin: 'GER',
    abv: '2.5'
  },
  {
    brewery: 'Modern Times',
    name: 'Gravity Hammer Berliner',
    pint: '6.5',
    growler: '39',
    origin: 'CA',
    abv: '10.0'
  },
  {
    brewery: 'Machine House',
    name: 'KristalSummer Alelweizen',
    pint: '6.5',
    growler: '20',
    origin: 'WA',
    abv: '4.6'
  },
  {
    brewery: 'Georgetown',
    name: 'Johnny Utah Citra Pale Ale',
    pint: '6',
    growler: '18',
    origin: 'WA',
    abv: '5.6'
  },
  {
    brewery: 'Oskar Blues',
    name: 'Old Chub Scotch Ale',
    pint: '5.5',
    growler: '17',
    origin: 'CO',
    abv: '8.0'
  },
  {
    brewery: 'E9',
    name: 'Realize, Real Lies IPA',
    pint: '5',
    growler: '15',
    origin: 'WA',
    abv: '6.0'
  }
]

function KegList(){

  return (
    <div>
      <style jsx>{`
                h3{
                  font-family: sans-serif;

                }
          `}</style>
      <h3>Brewery | Name | Pint | Growler | Origin | Alcohol By Volume</h3>
                
      <hr/>
      {masterKegList.map((keg, index) =>
        <Keg brewery={keg.brewery}
          name={keg.name}
          pint={keg.pint}
          growler={keg.growler}
          origin={keg.origin}
          abv={keg.abv}
          key={index}/>
      )}
      
    </div>
  )}
