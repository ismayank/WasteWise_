import React, { Component } from 'react';
import axios from 'axios';

class Indshow extends Component {
    state = {
        indshow: []
    }

    componentDidMount() {
        const url = 'http://localhost/indshow.php';
        axios.get(url)
            .then(response => response.data)
            .then(data => {
                this.setState({ indshow: data });
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
                            <th>Biodegradable</th>
                            <th>Chemical</th>
                            <th>Textile</th>
                            <th>Plastic</th>
                            <th>Metal</th>
                            <th>E-waste</th>
                            <th>Glass</th>
                            <th>Hazardous</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.indshow.map((industrial, index) => (
                            <tr key={index}>
                                <td>{industrial.biodegradable}</td>
                                <td>{industrial.chemical}</td>
                                <td>{industrial.textile}</td>
                                <td>{industrial.plastic}</td>
                                <td>{industrial.metal}</td>
                                <td>{industrial.ewaste}</td>
                                <td>{industrial.glass}</td>
                                <td>{industrial.hazardous}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Indshow;
