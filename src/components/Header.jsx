import React from "react"

class Header extends React.Component {

    state = {
        user: ''
    };

    onSubmitNew = (e) => {
        e.preventDefault();

        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `https://api.mojang.com/users/profiles/minecraft/${this.state.user}?at=${Date.now()}`;

        fetch(proxyurl + url, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
        .then((resp) => resp.json())
        .then(function(data) {
            sessionStorage.setItem('minecraftUUID', data.id);
        })
        .catch( (error) => {
            console.log(error);
        }); 

    }

    handleChangeEmail = (event) => { this.setState({user: event.target.value}); }

    render(){
        return(
            <div className="Header">
                <h1 className="mainLabel">Minecraft server statistics</h1>
                <div className="leftHeader">
                    <form 
                        onSubmit={this.onSubmitNew}
                        className="findPlayer">
                        <input 
                            type="text" 
                            value={this.state.user} 
                            onChange={this.handleChangeEmail} 
                            placeholder="Никнейм игрока" 
                            id="nickname"
                            required/>
                        <button 
                            type="submit"
                            className="searchButton">
                            Найти игрока</button>    
                    </form>
                    <a 
                        href="https://github.com/CUzkov"
                        target="_blank"
                        rel="noopener noreferrer">
                        <svg 
                            height="48" 
                            viewBox="0 0 16 16" 
                            width="48" 
                            aria-hidden="true"
                            className="githubImage">
                            <path 
                                fillRule="evenodd" 
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
        );
    }
}

export default Header