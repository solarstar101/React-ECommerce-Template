import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        console.log(this.props);
        return (
           <div className="Container">
<div className="row">
<div className="col-10 mx-auto text-center title text-title text-uppercase pt-5">
<h1 className="display-3"> 404 Page Not Found</h1>
<h3 className="display-3"> Requested Page URL Not Found <span className="text-danger">{this.props.location.pathname} 
</span></h3>


</div>
</div>
</div>
        )
    }
}
