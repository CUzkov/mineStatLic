import React from 'react'
import ListOfData from './ListOfData'
import { CSSTransition } from 'react-transition-group'

class DataBlock extends React.Component{


    render(){
        return(
            <CSSTransition
                in={this.props.isNeedRenderBlock}
                timeout={500}
                className="my-node DataStatBlock"
                mountOnEnter
                unmountOnExit>
                    <div
                        onClick={this.props.handle}
                        id={this.props.id}>
                        <ListOfData
                            dict={this.props.dict} 
                            blockName={this.props.blockName} 
                            ifOpen={this.props.isNeedRenderList}
                            blockData={this.props.blockData}/>
                    </div>
            </CSSTransition>
        );
    }
}

export default DataBlock