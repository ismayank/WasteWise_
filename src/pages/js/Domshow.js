import React, { Component } from 'react';
import axios from 'axios';

class Domshow extends Component {
    state = {
        dmshow: []
    }

    componentDidMount() {
        const url = 'http://localhost/dmshow.php';
        axios.get(url)
            .then(response => response.data)
            .then(data => {
                this.setState({ dmshow: data });
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
                            <th>Pickup Id</th>
                            <th>Food</th>
                            <th>Plastic</th>
                            <th>Textile</th>
                            <th>Glass</th>
                            <th>Metal</th>
                            <th>Paper</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.dmshow.map((domestic, index) => (
                            <tr key={index}>
                                <td>{domestic.pid}</td>
                                <td>{domestic.food}</td>
                                <td>{domestic.plastic}</td>
                                <td>{domestic.textile}</td>
                                <td>{domestic.glass}</td>
                                <td>{domestic.metal}</td>
                                <td>{domestic.paper}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Domshow;
