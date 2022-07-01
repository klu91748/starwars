import Routing from "./Routing";
import Breadcrumb from "./components/Breadcrumb";
import useInitialize from "./globalState/useGlobalState";

function App() {
  useInitialize();

  return (
    <div>
      <div>
        <Breadcrumb />
      </div>
      <div>
        <Routing />
      </div>
    </div>
  );
}

export default App;
