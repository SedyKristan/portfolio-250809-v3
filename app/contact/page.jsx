'use client';

import PageWrapper from '@/components/animations/PageWrapper';
import SectionHeaders from '@/components/ui/SectionHeaders';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import SuccessMessage from '@/components/contact/SuccessMessage';
import { useContactForm } from '@/hooks/useContactForm';

const Contact = () => {
  const {
    formData,
    isSubmitting,
    isSubmitted,
    errors,
    handleInputChange,
    handleSubmit,
    resetForm,
  } = useContactForm();

  return (
    <PageWrapper className="h-screen flex items-center py-24 xl:py-0">
      <div className="container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden scrollbar scrollbar-thumb-secondary scrollbar-track-secondary-ghost-01 overflow-y-scroll xl:overflow-y-visible">
        <div className="w-full">
          <div className="flex flex-col xl:flex-row gap-6">
            <div className="flex-1 xl:w-[600px] flex flex-col gap-12">
              <SectionHeaders
                title={
                  <>
                    Let's
                    <span className="text-primary">
                      {' '}
                      Build Something Awesome{' '}
                    </span>
                    Together
                  </>
                }
                subtitle="Get in Touch"
              />
              <p className="text-typography-secondary leading-relaxed">
                I'm currently open to full-time, freelance, or collaborative
                opportunities. If you think we'd be a good fit, feel free to
                reach out — I usually reply within a day.
              </p>
              <ContactInfo />
            </div>
            <div className="flex-1">
              {isSubmitted ? (
                <SuccessMessage onSendAnother={resetForm} />
              ) : (
                <ContactForm
                  formData={formData}
                  errors={errors}
                  isSubmitting={isSubmitting}
                  onInputChange={handleInputChange}
                  onSubmit={handleSubmit}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
