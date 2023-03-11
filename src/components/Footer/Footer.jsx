import React from 'react';
import Typography from '../Typography/Typography';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-PrimaryBgSurface py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <Typography variant={'heading'} element='h4' className={'text-amber-500'}>Spirits & Lyrics</Typography>
            <Typography variant={'body'} element='p'>Spirits & Lyrics is produced by Alex and Travis Wood and recorded in Philadelphia & Lansdale PA.</Typography>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                <h2 className="text-lg font-bold mb-4 uppercase">Links</h2>
                <ul className="list-none">
                  <li><a href="#">About</a></li>
                  <li><a href="#">How to Listen</a></li>
                  <li><a href="#">Store</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                <h2 className="text-lg font-bold mb-4 uppercase">More</h2>
                <ul className="list-none">
                  <li><a href="#">Drinks</a></li>
                  <li><a href="#">Music</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Sponsors</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
