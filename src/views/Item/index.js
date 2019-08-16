import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { Badge, Card, CardBody, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

const line = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    }, {
      label: 'Forecast (statistic)',
      data: [50, 50, 50, 50, 80, 43, 23],
      fill: false,
      // Changes this dataset to become a line
      type: 'line'
    },
    {
      label: 'Forecast (ML)',
      data: [55, 20, 30, 72, 30, 40, 50],
      fill: false,
      // Changes this dataset to become a line
      type: 'line'
    }
  ],
};

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
}

class Charts extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>
            Item Name
            <div className="card-header-actions">
              <Badge color="success" className="float-right">In Stock</Badge>
            </div>
          </CardHeader>
          <CardBody>
            <p>Code: 123123</p>
            <p>Quantity: 30</p>

          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            Item Demand
              <div className="card-header-actions">
              <a href="http://www.chartjs.org" className="card-header-action">
                <small className="text-muted">docs</small>
              </a>
            </div>
          </CardHeader>
          <CardBody>
            <div className="chart-wrapper">
              <Line data={line} options={options} />
            </div>
          </CardBody>
        </Card>

      </div>
    );
  }
}

export default Charts;
