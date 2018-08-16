import React from 'react';


export default class BoilerplateComponent extends React.Component {
    constructor(props) {
        super(props);
    }
 
 
     
    render() {
        const styles = this.props.styles || {};
 
        return (
            <div className="BoilerPlate">
            <h1>from shared folder</h1>
                <label> there is a random input it does things</label>
                <input type="text" />
            </div>
        );
    }
}

