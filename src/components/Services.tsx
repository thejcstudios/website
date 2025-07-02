import React, { useEffect, useRef } from 'react';
import '../assets/styles/Services.css';

function Services() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="services-container">
        {/* Section 1: Left Text, Right Image */}
        <section
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
          className="services-section flex-row-desktop fade-target"
        >
          <div className="services-text-block">
            <h1 className="services-heading-blue">Creative Photography & Videography</h1>
            <p className="services-paragraph">
            We know that weddings are one of life’s most treasured moments, a day filled with love, laughter, and unforgettable memories. It’s not just the union of two hearts, but the coming together of families, friends, and dreams. At JC Studios, we understand how meaningful this celebration is, and we're here to capture every detail with elegance and care. From stunning photo and video coverage to Same Day Edits that relive the magic instantly. We also offer personalized E-Wedding Invitations and expert editing services to ensure every moment is beautifully preserved and shared. Let us help you relive the joy for years to come.
            </p>
          </div>
          <div className="services-image-wrapper">
            <img
              src="https://i.imgur.com/7XUgvLC.jpeg"
              alt="Creative Photography"
              className="services-image"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  'https://placehold.co/600x400/E5E7EB/4B5563?text=Image+Load+Error';
              }}
            />
          </div>
        </section>

        {/* Section 2: Left Image, Right Text */}
        <section
          ref={(el) => {
            sectionsRef.current[1] = el;
          }}
          className="services-section flex-row-reverse-desktop fade-target"
        >
          <div className="services-text-block">
            <h1 className="services-heading-purple">Professional Event Coverage</h1>
            <p className="services-paragraph">
              Corporate events are more than just meetings, they’re opportunities to showcase your brand,
              celebrate achievements, and build stronger connections. Whether it’s a product launch,
              company milestone, or annual gathering, we understand the importance of every detail. At JC
              Studios, we bring a refined, results-driven approach to documenting your event, ensuring your
              brand’s professionalism and energy are captured with clarity and style.
            </p>
          </div>
          <div className="services-image-wrapper">
            <img
              src="https://i.imgur.com/qXHiuj8.jpeg"
              alt="Professional Event Coverage"
              className="services-image"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  'https://placehold.co/600x400/E5E7EB/4B5563?text=Image+Load+Error';
              }}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default Services;
