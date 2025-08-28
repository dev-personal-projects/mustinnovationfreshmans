"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle } from "lucide-react";
import { WHATSAPP_GROUP_LINK } from "@/lib/constants";

interface SuccessScreenProps {
  name: string;
  onReset: () => void;
}

export function SuccessScreen({ name, onReset }: SuccessScreenProps) {
  return (
    <div className="text-center space-y-6 animate-fadeIn">
      <div className="flex justify-center">
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center animate-bounce">
          <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Welcome to the Club, {name}!
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Your registration has been successfully submitted
        </p>
      </div>

      <div className="space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          Join our WhatsApp group to stay connected:
        </p>

        <a
          href={WHATSAPP_GROUP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            <MessageCircle className="w-5 h-5 mr-2" />
            Join WhatsApp Group
          </Button>
        </a>

        <div className="pt-4">
          <Button onClick={onReset} variant="outline" className="text-gray-600 dark:text-gray-300">
            Register Another Member
          </Button>
        </div>
      </div>
      
    </div>
  );
}
