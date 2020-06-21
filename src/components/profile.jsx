import React from 'react'
import loadImg from '../img/25.svg'

class Profile extends React.Component {

    state = {
        timerIdForData: null,
        timerOfChange: null,
        palyerData: {},
        skinData: ''
    }

    static userUUID = '';
    static statusOfRefreshData = false;

    constructor(){

        super();
        this.refreshData = this.refreshData.bind(this);
    }

    componentDidMount(){
        sessionStorage.setItem('minecraftUUID', 'eeb8ea31b5c94a69baee8ba8c22f04a9');
        this.setState({timerIdForData: setInterval(this.refreshData, 500)});
        this.setState({timerOfChange: setInterval(() => {
            if(sessionStorage.getItem('minecraftUUID') !== this.userUUID
                && !this.statusOfRefreshData){
                this.setState({timerIdForData: setInterval(this.refreshData, 500)})
            }
        }, 600)});
    }

    refreshData(){
        if(sessionStorage.getItem('minecraftUUID')){

            this.statusOfRefreshData = true;

            this.setState({palyerData: {}});
            this.setState({skinData: ''});

            clearInterval(this.state.timerIdForData);

            this.userUUID = sessionStorage.getItem('minecraftUUID');

            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            const url = `https://sessionserver.mojang.com/session/minecraft/profile/${this.userUUID}`;

            fetch(proxyurl + url)
            .then((resp) => resp.json())
            .then( (data) => {
                 this.setState({palyerData: data});
                 this.setState({skinData: `https://visage.surgeplay.com/full/${data.id}?tilt=0`});
            })
            .catch( (error) => {
                console.log(error);
            }); 

            this.statusOfRefreshData = false;
        }
    }

    render(){
        return(
            <div className="profileInside">
                <div className="profileSkin">
                    { this.state.skinData ? <img src={this.state.skinData} alt=""/> : <img src={loadImg} alt=""/> }
                </div>
                <div className="profileName">
                    { this.state.skinData ? <div>{this.state.palyerData.name}</div> : <img src={loadImg} alt="" height={20}/> }
                </div>
            </div>
        );
    }
}

export default Profile