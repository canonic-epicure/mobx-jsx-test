import { makeObservable, observable } from "mobx";
import { render, cleanup, Component } from "mobx-jsx";

class App extends Component {
  @observable counter = 0;
  constructor() {
    super();
    makeObservable(this);
  }
  render() {
    let timer = setInterval(() => this.counter++, 1000);
    cleanup(() => clearInterval(timer));

    return <div>{this.counter}</div>;
  }
}

render(() => <App />, document.getElementById("app"));
