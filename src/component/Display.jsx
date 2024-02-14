import React, { useState, useEffect } from 'react';
import './display.css';
import Img1 from '../Imgs/Image1.jpg'
import Img2 from '../Imgs/Image2.jpg'
import Img3 from '../Imgs/img3.jpg'
import Img4 from '../Imgs/img4.jpg'
import Img5 from '../Imgs/img5.jpg'
import Img6 from '../Imgs/img6.jpg'
import Img7 from '../Imgs/img7.jpg'
import Img8 from '../Imgs/img8.jpg'
import Img9 from '../Imgs/img9.jpg'


function Display() {
  
  
    return (
        <div className="Cont">
            <h1>Memories Lane</h1>
            <button className='img1'> <img src={Img1}></img><p>"I belong to my beloved, and my beloved is mine".</p><bold>--Jamie McGuire, Beautiful Disaster--</bold></button>
            <button className='img2'> <img src={Img2}></img><p>"Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.".</p><bold>--Unkown--</bold></button>
            <button className='img3'> <img src={Img3}></img><p>""I count my blessings every day, knowing I'm incredibly fortunate to have you in my life, your presence fills my days with joy and your lov envelopes me like a warm embrace."".</p></button>
            <button className='img4'> <img src={Img4}></img><p>"I am endlessly grateful for your presence in my life, feeling blessed each day to have you by my side.".</p></button>
            <button className='img5'> <img src={Img5}></img><p>"Having you in my life is a constant reminder of how lucky I am to experience such deep love and companionship".</p></button>
            <button className='img6'><img src={Img6}></img><p>"Every moment with you is a precious gift, and I feel immensely fortunate to have you as my partner in life".</p></button>
            <button className='img7'><img src={Img7}></img><p>"Knowing you're mine fills me with gratitude beyond measure, as I cherish the incredible fortune of having you as my partner".</p></button>
            <button className='img7'><img src={Img8}></img><p>"I feel like the luckiest person alive to have you in my life, your love is a treasure I hold dear every single day.".</p></button>
            <button className='img8'><img src={Img9}></img><p>"you in my life is like winning the greatest lottery every day, and I am infinitely grateful for your presence and love".</p></button>
        </div>
    );
}

export default Display;
