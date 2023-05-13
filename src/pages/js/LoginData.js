import React, { Component } from 'react';
import axios from 'axios';
import '/Applications/XAMPP/xamppfiles/htdocs/wastewise/wastewise/src/pages/css/Pickup.css';

class LoginData extends Component {
    state = {
        login: []
    }
    componentDidMount() {
        const url = 'http://localhost/log2.php'
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ login: data })
            })
    }
    render() {
        return (
            <div className="box" style={{ padding: 20 }}>
                <div className="col-xs-8">
                    <h1 className='my-4'> Login History</h1>
                    <table className={`table table-bordered my-3 table-striped table-${this.props.mode}`}>
                        <thead className="thead-light">
                            <tr>
                                <th style={{ height: '40px' }}>Email</th>
                              
                               
                                <th>Date and Time</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.login.map((rs, index) => (
                                <tr key={index}>
                                    <td>{rs.email}</td>
                                    <td>{rs.datet}</td>
                                 
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default LoginData;