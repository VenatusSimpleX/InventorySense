import React, { Component } from 'react';
import { Button, Badge, Card, CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import { Link } from 'react-router-dom';

class InventoryList extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      primary: false,
      success: false,
      warning: false,
      danger: false,
      info: false,
      radioSelected: 2,
    };

    this.togglePrimary = this.togglePrimary.bind(this);
    this.toggleSuccess = this.toggleSuccess.bind(this);
    this.toggleWarning = this.toggleWarning.bind(this);
    this.toggleDanger = this.toggleDanger.bind(this);
    this.toggleInfo = this.toggleInfo.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  togglePrimary() {
    this.setState({
      primary: !this.state.primary,
    });
  }

  toggleSuccess() {
    this.setState({
      success: !this.state.success,
    });
  }

  toggleWarning() {
    this.setState({
      warning: !this.state.warning,
    });
  }

  toggleDanger() {
    this.setState({
      danger: !this.state.danger,
    });
  }

  toggleInfo() {
    this.setState({
      info: !this.state.info,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }



  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    const tableItems = [
      {
        name: "Egg",
        itemCode: "123456789",
        quantity: 40,
        status: "Ordered"
      },
      {
        name: "Ice Cream",
        itemCode: "123456789",
        quantity: 50,
        status: "In Stock"
      }
    ]
    return (
      <div className="animated fadeIn">
        <Col xs="12" lg="7">
          <Card>
            <CardHeader>
              Inventory List
                </CardHeader>
            <CardBody>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>Item Name</th>
                    <th>Item Code</th>
                    <th>Quantity</th>
                    <th>Status</th>
                    <th>Actionable</th>
                  </tr>
                </thead>
                <tbody>
                  {tableItems.map((item, index) => {
                    const itemLink = `/items/${item.itemCode}`
                    return (
                      <tr>
                        <td><Link to={itemLink}>{item.name}</Link></td>
                        <td>{item.itemCode}</td>
                        <td>{item.quantity}</td>
                        <td>
                          {item.status === 'Ordered' && <Badge color="primary">Ordered</Badge>}
                          {item.status === 'In Stock' && <Badge color="danger">Out of Stock</Badge>}
                          {item.status === 'Out of Stock' && <Badge color="success">In Stock</Badge>}
                          {item.status === 'Low on Stock' && <Badge color="warning">Low on Stock</Badge>}
                        </td>
                        <td>
                          <Button color="success" onClick={this.toggleSuccess} className="mr-1">Order</Button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
              <Pagination>
                <PaginationItem disabled><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                <PaginationItem active>
                  <PaginationLink tag="button">1</PaginationLink>
                </PaginationItem>
                <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
              </Pagination>
            </CardBody>
          </Card>
        </Col>
        <Modal isOpen={this.state.success} toggle={this.toggleSuccess} className={'modal-success ' + this.props.className}>
          <ModalHeader toggle={this.toggleSuccess}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
                        </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggleSuccess}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggleSuccess}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default InventoryList;
