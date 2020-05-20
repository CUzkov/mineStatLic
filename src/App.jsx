import React from "react"
import DataStatBlock from './components/DataStatBlock.jsx'
import Header from './components/Header.jsx'

class App extends React.Component {

  render(){
    return(
      <div>
        <Header />
        <DataStatBlock category="minecraft:broken"/>
        <DataStatBlock category="minecraft:crafted"/>
        <DataStatBlock category="minecraft:custom"/>
        <DataStatBlock category="minecraft:dropped"/>
        <DataStatBlock category="minecraft:killed"/>
        <DataStatBlock category="minecraft:killed_by"/>
        <DataStatBlock category="minecraft:mined"/>
        <DataStatBlock category="minecraft:picked_up"/>
        <DataStatBlock category="minecraft:used"/>
      </div>
    );
  }
}

export default App;
