# EmailJS Setup Guide

This application uses EmailJS to send registration emails directly from the client-side to the innovation email.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down the **Service ID**

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this simple template structure:

```
{{name}}
{{time}}

{{message}}
```

4. Save the template and note down the **Template ID**

### 4. Get Public Key
1. Go to "Account" > "General"
2. Find your **Public Key**

### 5. Update Environment Variables
Update your `.env.local` file with the values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_INNOVATION_EMAIL=innovations@meruuniversity.ac.ke
```

### 6. Test the Setup
1. Start your development server: `npm run dev`
2. Fill out the registration form
3. Submit and check if the email is received at the innovation email

## Template Variables Used

The following variables are sent to your EmailJS template:

- `{{name}}` - Student's full name
- `{{time}}` - Date and time of registration
- `{{message}}` - Formatted message with all registration details

## Benefits of EmailJS

1. **Client-side**: No server-side email configuration needed
2. **Free tier**: 200 emails/month on free plan
3. **Reliable**: Direct integration with email providers
4. **Simple**: Easy setup and configuration
5. **Secure**: No API keys exposed in server code

## Troubleshooting

- **Emails not sending**: Check your service configuration and template ID
- **Template not working**: Ensure all variable names match exactly
- **Rate limits**: Free plan has 200 emails/month limit
- **Spam folder**: Check if emails are going to spam initially