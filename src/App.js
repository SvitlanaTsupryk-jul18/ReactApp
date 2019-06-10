import React from 'react';
import Sidebar from './Components/Sidebar'
import PhonesCatalog from './Components/PhonesCatalog'
import PhonesViewer from './Components/PhonesViewer'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isShown: true
      // phone: ""
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = (id) => {
    this.setState(prevState => {
      return {
        isShown: !prevState.isShown,
        phone: id
      }
    })
    console.log(id)

  }


  render() {
    return (
      <div>
        <Sidebar />
        <PhonesCatalog isShown={this.state.isShown} onPhoneClicked={this.handleClick} />
        <PhonesViewer isShown={!this.state.isShown} phone={this.state.phone} />
      </div>
    );
  }
}

export default App