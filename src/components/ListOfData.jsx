import React from "react"
import { CSSTransition } from 'react-transition-group';

function NumberList(props) {

	let mass = [];
	for (var key in props.numbers){
		mass.push( {id: [key], data: props.numbers[key]} );
	} 
	const numbers = mass;
	const listItems = numbers.map(({id, data}) => (
		
		<CSSTransition
		key={id}
		in={true}
		timeout={1000}
		className="listString"
		mountOnEnter
		unmountOnExit>
			<li>{props.dict[id]}: {data}</li>
		</CSSTransition>
	
	));  
	return (<ul>{listItems}</ul>);
  }

class ListOfData extends React.Component {

	render(){
		return(
			<div>
				{this.props.blockName}
				{this.props.ifOpen &&
					<NumberList 
						numbers={this.props.blockData} 
						dict={this.props.dict}/>
				}
			</div>
		);
	}
}
export default ListOfData;