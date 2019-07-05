import React from 'react'
import Keg from './Keg'
export default KegList

var masterKegList = [
  {
    brand: 'Seattle Cider',
    type: 'Cider',
    name: 'SEATTLE CIDER DRY',
    
  },
  {
    brand: 'Seattle Cider',
    type: 'Cider',
    name: 'SEATTLE CIDER SEMI-SWEET',

  },
  {
    brand: 'Rainier',
    type: 'Lager',
    name: 'RAINIER'

  },
  {
    brand: 'The Pike Brewing Company',
    type: 'IPA',
    name: 'PIKE IPA'

   },
   {
    brand: 'The Pike Brewing Company',
    type: 'Ale',
    name: 'PIKE HIVE FIVE HOPPED HONEY'

  },
  {
    brand: 'Fremont Brewing Company',
    type: 'Ale',
    name: 'FREMONT SUMMER ALE'

   },
   {
    brand: 'Fremont Brewing Company',
    type: 'IPA',
    name: 'FREMONT IPA'

   },
   {
    brand: 'RedHook Brewery',
    type: 'ESB',
    name: 'REDHOOK ESB'

  },
  {
    brand: 'Mac & Jacks Brewing Company',
    type: 'ale',
    name: 'MAC & JACK’S AFRICAN AMBER'

  },
  {
    brand: 'Mac & Jacks Brewing Company',
    type: 'porter',
    name: 'MAC & JACK’S BLACKCAT'

  },
  {
    brand: 'Alaskan Brewing Co',
    type: 'ale',
    name: 'ALASKAN AMBER'
   },
   {
    brand: 'Alaskan Brewing Co',
    type: 'pale ale',
    name: 'ALASKAN FREERIDE APA'
  },
  {
    brand: 'Georgetown Brewing Company',
    type: 'pale ale',
    name: 'GEORGETOWN MANNY\'S'
   },
   {
    brand: 'Georgetown Brewing Company',
    type: 'pilsner',
    name: 'GEORGETOWN ROGER’S'
   },

   {
    brand: 'Georgetown Brewing Company',
    type: 'IPA',
    name: 'GEORGETOWN LUCILLE',
    
  },
  {
    brand: 'Boneyard Beer',
    type: 'pale ale',
    name: 'BONEYARD BONE-A-FIDE',

  },
  {
    brand: 'Rainier',
    type: 'Lager',
    name: 'RAINIER'

  },
  {
    brand: 'The Pike Brewing Company',
    type: 'IPA',
    name: 'PIKE IPA'

   },
   {
    brand: 'The Pike Brewing Company',
    type: 'Ale',
    name: 'PIKE HIVE FIVE HOPPED HONEY'

  },
  {
    brand: 'Fremont Brewing Company',
    type: 'Ale',
    name: 'FREMONT SUMMER ALE'

   },
   {
    brand: 'Fremont Brewing Company',
    type: 'IPA',
    name: 'FREMONT IPA'

   },
   {
    brand: 'RedHook',
    type: 'ESB',
    name: 'REDHOOK ESB'

  },
  {
    brand: 'Mac & Jacks',
    type: 'ale',
    name: 'MAC & JACK’S AFRICAN AMBER'

  },
  {
    brand: 'Mac & Jacks',
    type: 'porter',
    name: 'MAC & JACK’S BLACKCAT'

  },
  {
    brand: 'Alaskan Brewing Company',
    type: 'ale',
    name: 'ALASKAN AMBER'
   },
   {
    brand: 'Alaskan Brewing Company',
    type: 'pale ale',
    name: 'ALASKAN FREERIDE APA'
  },
  {
    brand: 'Georgetown Brewery',
    type: 'pale ale',
    name: 'GEORGETOWN MANNY\'S'
   },
   {
    brand: 'Georgetown Brewery',
    type: 'pilsner',
    name: 'GEORGETOWN ROGER’S'
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
