import React, { Component } from 'react';
import axios from 'axios';

class Agrishow extends Component {
    state = {
        agrishow: []
    }

    componentDidMount() {
        const url = 'http://localhost/agrishow.php';
        axios.get(url)
            .then(response => response.data)
            .then(data => {
                this.setState({ agrishow: data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="table-responsive">
                 <h1 className='my-4'> Agriculture Waste Database</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Pickup Id</th>
                            <th>Crop</th>
                            <th>Livestock</th>
                            <th>Plant</th>
                            <th>Wood</th>
                            <th>Total Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.agrishow.map((agricultural, index) => (
                            <tr key={index}>
                                <td>{agricultural.pid}</td>
                                <td>{agricultural.crop}</td>
                                <td>{agricultural.livestock}</td>
                                <td>{agricultural.plant}</td>
                                <td>{agricultural.wood}</td>
                                <td>{agricultural.cost}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Agrishow;
