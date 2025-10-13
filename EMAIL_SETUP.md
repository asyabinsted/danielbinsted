# Email Setup with Resend

This portfolio website uses [Resend](https://resend.com) to send contact form emails to `daniel.binsted@gmail.com`.

## Setup Instructions

### 1. Create a Resend Account
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Free tier includes: **100 emails/day** and **3,000 emails/month**

### 2. Get Your API Key
1. Log in to your Resend dashboard
2. Go to **API Keys** section: [resend.com/api-keys](https://resend.com/api-keys)
3. Click **Create API Key**
4. Give it a name (e.g., "Portfolio Contact Form")
5. Copy the generated API key (it starts with `re_...`)

### 3. Add API Key to Your Project
1. Open the `.env.local` file in the project root
2. Replace `your_resend_api_key_here` with your actual API key:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```
3. Save the file

### 4. Restart the Development Server
```bash
# Stop the current server (Ctrl+C)
# Start it again
npm run dev
```

## Testing

1. Navigate to your website footer
2. Fill out the contact form with:
   - A test message
   - Your email address
3. Click Submit → Confirm & Send
4. Check `daniel.binsted@gmail.com` for the message

## Email Format

Emails will arrive at `daniel.binsted@gmail.com` with:
- **Subject:** New message from [sender's email]
- **Reply-To:** [sender's email] (you can reply directly)
- **Body:** 
  ```
  You have received a new message through your portfolio website.
  
  From: sender@email.com
  
  Message:
  [User's message]
  
  ---
  This message was sent via your portfolio contact form.
  ```

## Important Notes

- `.env.local` is gitignored and won't be committed to GitHub
- The API key is server-side only and never exposed to the browser
- For production deployment (e.g., Vercel), add `RESEND_API_KEY` to your environment variables in the hosting platform

## Custom Domain (Optional)

To send emails from your own domain (e.g., `contact@danielbinsted.com`):

1. Go to Resend dashboard → Domains
2. Add your domain
3. Add the required DNS records to your domain provider
4. Once verified, update the `from` field in `/src/app/api/send-message/route.ts`:
   ```typescript
   from: 'Portfolio Contact <contact@yourdomain.com>',
   ```

## Troubleshooting

**Issue:** "Email service not configured" error
- **Solution:** Make sure `RESEND_API_KEY` is set in `.env.local` and restart the dev server

**Issue:** Emails not arriving
- **Solution:** Check Resend dashboard → Logs to see if emails were sent
- Check spam folder
- Verify the API key is correct

**Issue:** Rate limit errors
- **Solution:** Free tier has limits. Upgrade if needed or implement rate limiting on your form

