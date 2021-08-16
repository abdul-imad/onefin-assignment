import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/" component={Dashboard} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
