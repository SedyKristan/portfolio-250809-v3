import React from 'react';
import { MdSend } from 'react-icons/md';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Button from '@/components/ui/Button';

const ContactForm = ({
  formData,
  errors,
  isSubmitting,
  onInputChange,
  onSubmit,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-6 items-start"
      noValidate
    >
      {/* Names */}
      <div className="flex flex-col xl:flex-row gap-6 w-full">
        <div className="w-full">
          <Label htmlFor="firstName">
            First Name<span className="text-primary">*</span>
          </Label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={(e) => onInputChange('firstName', e.target.value)}
            className={
              errors.firstName
                ? 'border-red-500 focus-visible:border-red-500'
                : ''
            }
            aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
            required
          />
          {errors.firstName && (
            <p
              id="firstName-error"
              className="text-red-400 text-sm mt-1"
              role="alert"
            >
              {errors.firstName}
            </p>
          )}
        </div>
        <div className="w-full">
          <Label htmlFor="lastName">
            Last Name<span className="text-primary">*</span>
          </Label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={(e) => onInputChange('lastName', e.target.value)}
            className={
              errors.lastName
                ? 'border-red-500 focus-visible:border-red-500'
                : ''
            }
            aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? 'lastName-error' : undefined}
            required
          />
          {errors.lastName && (
            <p
              id="lastName-error"
              className="text-red-400 text-sm mt-1"
              role="alert"
            >
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="w-full">
        <Label htmlFor="email">
          Email<span className="text-primary">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="youremail@example.com"
          value={formData.email}
          onChange={(e) => onInputChange('email', e.target.value)}
          className={
            errors.email ? 'border-red-500 focus-visible:border-red-500' : ''
          }
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          required
        />
        {errors.email && (
          <p
            id="email-error"
            className="text-red-400 text-sm mt-1"
            role="alert"
          >
            {errors.email}
          </p>
        )}
      </div>

      {/* Service */}
      <div className="w-full">
        <Label htmlFor="service">
          I'm interested in<span className="text-primary">*</span>
        </Label>
        <Select
          value={formData.service}
          onValueChange={(value) => onInputChange('service', value)}
        >
          <SelectTrigger
            id="service"
            className={`label-md-regular w-full !h-12 bg-white/5 border-white/10 px-4 ${
              errors.service ? 'border-red-500' : ''
            }`}
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? 'service-error' : undefined}
          >
            <SelectValue placeholder="Choose a service" />
          </SelectTrigger>
          <SelectContent
            className="bg-black border-white/20 z-50 min-w-[var(--radix-select-trigger-width)] max-h-[300px]"
            position="popper"
            side="bottom"
            align="start"
            sideOffset={4}
            avoidCollisions={true}
          >
            <SelectItem value="frontend">Frontend Development</SelectItem>
            <SelectItem value="fullstack">Fullstack Development</SelectItem>
            <SelectItem value="uiux">UI/UX Design</SelectItem>
          </SelectContent>
        </Select>
        {errors.service && (
          <p
            id="service-error"
            className="text-red-400 text-sm mt-1"
            role="alert"
          >
            {errors.service}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="w-full">
        <Label htmlFor="message">
          Message<span className="text-primary">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project or how I can help you..."
          value={formData.message}
          onChange={(e) => onInputChange('message', e.target.value)}
          className={`min-h-[160px] bg-white/5 border-white/10 focus-visible:border-primary focus-visible:ring-primary focus-visible:ring-[1px] resize-none p-4 selection:bg-primary placeholder:text-white/50 ${
            errors.message ? 'border-red-500 focus-visible:border-red-500' : ''
          }`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          required
        />
        {errors.message && (
          <p
            id="message-error"
            className="text-red-400 text-sm mt-1"
            role="alert"
          >
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="group"
        aria-label={isSubmitting ? 'Sending message...' : 'Send message'}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
        <MdSend
          className={`text-lg transition-transform duration-200 ${
            isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-0.5'
          }`}
          aria-hidden="true"
        />
      </Button>
    </form>
  );
};

export default ContactForm;
