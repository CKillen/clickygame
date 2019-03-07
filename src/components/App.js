import React from 'react';

import Header from './Header.js';
import ImageList from './ImageList.js';

class App extends React.Component {
  state = {
    score: 0,
  }

  increaseScore = () => {
    const newScore = this.state.score + 1;
    this.setState({ score: newScore });
  }

  resetScore = () => {
    this.setState({ score: 0 });
  }

  render() {
    return (
      <div className="container">
        <Header score={this.state.score}/>
        <ImageList onSuccess={this.increaseScore} onFail={this.resetScore} />
      </div>
    )
  }
}

export default App;