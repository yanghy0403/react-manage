import React, { Component } from 'react'
import {BrowserRouter as Router,Redirect,Route} from 'react-router-dom'
import Layout from '../layout/layout'
export default class Islogin extends Component{
      // constructor(props) {
      //       super(props);
      //       this.state = {  };
      //   }
      render(){
          return(
                <Router>
                    {/* <Route path="/login" component={Login}/> */}
                      <Route path="/"  render={()=><Layout/>}/>
                      <Redirect from="/" to="/dashboard/Analysis"/>
                </Router>
          )
      }
}