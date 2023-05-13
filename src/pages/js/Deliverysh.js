import React, { Component } from 'react';
import axios from 'axios';

class Deliverysh extends Component {
    state = {
        delshow: []
    }

    componentDidMount() {
        const url = 'http://localhost/delshow.php';
        axios.get(url)
            .then(response => response.data)
            .then(data => {
                this.setState({ delshow: data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="table-responsive">
                <h1 className='my-4'> Delivery Database</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>Cost</th>
                            <th>Name</th>
                            <th>PhoneNo</th>
                            <th>Address</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.delshow.map((rs, index) => (
                            <tr key={index}>
                                <td>{rs.o_id}</td>
                                <td>{rs.totalCost}</td>
                                <td>{rs.name}</td>
                                <td>{rs.phno}</td>
                                <td>{rs.address}</td>


                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Deliverysh;
