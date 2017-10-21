import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img className="App-header-image"
                        src={'https://thenewboston.com/photos/users/67394/resized/289eaba8912c64890966fc2f14105155.jpg'}
                        />

                    <h1 className="App-title">Welcome TRINADH to React</h1>
                </header>
                {/*<p className="App-intro">*/}
                    {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
                {/*</p>*/}
            </div>
        );
    }
}

export default App;
