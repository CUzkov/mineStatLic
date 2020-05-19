import React from "react"
import DataStatBlock from './components/DataStatBlock.jsx'
import Header from './components/Header.jsx'

const userUUIDContext = React.createContext('');

class App extends React.Component {

  render(){
    return(
      <div>
        <userUUIDContext.Provider>
          <Header />
          <DataStatBlock />
        </userUUIDContext.Provider>
      </div>
    );
  }
}

export default App;
