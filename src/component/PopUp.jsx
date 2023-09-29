import React, { useState, useEffect, useRef } from "react";
import LogoTitle from "../assets/logo-title.svg";
import Settings from "../assets/setting-2.svg";
import Close from "../assets/close-circle.svg";
import Monitor from "../assets/monitor.svg";
import Copy from "../assets/copy.svg";
import Mic from "../assets/microphone.svg";
import Camera from "../assets/video-camera.svg";

const PopUp = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [mediaStream, setMediaStream] = useState(null)

    const [recording, setRecording] = useState(false);
  const mediaStreamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);

    useEffect(() => {
        if(isRecording) {
            navigator.mediaDevices
            .getDisplayMedia({video: true})
            .then((stream) => {
                setMediaStream(stream)
            })
            .catch((error) => {
                console.log('error accessing screen', error)
            })
        } else {
            if(mediaStream) {
                mediaStream.getTracks().forEach((track) => track.stop())
                setMediaStream(null)
            }
        }
        console.log(mediaStream)
    },[isRecording])

    const toggleRecording = () => {
        setIsRecording(!isRecording)
    }

    const startRecording = async () => {
        try {
          const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });
          mediaStreamRef.current = stream;
    
          const mediaRecorder = new MediaRecorder(stream);
          mediaRecorderRef.current = mediaRecorder;
    
          mediaRecorder.ondataavailable = (event) => {
            if (event.data.size > 0) {
              recordedChunksRef.current.push(event.data);
            }
          };
    
          mediaRecorder.onstop = () => {
            const recordedBlob = new Blob(recordedChunksRef.current, { type: 'video/webm' });
            const url = URL.createObjectURL(recordedBlob);
            // You can do something with the recorded video URL, like display it in a video element or upload it.
          };
    
          mediaRecorder.start();
          setRecording(true);
        } catch (error) {
          console.error('Error accessing screen:', error);
        }
        window.close();
      };
    
    //   const stopRecording = () => {
    //     if (mediaRecorderRef.current && recording) {
    //       mediaRecorderRef.current.stop();
    //       mediaStreamRef.current.getTracks().forEach((track) => track.stop());
    //       recordedChunksRef.current = [];
    //       setRecording(false);
    //     }
    //   }

    const stopRecording = () => {
        if (mediaRecorderRef.current && recording) {
          mediaRecorderRef.current.stop();
          mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      
          // Create a Blob from the recorded chunks
          const recordedBlob = new Blob(recordedChunksRef.current, { type: 'video/webm' });
      
          // Generate a URL for the recorded Blob
          const url = window.URL.createObjectURL(recordedBlob);
      
          // Create a link element for downloading the video
          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = url;
          a.download = 'recorded-screen.mp4'; // You can specify the filename here
      
          // Append the link to the DOM and trigger a click event to start the download
          document.body.appendChild(a);
          a.click();
      
          // Clean up resources
          recordedChunksRef.current = [];
          setRecording(false);
      
          // Remove the link element from the DOM
          document.body.removeChild(a);
        }
      };

  
  return (
    <div className="w-[300px] rounded-3xl bg-white shadow-lg px-6 pt-2 pb-5 mx-6 my-5">
      <div className="container py-3">
        <div className="flex justify-between items-center">
          <img src={LogoTitle} alt="" width={"130px"} />
          <div className="flex gap-x-3">
            <img src={Settings} alt="" />
            <img src={Close} alt="" />
          </div>
        </div>
        <p className="my-4 text-sm text-[#413C6D]">
        This extension helps you record and share help videos with ease.
        </p>
        <div className="my-6 mx-8 flex justify-between items-center">
            <div className="grid place-items-center">
                <img src={Monitor} alt="monitor" />
                <p className="text-[#928FAB] font-medium text-sm my-3">Full screen</p>
            </div>
            <div className="grid place-items-center">
                <img src={Copy} alt="copy" />
                <p className="text-[#120B48] font-semibold text-sm my-3">Current Tab</p>
            </div>
        </div>
        <div className="mt-6">
            <div className="my-5 border-2 border-[#100A42] rounded-2xl flex justify-between items-center py-3 px-2 w-full">
                <div className="flex items-center gap-x-2">
                    <img src={Camera} alt="camera" />
                    <p className="text-[#100A42] font-medium">Camera</p>
                </div>
            </div>
            <div className="my-5 border-2 border-[#100A42] rounded-2xl flex justify-between items-center py-3 px-2 w-full">
                <div className="flex items-center gap-x-2">
                    <img src={Mic} alt="mic" />
                    <p className="text-[#100A42] font-medium">Audio</p>
                </div>
            </div>
            <button onClick={startRecording} className="bg-[#120B48] p-4 rounded-2xl text-[#FAFDFF] font-medium text-base text-center w-full">Start Recording</button>
            <button onClick={stopRecording} className="bg-[#120B48] p-4 rounded-2xl text-[#FAFDFF] font-medium text-base text-center w-full">Stop Recording</button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
