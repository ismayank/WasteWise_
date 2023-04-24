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
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Crop</th>
                            <th>Livestock</th>
                            <th>Plant</th>
                            <th>Wood</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.agrishow.map((agricultural, index) => (
                            <tr key={index}>
                                <td>{agricultural.crop}</td>
                                <td>{agricultural.livestock}</td>
                                <td>{agricultural.plant}</td>
                                <td>{agricultural.wood}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Agrishow;
