import React, { Component } from "react";
import ChildCompoment from "./ChildCompoment";

// class component là 1 đối tượng chứa thuộc tính và phương thức

class LifeCycle extends Component {
  //trạng thái mounting sẽ gọi các lifeCycle tự động kích hoạt bao gồm: constructor, getDerivedStateFromProps , render, componentDidMount

  //trạng thái updating sẽ được gọi khi setState hoặc props tự đông kích hoạt các hàm: getDerivedStateFromProps, shouldComponentUpdate

  //trạng thái unmounting sẽ được gọi khi component mất khỏi giao diện xóa khóa giao diện tự động gọi   componentWillUnmount()

  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      product: {
        id: 1,
        name: "iphonex",
      },
    };
    console.log("contructor");
  }

  //Được gọi khi component này được sử dụng trên DOM (giao diện của app)
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  //Được gọi khi setState hoặc props
  shouldComponentUpdate(newProps, newState) {
    console.log("newProps", newProps);
    console.log("this.props", this.props);
    //return true thì chạy tiếp các lifecycle còn lại, ngược lại return false thì sẽ dừng lại không chạy tiếp các lifecycle khác
    return true;
  }

  render() {
    console.log("renderParent");
    return (
      <div>
        <h1>Parent Component</h1>
        <span>Number: {this.state.number}</span>
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          +
        </button>
        {/* {this.state.number === 1 ? <ChildCompoment /> : ""} */}
        <button
          className="btn btn-success"
          onClick={() => {
            let newProduct = { ...this.state.product };
            newProduct.name = "iphonex123";

            this.setState({
              product: newProduct,
            });
          }}
        >
          change Name Product
        </button>

        <h3>new Product parent: {this.state.product.name}</h3>
        <ChildCompoment product={this.state.product} />
      </div>
    );
  }
  //Được gọi sau render và chỉ gọi 1 lần duy nhất (trạng thái mounting)
  componentDidMount() {
    console.log("componentDidMount");
  }

  //Lần đầu sẽ không gọi, chỉ gọi khi setState hoặc thay đổi props
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }
}

export default LifeCycle;
