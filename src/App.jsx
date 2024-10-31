import React from "react";
import styles from "./styles";
import { Navbar,Billing,Business,Button,CTA,CardDeal,Clients,Feedback,Footer,GetStarted,Hero,Stats,Testimonials } from "./components";


const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <Navbar/>
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth} text-dimWhite`}>
      <Stats/>
      <Business/>
<Billing/>
<CardDeal/>
<Testimonials/>
<Clients/>
<CTA/>
<Footer/>
      </div>
    </div>
  </div>
  </div>
);
export default App;
