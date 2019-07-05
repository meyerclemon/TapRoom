import React from 'react'
import Keg from './Keg'
export default KegList

var masterKegList = [
  {
    brand: 'Seattle Cider',
    type: 'Cider',
    name: 'SEATTLE CIDER DRY',
    cost: 'sixtel: 129'
  },
  {
    brand: 'Seattle Cider',
    type: 'Cider',
    name: 'SEATTLE CIDER SEMI-SWEET',
    cost: 'sixtel: 129'
  },
  {
    brand: 'Rainier Beer',
    type: 'Lager',
    name: 'RAINIER',
    cost: '139'
  },
  {
    brand: 'The Pike Brewing Company',
    type: 'IPA',
    name: 'PIKE IPA',
    cost:'150'
   },
   {
    brand: 'The Pike Brewing Company',
    type: 'Ale',
    name: 'PIKE HIVE FIVE HOPPED HONEY',
    cost:'200'
  },
  {
    brand: 'Fremont Brewing Company',
    type: 'Ale',
    name: 'FREMONT SUMMER ALE',
    cost: '310'
   },
   {
    brand: 'Fremont Brewing Company',
    type: 'IPA',
    name: 'FREMONT LUSH IPA',
    cost: '350'
   },
   {
    brand: 'RedHook Brewery',
    type: 'ESB',
    name: 'REDHOOK ESB',
    cost: '219'
  },
  {
    brand: 'Mac & Jacks Brewing Company',
    type: 'ale',
    name: 'MAC & JACK’S AFRICAN AMBER',
    cost: '210'
  },
  {
    brand: 'Mac & Jacks Brewing Company',
    type: 'porter',
    name: 'MAC & JACK’S BLACKCAT',
    cost: '300'
  },
  {
    brand: 'Alaskan Brewing Co',
    type: 'ale',
    name: 'ALASKAN AMBER',
    cost: '219'
   },
   {
    brand: 'Alaskan Brewing Co',
    type: 'pale ale',
    name: 'ALASKAN FREERIDE APA',
    cost: '229'
  },
  {
    brand: 'Georgetown Brewing Company',
    type: 'pale ale',
    name: 'GEORGETOWN MANNY\'S',
    cost: 'sixtel: 99'
   },
   {
    brand: 'Georgetown Brewing Company',
    type: 'pilsner',
    name: 'GEORGETOWN ROGER’S',
    cost: '110'
   },
   {
    brand: 'Georgetown Brewing Company',
    type: 'IPA',
    name: 'GEORGETOWN LUCILLE',
    cost: 'sixtel:120'
  },
  {
    brand: 'Boneyard Beer',
    type: 'pale ale',
    name: 'BONEYARD BONE-A-FIDE',
    cost: '300'
  },
  {
    brand: 'Boneyard Beer',
    type: 'IPA',
    name: 'BONEYARD RPM',
    cost: '400'
  },
  {
    brand: 'Pabst Blue Ribbon',
    type: 'ale',
    name: 'PBR',
    cost: '139'
   },
   {
    brand: 'Stone Brewery',
    type: 'IPA',
    name: 'STONE IPA',
    cost: '219'
  },
  {
    brand: 'Snoqualmie Falls Brewery',
    type: 'IPA',
    name: 'SNOQUALMIE FALLS WILDCAT',
    cost:
   },
   {
    brand: 'Elysian Brewing Company',
    type: 'ale',
    name: 'ELYSIAN MEN’S ROOM RED',
    cost: 'sixtel: 109'
   },
   {
    brand: 'Elysian Brewing Company',
    type: 'stout',
    name: 'ELYSIAN DRAGONS TOOTH',
    cost: 'sixtel: 139'
  },
  {
    brand: 'Elysian Brewing Company',
    type: 'IPA',
    name: 'ELYSIAN IPA',
    cost: 'sixtel: 109'
  },
  {
    brand: 'Dos Equis',
    type: 'ale',
    name: 'DOS EQUIS AMBER ',
    cost: '209'
  },
  {
    brand: 'Full Sail Brewery',
    type: 'ale',
    name: 'FULL SAIL AMBER',
    cost: '219'
   },
   {
    brand: 'Maritime Pacific Brewing Company',
    type: 'lager',
    name: 'MARITIME DRY HOPPED OLD SEATTLE',
    cost:
  },
  {
    brand: 'The Boston Brewery | Samuel Adams',
    type: 'ale',
    name: 'SAM ADAMS OKTOBERFEST',
    cost: '219'
   },
   {
    brand: 'Spire Cider',
    type: 'cider',
    name: 'SPIRE CIDER',
    cost: '219'
   },
   {
   brand: 'Anthem Cider',
   type: 'cider',
   name: 'ANTHEM CIDER',
   cost: '229'
  }
  ]

function KegList(){

  return (
    <div>
      <hr/>
      {masterKegList.map((keg, index) =>
        <Keg names={keg.names}
          location={keg.location}
          issue={keg.issue}
          key={index}/>
      )}
    </div>
  )}
