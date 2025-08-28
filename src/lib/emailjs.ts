import emailjs from '@emailjs/browser';
import { RegistrationData } from '@/types/registration';

// EmailJS configuration - these should be set in your environment variables
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
};

// Format registration data for email template
function formatRegistrationData(data: RegistrationData) {
  const currentDate = new Date().toLocaleString('en-KE', {
    timeZone: 'Africa/Nairobi',
    dateStyle: 'full',
    timeStyle: 'short'
  });

  return {
    to_email: process.env.NEXT_PUBLIC_INNOVATION_EMAIL || '', // Innovation email
    subject: `New Member Registration: ${data.fullName} - ${data.registrationNumber}`,
    full_name: data.fullName,
    registration_number: data.registrationNumber,
    school: data.school,
    gender: data.gender,
    mobile_number: data.mobileNumber,
    registration_date: currentDate,
    message: `
New member registration details:

Full Name: ${data.fullName}
Registration Number: ${data.registrationNumber}
School: ${data.school}
Gender: ${data.gender}
Mobile Number: ${data.mobileNumber}

Registration Date: ${currentDate}

Please add this member to the WhatsApp group.
    `
  };
}

// Send registration email using EmailJS
export async function sendRegistrationEmail(data: RegistrationData) {
  try {
    // Validate required fields
    const requiredFields: (keyof RegistrationData)[] = [
      'fullName', 
      'registrationNumber', 
      'school', 
      'gender', 
      'mobileNumber'
    ];

    for (const field of requiredFields) {
      if (!data[field]) {
        throw new Error(`Missing required field: ${field}`);
      }
    }

    // Format data for EmailJS template
    const templateParams = formatRegistrationData(data);

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', {
      status: response.status,
      text: response.text,
      name: data.fullName,
      timestamp: new Date().toISOString()
    });

    return { 
      success: true, 
      data: response,
      message: 'Registration email sent successfully'
    };

  } catch (error) {
    console.error('Email sending failed:', error);
    
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Email sending failed',
      message: 'Failed to send registration email'
    };
  }
}

// Client-side email sending function
export async function sendRegistrationEmailClient(data: RegistrationData) {
  // Initialize EmailJS if not already done
  initEmailJS();
  
  return await sendRegistrationEmail(data);
}