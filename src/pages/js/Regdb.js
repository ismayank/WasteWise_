import React, { Component } from 'react';
import axios from 'axios';
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Pickup.css';

class Regdb extends Component {
    state = {
        ytTable: []
    }
    componentDidMount() {
        const url = 'http://localhost/yt.php'
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ ytTable: data })
            })
    }
    render() {
        return (
            <div className="box" style={{ padding: 20 }}>
                <div className="col-xs-8">
                    <h1 className='my-4'> Signup Database</h1>
                    <table className={`table table-bordered my-3 table-striped table-${this.props.mode}`}>
                        <thead className="thead-light">
                            <tr>
                                <th style={{ height: '40px' }}>User name</th>
                                <th>Phone No</th>
                                <th>Email</th>
                                <th>Password</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.ytTable.map((rs, index) => (
                                <tr key={index}>
                                    <td>{rs.name}</td>
                                    <td>{rs.ph_no}</td>
                                    <td>{rs.email}</td>
                                    <td>{rs.pass}</td>
                                 
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Regdb;