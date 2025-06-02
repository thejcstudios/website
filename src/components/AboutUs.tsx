import { useInView } from "./hooks/useInView"; // adjust path

function AboutUs() {
  const { ref: aboutRef, isVisible: isAboutVisible } = useInView();

  return (
    <>
      <div className="AboutUscontainer">
      <div
          className={`AboutUs scroll-reveal2 ${isAboutVisible ? "visible" : ""}`}
          ref={aboutRef}
        >
        <div className="AboutPhoto"></div></div>
        <div
          className={`AboutUs scroll-reveal ${isAboutVisible ? "visible" : ""}`}
          ref={aboutRef}
        >
          <h1>Professional photo and video services for business</h1>
          <p>
            Our team provides expert editing and event coverage to help your
            business stand out. We offer reliable solutions tailored to your
            project, ensuring high-quality results every time.
          </p>
          <div className="AboutPhoto2"></div>
          <h2>"Innovate. Collaborate. Elevate."</h2>
          <p>
            At JC STUDIO, we specialize in capturing the essence of every
            occasion—whether it's a corporate event, wedding, or private
            celebration. With a keen eye for detail and a passion for
            storytelling, we turn fleeting moments into timeless memories. From
            the elegance of a wedding day to the dynamic energy of a
            professional gathering, our lens is focused on preserving your most
            meaningful experiences with creativity, precision, and heart.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
