import React, { Component } from 'react';
import axios from 'axios';

class Commshow extends Component {
    state = {
        commercialData: []
    }

    componentDidMount() {
        const url = 'http://localhost/commshow.php';
        axios.get(url)
            .then(response => response.data)
            .then(data => {
                this.setState({ commercialData: data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="table-responsive">
                <h1 className='my-4'> Commercial Waste Database</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Pickup Id</th>
                            <th>Biodegradable</th>
                            <th>Chemical</th>
                            <th>Electrical</th>
                            <th>Demolition</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.commercialData.map((commercial, index) => (
                            <tr key={index}>
                                <td>{commercial.pid}</td>
                                <td>{commercial.biodegradable}</td>
                                <td>{commercial.chemical}</td>
                                <td>{commercial.electrical}</td>
                                <td>{commercial.demolition}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Commshow;
