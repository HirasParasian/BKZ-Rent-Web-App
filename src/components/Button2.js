import React from "react"
import { FaPlus, FaMinus } from 'react-icons/fa'

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
            <div className="d-flex d-grid ms-4 justify-content-center align-item-center my-5">
                <button disabled={this.state.count === 0} className="btn bg-brown rounded btn-circle d-flex justify-content-center align-item-center" onClick={this.kurang}>
                    <FaMinus />
                </button>
                <button disabled className="btn d-flex justify-content-center align-item-center" >
                    <h4>{this.state.count}</h4>
                </button>
                <button className="btn bg-brown ms-4  rounded btn-circle d-flex justify-content-center align-item-center" onClick={this.tambah}>
                    <FaPlus />
                </button>
            </div>
        );
    }
}

export default Button2
