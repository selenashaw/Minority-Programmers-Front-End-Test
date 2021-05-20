import { InstagramFill, LinkedInFill, FacebookFill, TwitterFill } from 'akar-icons';
import './Navbar.css';
import MPLogo from './logo.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={MPLogo} alt='logo' className='logo-pos' />
      <InstagramFill className='icon-size insta-pos' />
      <LinkedInFill className='icon-size linked-pos' />
      <TwitterFill className='icon-size twitter-pos' />
      {/* Figure out how to get the dashicon one, maybe just do an svg */}
      <FacebookFill className='icon-size fb-pos' />
      <div className='navs'>
        <a href='/getbult'>Get Bult</a>
        <a href='/events' className='navs-margin'>Events</a>
        <a href='/learn' className='navs-margin'>Learn</a>
        <a href='/join' className='navs-margin'>Join</a>
      </div>
    </div>
  );
}

export default Navbar;