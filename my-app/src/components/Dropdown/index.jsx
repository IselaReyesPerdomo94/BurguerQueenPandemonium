import React, { Component, Fragment } from 'react';
import './style.css';

class Dropdown extends Component {

    render() {
        return (
            <Fragment>
                <select name="Usuarios">
                    <option defaultValue value="user">{this.props.options}</option>
                    <option><span></span></option>
                    <span></span>
                </select>

            </Fragment>
        );
    }
}




export default Dropdown;