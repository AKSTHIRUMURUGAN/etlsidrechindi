"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import TextToSpeech from '../controls/t2s';
export default function Home() {

    return (
      <div style={{ position: 'relative' }}>
      <img className="bg" src="./doormat.png" style={{ width: '100vw', height: '100vh' }} />
      <Link href='/'><button id="home"  className="ti"/></Link>
      <Link href='/about'><button id="about"  className="ti"/></Link>
      <Link href='/contact'><button id="contact"  className="ti"/></Link>   
      <Link href='/curriculum'><button id="curriculumt"  className="bi"/></Link> 
      <div id='ts' className='absolute grid grid-cols-3 gap-11'>
      <TextToSpeech text="कार्ड" />
      <TextToSpeech text="इंच टेप" />
      <TextToSpeech text="कलम" />
      <TextToSpeech text="कैंची" />
      <TextToSpeech text="कपड़ा" />
      </div> 
      <Link href='/doormatvp'><button id="computervp"  className="bi"/></Link> 
  </div>
    );
}



