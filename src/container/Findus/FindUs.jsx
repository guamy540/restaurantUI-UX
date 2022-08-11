import React from 'react';
import {motion} from 'framer-motion'
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <motion.div 
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}className="app__wrapper-content">
        <motion.p whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</motion.p>
        <motion.p whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</motion.p>
        <motion.p whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</motion.p>
        <motion.p whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</motion.p>
      </motion.div>
    </motion.div>

    <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </motion.div>
  </div>
);

export default FindUs;