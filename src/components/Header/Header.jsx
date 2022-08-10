import './_Header.css'

const scrollToSection = () => document.getElementById('contact').scrollIntoView();

const Header = (props) => {
  return (
    <div className="header"> 
    <div className="header__container">
      <h1 className="header__title">{props.title}</h1>
      {/* <Navigation /> */}
      <div className="header__logo-container"> 
        <img className="header__logo" src="../../assets/images/goat-circuits-logo.svg" alt="Goat Circuits Logo"  />
      </div>
      <div className="header__taglines-container">
        <h1>Electrical Design and Engineering</h1>
      </div>
      <button type="button" onClick={scrollToSection} className="btn btn-primary">Contact Us</button>      
      </div>  
    </div> 
  )
}

export default Header