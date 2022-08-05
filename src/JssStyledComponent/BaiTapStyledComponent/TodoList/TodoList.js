import React, { Component } from "react";
// import { Container } from "../../Containers/Container";
import { Container } from "../../ComponentsToDoList/Container";
import { ThemeProvider } from "styled-components";
import { DarkThemeTodoList } from "../../Themes/DarkThemeTodoList";
import { LightThemeTodoList } from "../../Themes/LightThemeTodoList";
import { PrimaryThemeTodoList } from "../../Themes/PrimaryThemeTodoLisr";
import { Dropdown } from "../../ComponentsToDoList/Dropdown";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
} from "../../ComponentsToDoList/Heading";
import { Label, TextField, Input } from "../../ComponentsToDoList/TextField";
import { Button } from "../../ComponentsToDoList/Button";
import {
  Table,
  Tr,
  Td,
  Th,
  Thead,
  Tbody,
} from "../../ComponentsToDoList/Table";
import { connect } from "react-redux";
import {
  addTaskAction,
  changeThemeAction,
  doneTaskAction,
  deleteTaskAction,
  refreshTaskAction,
  editTaskAction,
  updateTaskAction,
} from "../../../redux/actions/TodoListActions";
import { arrTheme } from "../../Themes/ThemeManager";

class TodoList extends Component {
  state = {
    taskName: "",
    disabled: true,
  };

  renderTaskTodo = () => {
    return this.props.taskList
      .filter((task) => !task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
            <Th className="text-right">
              <Button
                onClick={() => {
                  this.setState(
                    {
                      disabled: false,
                    },
                    () => {
                      //setState là hàm bất đồng bộ nên setState xong rồi mới đẩy dữ liệu lên redux
                      this.props.dispatch(editTaskAction(task));
                    }
                  );
                }}
                className="ml-1"
              >
                <i className="fa fa-edit"></i>
              </Button>
              <Button
                onClick={() => {
                  this.props.dispatch(doneTaskAction(task.id));
                }}
                className="ml-1"
              >
                <i className="fa fa-check"></i>
              </Button>
              <Button
                onClick={() => {
                  this.props.dispatch(deleteTaskAction(task.id));
                }}
                className="ml-1"
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  renderCompleted = () => {
    return this.props.taskList
      .filter((task) => task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
            <Th className="text-right">
              <Button
                onClick={() => {
                  this.props.dispatch(refreshTaskAction(task.id));
                }}
                className="ml-1"
              >
                <i className="fa fa-refresh" aria-hidden="true"></i>
              </Button>
              <Button
                onClick={() => {
                  this.props.dispatch(deleteTaskAction(task.id));
                }}
                className="ml-1"
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  // handleChange = (e) => {
  //     let {name,value} = e.target.value;
  //     this.setState({
  //         [name]:value
  //     })
  // }

  renderThemes = () => {
    return arrTheme.map((theme) => {
      return (
        <option key={theme.id} value={theme.id}>
          {theme.name}
        </option>
      );
    });
  };

  //Life cycle version 16 nhận vào props mới được thực thi trước render chỉ khi props thay đổi mới vào lifecycle này
  // componentWillReceiveProps(newProps) {
  //   console.log("this.props: ", this.props);
  //   console.log("new props: ", newProps);
  //   this.setState({
  //     taskName: newProps.taskEdit.taskName,
  //   });
  // }

  // //Lifecycle tĩnh không truy xuất được trỏ this
  // static getDerivedStateFromProps(newProps, currentState) {
  //     //newProps: là props mới, props cũ là this.props (không truy xuất được)
  //     //currentState: ứng với state hiện tại this.state

  //hoặc trả về state mới (this.state)
  // let newState = { ...currentState, taskName: newProps.taskEdit.taskName };
  // return newState;

  //trả về null state giữ nguyên
  // return null;
  // }

  render() {
    return (
      <ThemeProvider theme={this.props.themeTodoList}>
        <Container className="w-50 mt-5">
          <Dropdown
            onChange={(e) => {
              let { value } = e.target;
              this.props.dispatch(changeThemeAction(value));
            }}
          >
            {this.renderThemes()}
          </Dropdown>
          <Heading3> Todo List </Heading3>
          {/* <Label>Task name </Label>
          <Input /> */}
          <TextField
            onChange={(e) => {
              this.setState({
                taskName: e.target.value,
              });
            }}
            value={this.state.taskName}
            name="taskName"
            label="Task name"
            className="w-50"
          />

          {this.state.disabled ? (
            <Button
              onClick={() => {
                let { taskName } = this.state;

                let newTask = {
                  id: Date.now(),
                  taskName,
                  done: false,
                };

                this.props.dispatch(addTaskAction(newTask));
                this.setState({
                  taskName: "",
                });
              }}
              className="ml-3"
              updateTaskAction
            >
              <i className="fa fa-plus"></i> Add Task
            </Button>
          ) : (
            <Button disabled className="ml-3" updateTaskAction>
              <i className="fa fa-plus"></i> Add Task
            </Button>
          )}

          {/* // sdsadasdsad */}
          {this.state.disabled ? (
            <Button disabled className="ml-2">
              <i className="fa fa-upload"></i> Update task
            </Button>
          ) : (
            <Button
              onClick={() => {
                let { taskName } = this.state;
                this.setState(
                  {
                    disabled: true,
                    taskName: "",
                  },
                  () => {
                    this.props.dispatch(updateTaskAction(taskName));
                  }
                );
              }}
              className="ml-2"
            >
              <i className="fa fa-upload"></i> Update task
            </Button>
          )}
          <hr />

          <Heading3> Task Todo </Heading3>
          <Table>
            <Thead>{this.renderTaskTodo()}</Thead>
          </Table>
          <Heading3> Task Completed </Heading3>
          <Table>
            <Thead>{this.renderCompleted()}</Thead>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }

  //Đây là lifecycle trả về props cũ và state cũ của component trước khi render (lifecycle này chạy sau render)
  componentDidUpdate(prevProps, prevState) {
    //So sánh nếu như props trước đó (taskEdit trước mà khác taskEdit hiện tại thì mình mới setState)
    if (prevProps.taskEdit.id !== this.props.taskEdit.id) {
      this.setState({
        taskName: this.props.taskEdit.taskName,
      });
    }
  }
}

const mapStateToProps = (state) => {
  return {
    themeTodoList: state.TodoListReducer.themeTodoList,
    taskList: state.TodoListReducer.taskList,
    taskEdit: state.TodoListReducer.taskEdit,
  };
};

export default connect(mapStateToProps)(TodoList);
