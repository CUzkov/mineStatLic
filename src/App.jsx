import React from "react"
import DataStatBlock from './components/DataStatBlock.jsx'
import Header from './components/Header.jsx'

class App extends React.Component {

  render(){
    return(
      <div>
        <Header />
        <DataStatBlock />
      </div>
    );
  }
}

export default App;
