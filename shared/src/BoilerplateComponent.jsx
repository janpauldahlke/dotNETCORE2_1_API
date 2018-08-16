import React from 'react';

export class BoilerplateComponent extends React.Component {
    constructor(props) {
        super(props);
    }
 
    render() {
 
        return (
            <div className="BoilerPlate">
            <h1>from shared folder</h1>
                <label> there is a random input it does things</label>
                <input type="text" />
            </div>
        );
    }
}

