import { useInView } from "./hooks/useInView"; // adjust path

function PhotoGallery() {
  const { ref: aboutRef, isVisible: isAboutVisible } = useInView(0.1, "0px", true);
   
    return (
    <>
    
    <div className="boxcontainer">
    <div
          className={`offer1 ${isAboutVisible ? "visible" : ""}`}
          ref={aboutRef}
        >
    <h1>What we offer</h1></div>
    <div
          className={`offer2 ${isAboutVisible ? "visible" : ""}`}
          ref={aboutRef}
        >
        <p>Professional editing and event coverage to help your business stand out. Get high-quality visuals tailored to your needs.</p></div>
        <div
          className={`scroll-reveal7 ${isAboutVisible ? "visible" : ""}`}
          ref={aboutRef}
        >
   <div className="photocontainer">
   
  <div className="card">
    <img src="https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/492061583_1122484359891632_7174362486526037288_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEqdwckdACP3tIGPIqCmXXla5hsCGkdGylrmGwIaR0bKTyiLpJc1tYT6aigTUjgbF9zVEuodPALFsSGMzT2ba5U&_nc_ohc=7D-2k-vlaE0Q7kNvwFIDFTD&_nc_oc=Adnb9vFLP3gl9Htwg7nhffCvngOJGlnDgcnOg6exJjZxTjaACKMxytIApyJWLfcR1YCaAeOqdVlBDuJKEY3xBKNg&_nc_zt=23&_nc_ht=scontent.fmnl4-7.fna&_nc_gid=-xO2G3XFzhnsjB4sOqf7TQ&oh=00_AfLzgtOXj7BxVih5HNNQwupfs-_BQhDKPzBex-KsexNFXg&oe=683F7912"/>
    <div className="card__head">Weddings</div>
  </div>
  <div className="card">
    <img src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/489789963_1113210660819002_8423028563559640865_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFtmYf9gEPVtHOdVooWRigW1CylOPNqgGvULKU482qAa_Ghh0Cj1eZTzmmcAH_hLZkol2wPvP6qsYHDISRw6blI&_nc_ohc=pzcHqS0t3OYQ7kNvwHMXdrY&_nc_oc=Adk6yJSYP9oA_nVzZVaSuKLxxV_p5EvWOhxi9FscNoPvq5l3Kr0kkMlNT2XBTNqQWHAsuRq8GkY_R3N-MGpgnqqL&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=pLyXc5IsaeWO3Tv1S6FAhA&oh=00_AfIqG4HhI4zjspRb7sJX71Ez8vWHmRo5i-HekwhizUOOpA&oe=683F8845"/>
    <div className="card__head">Prenup</div>
  </div>
  <div className="card">
    <img src="https://scontent.fmnl4-4.fna.fbcdn.net/v/t39.30808-6/490841797_1120573390082729_3275541198668865799_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeES6j6u95gWlVO53u2gBZUdiFb63rQSuGyIVvretBK4bH2csbESMV4wy34c5hE3f56JW2Ne_8B2ygXPG_3r0RfD&_nc_ohc=IDZguPN86hQQ7kNvwHFYfMU&_nc_oc=AdmA8-6rHKnKiJEFr2zOdzE-NiR0V3lumqDJBKfRNmjO1K-wkZZLlfzLIrOi1avwMNk7hpstMOLu0D_swNpVEAzu&_nc_zt=23&_nc_ht=scontent.fmnl4-4.fna&_nc_gid=2dhiqdB8Uk1zDt7YGEAxRA&oh=00_AfJJcSHZ5iKAX2mGmYbR-l_RPhNPsjub9_9MLSwf-2Uqbw&oe=683F8BEA"/>
    <div className="card__head">Events</div>
  </div>
  <div className="card">
    <img src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/488344011_1107464041393664_8703179562420853838_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHpnRUjb6JjRd2VOUfqNYKPs3Fz2wpnoDazcXPbCmegNjvOx_KeJti5PmH3MlohKPTl6ZaPhWcfSK7Iax6-2erp&_nc_ohc=sty_L0F11woQ7kNvwE-UbrV&_nc_oc=AdkdZXossRcIsbVAhYp2iTXlhukC6LWGiLR0oW2l1Dn9ce9z5R-Psoqdhi5I13Hajy5QXKQFvY6JAhqb8DEYvkkn&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=nVQGqP53KoZD3uAm9dKIPQ&oh=00_AfLFezPy5haO57TIaBl8sAajF_PzIR1zyIZs9CtO7LY0sw&oe=683FC001"/>
    <div className="card__head">Corporate</div>
  </div>
  <div className="card">
    <img src="https://scontent.fmnl4-7.fna.fbcdn.net/v/t39.30808-6/490214518_1113208394152562_3276928660274432604_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFO0GfieoYh-zTNQw6c9s7a3qMVsWwmBDHeoxWxbCYEMQTlBPzxC9EfmOLaieAjhxY213L2ReTYMWX26wB-Q5Ay&_nc_ohc=IR324IanI3MQ7kNvwEfAyfy&_nc_oc=AdlufGFsoOlbci7rbFxR3eqDAu5iJkUFKACRpi0BrINVz2i2DsNmekxTyGGYal3cSU8RWMo28sarq6PnsLWpJzu8&_nc_zt=23&_nc_ht=scontent.fmnl4-7.fna&_nc_gid=XtD5sMY7u4mGTQBkU_Ontw&oh=00_AfKHiCtEHRbwkaJYHjwO7X8kfVnoBWoomjiJApPC0Qa5JQ&oe=683F826C"/>
    <div className="card__head">Ads</div>
  </div>
</div></div></div>
   </>);
}

export default PhotoGallery;