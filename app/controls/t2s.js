import React, { useState } from 'react';

const TextToSpeech = ({ text }) => {
  const [src, setSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    setIsLoading(true); // Indicate that the process has started

    try {
      const response = await fetch("https://etlsidrechindi.vercel.app/api/synthesis", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error(`Error during synthesis: ${response.statusText}`);
      }

      const data = await response.json(); // Parse the response data
      const audioContent = data.audioContent;

      if (audioContent) {
        const newSrc = `data:audio/mp3;base64,${audioContent}`; // Prepare the new audio source
        setSrc(newSrc); // Set the source for the audio component
      } else {
        console.error("No audio content received");
      }

    } catch (error) {
      console.error("Error during text-to-speech synthesis:", error);
    } finally {
      setIsLoading(false); // Reset the loading indicator
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick} disabled={isLoading} className='pt'>
      
      </button>
      {src && <audio  src={src} autoPlay />} {/* Play the audio if src is set */}
    </div>
  );
};

export default TextToSpeech;
