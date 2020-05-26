import React from "react"
import Header from './components/Header.jsx'
import DataBlock from './components/DataFullTable.jsx'

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
