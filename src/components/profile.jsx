import React from "react"

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
        this.setState({timerIdForData: setInterval(this.refreshData, 1000)});
        this.setState({timerOfChange: setInterval(() => {
            if(sessionStorage.getItem('minecraftUUID') !== this.userUUID
                && !this.statusOfRefreshData){
                this.setState({timerIdForData: setInterval(this.refreshData, 1000)})
            }
        }, 1500)});
    }

    refreshData(){
        if(sessionStorage.getItem('minecraftUUID')){

            this.statusOfRefreshData = true;

            clearInterval(this.state.timerIdForData);

            this.userUUID = sessionStorage.getItem('minecraftUUID');

            //const proxyurl = "https://cors-anywhere.herokuapp.com/";
            const url = `https://sessionserver.mojang.com/session/minecraft/profile/${this.userUUID}`;
    
            fetch(url, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })
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
                    <img src={this.state.skinData} alt=""/>
                </div>
                <div className="profileName">
                    {this.state.palyerData.name}
                </div>
            </div>
        );
    }
}

export default Profile