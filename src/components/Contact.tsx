import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // التحقق من الحقول
    setNameError(name.trim() === '');
    setEmailError(email.trim() === '');
    setMessageError(message.trim() === '');

    if (name && email && message) {
      const templateParams = { name, email, message };

      emailjs
        .send(
          'service_s6kb1oa',      // Service ID
          'template_xpkdjai',     // Template ID
          templateParams,
          'kNKVgo8fHU6k-d-dM'    // Public Key
        )
        .then(
          (response: any) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('تم إرسال الرسالة بنجاح!');
            setName('');
            setEmail('');
            setMessage('');
          },
          (error: any) => {
            console.log('FAILED...', error);
            alert('حدث خطأ، حاول مرة أخرى.');
          }
        );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                id="outlined-name"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (nameError) setNameError(false);
                }}
                error={nameError}
                helperText={nameError ? 'Please enter your name' : ''}
                sx={{
                  '& .MuiInputBase-input': { color: '#000' },
                  '& .MuiInputLabel-root': { color: '#000' },
                }}
              />
              <TextField
                required
                id="outlined-email"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError(false);
                }}
                error={emailError}
                helperText={emailError ? 'Please enter your email or phone number' : ''}
                sx={{
                  '& .MuiInputBase-input': { color: '#000' },
                  '& .MuiInputLabel-root': { color: '#000' },
                }}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (messageError) setMessageError(false);
              }}
              error={messageError}
              helperText={messageError ? 'Please enter the message' : ''}
              sx={{
                '& .MuiInputBase-input': { color: '#000' },
                '& .MuiInputLabel-root': { color: '#000' },
              }}
            />

            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={sendEmail}
              disabled={!name || !email || !message}
            >
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
