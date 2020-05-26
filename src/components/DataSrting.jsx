import React from 'react'
import DataBlock from './DataBlock'

class DataString extends React.Component{


    render(){
        return(
            <div className="dataString">
                <DataBlock 
                    handle={this.props.handle}
                    dict={this.props.dict}
                    isNeedRenderList={this.props.firstBlockBool}
                    blockData={this.props.firstBlockData}
                    isNeedRenderBlock={this.props.firstBlockBool2}
                    id={this.props.firstId}
                    blockName={this.props.firstName}/>
                <DataBlock 
                    handle={this.props.handle}
                    dict={this.props.dict}
                    isNeedRenderList={this.props.secondBlockBool}
                    blockData={this.props.secondBlockData}
                    isNeedRenderBlock={this.props.secondBlockBool2}
                    id={this.props.secondId}
                    blockName={this.props.secondName}/>
                <DataBlock 
                    handle={this.props.handle}
                    dict={this.props.dict}
                    isNeedRenderList={this.props.thirdBlockBool}
                    blockData={this.props.thirdBlockData}
                    isNeedRenderBlock={this.props.thirdBlockBool2}
                    id={this.props.thirdId}
                    blockName={this.props.thirdName}/>
            </div>
        );
    }

}

export default DataString