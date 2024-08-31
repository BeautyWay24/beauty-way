import React, { useState, useEffect } from 'react';
import { Features, Feedbacks, Footer, HeroSection, Navbar, ProductDescription, Products, ScrollToTop, WhyChooseUs } from './components';
import { video } from './assets'; // Import both video files

const App = () => {
  const [videoBg, setVideoBg] = useState(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function to update the screen width
    const handleResize = () => setScreenWidth(window.innerWidth);

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Load the appropriate video based on the screen width
    if (screenWidth < 600) {
      import('./assets/video_pr.mp4').then(module => setVideoBg(module.default));
    } else {
      import('./assets/videoBg.mp4').then(module => setVideoBg(module.default));
    }

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [screenWidth]); // Re-run the effect when screen width changes

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div>
      <ScrollToTop />
      <div id='scroll_snap' className="relative h-screen overflow-hidden">
        {videoBg && (
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src={videoBg}
            autoPlay
            loop
            muted
            onLoadedData={handleVideoLoaded} // triggers when the video is ready to play
          />
        )}
        {isVideoLoaded && (
          <div className="relative z-10">
            <Navbar />
            {screenWidth >= 600 && <HeroSection />} {/* Conditionally render HeroSection */}
          </div>
        )}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>

      {/* Features section */}
      <ProductDescription />
      <Products />
      <WhyChooseUs />
      <Feedbacks />
      <Footer />
    </div>
  );
};

export default App;
