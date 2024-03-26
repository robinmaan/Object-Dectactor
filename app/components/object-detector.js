"use client"

import React, { useEffect, useRef ,useState } from 'react'
import Webcam from 'react-webcam'
import {load as cocoSSDLoad} from '@tensorflow-models/coco-ssd'
// import * as tf from '@tensorflow/tfjs';


const objectDetactor = () => {
    const webcamRef = useRef(null)
    const canvasRef = useRef(null)

    const [isLoading,setIsLoading] = useState(true)
    let detectInterval;

    const runCoco = async()=>{
      setIsLoading(true)
        const net = await cocoSSDLoad()
        setIsLoading(false)


        detectInterval = setInterval(()=>{
            // runObjectDetection:any(net)
        },10)
    }
   
    const showMyVideo = ()=>{
        if(webcamRef.current!==null && webcamRef.current.video?.readyState === 4){
            const myvideoWidth = webcamRef.current.video.videoWidth;
            const myvideoHeight = webcamRef.current.video.videoHeight;

            webcamRef.current.video.height = myvideoHeight;
            webcamRef.current.video.width = myvideoWight;
        }
    };
    useEffect(()=>{
       showMyVideo();
       runCoco()
    })
  return (
    <div className='mt-8'>
        isLoading ? (
            <div className='flex items-center text-4xl'>Loading... Ai Model</div>
        )
        <div className='relative flex justify-center items-center gradient p-1.5 rounded-md'></div>
        <Webcam  ref={webcamRef} className='rounded-md w-full lg:h-[720px]' muted/>
        <canvas ref={canvasRef}/>
    </div>
  )
}

export default objectDetactor
