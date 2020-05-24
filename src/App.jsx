import React from "react"
import Header from './components/Header.jsx'
import DataBlock from './components/DataBlock'

class App extends React.Component {

	render(){
		return(
			<div className="mainApp">
				<Header />
				<DataBlock />
			</div>
		);
	}
}

export default App;
