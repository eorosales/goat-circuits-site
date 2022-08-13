import './_About.css'

const aboutInfo = {
  avatar: '../../assets/images/profile-pic.jpg',
  bio: 'An electrical engineer driven with ambition, supported by a foundation of over nearly a decade in the industry. My academic and professional background leads the processes resulting in both reliable and robust designs. Although confident in engineering knowledge surrounding various power, analog and digital circuits, my philosophy is to continue my ongoing education on the forefront of the electrical engineering profession.'
}

const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__profile-pic">
          <img src={aboutInfo.avatar} alt="Avatar Pic "/>
        </div>
        <div className="about__bio">
          <h2>Eric Rosales</h2>
          <h3>CEO / Founder</h3>
          <p>An electrical engineer driven with ambition, supported by a foundation of over nearly a decade in the industry. My academic and professional background leads the processes resulting in both reliable and robust designs.</p>
          <p>Although confident in engineering knowledge surrounding various power, analog and digital circuits, my philosophy is to continue my ongoing education on the forefront of the electrical engineering profession.</p>
        </div>
      </div>
    </section>
  )
}

export default About
