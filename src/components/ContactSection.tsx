import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ArrowUpRight,
  Linkedin,
  Mail,
} from 'lucide-react';
import { ContactFormData } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ContactSectionProps {
  selectedServicePreload?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedServicePreload = '',
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: selectedServicePreload || 'Web Development',
    message: '',
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync if prop changes
  React.useEffect(() => {
    if (selectedServicePreload) {
      setFormData((prev) => ({
        ...prev,
        service: selectedServicePreload,
      }));
    }
  }, [selectedServicePreload]);

  const serviceOptions = [
    'Logo Design',
    'Graphic Design',
    'Brand Identity Design',
    'UI/UX Design',
    'Web Design',
    'Web Development',
    'Mobile App Development',
    'Software Development',
    'SEO & Backlink Building',
    'Digital Marketing',
    'Other',
  ];

  const validate = () => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message =
        'Please provide brief details about your idea or project.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Web3Forms submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: '67029022-9081-46a7-9851-31931079ed96',
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
            subject: `New Project Inquiry — ${formData.service}`,
            from_name: 'RF Technologies Website',
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
      } else {
        setErrors({
          message:
            result.message || 'Unable to send your inquiry.',
        });
      }
    } catch (error) {
      console.error('Web3Forms submission error:', error);

      setErrors({
        message:
          'Unable to send your inquiry. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello RF Technologies! My name is ${
        formData.name || 'there'
      }. I would like to discuss a project regarding "${
        formData.service
      }".

Message: ${
        formData.message ||
        'I would like to explore working together.'
      }

Email: ${formData.email || 'N/A'}`
    );

    window.open(
      `https://wa.me/94729658842?text=${text}`,
      '_blank'
    );
  };

  return (
    <section
      id="contact"
      className={`relative py-28 lg:py-36 overflow-hidden border-t transition-colors duration-300 ${
        isDark
          ? 'bg-[#050A3A] border-white/5'
          : 'bg-[#F8FAFC]/90 border-slate-200/80'
      }`}
    >
      {/* Ambient background lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute bottom-0 right-1/4 w-96 sm:w-[600px] h-96 sm:h-[600px] rounded-full blur-[160px] animate-subtle-float-slow transition-opacity duration-300 ${
            isDark
              ? 'bg-[#6C24E8]/15'
              : 'bg-[#6C24E8]/08'
          }`}
        />

        <div
          className={`absolute top-1/3 -left-32 w-80 sm:w-[480px] h-80 sm:h-[480px] rounded-full blur-[150px] animate-subtle-float-reverse transition-opacity duration-300 ${
            isDark
              ? 'bg-[#315CFF]/15'
              : 'bg-[#315CFF]/08'
          }`}
        />

        <div
          className={`absolute inset-0 rf-grid-pattern transition-opacity duration-300 ${
            isDark ? 'opacity-25' : 'opacity-15'
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Direct channels & statement */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[1px] w-8 bg-[#315CFF]" />

                <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#315CFF]">
                  07 / INITIATE CONVERSATION
                </span>
              </div>

              <h2
                className={`font-display font-extrabold text-4xl sm:text-6xl uppercase tracking-[-0.02em] transition-colors duration-300 ${
                  isDark
                    ? 'text-white'
                    : 'text-[#050A3A]'
                }`}
              >
                LET'S TALK.
              </h2>

              <p
                className={`mt-4 text-base sm:text-lg font-light leading-relaxed transition-colors duration-300 ${
                  isDark
                    ? 'text-slate-300'
                    : 'text-slate-600'
                }`}
              >
                “Have a project, idea, or business goal in mind? Tell us what you're building.”
              </p>
            </div>

            {/* Direct Official Contact Cards */}
            <div className="space-y-4 pt-2">

              {/* WhatsApp Direct Action */}
              <a
                href="https://wa.me/94729658842"
                target="_blank"
                rel="noopener noreferrer"
                className={`group block p-5 rounded-2xl border transition-all duration-300 shadow-xl hover:-translate-y-0.5 ${
                  isDark
                    ? 'bg-[#08145C] border-[#315CFF]/30 hover:border-[#315CFF] shadow-[#050A3A]'
                    : 'bg-white border-slate-200 hover:border-[#315CFF] shadow-slate-200/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-500 group-hover:scale-105 transition-transform">
                      <MessageSquare className="w-6 h-6" />
                    </div>

                    <div>
                      <div className="text-[11px] font-mono uppercase text-emerald-500 font-bold tracking-[0.02em]r">
                        INSTANT MESSAGING
                      </div>

                      <div
                        className={`font-display font-bold text-lg transition-colors ${
                          isDark
                            ? 'text-white'
                            : 'text-[#050A3A]'
                        }`}
                      >
                        WhatsApp: +94 729658842
                      </div>

                      <div
                        className={`text-xs ${
                          isDark
                            ? 'text-slate-400'
                            : 'text-slate-500'
                        }`}
                      >
                        Direct founder response within hours
                      </div>
                    </div>
                  </div>

                  <ArrowUpRight
                    className={`w-5 h-5 transition-colors ${
                      isDark
                        ? 'text-slate-400 group-hover:text-white'
                        : 'text-slate-400 group-hover:text-[#050A3A]'
                    }`}
                  />
                </div>
              </a>

              {/* LinkedIn Direct Action */}
              <a
                href="https://www.linkedin.com/company/rftechnologieshq/posts/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className={`group block p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 ${
                  isDark
                    ? 'bg-[#08145C] border-white/10 hover:border-[#6C24E8]/50'
                    : 'bg-white border-slate-200 hover:border-[#6C24E8]/50 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#315CFF]/15 border border-[#315CFF]/30 flex items-center justify-center text-[#315CFF] group-hover:scale-105 transition-transform">
                      <Linkedin className="w-6 h-6" />
                    </div>

                    <div>
                      <div
                        className={`text-[11px] font-mono uppercase font-bold tracking-[0.02em]r ${
                          isDark
                            ? 'text-slate-400'
                            : 'text-slate-500'
                        }`}
                      >
                        PROFESSIONAL NETWORK
                      </div>

                      <div
                        className={`font-display font-bold text-base transition-colors ${
                          isDark
                            ? 'text-white'
                            : 'text-[#050A3A]'
                        }`}
                      >
                        RF Technologies on LinkedIn
                      </div>

                      <div
                        className={`text-xs ${
                          isDark
                            ? 'text-slate-400'
                            : 'text-slate-500'
                        }`}
                      >
                        Official company announcements & updates
                      </div>
                    </div>
                  </div>

                  <ArrowUpRight
                    className={`w-5 h-5 transition-colors ${
                      isDark
                        ? 'text-slate-400 group-hover:text-white'
                        : 'text-slate-400 group-hover:text-[#050A3A]'
                    }`}
                  />
                </div>
              </a>

              {/* Email Direct Action */}
              <a
                href="mailto:rftechnologies.lk@gmail.com"
                className={`group block p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5 ${
                  isDark
                    ? 'bg-[#08145C] border-white/10 hover:border-[#6C24E8]/50'
                    : 'bg-white border-slate-200 hover:border-[#6C24E8]/50 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#6C24E8]/15 border border-[#6C24E8]/30 flex items-center justify-center text-[#6C24E8] group-hover:scale-105 transition-transform">
                      <Mail className="w-6 h-6" />
                    </div>

                    <div>
                      <div
                        className={`text-[11px] font-mono uppercase font-bold tracking-[0.02em]r ${
                          isDark
                            ? 'text-slate-400'
                            : 'text-slate-500'
                        }`}
                      >
                        EMAIL US
                      </div>

                      <div
                        className={`font-display font-bold text-base transition-colors ${
                          isDark
                            ? 'text-white'
                            : 'text-[#050A3A]'
                        }`}
                      >
                        rftechnologies.lk@gmail.com
                      </div>

                      <div
                        className={`text-xs ${
                          isDark
                            ? 'text-slate-400'
                            : 'text-slate-500'
                        }`}
                      >
                        Get in touch with RF Technologies
                      </div>
                    </div>
                  </div>

                  <ArrowUpRight
                    className={`w-5 h-5 transition-colors ${
                      isDark
                        ? 'text-slate-400 group-hover:text-white'
                        : 'text-slate-400 group-hover:text-[#050A3A]'
                    }`}
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: High-Precision Contact Form */}
          <div className="lg:col-span-7">
            <div
              className={`rounded-3xl border p-7 sm:p-10 shadow-2xl relative overflow-hidden transition-colors duration-300 ${
                isDark
                  ? 'bg-[#08145C] border-white/15'
                  : 'bg-white border-slate-200/90 shadow-slate-200/70'
              }`}
            >
              {/* Top gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#315CFF] via-[#6C24E8] to-[#C817D9]" />

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 space-y-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-500 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h3
                      className={`font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-tight ${
                        isDark
                          ? 'text-white'
                          : 'text-[#050A3A]'
                      }`}
                    >
                      MESSAGE TRANSMITTED
                    </h3>

                    <p
                      className={`mt-2 text-sm sm:text-base max-w-md mx-auto font-light ${
                        isDark
                          ? 'text-slate-300'
                          : 'text-slate-600'
                      }`}
                    >
                      Thank you for reaching out to RF Technologies. We have received your inquiry
                      regarding{' '}
                      <strong
                        className={
                          isDark
                            ? 'text-white'
                            : 'text-[#050A3A]'
                        }
                      >
                        {formData.service}
                      </strong>{' '}
                      and will review it promptly.
                    </p>
                  </div>

                  {/* Immediate WhatsApp Mirror Button */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppRedirect}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-xs uppercase tracking-[0.02em]r flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 hover:-translate-y-0.5 transition-transform"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>
                        Also Send Via WhatsApp (+94 729658842)
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          service: 'Web Development',
                          message: '',
                        });
                        setErrors({});
                      }}
                      className={`w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-[0.02em]r transition-colors ${
                        isDark
                          ? 'bg-white/5 hover:bg-white/10 text-slate-300'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  noValidate
                >
                  <div
                    className={`text-xs font-mono uppercase tracking-[0.02em]r mb-2 ${
                      isDark
                        ? 'text-slate-400'
                        : 'text-slate-500'
                    }`}
                  >
                    PROJECT INQUIRY SPECIFICATION
                  </div>

                  {/* Name and Email in 2 columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className={`block text-xs font-semibold uppercase tracking-[0.02em]r mb-2 ${
                          isDark
                            ? 'text-slate-300'
                            : 'text-slate-700'
                        }`}
                      >
                        Your Name{' '}
                        <span className="text-[#C817D9]">*</span>
                      </label>

                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#315CFF] ${
                          isDark
                            ? 'bg-[#050A3A] text-white placeholder-slate-500'
                            : 'bg-slate-50 text-[#050A3A] placeholder-slate-400 focus:bg-white'
                        } ${
                          errors.name
                            ? 'border-rose-500/80'
                            : isDark
                            ? 'border-white/10 hover:border-white/20'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      />

                      {errors.name && (
                        <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className={`block text-xs font-semibold uppercase tracking-[0.02em]r mb-2 ${
                          isDark
                            ? 'text-slate-300'
                            : 'text-slate-700'
                        }`}
                      >
                        Email Address{' '}
                        <span className="text-[#C817D9]">*</span>
                      </label>

                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        placeholder="rftechnologies.lk@gmail.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#315CFF] ${
                          isDark
                            ? 'bg-[#050A3A] text-white placeholder-slate-500'
                            : 'bg-slate-50 text-[#050A3A] placeholder-slate-400 focus:bg-white'
                        } ${
                          errors.email
                            ? 'border-rose-500/80'
                            : isDark
                            ? 'border-white/10 hover:border-white/20'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      />

                      {errors.email && (
                        <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className={`block text-xs font-semibold uppercase tracking-[0.02em]r mb-2 ${
                          isDark
                            ? 'text-slate-300'
                            : 'text-slate-700'
                        }`}
                      >
                        Phone / WhatsApp{' '}
                        <span className="text-slate-400 font-normal">
                          (Optional)
                        </span>
                      </label>

                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phone: e.target.value,
                          })
                        }
                        placeholder="+94 729658842"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#315CFF] ${
                          isDark
                            ? 'bg-[#050A3A] border-white/10 hover:border-white/20 text-white placeholder-slate-500'
                            : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-[#050A3A] placeholder-slate-400 focus:bg-white'
                        }`}
                      />
                    </div>

                    {/* Service Dropdown */}
                    <div>
                      <label
                        htmlFor="contact-service"
                        className={`block text-xs font-semibold uppercase tracking-[0.02em]r mb-2 ${
                          isDark
                            ? 'text-slate-300'
                            : 'text-slate-700'
                        }`}
                      >
                        Primary Service
                      </label>

                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            service: e.target.value,
                          })
                        }
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#315CFF] cursor-pointer ${
                          isDark
                            ? 'bg-[#050A3A] border-white/10 hover:border-white/20 text-white'
                            : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-[#050A3A] focus:bg-white'
                        }`}
                      >
                        {serviceOptions.map((opt) => (
                          <option
                            key={opt}
                            value={opt}
                            className={
                              isDark
                                ? 'bg-[#050A3A] text-white'
                                : 'bg-white text-[#050A3A]'
                            }
                          >
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className={`block text-xs font-semibold uppercase tracking-[0.02em]r mb-2 ${
                        isDark
                          ? 'text-slate-300'
                          : 'text-slate-700'
                      }`}
                    >
                      Project Details & Vision{' '}
                      <span className="text-[#C817D9]">*</span>
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      placeholder="Share your goals, timeline, and what you are looking to build..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all resize-none focus:outline-none focus:ring-2 focus:ring-[#315CFF] ${
                        isDark
                          ? 'bg-[#050A3A] text-white placeholder-slate-500'
                          : 'bg-slate-50 text-[#050A3A] placeholder-slate-400 focus:bg-white'
                      } ${
                        errors.message
                          ? 'border-rose-500/80'
                          : isDark
                          ? 'border-white/10 hover:border-white/20'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    />

                    {errors.message && (
                      <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group relative overflow-hidden p-[1.5px] rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#315CFF] disabled:opacity-60 transition-all hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#2637C8] via-[#6C24E8] to-[#C817D9] transition-transform duration-500 group-hover:scale-105" />

                    <span
                      className={`relative flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-display font-extrabold text-sm uppercase tracking-[0.02em]r transition-all duration-300 ${
                        isDark
                          ? 'bg-[#08145C] group-hover:bg-transparent text-white'
                          : 'bg-white group-hover:bg-transparent text-[#050A3A] group-hover:text-white'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                          <span>SENDING INQUIRY...</span>
                        </>
                      ) : (
                        <>
                          <span>SEND MESSAGE</span>
                          <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </span>
                  </button>

                  <div className="text-center">
                    <p
                      className={`text-[11px] font-mono ${
                        isDark
                          ? 'text-slate-400'
                          : 'text-slate-500'
                      }`}
                    >
                      Direct contact:{' '}
                      <a
                        href="https://wa.me/94729658842"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#315CFF] hover:underline font-semibold"
                      >
                        +94 729658842
                      </a>{' '}
                      • Non-disclosure respected
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};