import {Component, createElement, render} from './toy-react'

class MyComponent extends Component {
  render() {
    return <div>
      <h1>my component</h1>
      {this.children}
    </div>
  }
}


render(
    <MyComponent><div>abc</div>
        <div></div><div>
    </div></MyComponent>,
    document.body);
