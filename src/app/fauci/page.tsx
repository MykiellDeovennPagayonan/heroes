"use client";

import { FC, useState, useEffect } from 'react';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

// Define the Page component using TypeScript
const Page: FC = () => {
  // State to manage the listening status
  const [isListening, setIsListening] = useState<boolean>(false);
  // State to store the SpeechRecognition object
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

  // Effect to initialize the SpeechRecognition object on component mount
  useEffect(() => {
    // Check if the browser supports the Web Speech API
    if ('webkitSpeechRecognition' in window) {
      // Create a new SpeechRecognition instance
      const speechRecognition = new (window as any).webkitSpeechRecognition() as SpeechRecognition;
      speechRecognition.continuous = true;
      speechRecognition.interimResults = false;
      speechRecognition.lang = 'en-US';
      
      // Event handler for when recognition starts
      speechRecognition.onstart = () => {
        setIsListening(true);
      };
      
      // Event handler for when recognition ends
      speechRecognition.onend = () => {
        setIsListening(false);
      };
      
      // Event handler for recognition errors
      speechRecognition.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error("Speech recognition error", event);
        setIsListening(false);
      };

      // Event handler for when speech is recognized
      speechRecognition.onresult = (event: SpeechRecognitionEvent) => {
        const result = event.results[0][0].transcript;
        console.log("You said: ", result);
        // Handle the recognized speech here if needed.
      };

      // Store the SpeechRecognition object in state
      setRecognition(speechRecognition);
    } else {
      console.warn("Web Speech API is not supported in this browser.");
    }
  }, []);

  // Function to toggle listening state
  const toggleListening = () => {
    if (recognition) {
      if (isListening) {
        recognition.stop();
      } else {
        recognition.start();
      }
    }
  };

  return (
    <div className="flex flex-col w-max-screen items-center justify-center h-max-screen p-8 bg-neutral-950 text-white bg-grid-white/[0.05]">
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-100 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Dr. Anthony Fauci
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Dr. Anthony Fauci is a top American immunologist who led the U.S. COVID-19 response.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/images/fauci.png"
              height="1000"
              width="1000"
              className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex w-full mt-8">
            <CardItem
              translateZ={20}
              as="button"
              onClick={toggleListening}
              className={`px-4 py-2 mx-auto rounded-xl ${
                isListening ? 'bg-red-500' : 'bg-black dark:bg-white dark:text-black text-white'
              } text-xs font-bold`}
            >
              {isListening ? 'Listening...' : 'Talk'}
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default Page;
