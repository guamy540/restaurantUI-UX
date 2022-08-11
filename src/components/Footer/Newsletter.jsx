import React from 'react';
import toast, {Toaster} from 'react-hot-toast';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const notify = () => toast('No newsletters. This restauraunt is fake.');

const Newsletter = () => (

  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button" onClick={notify}>Subscribe</button>
      <Toaster position="bottom-center"  reverseOrder={false}/>
    </div>
  </div>
);

export default Newsletter;