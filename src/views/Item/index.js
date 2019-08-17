import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { Badge, Card, CardBody, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';

var s1 = {
  label: 'Original',
  borderColor: 'blue',
  data: [
    { x: '2017/01/07, 6:39:30 PM', y: 120 },
    { x: '2017/01/07, 8:39:30 PM', y: 140 },
    { x: '2017-01-08 18:39:28', y: 101 },
  ]
};

var s2 = {
  label: 'Statistics',
  borderColor: 'yellow',
  data: [
    { x: '2017-01-07 18:00:00', y: 20 },
    { x: '2017/01/07, 11:39:30 PM', y: 14 },
    { x: '2017-01-08 18:00:00', y: 55 },
  ]
};

var s3 = {
  label: 'Machine Learning',
  borderColor: 'red',
  data: [
    { x: '2017-01-07 18:00:00', y: 90 },
    { x: '2017-01-08 18:00:00', y: 105 },
  ]
};
const line = {
  datasets: [s1, s2, s3],
};

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  scales: {
    xAxes: [{
      type: 'time'
    }]
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
