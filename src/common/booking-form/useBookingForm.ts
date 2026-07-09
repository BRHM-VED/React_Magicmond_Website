import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export function useBookingForm(onSubmitSuccess?: () => void, onClose?: () => void) {
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Determine formTrack based on current page URL path
  let formTrack = 'Home';
  if (location.pathname.includes('/sports') || location.pathname.includes('/sport')) {
    formTrack = 'Sport';
  } else if (location.pathname.includes('/infraedge') || location.pathname.includes('/infra-edge')) {
    formTrack = 'InfraEdge';
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const val = value.replace(/\D/g, '').slice(0, 10);
      setFormData((prev) => ({ ...prev, phone: val }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.phone.length !== 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    setLoading(true);
    setError('');

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: `+91${formData.phone}`,
      company: formData.company,
      message: formData.message,
      date: new Date().toISOString(),
      formTrack: formTrack,
    };

    try {
      const apiUrl = (import.meta as any).env?.VITE_API_URL || "";
      await fetch(
        apiUrl,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      onSubmitSuccess?.();
      window.history.pushState({ name: formData.name, from: location.pathname }, '', '/thank-you');
      setIsSubmitted(true);
    } catch (err: any) {
      console.warn('API error:', err);
      onSubmitSuccess?.();
      window.history.pushState({ name: formData.name, from: location.pathname }, '', '/thank-you');
      setIsSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    window.history.pushState(null, '', location.pathname);
    setIsSubmitted(false);
    onClose?.();
  };

  return {
    formData,
    loading,
    error,
    isSubmitted,
    handleChange,
    handleSubmit,
    handleClose,
  };
}
