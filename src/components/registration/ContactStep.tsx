"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { StepProps } from "@/types/registration";
import { GENDERS } from "@/lib/constants";
import { validatePhoneNumber } from "@/lib/validation";
import { useState } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";

export function ContactStep({ data, updateData, onNext, onBack }: StepProps) {
  const [errors, setErrors] = useState<{ gender?: string; phone?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    const newErrors: typeof errors = {};

    if (!data.gender) {
      newErrors.gender = "Please select your gender";
    }

    if (!validatePhoneNumber(data.mobileNumber)) {
      newErrors.phone =
        "Please enter a valid phone number (e.g., 0712345678 or +254712345678)";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Trigger the submission through parent
    onNext?.();
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="text-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
          Final Details
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Almost done! Just a few more details
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Gender</Label>
          <RadioGroup
            value={data.gender}
            onValueChange={(value) => updateData("gender", value)}
          >
            {GENDERS.map((gender) => (
              <div key={gender} className="flex items-center space-x-2">
                <RadioGroupItem value={gender} id={gender} />
                <Label htmlFor={gender} className="cursor-pointer">
                  {gender}
                </Label>
              </div>
            ))}
          </RadioGroup>
          {errors.gender && (
            <p className="text-red-500 dark:text-red-400 text-sm">{errors.gender}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Mobile Number</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="e.g., 0712345678"
            value={data.mobileNumber}
            onChange={(e) => updateData("mobileNumber", e.target.value)}
            className="w-full"
          />
          {errors.phone && (
            <p className="text-red-500 dark:text-red-400 text-sm">{errors.phone}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={onBack}
          variant="outline"
          className="flex-1"
          disabled={isSubmitting}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button
          onClick={handleSubmit}
          className="flex-1 bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-700 hover:to-blue-700"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Registration"
          )}
        </Button>
      </div>
    </div>
  );
}
