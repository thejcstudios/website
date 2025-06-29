import '../assets/styles/Hero1.css'

const Hero: React.FC = () => {
  
    return (
        <main>
            <section
                className="hero-startup hero-blur-container"
                id='hero'
              >
                {/* Images with radial cover */}
                <div className="hero-scrolling-div-container-radial-cover"></div>
             


                {/* Blur overlay controlled by mouse position */}
                <div className="hero-blurred-overlay"></div>

                 <div className="hero-text-container">
                    <h1 className="hero-heading">We create the magical world of memories - Where your narratives live on.</h1>
                    
<div className='hero-button'>
     
        <a
          href="/videos" // <--- Replace with your desired URL
          className="my-app-button"
        >
          Portfolio
        </a>
        </div>
      </div>

            </section>
           
        </main>
    );
};

export default Hero;