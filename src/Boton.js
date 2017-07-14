import React from 'react';

class Boton extends React.Component{

    showAlert() {
        alert('Hello World');
    }

    render(){
        return (
            <div className="Boton">
                <button type="button" onClick={this.props.action}>Click</button>
            </div>
        )
    }
}

export default Boton;