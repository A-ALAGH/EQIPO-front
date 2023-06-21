import React, { Component } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import SignupCard from '../components/SignUp/SignUp'
export default class SignUp extends Component {
  render() {
    return (
      <div>
        <Header/>
        <SignupCard/>
        <Footer/>
      </div>
    )
  }
}
