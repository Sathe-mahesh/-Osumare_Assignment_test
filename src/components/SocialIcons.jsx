
import LogoStrip from '../assets/LogoStrip.png';
function SocialLogos() {
  return (
    <div className="social-logos" style={{ 
      display: 'flex', 
      gap: '20px',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <img src={LogoStrip} alt="Google" style={{ height: '32px' }} />
     
    </div>
  );
}

export default SocialLogos;