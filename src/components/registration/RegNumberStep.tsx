"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { StepProps } from "@/types/registration";
import { validateRegistrationNumber } from "@/lib/validation";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

export function RegNumberStep({ data, updateData, onNext, onBack }: StepProps) {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!validateRegistrationNumber(data.registrationNumber)) {
      setError("Please enter a valid registration number");
      return;
    }
    setError("");
    onNext?.();
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="text-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-pink-600 bg-clip-text text-transparent">
          Student Information
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Enter your registration number</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="regNumber">Registration Number</Label>
        <Input
          id="regNumber"
          type="text"
          placeholder="e.g., CT201/11230/23"
          value={data.registrationNumber}
          onChange={(e) =>
            updateData("registrationNumber", e.target.value.toUpperCase())
          }
          className="w-full"
        />
        {error && <p className="text-red-500 dark:text-red-400 text-sm">{error}</p>}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={onBack} variant="outline" className="flex-1">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button
          onClick={handleNext}
          className="flex-1 bg-gradient-to-r from-yellow-400 to-pink-600 hover:from-yellow-500 hover:to-pink-700"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
