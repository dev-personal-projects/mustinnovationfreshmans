'use client';

import { useState } from 'react';
import { RegistrationData } from '@/types/registration';
import { NameStep } from './NameStep';
import { RegNumberStep } from './RegNumberStep';
import { SchoolStep } from './SchoolStep';
import { ContactStep } from './ContactStep';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { SuccessScreen } from './SuccessScreen';
import { sendRegistrationEmailClient } from '@/lib/emailjs';

const INITIAL_DATA: RegistrationData = {
  fullName: '',
  registrationNumber: '',
  school: '',
  gender: '',
  mobileNumber: '',
};

export function RegistrationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<RegistrationData>(INITIAL_DATA);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateData = (field: keyof RegistrationData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      // Send email directly using EmailJS
      const emailResult = await sendRegistrationEmailClient(formData);
      
      if (emailResult.success) {
        setIsSuccess(true);
      } else {
        throw new Error(emailResult.error || 'Email sending failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setFormData(INITIAL_DATA);
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <Card className="w-full max-w-lg mx-auto shadow-xl">
        <CardContent className="p-4 sm:p-8">
          <SuccessScreen name={formData.fullName} onReset={handleReset} />
        </CardContent>
      </Card>
    );
  }

  const steps = [
    <NameStep key="name" data={formData} updateData={updateData} onNext={handleNext} />,
    <RegNumberStep key="reg" data={formData} updateData={updateData} onNext={handleNext} onBack={handleBack} />,
    <SchoolStep key="school" data={formData} updateData={updateData} onNext={handleNext} onBack={handleBack} />,
    <ContactStep key="contact" data={formData} updateData={updateData} onNext={handleSubmit} onBack={handleBack} />,
  ];

  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  return (  
    <Card className="w-full max-w-lg mx-auto shadow-xl">
      <CardContent className="p-4 sm:p-8">
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
            <span>Step {currentStep + 1} of {steps.length}</span>
            <span>{Math.round(progressPercentage)}% Complete</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>

        {steps[currentStep]}
      </CardContent>
    </Card> 
  );
}