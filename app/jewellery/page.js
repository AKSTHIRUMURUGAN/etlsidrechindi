"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import TextToSpeech from '../controls/t2s';
export default function Home() {

    return (
      <div style={{ position: 'relative' }}>
      <img className="bg" src="./jewellery.png" style={{ width: '100vw', height: '100vh' }} />
      <Link href='/'><button id="home"  className="ti"/></Link>
      <Link href='/about'><button id="about"  className="ti"/></Link>
      <Link href='/contact'><button id="contact"  className="ti"/></Link>   
      <Link href='/curriculum'><button id="curriculumt"  className="bi"/></Link> 
      <div id='ts1' className='absolute grid  grid-cols-3 gap-8'>
      <TextToSpeech text="रेशम के धागे का बंडल" />
      <TextToSpeech text="चूड़ी" />
      <TextToSpeech text="गोंद" />
      <TextToSpeech text="कैची" />
      <TextToSpeech text="मनका धागा" />
      <TextToSpeech text="मनका" />
      <TextToSpeech text="पकड़" />
      <TextToSpeech text="हुक" />
      <TextToSpeech text="कूदने के छल्ले" />
      </div> 
      <Link href='/jewelleryvp'><button id="computervp"  className="bi"/></Link> 
  </div>
    );
}



