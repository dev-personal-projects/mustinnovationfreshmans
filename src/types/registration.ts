export interface RegistrationData {
  fullName: string;
  registrationNumber: string;
  school: string;
  gender: string;
  mobileNumber: string;
}

export interface StepProps {
  data: RegistrationData;
  updateData: (field: keyof RegistrationData, value: string) => void;
  onNext?: () => void;
  onBack?: () => void;
}
