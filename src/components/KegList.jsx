import React from 'react'
import Keg from './Keg'
export default KegList

var masterKegList = [
  {
    brand: 'Seattle Cider',
    type: 'Cider',
    name: 'SEATTLE CIDER DRY',
    cost: 
  },
  {
    brand: 'Seattle Cider',
    type: 'Cider',
    name: 'SEATTLE CIDER SEMI-SWEET',
    cost:
  },
  {
    brand: 'Rainier Beer',
    type: 'Lager',
    name: 'RAINIER',
    cost:
  },
  {
    brand: 'The Pike Brewing Company',
    type: 'IPA',
    name: 'PIKE IPA',
    cost:
   },
   {
    brand: 'The Pike Brewing Company',
    type: 'Ale',
    name: 'PIKE HIVE FIVE HOPPED HONEY',
    cost:
  },
  {
    brand: 'Fremont Brewing Company',
    type: 'Ale',
    name: 'FREMONT SUMMER ALE',
    cost:
   },
   {
    brand: 'Fremont Brewing Company',
    type: 'IPA',
    name: 'FREMONT IPA',
    cost:
   },
   {
    brand: 'RedHook Brewery',
    type: 'ESB',
    name: 'REDHOOK ESB',
    cost:
  },
  {
    brand: 'Mac & Jacks Brewing Company',
    type: 'ale',
    name: 'MAC & JACK’S AFRICAN AMBER',
    cost:
  },
  {
    brand: 'Mac & Jacks Brewing Company',
    type: 'porter',
    name: 'MAC & JACK’S BLACKCAT',
    cost:
  },
  {
    brand: 'Alaskan Brewing Co',
    type: 'ale',
    name: 'ALASKAN AMBER',
    cost:
   },
   {
    brand: 'Alaskan Brewing Co',
    type: 'pale ale',
    name: 'ALASKAN FREERIDE APA',
    cost:
  },
  {
    brand: 'Georgetown Brewing Company',
    type: 'pale ale',
    name: 'GEORGETOWN MANNY\'S',
    cost:
   },
   {
    brand: 'Georgetown Brewing Company',
    type: 'pilsner',
    name: 'GEORGETOWN ROGER’S',
    cost:
   },
   {
    brand: 'Georgetown Brewing Company',
    type: 'IPA',
    name: 'GEORGETOWN LUCILLE',
    cost:
  },
  {
    brand: 'Boneyard Beer',
    type: 'pale ale',
    name: 'BONEYARD BONE-A-FIDE',
    cost:
  },
  {
    brand: 'Boneyard Beer',
    type: 'IPA',
    name: 'BONEYARD RPM',
    cost:
  },
  {
    brand: 'Snoqualmie Falls Brewery',
    type: 'lager',
    name: 'SNOQUALMIE GHOSTWOOD KOLSCH',
    cost:
   },
   {
    brand: 'Snoqualmie Falls Brewery',
    type: 'porter',
    name: 'SNOQUALMIE STEAM TRAIN'

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
    name: 'ELYSIAN MEN’S ROOM RED'
    cost:
   },
   {
    brand: 'Elysian Brewing Company',
    type: 'stout',
    name: 'ELYSIAN DRAGONS TOOTH',
    cost:
  },
  {
    brand: 'Bad Jimmy\'s Brewing Co.',
    type: 'lager',
    name: 'BAD JIMMY\'S BAD LIGHT',
    cost:
  },
  {
    brand: 'Bad Jimmy\'s Brewing Co.',
    type: 'porter',
    name: 'BAD JIMMY\'S COCOA VANILLA',
    cost:
  },
  {
    brand: 'Maritime Pacific Brewing Company',
    type: 'ale',
    name: 'MARITIME FLAGSHIP RED',
    cost:
   },
   {
    brand: 'Maritime Pacific Brewing Company',
    type: 'lager',
    name: 'MARITIME DRY HOPPED OLD SEATTLE',
    cost:
  },
  {
    brand: 'Maritime Pacific Brewing Company',
    type: 'pilsner',
    name: 'MARITIME PACIFIC PORTAGE BAY',
    cost:
   },
   {
    brand: 'Woodinville Ciderworks',
    type: 'cider',
    name: 'WOODINVILLE CIDERWORKS PEACH GINGER CIDER',
    cost:
   },
   {
   brand: 'Finnriver Farm & Cidery',
   type: 'cider',
   name: 'FINN RIVER BLACK CURRANT',
   cost:
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
