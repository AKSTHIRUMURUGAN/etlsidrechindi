import axios from "axios";
import { NextResponse } from "next/server";
export async function POST(req){
    const {text} = await req.json();
    const apikey="AIzaSyCYJNSUrvuQ6-0RgHfDAXFhARN0lHrsmQI"
    const endpoint=`https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${apikey}`
    const payload={
        
            "audioConfig": {
              "audioEncoding": "MP3",
              "pitch": 0,
              "speakingRate": 1
            },
            "input": {
              "text":text
            },
            "voice": {
              "languageCode": "hi-IN",
              "name": "hi-IN-Neural2-B"
            }
          
    }
    const response=await axios.post(endpoint,payload)
    return NextResponse.json(response.data);
}