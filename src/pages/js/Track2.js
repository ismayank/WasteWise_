import React,{ useState } from 'react';
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Track.css';
import {}from "react-router";
import {Link} from "react-router-dom";
import axios from 'axios';
import elogo from'/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/image/images-small-globe.svg';



class Track2 extends Component {
    state = {
        pickupData: []
    }

    componentDidMount() {
        const url = 'http://localhost/pict.php';
        axios.get(url)
            .then(response => response.data)
            .then(data => {
                this.setState({ pickupData: data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <h1>Pickup Data</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.pickupData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.phone}</td>
                                <td>{data.email}</td>
                                <td>{data.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Track2;