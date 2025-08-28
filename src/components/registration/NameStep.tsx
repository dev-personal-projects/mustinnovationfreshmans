'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { StepProps } from '@/types/registration';
import { validateName } from '@/lib/validation';
import { useState } from 'react';

export function NameStep({ data, updateData, onNext }: StepProps) {
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!validateName(data.fullName)) {
      setError('Please enter a valid name (at least 3 characters)');
      return;
    }
    setError('');
    onNext?.();
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="text-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
          Welcome to Science Innovators Club!
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Let's start with your name</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          type="text"
          placeholder="Enter your full name"
          value={data.fullName}
          onChange={(e : any) => updateData('fullName', e.target.value)}
          className="w-full"
        />
        {error && <p className="text-red-500 dark:text-red-400 text-sm">{error}</p>}
      </div>

      <Button 
        onClick={handleNext}
        className="w-full bg-gradient-to-r from-blue-600 to-pink-600 hover:from-blue-700 hover:to-pink-700"
      >
        Next
      </Button>
    </div>
  );
}