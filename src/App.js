import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { onAdd, onSubtract} from './store/actions/blue';
import './_app.css';

import { connect } from 'react-redux';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            number: 0
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {

        const history = this.props.history.map((item, index) => <li key={index}>{item.sum}</li>)

        return (
            <div className="App">
                <p>Sum: {this.props.sum}</p>
                <input type="text" name="number" value={this.state.number} onChange={this.handleInputChange} />
                <button onClick={() => this.props.actions.onAdd(this.state.number)}>Add</button>
                <button onClick={() => this.props.actions.onSubtract(this.state.number)}>Subtract</button>
                <div>
                    <ul>
                        {history}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sum: state.blue.sum,
        history: state.blue.history
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators({
            onAdd,
            onSubtract
        }, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
