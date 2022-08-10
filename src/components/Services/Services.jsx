import './_Services.css'

const servicesInfo = [
  {
    id: 1,
    title: "Schematic Design",
    icon: "../../assets/images/schematics.svg",
    description: "Consectetur consequat eget eu ac. Viverra mi commodo, et lectus amet scelerisque. Velit faucibus quis tortor id sit leo ullamcorper velit consequat. Tortor, mauris eget tortor, sed. Ut tincidunt at at commodo. Quisque vivamus."
  },
  {
    id: 2,
    title: "Printed Circuit Board",
    icon: "../../assets/images/pcb.svg",
    description: "Proin vel purus eget sed vestibulum habitant nec pellentesque semper. Massa amet amet vitae in quam pretium imperdiet. Sit cum platea urna in. Et scelerisque elementum risus interdum id magna luctus. Amet ultricies feugiat."
  },
  {
    id: 3,
    title: "Electrical Librarian",
    icon: "../../assets/images/electrical-library.svg",
    description: "Eget gravida massa ultricies mattis non gravida suspendisse. Duis massa augue gravida proin sem nullam arcu, consectetur augue. Volutpat imperdiet augue dolor volutpat porttitor mattis enim a. Hac viverra ac id sed suspendisse."
  }
]

const Services = () => (
  <section className="services">
    <div className="services__container">
      {/* <h2>Featured Services</h2> */}
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
