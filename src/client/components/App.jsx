import Toaster from "../components/Toast/Toast";
import { useToast } from "../components/Toast/useToast";
import "./styles.css";
const App = () => {
    const toast = useToast();
    return (
    <div className="app-wrapper">
    <Toaster>
    <div className="main-app">
        <div className="left">
            <button onClick={toast("Here is your toast")}>Click me for toast</button>
        </div>
        <div className="right">

        </div>
    </div>
    </Toaster>
    </div>
    )
};

export default App;