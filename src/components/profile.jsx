import React from "react"

class Profile extends React.Component {

    state = {
        timerIdForData: null,
        timerOfChange: null,
    }

    static userUUID = '';
    static statusOfRefreshData = false;

    constructor(){

        super();
        this.refreshDataP = this.refreshDataP.bind(this);
    }

    componentDidMount(){
        sessionStorage.setItem('minecraftUUID', 'eeb8ea31b5c94a69baee8ba8c22f04a9');
        this.setState({timerIdForData: setInterval(this.refreshDataP, 1000)});
        this.setState({timerOfChange: setInterval(() => {
            if(sessionStorage.getItem('minecraftUUID') !== this.userUUID
                && !this.statusOfRefreshData){
                this.setState({timerIdForData: setInterval(this.refreshDataP, 1000)})
            }
        }, 1500)});
    }

    refreshDataP(){
        if(sessionStorage.getItem('minecraftUUID')){

            this.statusOfRefreshData = true;

            clearInterval(this.state.timerIdForData);

            this.userUUID = sessionStorage.getItem('minecraftUUID');

            const proxyurl = "https://cors-anywhere.herokuapp.com/";
            const url = `https://sessionserver.mojang.com/session/minecraft/profile/${this.userUUID}`;
    
            fetch(proxyurl + url, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            })
            .then((resp) => resp.json())
            .then(function(data) {
                console.log(data);
            })
            .catch( (error) => {
                console.log(error);
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

export default Profile