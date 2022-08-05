import BaiTapGameBauCua from "./BaiTapTongHop/BaiTapGameBauCua/BaiTapGameBauCua";
import BaiTapGameThuDo from "./BaiTapTongHop/BaiTapThuDo/BaiTapGameThuDo";
import UserProfile from "./FormValidation/UserProfile/UserProfile";
import ContextProvider from "./Hooks/Context/ContextProvider";
import DemoHooksUseCallback from "./Hooks/DemoHooksUseCallback";
import DemoHooksUseContext from "./Hooks/DemoHooksUseContext";
import DemoHooksUseMemo from "./Hooks/DemoHooksUseMemo";
import DemoHooksUseReducer from "./Hooks/DemoHooksUseReducer";
import DemoHooksUseRef from "./Hooks/DemoHooksUseRef";
import DemoHookUseEffect from "./Hooks/DemoHookUseEffect";
import DemoHookUseState from "./Hooks/DemoHookUseState";
import DemoReduxApp from "./Hooks/DemoReduxApp";
import DemoUseSpring from "./Hooks/ReactSpring/DemoUseSpring";
import Ex2UseSpring from "./Hooks/ReactSpring/Ex2UseSpring";
import Ex3UseSrings from "./Hooks/ReactSpring/Ex3UseSrings";
import Ex4UseTrail from "./Hooks/ReactSpring/Ex4UseTrail";
import Ex5UseTransition from "./Hooks/ReactSpring/Ex5UseTransition";
import Ex6UseChain from "./Hooks/ReactSpring/Ex6UseChain";
import TodoList from "./JssStyledComponent/BaiTapStyledComponent/TodoList/TodoList";
import DemoJSS from "./JssStyledComponent/DemoJSS/DemoJSS";
import DemoThemes from "./JssStyledComponent/Themes/DemoThemes";
import LifeCycle from "./LifeCycle/LifeCycle";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        {/* <UserProfile /> */}

        {/* <DemoJSS /> */}

        {/* <DemoThemes /> */}

        {/* <TodoList /> */}

        {/* <LifeCycle /> */}

        {/* <DemoHookUseState /> */}

        {/* <DemoHookUseEffect /> */}

        {/* <DemoHooksUseCallback /> */}

        {/* <DemoHooksUseMemo /> */}

        {/* <DemoHooksUseRef /> */}

        {/* <DemoHooksUseReducer /> */}

        {/* <DemoHooksUseContext /> */}

        {/* <DemoReduxApp /> */}

        {/* <DemoUseSpring /> */}

        {/* <Ex2UseSpring /> */}

        {/* <Ex3UseSrings /> */}

        {/* <Ex4UseTrail /> */}

        {/* <Ex5UseTransition /> */}

        {/* <Ex6UseChain /> */}

        <BaiTapGameBauCua />

        {/* <BaiTapGameThuDo /> */}
      </ContextProvider>
    </div>
  );
}

export default App;
