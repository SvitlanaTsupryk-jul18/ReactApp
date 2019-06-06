import React from 'react';
import Sidebar from './Components/Sidebar'
import PhonesCatalog from './Components/PhonesCatalog'
import PhonesViewer from './Components/PhonesViewer'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isShown: true
    };
  }
  render() {
    return (
      <div>
        <Sidebar />
        <PhonesCatalog isShown={this.state.isShown} />
        <PhonesViewer isShown={!this.state.isShown} />
      </div>
    );
  }
}

export default App