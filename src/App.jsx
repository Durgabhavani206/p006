import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    const BASEURL = import.meta.env.BASE_URL; /*it will take repository name from vite.config.js.we are using this because when I click on*/

       /*link in guthub it will not show images,so we use the above for  to get images*/
    return (
      <>
        <header>
          <div className='logo'>Grid Demo</div>
        </header>
        <section>
          <div className='card'>
            <img src={`${BASEURL}1.jpeg`} alt='' />  
            <label>Image 01</label>
          </div>
          <div className='card'>
            <img src={`${BASEURL}2.jpeg`} alt='' />
            <label>Image 02</label>
          </div>
          <div className='card'>
            <img src={`${BASEURL}3.jpeg`} alt='' />
            <label>Image 03</label>
          </div>
          <div className='card'>
            <img src={`${BASEURL}4.jpeg`} alt='' />
            <label>Image 04</label>
          </div>
          <div className='card'>
            <img src={`${BASEURL}5.jpeg`} alt='' />
            <label>Image 05</label>
          </div>
          <div className='card'>
            <img src={`${BASEURL}6.jpeg`} alt='' />
            <label>Image 06</label>
          </div>
          <div className='card'>
            <img src={`${BASEURL}7.jpeg`} alt='' />
            <label>Image 07</label>
          </div>
          <div className='card'>
            <img src={`${BASEURL}8.jpeg`} alt='' />
            <label>Image 08</label>
          </div>
          <div className='card'>
            <img src={`${BASEURL}9.jpeg`} alt='' />
            <label>Image 09</label>
          </div>
        </section>
        <footer>Copyright @ 2025. All rights reserved.</footer>
      </>
    );
  }
}

export default App;