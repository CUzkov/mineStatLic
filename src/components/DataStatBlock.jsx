import React, { Component } from "react"
import fireBaseApp from "./fireBaseApp";

class DataStatBlock extends Component {

  constructor(){
    super();

    var DBRef = fireBaseApp.database().ref('players');

    DBRef.on('value', (data) => {
      console.log(data.val());
    });

  }

  render(){
      return(
        <div>

        </div>
      );
  }
}
export default DataStatBlock;