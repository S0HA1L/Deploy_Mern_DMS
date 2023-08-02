import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios"

axios.defaults.baseURL = "http://localhost:8080/"

function App() {


    const [formData,setFormData] = useState({
        name : "",
        email : "",
        confirmemail : "",
        detail : "",
        pincode : "",
        phone : "",
      })



    const handleOnChange = (e)=>{
    const {value,name} = e.target
    setFormData((preve)=>{
        return{
            ...preve,
            [name] : value
        }
    })
    }

    const handleSubmit =  async(e)=>{
        e.preventDefault()
      const data = await axios.post("https://deploy-mern-dms-api.vercel.app/create",formData)
      console.log(data)
      alert(data.data.message)
      setFormData({
        name : '',
        email : '',
        confirmemail : '',
        detail : '',
        pincode : '',
        phone : ''
      })
    }









  return (
<div>
        <h2 className="main-title w3-container w3-green">
            <a href="index.html"><img src="leaficon2.png" height="20px" width="30px" />
                Emergency-relief
            </a>
        </h2>
        <div id="header" className="w3-container w3-green">

            <div className="navbar">

                <div className="dropdown">

                    <button className="dropbtn">Disasters and Emergencies

                    </button>
                    <div className="dropdown-content">

                        <a href="scripts/content-2.html">Avalanche</a>
                        <a href="scripts/content-3.html">Bioterrorism</a>
                        <a href="scripts/content-4.html">Chemical Emergencies</a>
                        <a href="scripts/content-5.html">Cybersecurity</a>
                        <a href="scripts/content-6.html">Drought</a>
                        <a href="scripts/content-7.html">Earthquakes</a>
                        <a href="scripts/content-8.html">Explosions</a>
                        <a href="scripts/content-9.html">Extreme Heat</a>
                        <a href="scripts/content-10.html">Floods</a>
                        <a href="scripts/content-11.html">Hazardous Materials incidents</a>
                        <a href="scripts/content-12.html">Home Fires</a>
                        <a href="scripts/content-13.html">Household Chemical Emergencies</a>
                        <a href="scripts/content-14.html">Hurricanes</a>
                        <a href="scripts/content-15.html">Landslides & Debris Flow</a>
                        <a href="scripts/content-16.html">Nuclear Explosion</a>
                        <a href="scripts/content-17.html">Nuclear Power Plants</a>
                        <a href="scripts/content-18.html">Pandemic</a>
                        <a href="scripts/content-19.html">Power Outages</a>
                        <a href="scripts/content-20.html">Wildfires</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Make a Plan

                    </button>
                    <div className="dropdown-content">
                        <a href="scripts/content-30.html">Plan Ahead</a>
                        <a href="scripts/content-31.html">Build a Kit</a>
                        <a href="scripts/content-32.html">Safety Skills</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Get Involved

                    </button>
                    <div className="dropdown-content">
                        <a href="scripts/content-33.html">Get Trained and Volunteer</a>
                        <a href="scripts/content-34.html">You are the help until the help Arrives</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Resources
                    </button>
                    <div className="dropdown-content">
                        <a href="scripts/content-35.html">Social Media Toolkits</a>
                        <a href="scripts/content-36.html">Contact Us</a>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Weather
                    </button>
                    <div className="dropdown-content">
                        <a href="https://eron233.pythonanywhere.com/">Live Weather</a>
                    </div>
                </div>
                    
                <div className="topDiv">
                    <div className="searchTop">
                        <input type="text" className="searchBar" placeholder="Enter some text to search?"/>
                        <button type="submit" className="searchButton">
                            <i className=""></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- <div id="nav-left"></div> --> */}

        <div id="body-content" className="w3-row-padding">
            <div className="imgside1 w3-third" >
                <div className="imgside1-1">
                    <img className="index-img" src="images/severe weather.jpg" width="100px" height="100px"/>

                    <img className="index-img" src="images/flooded-house-sign.jpg" width="100px" height="100px"/>

                    <img className="index-img" src="images/lightning.jpg" width="100px" height="100px" style={{'margin-top':'10px'}}/>

                    <img className="index-img" src="images/snow2.jpg" width="100px" height="100px" style={{'margin-top':'40px'}}/>

                    <img className="index-img" src="images/get vaccinated.jpg" width="100px" height="100px"
                        style={{'margin-top':'10px'}}/>
        {/* <!-- forms start --> */}
        <div id="registration-form">
            <div className='fieldset'>
                {/* <!-- <legend>What's the issue?</legend> --> */}
                <form onSubmit = {handleSubmit}>
                    <div className='row'>
                        <label for='firstname'>First Name</label>
                        <input type="text" placeholder="First Name" name='name' className="formdata1" id='firstname'
                            data-required="true" data-error-message="Your First Name is required" onChange={handleOnChange}/>
                    </div>
                    <div className='row'>
                        <label for="email">E-mail</label>
                        <input type="text" className="formdata2" placeholder="E-mail" name='email' data-required="true"
                            data-type="email" data-error-message="Your E-mail is required" onChange={handleOnChange} />
                    </div>
                    <div className='row'>
                        <label for="cemail">Confirm your E-mail</label>
                        <input type="text" className="formdata3" placeholder="Confirm your E-mail" name='confirmemail'
                            data-required="true" data-error-message="Your E-mail must correspond" onChange={handleOnChange} />
                    </div>
                    <div className='row'>
                        <label for='firstname'>Emergency Detail</label>
                        <input type="text" placeholder="Details" name='detail' className="formdata4" id='firstname'
                            data-required="true" data-error-message="Your Detail is required" onChange={handleOnChange} />
                    </div>
                    <div className='row'>
                        <label for='firstname'>Pincode:</label>
                        <input type="text" className="formdata5" placeholder="code" name='pincode' id='firstname'
                            data-required="true" data-error-message="Your pincode is required" onChange={handleOnChange} />
                    </div>
                    <div className='row'>
                        <label for='firstname'>Phone no:</label>
                        <input type="text" placeholder="phone no" name='phone' className="formdata6" id='firstname'
                            data-required="true" data-error-message="Your no is required" onChange={handleOnChange} />
                    </div>

                    {/* <input type="submit" value="Feedback" id="bt"/> */}
                    <button type="submit"  id="bt">Feedback</button>
                    {/* <input type="submit" value="Register" onSubmit = {handleSubmit} id="bt"></input> */}
                </form>
            </div>
        </div>
        {/* form ends */}
        
                </div>
                <div className="imgside1-2 w3-third" >
                    <h3>
                        Severe Weather
                    </h3>
                    <p>
                        weather can happen anytime. Know your risks and plan ahead.
                    </p>
                    <h3>
                        Flooding
                    </h3>
                    <p>
                        If you approach a flooded road or walkway, follow this rule: turn around, don't drown!
                    </p>
                    <h3>
                        Thunderstorms & Lightning
                    </h3>
                    <p>
                        Lightning is a leading cause of injury and death from weather-related hazards. Learn what to do
                        before, during and
                        after.
                    </p>
                    <h3>
                        Winter Weather
                    </h3>
                    <p>
                        Know what to do before, during and after snowstorms and extreme cold.
                    </p>
                    <h3>
                        Get Vaccinated
                    </h3>
                    <p>
                        COVID-19 vaccines are free and available to anyone 12 and older who wants one. Find a vaccine near
                        you today and
                        schedule an appointment.
                    </p>
                    
                </div>
            </div>
            <div className="imgside2 w3-third" >
                <div className="imgside2-1">
                    <img className="index-img" src="images/kids.jpg" width="100px" height="100px"/>
                    <img className="index-img" src="images/emergency alerts.jpg" width="100px" height="100px"/>
                    <img className="index-img" src="images/build a kit.jpg" width="100px" height="100px"
                        style={{'margin-top':'15px'}}/>
                    <img className="index-img" src="images/make a plan.jpg" width="100px" height="100px"
                        style={{'margin-top':'-20px'}}/>
                </div>
                <div className="imgside2-2 w3-third" >
                    <h3>Prepare Kids for Disasters</h3>
                    <p>
                        Teach kids how to be prepared for disasters.
                    </p>
                    <h3>Emergency Alerts</h3>
                    <p>
                        Wireless emergency alerts allow officials to provide the public with life-saving information
                        quickly.
                    </p>
                    <h3>Build a Kit</h3>
                    <p>
                        Make sure your emergency kit is stocked with the right items.
                    </p>
                    <h3>Make a Plan</h3>
                    <p>
                        Be Prepared. Make an emergency plan today and practice it.
                    </p>
                </div>
            </div>
        </div>
        

        <div id="nav-right" className="w3-container w3-green">
            <div className="nav-right-1 w3-third" >
                <ul className="left-1">
                    <h3>Disasters and Emergencies</h3>
                    <li><a href="scripts/content-2.html">Avalanche</a></li>
                    <li><a href="scripts/content-3.html">Bioterrorism</a></li>
                    <li><a href="scripts/content-4.html">Chemical Emergencies</a></li>
                    <li><a href="scripts/content-5.html">Cybersecurity</a></li>
                    <li><a href="scripts/content-6.html">Drought</a></li>
                    <li><a href="scripts/content-7.html">Earthquakes</a></li>
                    <li><a href="scripts/content-8.html">Explosions</a></li>
                    <li><a href="scripts/content-9.html">Extreme Heat</a></li>
                    <li><a href="scripts/content-10.html">Floods</a></li>
                    <li><a href="scripts/content-11.html">Hazardous Materials incidents</a></li>
                    <li><a href="scripts/content-12.html">Home Fires</a></li>
                    <li><a href="scripts/content-13.html">Household Chemical Emergencies</a></li>
                    <li><a href="scripts/content-14.html">Hurricanes</a></li>
                    <li><a href="scripts/content-15.html">Landslides & Debris Flow</a></li>
                    <li><a href="scripts/content-16.html">Nuclear Explosion</a></li>
                    <li><a href="scripts/content-17.html">Nuclear Power Plants</a></li>
                    <li><a href="scripts/content-18.html">Pandemic</a></li>
                    <li><a href="scripts/content-19.html">Power Outages</a></li>
                    <li><a href="scripts/content-20.html">Wildfires</a></li>


                    <h3>Make a Plan</h3>

                    <li><a href="scripts/content-30.html">Plan Ahead</a></li>
                    <li><a href="scripts/content-31.html">Build a Kit</a></li>
                    <li><a href="scripts/content-32.html">Safety Skills</a></li>

                    <h3>Get Involved</h3>

                    <li><a href="scripts/content-33.html">Get Trained and Volunteer</a></li>
                    <li><a href="scripts/content-34.html">You are the help until the help Arrives</a></li>

                    <h3>Resources</h3>

                    <li><a href="scripts/content-35.html">Social Media Toolkits</a></li>
                    <li><a href="scripts/content-36.html">Contact Us</a></li>
                </ul>


            </div>
        </div>



        <div id="footer" className="w3-container w3-green">
            <div className="footer1 w3-third" >
                <a href="index.html" style={{'color':'black'}}>
                    <img src="leaficon2.png" height="20px" width="20px"/>
                    <h3 style={{display:'inline-block'}}>Emergency-relief.com</h3>
                </a>
                <div style={{'margin-left':'550px', 'margin-top':'-54px'}}>
                    <h4>Helpline no:</h4>
                    <h5>7738926756</h5>
                    <h5>8108378635</h5>
                    <h5>7977668931</h5>
                </div>
                <div style={{'margin-left':'680px','margin-top':'-100px'}} >
                    <h4>created by team:</h4>
                    <h5>Zeeshan </h5>
                    <h5>Saqibe </h5>
                    <h5>Shailesh</h5>
                    <h5>Sohail </h5>
                </div>
                <p style={{'margin-top':'-20px'}}>
                    Copyright © Emergency-relief Company 2021. All Rights Reserved
                </p>
                <h6>for more information, visit on our site:</h6>
                <a href="index.html" style={{color:'rgb(85, 81, 81)'}}>
                    <p>www.emergency-relief.com</p>
                </a>
            </div>
        </div>
</div>
  );
}

export default App;
