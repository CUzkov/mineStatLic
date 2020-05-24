import React from "react";
import DataStatBlock from './DataStatBlock.jsx';
import Profile from './profile.jsx';
import { CSSTransition } from 'react-transition-group';

class DataBlock extends React.Component {

    constructor(){
        super();

        this.handleOnClickDataBlock = this.handleOnClickDataBlock.bind(this);
    }

    state = {
        isOpenDataBlock: false
    }

    static blockNumb = '0';

    handleOnClickDataBlock = (e) => {
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

    render(){
        return(
            <div>
                <div className="dataBody">
                    <div className="profile">
                        <Profile />
                    </div>
                    <div className="dataTable">
                        <div className="dataString">
                            <CSSTransition
                                in={(!this.state.isOpenDataBlock || this.blockNumb === '1')}
                                timeout={500}
                                className="my-node DataStatBlock"
                                mountOnEnter
                                unmountOnExit>
                                    <div onClick={this.handleOnClickDataBlock}
                                        id="1">
                                        <DataStatBlock category="minecraft:broken"/>
                                    </div>
                            </CSSTransition>
                            <CSSTransition
                                in={(!this.state.isOpenDataBlock || this.blockNumb === '2')}
                                timeout={500}
                                className="my-node DataStatBlock"
                                mountOnEnter
                                unmountOnExit>
                                    <div onClick={this.handleOnClickDataBlock}
                                        id="2">
                                        <DataStatBlock category="minecraft:crafted"/>
                                    </div>
                            </CSSTransition>
                            <CSSTransition
                                in={(!this.state.isOpenDataBlock || this.blockNumb === '3')}
                                timeout={500}
                                className="my-node DataStatBlock"
                                mountOnEnter
                                unmountOnExit>
                                    <div onClick={this.handleOnClickDataBlock}
                                        id="3">
                                        <DataStatBlock category="minecraft:custom"/>
                                    </div>
                            </CSSTransition>
                        </div>
                        <div className="dataString">
                            <CSSTransition
                                in={(!this.state.isOpenDataBlock || this.blockNumb === '4')}
                                timeout={500}
                                className="my-node DataStatBlock"
                                mountOnEnter
                                unmountOnExit>
                                    <div onClick={this.handleOnClickDataBlock}
                                        id="4">
                                        <DataStatBlock category="minecraft:dropped"/>
                                    </div>
                            </CSSTransition>
                            <CSSTransition
                                in={(!this.state.isOpenDataBlock || this.blockNumb === '5')}
                                timeout={500}
                                className="my-node DataStatBlock"
                                mountOnEnter
                                unmountOnExit>
                                    <div onClick={this.handleOnClickDataBlock}
                                        id="5">
                                        <DataStatBlock category="minecraft:killed"/>
                                    </div>
                            </CSSTransition>
                            <CSSTransition
                                in={(!this.state.isOpenDataBlock || this.blockNumb === '6')}
                                timeout={500}
                                className="my-node DataStatBlock"
                                mountOnEnter
                                unmountOnExit>
                                    <div onClick={this.handleOnClickDataBlock}
                                        id="6">
                                        <DataStatBlock category="minecraft:killed_by"/>
                                    </div>
                            </CSSTransition>
                        </div>
                        <div className="dataString">
                            <CSSTransition
                                in={(!this.state.isOpenDataBlock || this.blockNumb === '7')}
                                timeout={500}
                                className="my-node DataStatBlock"
                                mountOnEnter
                                unmountOnExit>
                                    <div onClick={this.handleOnClickDataBlock}
                                        id="7">
                                        <DataStatBlock category="minecraft:mined"/>
                                    </div>
                            </CSSTransition>
                            <CSSTransition
                                in={(!this.state.isOpenDataBlock || this.blockNumb === '8')}
                                timeout={500}
                                className="my-node DataStatBlock"
                                mountOnEnter
                                unmountOnExit>
                                    <div onClick={this.handleOnClickDataBlock}
                                        id="8">
                                        <DataStatBlock category="minecraft:picked_up"/>
                                    </div>
                            </CSSTransition>
                            <CSSTransition
                                in={(!this.state.isOpenDataBlock || this.blockNumb === '9')}
                                timeout={500}
                                className="my-node DataStatBlock"
                                mountOnEnter
                                unmountOnExit>
                                    <div onClick={this.handleOnClickDataBlock}
                                        id="9">
                                        <DataStatBlock category="minecraft:used"/>
                                    </div>
                            </CSSTransition>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DataBlock