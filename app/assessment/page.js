"use client"
import axios from "axios"
import React, { useEffect, useState } from 'react';
import Header from './header';
import SectionTwo from './Score2';
import SectionOne from './Score1';
import SectionThree from './Score3';
import SectionFour from './Score4';
import SectionFive from './Score5';
import SectionSix from './Score6';
import SectionSeven from './Score7';
import SectionEight from './Score8';
import Nav from './nav';
import Footer from './footer';
import { useRouter } from 'next/navigation'; // corrected import
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // corrected import for CSS

export default function Home() {
  const router = useRouter(); // corrected useRouter to router
  const [grandTotal, setGrandTotal] = useState(0);
  const [grandPercentage, setGrandPercentage] = useState(0);
const [userId, setUserId] = useState(null); // Initialize user ID

  // Get user ID from localStorage in useEffect to avoid server-side errors
  useEffect(() => {
    const storedUserId = localStorage.getItem('id'); // Client-side code
    if (storedUserId) {
      setUserId(storedUserId); // Set user ID in state
    } else {
      router.push('/signup'); // Redirect to signup if no user ID
    }
  }, [router]);

  
  
  const handleCalculateTotal = async(event) => { // added event parameter
    event.preventDefault();
    // Retrieve the values from input fields for each section and convert them to integers
    let total=0;
    total+= parseInt(document.getElementById('sectionOneTotal').value) || 0;
    total+= parseInt(document.getElementById('sectionTwoTotal').value) || 0;
    total+= parseInt(document.getElementById('sectionThreeTotal').value) || 0;
    total+= parseInt(document.getElementById('sectionFourTotal').value) || 0;
    total+= parseInt(document.getElementById('sectionFiveTotal').value) || 0;
    total+= parseInt(document.getElementById('sectionSixTotal').value) || 0;
    total+= parseInt(document.getElementById('sectionSevenTotal').value) || 0;
    total+= parseInt(document.getElementById('sectionEightTotal').value) || 0;

    setGrandTotal(total);
    const GrandPercentage = (total / 234) * 100;
    setGrandPercentage(GrandPercentage);

  
 
    if(userId){
    const response = await axios.post('/api/quiz', {
      userId,
      score: total,
    });
    console.log(response)}

  
  
 

    if (GrandPercentage > 60) {
      // toast.success('Successfully completed the generic skill test', {
      //   position: "bottom-center",
      //   autoClose: 1000,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "colored",
      //   transition: "bounce", // corrected transition
      // });
      router.push('/curriculum'); // corrected push method
    } else {
      // toast.error('Your Mark is less then 60%', {
      //   position: "bottom-center",
      //   autoClose: 1000,
      //   hideProgressBar: true,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "colored",
      //   transition: "bounce", // corrected transition
      // });
      console.log("your mark is less than 60 percent")
    }
  };
  
  return (
    <>
      
      <link href="http://fonts.googleapis.com/css?family=Dosis:400,500,700" rel="stylesheet" type="text/css" />
      <link rel="stylesheet" href="/icon/styles.css" />
      <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />    
    
      <Header/>
      <br /> <br /><br /><br /> 
      <div id="ft">
        <ol className="assistance-list">
          <li><img src="./with-assist.png" alt="With Physical Assistance" width="42" height="42" align="middle" /> - With Physical Assistance</li>
          <li><img src="icon/PNG/with-verbel-assist.png" alt="With Verbal Assistance" width="42" height="42" align="middle" /> - With Verbal Assistance</li>
          <li><img src="icon/PNG/with-clue-assist.png" alt="With Clue Assistance" width="42" height="42" align="middle" /> - With Clue Assistance</li>
          <li><img src="icon/PNG/with-no-assist.png" alt="With No Assistance" width="42" height="42" align="middle" /> - With No Assistance</li>
        </ol>
      </div>
      <br /><br /><br /> 

      <div className="head">  
        <br /><br /><br />
        <div className="subhead">
          <Nav/>
          <form id="f1" name="Assessment Evaluation" onSubmit={handleCalculateTotal}> {/* corrected onSubmit */}
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
            <SectionSix/>
            <SectionSeven/>
            <SectionEight grandTotal={grandTotal} grandPercentage={grandPercentage} handleCalculateTotal={handleCalculateTotal}/>
          </form>
          <br /><br />
        </div>
        <br /><br />
        <Footer/>
      </div>
      <ToastContainer /> {/* Added ToastContainer */}
    </>
  );
}