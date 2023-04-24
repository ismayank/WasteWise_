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
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Biomedical</th>
              <th>Plastic</th>
              <th>Chemical</th>
              <th>Metal</th>
              <th>Glass</th>
            </tr>
          </thead>
          <tbody>
            {this.state.healthcareData.map((healthcare, index) => (
              <tr key={index}>
                <td>{healthcare.biomedical}</td>
                <td>{healthcare.plastic}</td>
                <td>{healthcare.chemical}</td>
                <td>{healthcare.metal}</td>
                <td>{healthcare.glass}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Healthshow;
