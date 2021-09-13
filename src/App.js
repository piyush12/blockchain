import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageTitle from "./Components/PageTitle";
import { Blocks } from "./pages/blocks";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PageTitle title="Blocks" />
      <Router>
        <Switch>
          <Route path="/" component={Blocks} />
        </Switch>
      </Router>
    </div>
  );
}
