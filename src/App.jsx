import React from "react"
import DataStatBlock from './components/DataStatBlock.jsx'
import Header from './components/Header.jsx'
import Profile from './components/profile.jsx'

class App extends React.Component {

  render(){
    return(
      <div className="mainApp">
        <Header />
        <div className="dataBody">
          <Profile />
          <div className="dataTable">
            <div className="dataString">
                <DataStatBlock category="minecraft:broken"/>
                <DataStatBlock category="minecraft:crafted"/>
                <DataStatBlock category="minecraft:custom"/>
              </div>
              <div className="dataString">
                <DataStatBlock category="minecraft:dropped"/>
                <DataStatBlock category="minecraft:killed"/>
                <DataStatBlock category="minecraft:killed_by"/>
              </div>
              <div className="dataString">
                <DataStatBlock category="minecraft:mined"/>
                <DataStatBlock category="minecraft:picked_up"/>
                <DataStatBlock category="minecraft:used"/>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
