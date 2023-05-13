import React, { Component } from 'react';
import axios from 'axios';


class Pickdb extends Component {
    state = {
        pickup: []
    }
    componentDidMount() {
        const url = 'http://localhost/pickd.php'
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ pickup: data })
            })
    }
    render() {
        return (
            <div className="box" style={{ padding: 20 }}>
                <div className="col-xs-8">
                    <h1 className='my-4'> Pickup Database</h1>
                    <table className={`table table-bordered my-3 table-striped table-${this.props.mode}`}>
                        <thead className="thead-light">
                            <tr>
                                <th style={{ height: '40px' }}>User name</th>
                                <th>Pickup_id</th>
                                <th>Phone No</th>
                                <th>Address</th>
                                <th> Date</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.pickup.map((rs, index) => (
                                <tr key={index}>
                                    <td>{rs.name}</td>
                                    <td>{rs.pid}</td>
                                    <td>{rs.phno}</td>
                                    <td>{rs.add}</td>
                                    <td>{rs.date}</td>
                                 
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            
        );
    }
}

export default Pickdb;