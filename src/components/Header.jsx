import React from "react"

class Header extends React.Component {

    state = {
        user: ''
    };

    onSubmitNew = async (e) => {
        e.preventDefault();

        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `https://api.mojang.com/users/profiles/minecraft/${this.state.user}?at=${Date.now()}`;

        fetch(proxyurl + url)
        .then((resp) => resp.json())
        .then(function(data) {
          console.log(data);
        })
        .catch(function(error) {
          console.log(error);
        }); 

    }

    handleChangeEmail = (event) => { this.setState({user: event.target.value}); }

    render(){
        return(
            <div className="Header">
                <h1>Minecraft server statistics</h1>
                <form onSubmit={this.onSubmitNew}>
                    <input 
                        type="text" 
                        value={this.state.user} 
                        onChange={this.handleChangeEmail} 
                        placeholder="Email или никнейм игрока" 
                        id="nickname"
                        required/>
                    <button type="submit">Найти игрока</button>    
                </form>
            </div>
        );
    }
}

export default Header