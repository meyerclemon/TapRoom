import React from 'react'
import Header from './Header'
import KegList from './KegList'
import { Switch, Route } from 'react-router-dom'
// import NewKegForm from './NewKegForm'
import PatronAgeControl from './PatronAgeControl'
import Error404 from './Error404'



function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={KegList} />
        {/* <Route path='/newkeg' component={NewKegForm} /> */}
        <Route path='/agecontrol' component={PatronAgeControl} />
        <Route component={Error404} />
      </Switch>

    </div>
  )
}

export default App
