
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'



export default function Home() {

    const [isOpen , setIsOpen] = useState<boolean>(false)
    const [quote , setQoute] = useState<String>("")

    const newYearQuotes = [
      "May the coming year be filled with joy, love, and countless moments of happiness. Happy New Year!",
      "As the new year unfolds, may it bring you abundant joy, unwavering love, and boundless happiness.",
      "Wishing you a New Year filled with laughter, surrounded by the warmth of loved ones, and sprinkled with moments of pure joy.",
      "May the canvas of the new year be painted with vibrant hues of love, joy, and happiness. Happy New Year!",
      "Here's to a year ahead filled with love that knows no bounds, joy that overflows, and happiness that lasts a lifetime. Happy New Year!",
      "May the upcoming year be a chapter of beautiful moments, a story of love, and a journey filled with happiness. Happy New Year!",
      "Wishing you a New Year where every day is a celebration, every moment is special, and every heartbeat echoes with joy and love.",
      "In the tapestry of life, may the threads of love, joy, and happiness weave together to create a masterpiece in the coming year. Happy New Year!",
      "As you step into the new year, may your path be paved with love, your days be filled with joy, and your heart be content with happiness.",
      "May the new year bring you the gift of love, the blessing of joy, and the abundance of happiness. Cheers to a wonderful year ahead!"
    ];
    

    const handleClick = () =>{
      if(!isOpen)
      {
      const randomIndex = Math.floor(Math.random() * newYearQuotes.length);
      setQoute(newYearQuotes[randomIndex])
      }
      setIsOpen(!isOpen)
    }
 

    const defaultOptions = {
      reverse:        false,  // reverse the tilt direction
      max:            15,     // max tilt rotation (degrees)
      perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
      scale:          1.4,    // 2 = 200%, 1.5 = 150%, etc..
      speed:          1000,   // Speed of the enter/exit transition
      transition:     true,   // Set a transition on enter/exit.
      axis:           null,   // What axis should be disabled. Can be X or Y.
      reset:          true,    // If the tilt effect has to be reset on exit.
      easing:         "cubic-bezier(.03,.98,.52,1.99)",    // Easing on enter/exit.
    }
  

  return (
    <>
      <Head>
        <title>Happy New Year</title>
        <meta name="description" content="Created By Manu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <h1 className={styles.h1}>💜Happy New Year💜</h1>
      <p className={styles.pNote}>Please Click The Envelope✉️</p>
    
      <div onClick={handleClick} className={styles.container}>
        <div className={`${styles.envelopewrapper} ${isOpen && styles.flap}`}>
            <div className={styles.envelope}>
                <div className={styles.letter}>
                    <div className={styles.text}>
                        <strong>Dear Person♥️.</strong>
                        <p>
                           {quote}
                        </p>
                        <p style={{marginLeft: "30px"}}>From - Manu🫶🏼💜</p>
                    </div>
                </div>
            </div>
            <div  className={styles.text}></div>
        </div>
       </div>
      
      </main>
    </>
  )
}
