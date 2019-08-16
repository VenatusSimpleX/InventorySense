import React, { Component } from 'react';
import { Button, Badge, Card, CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class InventoryList extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      success: false,
      radioSelected: 2,
    };
    
    this.toggleSuccess = this.toggleSuccess.bind(this);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  toggleSuccess() {
    this.setState({
      success: !this.state.success,
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
                      <Button color="success" onClick={this.toggleSuccess} className="mr-1">Order Now</Button>
                      </td>
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
                      <Button color="success" onClick={this.toggleSuccess} className="mr-1">Order Now</Button>
                      </td>
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
                      <Button color="success" onClick={this.toggleSuccess} className="mr-1">Order Now</Button>
                      </td>
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
                      <Button color="success" onClick={this.toggleSuccess} className="mr-1">Order Now</Button>
                      </td>
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
