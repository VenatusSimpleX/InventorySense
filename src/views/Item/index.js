import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { Badge, Card, CardBody, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import axios from 'axios'

var s2 = {
  label: 'Statistics',
  borderColor: 'yellow',
  data: [{ x: '01/07/2019, 6:39:30 PM', y: 1 },
  { x: '2019/5/07, 8:39:30 PM', y: 3 },
  { x: '2019-11-08 18:39:28', y: 2 },]
};

var s3 = {
  label: 'Machine Learning',
  borderColor: 'red',
  data: [
    { x: '2019-01-07 18:00:00', y: 1 },
    { x: '2019-12-08 18:00:00', y: 3 },
  ]
};


const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  scales: {
    xAxes: [{
      offset: true,
      type: 'time',
      time: {

        min: "6/1/2019",
        max: "6/31/2019"
      }
    }]
  },
  maintainAspectRatio: true
}

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      graphData: [],
      tableData: [],
      s1: {
        label: 'Demand',
        borderColor: 'blue',
        data: []
      },
      s2: {
        label: 'Demand (Machine Learning)',
        borderColor: 'yellow',
        data: []
      }

    }
  }

  getItem = async (id) => {
    var that = this;
    try {
      axios({
        method: 'GET',
        url: 'http://localhost:5000/api/inventory',

      }).then(function (response) {
        var arr = response.data
        for (var i = 0; i < arr.length; i++) {

          if (arr[i].itemCode == id) {
            that.setState({
              itemName: arr[i].name,
              itemQuantity: arr[i].quantity,
              status: arr[i].status,
            })
          }
        }

      })
    } catch (error) {
      console.error(error)
    }
  }

  getPrediction = async () => {
    var itemID = this.props.match.params.id
    var that = this;
    try {
      axios({
        method: 'GET',
        url: 'http://localhost:5000/api/history/' + itemID,

      }).then(function (response) {
        console.log(response.data.machine)
        var arr = response.data.machine
        var tempArr = []
        for (var i = 0; i < arr.length; i++) {
          var tempObj = {
            x: arr[i].timestamp,
            y: arr[i].amount
          }
          tempArr.push(tempObj)
          if (i === arr.length - 1) {
            that.setState({
              loading: false,
              s2: {
                ...that.state.s2,
                data: tempArr
              }
            })
          }
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  getData = async () => {
    var itemID = this.props.match.params.id
    var that = this;
    try {
      axios({
        method: 'GET',
        url: 'http://localhost:5000/api/history/' + itemID,

      }).then(function (response) {
        console.log(response.data.original)
        var arr = response.data.original
        var tempArr = []
        var total = 0;
        for (var i = 0; i < arr.length; i++) {
          total += arr[i]
          var tempObj = {
            x: arr[i].timestamp,
            y: arr[i].amount
          }
          tempArr.push(tempObj)
          if (i === arr.length - 1) {
            that.setState({
              loading: false,
              s1: {
                ...that.state.s1,
                data: tempArr

              }
            })
          }
        }
      })
    } catch (error) {
      console.error(error)
    }
  }
  componentDidMount() {
    console.log(this.props.match.params.id)

    this.getData()
    this.getPrediction()
    this.getItem(this.props.match.params.id)

  }
  render() {
    const line = {
      datasets: [this.state.s1, this.state.s2, s3],
    };
    return (
      <div className="animated fadeIn">
        <Card>
          <CardHeader>

            <h3><b> {this.state.itemName}</b></h3>
            {this.props.match.params.id} <br />
            Quantity: {this.state.itemQuantity}

            <div className="card-header-actions">
              <a href="http://www.chartjs.org" className="card-header-action">
                <small className="text-muted"> {this.state.status === 'Ordered' && <Badge color="primary">Ordered</Badge>}
                  {this.state.status === 'Out of Stock' && <Badge color="danger">Out of Stock</Badge>}
                  {this.state.status === 'In stock' && <Badge color="success">In Stock</Badge>}
                  {this.state.status === 'Low on Stock' && <Badge color="warning">Low on Stock</Badge>}
                </small>
              </a>
            </div>
          </CardHeader >
          {
            !this.state.loading && <CardBody >
              <div>
                <Line data={line} options={options} />
              </div>
            </CardBody>
          }

        </Card>

      </div>
    );
  }
}

function sortFunction(a, b) {
  var dateA = new Date(a.date).getTime();
  var dateB = new Date(b.date).getTime();
  return dateA > dateB ? 1 : -1;
};

export default Item;
