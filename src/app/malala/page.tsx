"use client";

import { FC, useState, useEffect } from 'react';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import getResponse from '@/utils/openAIResponse';
import { useRouter } from 'next/navigation';

const Page: FC = () => {
  const [isListening, setIsListening] = useState<boolean>(false);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      const speechRecognition = new (window as any).webkitSpeechRecognition() as SpeechRecognition;
      speechRecognition.continuous = true;
      speechRecognition.interimResults = false;
      speechRecognition.lang = 'en-US';

      speechRecognition.onstart = () => {
        setIsListening(true);
      };

      speechRecognition.onend = () => {
        setIsListening(false);
      };

      speechRecognition.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error("Speech recognition error", event);
        setIsListening(false);
      };

      speechRecognition.onresult = async (event: SpeechRecognitionEvent) => {
        const result = event.results[0][0].transcript;
        console.log("You said: ", result);

        const aiResponse = await getResponse(result, prompt);
        console.log("AI says: ", aiResponse);

        if (aiResponse) {
          speak(aiResponse);
        }
      };

      setRecognition(speechRecognition);
    } else {
      console.warn("Web Speech API is not supported in this browser.");
    }
  }, []);

  const toggleListening = () => {
    if (recognition) {
      if (isListening) {
        recognition.stop();
      } else {
        stopSpeaking();
        recognition.start();
      }
    }
  };

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 1;
    const voices = speechSynthesis.getVoices();

    const chosenVoice = voices
      .filter(
        (voice) =>
          voice.name === "Microsoft Sonia Online (Natural) - English (United Kingdom)" ||
          voice.name === 'Google UK English Female' ||
          voice.name === 'Samantha'
      );

    utterance.voice = chosenVoice.length > 0 ? chosenVoice[0] : voices[0]
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  return (
    <div className="flex flex-col w-max-screen items-center justify-center h-max-screen p-8 bg-neutral-950 text-white bg-grid-white/[0.05]">
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-100 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Malala Yousafzai
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Malala Yousafzai is a Pakistani activist for female education and the youngest Nobel Prize laureate.
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/images/Malala.jpg"
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
              className={`px-4 py-2 mx-auto rounded-xl ${isListening ? 'bg-red-500' : 'bg-black dark:bg-white dark:text-black text-white'
                } text-xs font-bold`}
            >
              {isListening ? 'Listening...' : 'Talk'}
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
      <button
        onClick={() => router.push("/")}
        className="absolute top-4 left-4 bg-gray-800 text-white p-2 rounded"
      >
        Back
      </button>
    </div>
  );
};

export default Page;

const prompt = "A fan of Malala Yousafzai will be asking questions about her as a hero. Your role is to reply to them about her on any queries";
