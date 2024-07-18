// import React from 'react'

// export const Analytics = () => {
//   return (
//     // <div>
//       <section className='section-analytics'>
//         <div className='container grid grid-four-cols'>
//             <div className="div1">
//                 <h2>50+</h2>
//                 <p>registered companies</p>
//             </div>
//             <div className="div1">
//                 <h2>100.00+</h2>
//                 <p>happy clients</p>
//             </div>
//             <div className="div1">
//                 <h2>500+</h2>
//                 <p>Well Known Developers</p>
//             </div>
//             <div className="div1">
//                 <h2>24/7</h2>
//                 <p>Service</p>
//             </div>
//         </div>
//       </section>
//     // </div>
//   )
// }

// export default Home;



import React, { useState, useEffect } from 'react';
import './Analytics.css'; // Import the CSS file for styling

const Analytics = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const counters = [50, 100, 500, 24]; // The final values for the counters
    const intervalTimes = [10, 20, 1500 / 10, 10]; // Interval times for each counter
    let intervals = [];

    // Create an interval for each counter
    counters.forEach((value, index) => {
      const interval = setInterval(() => {
        // Increment the counter by 1 until it reaches its final value
        setCounts(prevCounts => {
          if (prevCounts[index] < value) {
            const newCounts = [...prevCounts];
            newCounts[index] += index === 2 ? 50 : 1; // Increment by 50 for "Well Known Developers"
            return newCounts;
          } else {
            clearInterval(interval); // Stop the interval when final value is reached
            return prevCounts;
          }
        });
      }, intervalTimes[index]); // Set interval time for each counter
      intervals.push(interval);
    });

    // Clean up intervals on component unmount
    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, []);

  return (
    <section className='section-analytics'>
      <div className='container grid grid-four-cols'>
          <div className="div1">
              <h2 id='anm'>{counts[0] + '+'}</h2>
              <p>registered companies</p>
          </div>
          <div className="div1">
              <h2 id='anm'>{counts[1] + '.00+'}</h2>
              <p>happy clients</p>
          </div>
          <div className="div1">
              <h2 id='anm'>{counts[2] + '+'}</h2>
              <p>Well Known Developers</p>
          </div>
          <div className="div1">  
              <h2 id=''>{counts[3] + '/07'}</h2>
              <p>Service</p>
          </div>
      </div>
    </section>
  );
};

export default Analytics;
