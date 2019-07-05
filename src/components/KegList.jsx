import React from 'react'
import Keg from './Keg'
export default KegList

var masterKegList = [
  {
    brand: 'Seattle Cider',
    type: 'cider',
    name: 'SEATTLE CIDER DRY',
    cost: '129 /sixtel',
    pint: ''
  },
  {
    brand: 'Seattle Cider',
    type: 'cider',
    name: 'SEATTLE CIDER SEMI-SWEET',
    cost: '129 /sixtel',
    pint: ''
  },
  {
    brand: 'Rainier Beer',
    type: 'lager',
    name: 'RAINIER',
    cost: '139',
    pint: ''
  },
  {
    brand: 'The Pike Brewing Company',
    type: 'IPA',
    name: 'PIKE IPA',
    cost:'150',
    pint: ''
  },
  {
    brand: 'The Pike Brewing Company',
    type: 'ale',
    name: 'PIKE HIVE FIVE HOPPED HONEY',
    cost:'200',
    pint: ''
  },
  {
    brand: 'Fremont Brewing Company',
    type: 'ale',
    name: 'FREMONT SUMMER ALE',
    cost: '310',
    pint: ''
  },
  {
    brand: 'Fremont Brewing Company',
    type: 'IPA',
    name: 'FREMONT LUSH IPA',
    cost: '350',
    pint: ''
  },
  {
    brand: 'RedHook Brewery',
    type: 'pale ale',
    name: 'REDHOOK ESB',
    cost: '219',
    pint: ''
  },
  {
    brand: 'Mac & Jacks Brewing Company',
    type: 'ale',
    name: 'MAC & JACK’S AFRICAN AMBER',
    cost: '210',
    pint: ''
  },
  {
    brand: 'Mac & Jacks Brewing Company',
    type: 'porter',
    name: 'MAC & JACK’S BLACKCAT',
    cost: '300',
    pint: ''
  },
  {
    brand: 'Alaskan Brewing Co',
    type: 'ale',
    name: 'ALASKAN AMBER',
    cost: '219',
    pint: ''
  },
  {
    brand: 'Alaskan Brewing Co',
    type: 'pale ale',
    name: 'ALASKAN FREERIDE APA',
    cost: '229',
    pint: ''
  },
  {
    brand: 'Georgetown Brewing Company',
    type: 'pale ale',
    name: 'GEORGETOWN MANNY\'S',
    cost: '99 /sixtel',
    pint: ''
  },
  {
    brand: 'Georgetown Brewing Company',
    type: 'pilsner',
    name: 'GEORGETOWN ROGER’S',
    cost: '110',
    pint: ''
  },
  {
    brand: 'Georgetown Brewing Company',
    type: 'IPA',
    name: 'GEORGETOWN LUCILLE',
    cost: '120 /sixtel',
    pint: ''
  },
  {
    brand: 'Boneyard Beer',
    type: 'pale ale',
    name: 'BONEYARD BONE-A-FIDE',
    cost: '300',
    pint: ''
  },
  {
    brand: 'Boneyard Beer',
    type: 'IPA',
    name: 'BONEYARD RPM',
    cost: '400',
    pint: ''
  },
  {
    brand: 'Pabst Blue Ribbon',
    type: 'ale',
    name: 'PBR',
    cost: '139',
    pint: ''
  },
  {
    brand: 'Stone Brewery',
    type: 'IPA',
    name: 'STONE IPA',
    cost: '219',
    pint: ''
  },
  {
    brand: 'Silver City Brewery ',
    type: 'IPA',
    name: 'TROPIC HAZE IPA',
    cost: '119 /sixtel',
    pint: ''
  },
  {
    brand: 'Elysian Brewing Company',
    type: 'ale',
    name: 'ELYSIAN MEN’S ROOM RED',
    cost: '109 /sixtel',
    pint: ''
  },
  {
    brand: 'Elysian Brewing Company',
    type: 'stout',
    name: 'ELYSIAN DRAGONS TOOTH',
    cost: '139 /sixtel',
    pint: ''
  },
  {
    brand: 'Elysian Brewing Company',
    type: 'IPA',
    name: 'ELYSIAN IPA',
    cost: '109 /sixtel',
    pint: ''
  },
  {
    brand: 'Dos Equis',
    type: 'ale',
    name: 'DOS EQUIS AMBER ',
    cost: '209',
    pint: ''
  },
  {
    brand: 'Full Sail Brewery',
    type: 'ale',
    name: 'FULL SAIL AMBER',
    cost: '219',
    pint: ''
  },
  {
    brand: 'Hoegaarden',
    type: 'lager',
    name: 'HOEGAARDEN',
    cost: '219',
    pint: ''
  },
  {
    brand: 'The Boston Brewery | Samuel Adams',
    type: 'ale',
    name: 'SAM ADAMS OKTOBERFEST',
    cost: '219',
    pint: ''
  },
  {
    brand: 'Spire Cider',
    type: 'cider',
    name: 'SPIRE CIDER',
    cost: '219',
    pint: ''
  },
  {
    brand: 'Anthem Cider',
    type: 'cider',
    name: 'ANTHEM CIDER',
    cost: '229',
    pint: ''
  }
]

function KegList(){

  return (
    <div>
      background-color: lightblue;
      <hr/>
      {masterKegList.map((keg, index) =>
        <Keg brand={keg.brand}
          type={keg.type}
          name={keg.name}
          cost={keg.cost}
          key={index}/>
      )}
      
    </div>
  )}
