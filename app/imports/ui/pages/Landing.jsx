import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import NewsList from '../components/NewsList';
import Footer from '../components/Footer';
import { newsItems } from '../../startup/client/data';

/* A simple static component to render some text for the landing page. */
const Landing = () => (
  <div style={{ maxWidth: '75%', margin: '0 auto' }}>
    <CustomNavbar />
    <NewsList newsItems={newsItems} />
    <Footer />
  </div>
);

export default Landing;
