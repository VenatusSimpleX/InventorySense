import React, { Component } from 'react';
import { Button, Badge, Card, CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

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
                      <th>Visualisation</th>
                      <th>Actionable</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <td>Egg</td>
                      <td>18039503</td>
                      <td>40 cartons</td>
                      <td>
                        <Badge color="primary">Ordered</Badge>
                      </td>
                      <td><a href="https://www.youtube.com/">Grapha</a></td>
                      <td>
                      <Button color="success" onClick={this.toggleSuccess} className="mr-1">Order Now</Button>
                      </td>
                      <Modal isOpen={this.state.success} toggle={this.toggleSuccess} className={'modal-success ' + this.props.className}>
                        <ModalHeader toggle={this.toggleSuccess}>Egg</ModalHeader>
                        <ModalBody>
                          Recommended Amount To Order
                        </ModalBody>
                        <ModalFooter>
                          <Button color="success" onClick={this.toggleSuccess}>Place Order</Button>{' '}
                          <Button color="secondary" onClick={this.toggleSuccess}>Cancel</Button>
                        </ModalFooter>
                      </Modal>
                    </tr>
                    <tr>
                      <td>Ice Cream</td>
                      <td>11333224</td>
                      <td>50 boxes</td>
                      <td>
                        <Badge color="success">In Stock</Badge>
                      </td>
                      <td><a href="https://www.youtube.com/">Grapha</a></td>
                      <td>
                      <Button color="success" onClick={this.toggleInfo} className="mr-1">Order Now</Button>
                      </td>
                      <Modal isOpen={this.state.info} toggle={this.toggleInfo} className={'modal-success ' + this.props.className}>
                        <ModalHeader toggle={this.toggleInfo}>Ice Cream</ModalHeader>
                        <ModalBody>
                          Recommended Amount To Order
                        </ModalBody>
                        <ModalFooter>
                          <Button color="success" onClick={this.toggleInfo}>Place Order</Button>{' '}
                          <Button color="secondary" onClick={this.toggleInfo}>Cancel</Button>
                        </ModalFooter>
                      </Modal>
                    </tr>
                    <tr>
                      <td>Omurice</td>
                      <td>55332144</td>
                      <td>60 packs</td>
                      <td>
                        <Badge color="danger">Out of Stock</Badge>
                      </td>
                      <td><a href="https://www.youtube.com/">Grapha</a></td>
                      <td>
                      <Button color="success" onClick={this.toggleDanger} className="mr-1">Order Now</Button>
                      </td>
                      <Modal isOpen={this.state.danger} toggle={this.toggleDanger} className={'modal-success ' + this.props.className}>
                        <ModalHeader toggle={this.toggleDanger}>Omurice</ModalHeader>
                        <ModalBody>
                          Recommended Amount To Order
                        </ModalBody>
                        <ModalFooter>
                          <Button color="success" onClick={this.toggleDanger}>Place Order</Button>{' '}
                          <Button color="secondary" onClick={this.toggleDanger}>Cancel</Button>
                        </ModalFooter>
                      </Modal>
                    </tr>
                    <tr>
                      <td>Rice</td>
                      <td>77881293</td>
                      <td>50 bags</td>
                      <td>
                        <Badge color="warning">Low on Stock</Badge>
                      </td>
                      <td><a href="https://www.youtube.com/">Grapha</a></td>
                      <td>
                      <Button color="success" onClick={this.togglePrimary} className="mr-1">Order Now</Button>
                      </td>
                      <Modal isOpen={this.state.primary} toggle={this.togglePrimary} className={'modal-success ' + this.props.className}>
                        <ModalHeader toggle={this.togglePrimary}>Rice</ModalHeader>
                        <ModalBody>
                          Recommended Amount To Order
                        </ModalBody>
                        <ModalFooter>
                          <Button color="success" onClick={this.togglePrimary}>Place Order</Button>{' '}
                          <Button color="secondary" onClick={this.togglePrimary}>Cancel</Button>
                        </ModalFooter>
                      </Modal>
                    </tr>
                    <tr>
                      <td>Pudding</td>
                      <td>82931342</td>
                      <td>200 carts</td>
                      <td>
                        <Badge color="danger">Out of Stock</Badge>
                      </td>
                      <td><a href="https://www.youtube.com/">Grapha</a></td>
                      <td>
                      <Button color="success" onClick={this.togglePrimary} className="mr-1">Order Now</Button>
                      </td>
                      <Modal isOpen={this.state.primary} toggle={this.togglePrimary} className={'modal-success ' + this.props.className}>
                        <ModalHeader toggle={this.togglePrimary}>Pudding</ModalHeader>
                        <ModalBody>
                          Recommended Amount To Order
                        </ModalBody>
                        <ModalFooter>
                          <Button color="success" onClick={this.togglePrimary}>Place Order</Button>{' '}
                          <Button color="secondary" onClick={this.togglePrimary}>Cancel</Button>
                        </ModalFooter>
                      </Modal>
                    </tr>
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
      </div>
    );
  }
}

export default InventoryList;
