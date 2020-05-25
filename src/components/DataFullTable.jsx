import React from "react";
import Profile from './profile.jsx';
import fireBaseApp from "./fireBaseApp";
import DataString from './DataSrting'

class DataFullTable extends React.Component {

    constructor(){
        super();

        this.handleOnClickDataBlock = this.handleOnClickDataBlock.bind(this);
        this.refreshData = this.refreshData.bind(this);

    }

	toUUIDFormat(){
		return sessionStorage.getItem('minecraftUUID').substring(0, 8) + '-'
				+ sessionStorage.getItem('minecraftUUID').substring(8, 12) + '-'
				+ sessionStorage.getItem('minecraftUUID').substring(12, 16) + '-'
				+ sessionStorage.getItem('minecraftUUID').substring(16, 20) + '-'
				+ sessionStorage.getItem('minecraftUUID').substring(20, 32);
	}

    state = {
        isOpenDataBlock: false,
        timerIdForData: null,
        timerOfChange: null,
        allDataMass: {}
    }
   
    static blockNumb = '0';
    static userUUID = '';
	static statusOfRefreshData = false;

    handleOnClickDataBlock = (e) => {

        console.log("Вызван обработчик!!!");

        e.currentTarget.classList.toggle('notRemove');
        if(!this.state.isOpenDataBlock){
            this.setState({isOpenDataBlock: true});
            this.blockNumb = e.currentTarget.id;
        }
        else{
            this.setState({isOpenDataBlock: false});
            this.blockNumb = '0';
        }
    }

	refreshData(){

		if(sessionStorage.getItem('minecraftUUID')){

            this.statusOfRefreshData = true;

            clearInterval(this.state.timerIdForData);

            this.userUUID = sessionStorage.getItem('minecraftUUID');

            var DBRef = fireBaseApp.database().ref(`players/${this.toUUIDFormat()}/stats`);

            DBRef.on( 'value', (data) => {

                console.log(data.val());
                
                this.setState({allDataMass: data.val()});
                this.statusOfRefreshData = false;
		    });

		}
	}

    componentDidMount(){
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

    render(){
        return(
            <div>
                <div className="dataBody">
                    <div className="profile">
                        <Profile />
                    </div>
                    <div className="dataTable">
                        <DataString 
                            handle={this.handleOnClickDataBlock}

                            firstBlockBool={(this.state.isOpenDataBlock && (this.blockNumb === '1'))}
                            secondBlockBool={(this.state.isOpenDataBlock && (this.blockNumb === '2'))}
                            thirdBlockBool={(this.state.isOpenDataBlock && (this.blockNumb === '3'))}

                            firstBlockData={this.state.allDataMass["minecraft:broken"]}
                            secondBlockData={this.state.allDataMass["minecraft:crafted"]}
                            thirdBlockData={this.state.allDataMass["minecraft:custom"]}

                            firstBlockBool2={(!this.state.isOpenDataBlock || this.blockNumb === '1')}
                            secondBlockBool2={(!this.state.isOpenDataBlock || this.blockNumb === '2')}
                            thirdBlockBool2={(!this.state.isOpenDataBlock || this.blockNumb === '3')}

                            firstId="1"
                            secondId="2"
                            thirdId="3"
                            
                            firstName=""
                            secondName=""
                            thirdName=""/>
                        <DataString 
                            handle={this.handleOnClickDataBlock}

                            firstBlockBool={(this.state.isOpenDataBlock && (this.blockNumb === '4'))}
                            secondBlockBool={(this.state.isOpenDataBlock && (this.blockNumb === '5'))}
                            thirdBlockBool={(this.state.isOpenDataBlock && (this.blockNumb === '6'))}

                            firstBlockData={this.state.allDataMass["minecraft:dropped"]}
                            secondBlockData={this.state.allDataMass["minecraft:killed"]}
                            thirdBlockData={this.state.allDataMass["minecraft:killed_by"]}

                            firstBlockBool2={(!this.state.isOpenDataBlock || this.blockNumb === '4')}
                            secondBlockBool2={(!this.state.isOpenDataBlock || this.blockNumb === '5')}
                            thirdBlockBool2={(!this.state.isOpenDataBlock || this.blockNumb === '6')}

                            firstId="4"
                            secondId="5"
                            thirdId="6"
                            
                            firstName=""
                            secondName=""
                            thirdName=""/>
                        <DataString 
                            handle={this.handleOnClickDataBlock}

                            firstBlockBool={(this.state.isOpenDataBlock && (this.blockNumb === '7'))}
                            secondBlockBool={(this.state.isOpenDataBlock && (this.blockNumb === '8'))}
                            thirdBlockBool={(this.state.isOpenDataBlock && (this.blockNumb === '9'))}

                            firstBlockData={this.state.allDataMass["minecraft:mined"]}
                            secondBlockData={this.state.allDataMass["minecraft:picked_up"]}
                            thirdBlockData={this.state.allDataMass["minecraft:used"]}

                            firstBlockBool2={(!this.state.isOpenDataBlock || this.blockNumb === '7')}
                            secondBlockBool2={(!this.state.isOpenDataBlock || this.blockNumb === '8')}
                            thirdBlockBool2={(!this.state.isOpenDataBlock || this.blockNumb === '9')}

                            firstId="7"
                            secondId="8"
                            thirdId="9"
                            
                            firstName=""
                            secondName=""
                            thirdName=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default DataFullTable