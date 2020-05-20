import React, { Component } from "react"
import fireBaseApp from "./fireBaseApp";

class DataStatBlock extends Component {

  state = {
    timerIdForData: null,
    timerOfChange: null,
  }

  static userUUID = '';
  static statusOfRefreshData = false;

  constructor(){

    super();

    this.refreshData = this.refreshData.bind(this);
    
  }

  toUUIDFormat(){
    return sessionStorage.getItem('minecraftUUID').substring(0, 8) + '-'
            + sessionStorage.getItem('minecraftUUID').substring(8, 12) + '-'
            + sessionStorage.getItem('minecraftUUID').substring(12, 16) + '-'
            + sessionStorage.getItem('minecraftUUID').substring(16, 20) + '-'
            + sessionStorage.getItem('minecraftUUID').substring(20, 32);
  }

  componentDidMount(){

    this.setState({timerIdForData: setInterval(this.refreshData, 500)});
    this.setState({timerOfChange: setInterval(() => {
      if(sessionStorage.getItem('minecraftUUID') !== this.userUUID
        && sessionStorage.getItem('minecraftUUID') !== null
        && !this.statusOfRefreshData){
        this.setState({timerIdForData: setInterval(this.refreshData, 500)})
      }
    }, 1500)});
  }

  refreshData(){
    if(sessionStorage.getItem('minecraftUUID')){

      this.statusOfRefreshData = true;

      clearInterval(this.state.timerIdForData);

      this.userUUID = sessionStorage.getItem('minecraftUUID');

      var DBRef = fireBaseApp.database().ref(`players/${this.toUUIDFormat()}/stats/${this.props.category}`);

      DBRef.on('value', (data) => {
        console.log(data.val());
      });

      this.statusOfRefreshData = false;
    }
  }

  render(){
      return(
        <div>

        </div>
      );
  }
}
export default DataStatBlock;