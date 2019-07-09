import React from 'react'
import ConfirmationQuestions from './ConfirmationQuestions'
import NewKegForm from './NewKegForm'
import PropTypes from 'prop-types'

class NewKegControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false
    }
    this.handleInventoryConfirmation = this.handleInventoryConfirmation.bind(this)
  }

  handleInventoryConfirmation(){
    this.setState({formVisibleOnPage: true})
  }

  render(){
    let currentlyVisibleContent = null
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewKegForm onNewKegCreation={this.props.onNewKegCreation}/>
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onInventoryConfirmation={this.handleInventoryConfirmation}/>
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    )
  }
}

NewKegControl.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegControl
