import { DarkThemeTodoList } from "../../JssStyledComponent/Themes/DarkThemeTodoList";
import {
  add_task,
  change_theme,
  delete_task,
  done_task,
  edit_task,
  refresh_task,
  update_task,
} from "../types/TodoListTypes";
import { arrTheme } from "../../JssStyledComponent/Themes/ThemeManager";

const initialState = {
  themeTodoList: DarkThemeTodoList,
  taskList: [
    { id: "task-1", taskName: "task 1", done: true },
    { id: "task-2", taskName: "task 2", done: false },
    { id: "task-3", taskName: "task 3", done: true },
    { id: "task-4", taskName: "task 4", done: false },
  ],
  taskEdit: { id: "-1", taskName: "", done: false },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case add_task: {
      if (action.newTask.taskName.trim() === "") {
        alert("Task name is required");
        return { ...state };
      }

      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex(
        (task) => task.taskName === action.newTask.taskName
      );
      if (index !== -1) {
        alert("task name already exists !");
        return { ...state };
      }

      let newTaskList = [...state.taskList, action.newTask];
      return {
        ...state,
        taskList: newTaskList,
      };
    }

    case change_theme: {
      let theme = arrTheme.find((theme) => theme.id == action.themeId);
      return {
        ...state,
        themeTodoList: theme.theme,
      };
    }
    case done_task: {
      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex((task) => task.id === action.taskId);
      if (index === -1) {
        alert("task not found");
        return { ...state };
      }
      taskListUpdate[index].done = !taskListUpdate[index].done;
      return {
        ...state,
        taskList: taskListUpdate,
      };
    }

    case delete_task: {
      // let taskListUpdate = [...state.taskList];
      // let index = taskListUpdate.findIndex((task) => task.id === action.taskId);
      // if (index === -1) {
      //   alert("task not found");
      //   return { ...state };
      // }
      // taskListUpdate.splice(index, 1);
      // taskListUpdate = taskListUpdate.filter(
      //   (task) => task.id !== action.taskId
      // );
      // return {
      //   ...state,
      //   taskList: taskListUpdate,
      // };
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.id !== action.taskId),
      };
    }
    case refresh_task: {
      let taskListUpdate = [...state.taskList];
      taskListUpdate.map((task) => {
        if (task.id === action.taskId) {
          task.done = !task.done;
        }
      });
      return {
        ...state,
        taskList: taskListUpdate,
      };
    }

    case edit_task: {
      return {
        ...state,
        taskEdit: action.task,
      };
    }

    case update_task: {
      state.taskEdit = { ...state.taskEdit, taskName: action.taskName };

      let taskListUpdate = [...state.taskList];
      let index = taskListUpdate.findIndex(
        (task) => task.id === state.taskEdit.id
      );
      if (index === -1) {
        alert("task not found");
        return { ...state };
      }
      taskListUpdate[index] = state.taskEdit;
      return {
        ...state,
        taskList: taskListUpdate,
        taskEdit: { id: "-1", taskName: "", done: false },
      };
    }
    default:
      return { ...state };
  }
};
