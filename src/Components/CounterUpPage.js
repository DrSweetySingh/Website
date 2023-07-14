import {React, useState} from "react";
import CountUp from 'react-countup';
import ScrollTrigger from "react-scroll-trigger";

const CounterUpPage = () => {
    const[counterOn, setCounterOn] = useState(false);

    return (
        <ScrollTrigger onEnter = {()=> setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div>
                <h2>
                    {counterOn &&  <CountUp start={0} end={20000} duration={3} delay = {0}/>}
                    +
                </h2>
            </div>
        </ScrollTrigger>
        
    );
    };
    
    export default CounterUpPage;