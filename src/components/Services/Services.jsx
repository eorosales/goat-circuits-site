import './_Services.css'

const servicesInfo = [
  {
    id: 1,
    title: "Schematic Design",
    icon: "../../assets/images/schematics.svg",
    description: "We take pride in creating well organized, structured schematics in which any electrical engineer can review our designs and be able to quickly assess the intent of our finished work. "
  },
  {
    id: 2,
    title: "Printed Circuit Board",
    icon: "../../assets/images/pcb.svg",
    description: "Equipped with years of board design experience coupled with knowledge of bare board fabrication specifications, we produce designs that are robust, cost-effective, and functional while being aesthetically pleasing to the eye."
  },
  {
    id: 3,
    title: "Electrical Librarian",
    icon: "../../assets/images/electrical-library.svg",
    description: "Our team builds libraries from the ground up and manage components as they go from active to end of life. Our component footprints follow vendor and IPC standards. During board assembly, we work directly with assembly manufacturers constantly throughout this process."
  }
]

const Services = () => (
  <section className="services">
    <div className="services__container">
      <h2>Featured Services</h2>
      {
        servicesInfo.map(serviceInfo => (
          <div className="services__card" key={serviceInfo.id}>
              <img className="services__icon" src={serviceInfo.icon} alt="Schematics Icon" />
              <h2>{serviceInfo.title}</h2>
              <p>{serviceInfo.description}</p>
          </div>
        ))
      }
    </div>
  </section>
)

export default Services
