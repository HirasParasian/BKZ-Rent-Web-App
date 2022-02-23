import React from "react"

class Button2 extends React.Component {
    state = {
        count: 0
    };
    tambah = () => {
        this.setState({ count: this.state.count + 1 })
    }
    kurang = () => {
        if (this.state.count > 0) {
            this.setState({ count: this.state.count - 1 })
        }
    }

    render() {
        return (
            <div className="d-flex">
                <button disabled={this.state.count === 0} className="btn btn-info" onClick={this.kurang}>
                    -
                </button>
                <div> {this.state.count} </div>
                <button className="btn btn-info" onClick={this.tambah}>
                    +
                </button>
            </div>
        );
    }
}

export default Button2
