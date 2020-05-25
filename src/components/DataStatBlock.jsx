import React from "react"
import fireBaseApp from "./fireBaseApp";
//import { CSSTransition } from 'react-transition-group';
//import { TransitionGroup } from 'react-transition-group';

function NumberList(props) {
	const numbers = props.numbers;
	const listItems = numbers.map(({id, data}) => <li key={id}>{id}</li>);  
	return (<ul>{listItems}</ul>);
  }

class DataStatBlock extends React.Component {

	state = {
		timerIdForData: null,
		timerOfChange: null,
		isOpen: null
	}

	toUUIDFormat(){
		return sessionStorage.getItem('minecraftUUID').substring(0, 8) + '-'
				+ sessionStorage.getItem('minecraftUUID').substring(8, 12) + '-'
				+ sessionStorage.getItem('minecraftUUID').substring(12, 16) + '-'
				+ sessionStorage.getItem('minecraftUUID').substring(16, 20) + '-'
				+ sessionStorage.getItem('minecraftUUID').substring(20, 32);
	}

	static userUUID = '';
	static statusOfRefreshData = false;
	static allDataMass = [{key: "value"}];

	constructor(){

		super();

		this.refreshData = this.refreshData.bind(this);		
	}

	componentDidMount(){
		this.setState({isOpen: this.props.ifOpen});
		sessionStorage.setItem('minecraftUUID', 'eeb8ea31b5c94a69baee8ba8c22f04a9');
		this.setState({timerIdForData: setInterval(this.refreshData, 500)});
		this.setState({timerOfChange: setInterval(() => {
		if(sessionStorage.getItem('minecraftUUID') !== this.userUUID
			&& sessionStorage.getItem('minecraftUUID') !== null
			&& !this.statusOfRefreshData){
			this.setState({timerIdForData: setInterval(this.refreshData, 500)})
		}
		}, 1500)});
	}

	componentWillReceiveProps(prevProps){
		if(this.props.ifOpen !== prevProps.ifOpen){
			this.setState({isOpen: prevProps.ifOpen});
		}
	}

	refreshData(){

		if(sessionStorage.getItem('minecraftUUID')){

		this.statusOfRefreshData = true;

		clearInterval(this.state.timerIdForData);

		this.userUUID = sessionStorage.getItem('minecraftUUID');

		var DBRef = fireBaseApp.database().ref(`players/${this.toUUIDFormat()}/stats/${this.props.category}`);

		DBRef.on( 'value', (data) => {
			let mass = [];
			for (var key in data.val()){
				mass.push( {id: [key], data: data.val()[key]} );
			} 
			this.allDataMass = mass;
			this.statusOfRefreshData = false;
		});

		}
	}

	render(){
		return(
			<div>
			{this.props.category}
			{(this.state.isOpen && !this.statusOfRefreshData) &&
				<NumberList numbers={this.allDataMass} />
			}
			</div>
		);
	}
}
export default DataStatBlock;