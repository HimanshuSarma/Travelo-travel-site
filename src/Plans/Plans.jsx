import './Plans.css';
import Plan from './Plan';
import React from 'react';
import PlansArr from './PlansArr';
import HolidayPlansArr from './HolidayPlans';
import GroupToursArr from './GroupTours';
import LongTermPlansArr from './LongTermPlans';
import {Link, Switch, Route, NavLink} from 'react-router-dom';



const plansFunc = (arrayPlans) => {
    const plans = arrayPlans.map((plan, index) => {
        return (
            <React.StrictMode key={index}>
                <Plan imgSrc={plan.imgSrc} heading={plan.heading} desc={plan.desc}
                    area={plan.area} price={plan.price} 
                    duration={plan.duration}
                    buildingIcon="./imgs/PlansImgs/BuildingIcon.png"
                    flightIcon="./imgs/PlansImgs/FlightIcon.png"
                    hotelIcon="./imgs/PlansImgs/HotelIcon.png"
                />
            </React.StrictMode>
        )
    })
    return plans;
}


const Plans = () => {
    return (
        <main className="plans">
            <h2 className="plans-header">
                Recommended Destination
            </h2>
            <div className="plans-btns">
                <NavLink className="plans-btns-link" exact activeClassName="btn-active" 
                to="/">The Weekend Break</NavLink>
                <NavLink className="plans-btns-link" exact activeClassName="btn-active"
                to="/package-holiday">The Package Holiday</NavLink>
                <NavLink className="plans-btns-link" exact activeClassName="btn-active"
                to="/group-tour">The Group Tour</NavLink>
                <NavLink className="plans-btns-link" exact activeClassName="btn-active"
                to="/slow-travel">Long Term Slow Travel</NavLink>
            </div>

            <Switch>
                <Route exact path="/">
                    <div className="plans-container">
                        {plansFunc(PlansArr)};
                    </div>
                </Route>

                <Route exact path="/package-holiday">
                    <div className="plans-container">
                        {plansFunc(HolidayPlansArr)};
                    </div>
                </Route>

                <Route exact path="/group-tour">
                    <div className="plans-container">
                        {plansFunc(GroupToursArr)};
                    </div>
                </Route>

                <Route exact path="/slow-travel">
                    <div className="plans-container">
                        {plansFunc(LongTermPlansArr)};
                    </div>
                </Route>
            </Switch>
        </main>
    )
}

export default Plans
