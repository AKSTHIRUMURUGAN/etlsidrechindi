"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import TextToSpeech from '../controls/t2s';
export default function Home() {

    return (
      <div style={{ position: 'relative' }}>
      <img className="bg" src="./softtoy.png" style={{ width: '100vw', height: '100vh' }} />
      <Link href='/'><button id="home"  className="ti"/></Link>
      <Link href='/about'><button id="about"  className="ti"/></Link>
      <Link href='/contact'><button id="contact"  className="ti"/></Link>   
      <Link href='/curriculum'><button id="curriculumt"  className="bi"/></Link> 
      <div id='ts1' className='absolute grid  grid-cols-3 gap-8'>
      <TextToSpeech text="रोएंदार कपड़ा" />
      <TextToSpeech text="धागे की डोरी" />
      <TextToSpeech text="आँखें" />
      <TextToSpeech text="सुई" />
      <TextToSpeech text="धागा" />
      <TextToSpeech text="गोंद" />
      <TextToSpeech text="कैंची" />
      </div> 
      <Link href='/softtoyvp'><button id="computervp"  className="bi"/></Link> 
  </div>
    );
}



