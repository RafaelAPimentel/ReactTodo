import React, { Component } from 'react'

export class TodoRow extends Component {

    render = () =>
        <tr key={this.props.item.action}>
            <td>{this.props.item.action}</td>
            <td for="done">
                <input id="done" type="checkbox" checked={this.props.item.done} onChange={() => this.props.callback(this.props.item)} />
            </td>
        </tr>
}