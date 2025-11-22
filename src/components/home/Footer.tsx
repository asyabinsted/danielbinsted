'use client';

import { useState, useEffect } from 'react';
import { toast, Toaster } from 'sonner';
import RollingText from "@/components/RollingText";

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('');
  const [message, setMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Update clock every second with Israel timezone
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const israelTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Jerusalem',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setCurrentTime(israelTime);
    };

    updateClock(); // Initial call
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setModalMessage(message);
      setIsModalOpen(true);
    }
  };

  const handleConfirmSend = async () => {
    // Validate email
    if (!email.trim()) {
      setEmailError('Please enter a valid email address');
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setEmailError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: modalMessage,
          senderEmail: email,
        }),
      });

      if (response.ok) {
        // Success
        setIsModalOpen(false);
        setMessage('');
        setEmail('');
        setModalMessage('');
        toast.success('Your message has been sent successfully!');
      } else {
        // Error
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setEmail('');
    setEmailError('');
    setModalMessage('');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full h-screen bg-background text-foreground flex flex-col justify-between">
      {/* Main Footer Content - Centered */}
      <div className="flex-1 flex items-center justify-center px-5">
        <div className="container-grid w-full">
          {/* Mobile: Stack vertically, Desktop: Row layout */}
          
          {/* Column 1 - CONTACTS */}
          <div className="col-span-12 md:col-span-2 mb-8 md:mb-0">
            <h3 className="text-body uppercase mb-4">CONTACTS</h3>
            <div className="space-y-2 flex flex-col items-start">
              <a
                href="mailto:daniel.binsted@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body footer-link"
              >
                daniel.binsted@gmail.com
              </a>
              <a
                href="https://wa.me/972524306873"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body footer-link"
              >
                +972-524306873
              </a>
            </div>
          </div>

          {/* Column 2 - LINKS */}
          <div className="col-span-12 md:col-span-2 mb-8 md:mb-0">
            <h3 className="text-body uppercase mb-4">LINKS</h3>
            <div className="space-y-2 flex flex-col items-start">
              <a
                href="https://www.linkedin.com/in/daniel-binsted-b1b2a0a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body footer-link"
              >
                Linkedin
              </a>
              <a
                href="https://www.imdb.com/name/nm6474957/?ref_=ext_shr_lnk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body footer-link"
              >
                Imdb
              </a>
            </div>
          </div>

          {/* Column 3 - BASED */}
          <div className="col-span-12 md:col-span-2 mb-8 md:mb-0">
            <h3 className="text-body uppercase mb-4">BASED</h3>
            <div className="space-y-2">
              <p className="text-body">Worldwide</p>
              <p className="text-body">IST {currentTime}</p>
            </div>
          </div>

          {/* Column 4 - Empty (desktop only) */}
          <div className="hidden md:block col-span-2"></div>

          {/* Columns 5-6 - DROP ME A MESSAGE */}
          <div className="col-span-12 md:col-span-4">
            <h3 className="text-body uppercase mb-4">DROP ME A MESSAGE</h3>
            <p className="text-body mb-4">
              Got an idea, question, or just want to say hi? Type here:
            </p>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi Daniel..."
                className="flex-1 bg-transparent border border-foreground/20 text-foreground text-body px-4 h-9 focus:outline-none focus:border-foreground/40 placeholder:text-supporting placeholder:text-foreground/40"
                style={{
                  fontFamily: 'var(--supporting-font)',
                  fontSize: 'var(--supporting-size)',
                  fontWeight: 'var(--supporting-weight)',
                  letterSpacing: 'var(--supporting-letter-spacing)'
                }}
              />
              <button
                type="submit"
                disabled={!message.trim()}
                className="text-supporting px-6 h-9 bg-primary text-primary-foreground transition-opacity duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom - Fixed at bottom with 20px margin */}
      <div className="w-full flex justify-between items-center px-5 pb-5">
        <p className="text-supporting text-foreground">
          All Rights Reserved © 2025
        </p>
        <button
          onClick={scrollToTop}
          className="nav-link text-supporting text-foreground cursor-pointer"
        >
          <RollingText text="↑ Back to top" />
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-5">
          <div className="bg-background border border-foreground/20 max-w-2xl w-full p-8 relative">
            <h2 className="text-h1 mb-6">Confirm your message</h2>
            
            <div className="space-y-4">
              {/* Message Preview */}
              <div>
                <label className="text-body block mb-2">Your message:</label>
                <textarea
                  value={modalMessage}
                  onChange={(e) => setModalMessage(e.target.value)}
                  className="w-full h-32 bg-transparent border border-foreground/20 text-foreground text-body px-4 py-3 resize-none focus:outline-none focus:border-foreground/40"
                  style={{
                    fontFamily: 'var(--supporting-font)',
                    fontSize: 'var(--supporting-size)',
                    fontWeight: 'var(--supporting-weight)',
                    lineHeight: 'var(--supporting-line-height)',
                    letterSpacing: 'var(--supporting-letter-spacing)'
                  }}
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="text-body block mb-2">Your email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError('');
                  }}
                  placeholder="Your email"
                  disabled={isLoading}
                  className="w-full bg-transparent border border-foreground/20 text-foreground text-body px-4 h-9 focus:outline-none focus:border-foreground/40 placeholder:text-supporting placeholder:text-foreground/40 disabled:opacity-50"
                  style={{
                    fontFamily: 'var(--supporting-font)',
                    fontSize: 'var(--supporting-size)',
                    fontWeight: 'var(--supporting-weight)',
                    letterSpacing: 'var(--supporting-letter-spacing)'
                  }}
                />
                {emailError && (
                  <p className="text-supporting text-red-500 mt-2">{emailError}</p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4 justify-end">
                <button
                  onClick={handleCancel}
                  disabled={isLoading}
                  className="text-supporting px-6 h-9 border border-foreground/20 text-foreground transition-opacity duration-200 hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmSend}
                  disabled={isLoading}
                  className="text-supporting px-6 h-9 bg-primary text-primary-foreground transition-opacity duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isLoading && (
                    <span className="inline-block w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></span>
                  )}
                  {isLoading ? 'Sending...' : 'Confirm & Send'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notifications */}
      <Toaster 
        position="bottom-right" 
        toastOptions={{
          style: {
            background: 'hsl(var(--background))',
            color: 'hsl(var(--foreground))',
            border: '1px solid hsl(var(--foreground) / 0.2)',
            fontFamily: 'var(--supporting-font)',
            fontSize: 'var(--supporting-size)',
            fontWeight: 'var(--supporting-weight)',
            letterSpacing: 'var(--supporting-letter-spacing)',
          },
          className: 'custom-toast',
        }}
      />
    </footer>
  );
}

