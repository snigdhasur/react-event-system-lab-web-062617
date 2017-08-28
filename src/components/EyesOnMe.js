// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

	focusFunc = () => {
    	console.log('Good!');
  	}

  	blurFunc = () => {
    	console.log('Hey! Eyes on me!');
  	}

	render() {
		return(
			<button onFocus={this.focusFunc} onBlur={this.blurFunc}>Click me!</button>
			)
	}
} 

export default EyesOnMe;