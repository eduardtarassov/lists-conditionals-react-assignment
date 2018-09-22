import React, {Component} from 'react';
import './App.css';
import InputValidation from './Validation/InputValidation.js'
import CharComponent from './Domain/CharComponent.js'
import './Domain/CharComponent.css'

class App extends Component {

    state = {
        data: '',
        dataSize: 0
    };


    dataChangedHandler = (event) => {
        const newData = event.target.value;
        this.setState({data: newData});
        this.setState({dataSize: newData.length});
    };


    deleteCharHandler = (index) => {
        let data = this.state.data.split('');
        data.splice(index, 1);
        const updatedData = data.join('');
        this.setState({data: updatedData});
    };


    render() {
        return (
            <div className="App">
                <input type="text" onChange={(event) => this.dataChangedHandler(event)}/>
                <p>{this.state.dataSize}</p>
                <InputValidation dataSize={this.state.dataSize} threshold={5}/>


                {this.state.data.split('').map((char, index) => {
                    return <CharComponent
                        click={() => this.deleteCharHandler(index)}
                        key={index}
                        char={char}/>
                })}
            </div>
        );
    }
}

export default App;
