'use client';

import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { StepProps } from '@/types/registration';
import { SCHOOLS } from '@/lib/constants';
import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

export function SchoolStep({ data, updateData, onNext, onBack }: StepProps) {
  const [error, setError] = useState('');

  const handleNext = () => {
    if (!data.school) {
      setError('Please select your school');
      return;
    }
    setError('');
    onNext?.();
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="text-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-yellow-400 bg-clip-text text-transparent">
          Academic Information
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Select your school</p>
      </div>

      <div className="space-y-2">
        <Label>School</Label>
        <RadioGroup 
          value={data.school}
          onValueChange={(value: string) => updateData('school', value)}
          className="space-y-2 max-h-64 overflow-y-auto"
        >
          {SCHOOLS.map((school) => (
            <div key={school} className="flex items-center space-x-2 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded">
              <RadioGroupItem value={school} id={school} />
              <Label htmlFor={school} className="cursor-pointer flex-1">
                {school}
              </Label>
            </div>
          ))}
        </RadioGroup>
        {error && <p className="text-red-500 dark:text-red-400 text-sm">{error}</p>}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={onBack}
          variant="outline"
          className="flex-1"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button 
          onClick={handleNext}
          className="flex-1 bg-gradient-to-r from-blue-600 to-yellow-400 hover:from-blue-700 hover:to-yellow-500"
        >
          Next
        </Button>
      </div>
    </div>
  );
}