import React from "react";
import { Route, Routes} from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Theka } from "../pages/theka";
import { Omar } from "../pages/omar";
import { Salus } from "../pages/salus";
import { Ekchatur } from "../pages/ekChatur";
import { Wahin } from "../pages/wahinkawahin";
import { Sub } from "../pages/subway";
import Gallery  from "../pages/photo";
import { Dhun } from "../pages/dhun";
import { Animation } from "../pages/animation"
import {Phantom} from "../pages/phantom"
import {Atlas} from "../pages/atlas"
import { Ibm } from "../pages/ibm";
import { NovaSync } from "../pages/novasync";


import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const AnimatedRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={{
        enter: 400,
        exit: 400,
      }}
      classNames="page"
      unmountOnExit
    >
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/theka" element={<Theka />} />
        <Route path="/omar" element={<Omar />} />
        <Route path="/salus" element={<Salus />} />
        <Route path="/ekchatur" element={<Ekchatur />} />
        <Route path="/wahin" element={<Wahin />} />
        <Route path="/sub" element={<Sub />} />
        <Route path="/photo" element={<Gallery />} />
        <Route path="/dhun" element={<Dhun />} />
        <Route path="*" element={<Home />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/phantom" element={<Phantom />} />
        <Route path="/atlas" element={<Atlas />} />
        <Route path="/ibm" element={<Ibm />} />
        <Route path="/novasync" element={<NovaSync />} />
      </Routes>
    </CSSTransition>
  </TransitionGroup>
));

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
