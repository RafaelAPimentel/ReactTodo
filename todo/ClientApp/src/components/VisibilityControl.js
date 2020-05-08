import React, { Component } from "react"

export class VisibilityControl extends Component {
    render = () =>
        <div className="form-check">
            <label className="form-check-label">
                <input className="form-check-input"
                    type="checkbox"
                    checked={this.props.isChecked}
                    onChange={(e) => this.props.callback(e.target.checked)} />
                Show {this.props.description} ({this.props.tasks.filter(t => t.done).length})
            </label>
        </div>
}