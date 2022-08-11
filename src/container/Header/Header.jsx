import React from 'react';
import { motion } from 'framer-motion';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.8 }}
      div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
    </motion.div>

    <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.8 }} className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </motion.div>
  </div>
);

export default Header;