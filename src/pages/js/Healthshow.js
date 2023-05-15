import React, { Component } from 'react';
import axios from 'axios';

class Healthshow extends Component {
  state = {
    healthcareData: []
  }

  componentDidMount() {
    const url = 'http://localhost/healthshow.php';
    axios.get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({ healthcareData: data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="table-responsive">
        <h1 className='my-4'> HealthCare Waste Database</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Pickup Id</th>
              <th>Biomedical</th>
              <th>Plastic</th>
              <th>Chemical</th>
              <th>Metal</th>
              <th>Glass</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          <tbody>
            {this.state.healthcareData.map((healthcare, index) => (
              <tr key={index}>
                <td>{healthcare.pid}</td>
                <td>{healthcare.biomedical}</td>
                <td>{healthcare.plastic}</td>
                <td>{healthcare.chemical}</td>
                <td>{healthcare.metal}</td>
                <td>{healthcare.glass}</td>
                <td>{healthcare.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Healthshow;
