import './_Navigation.css'

const navLinks = [
  {
    id: 1,
    link: "Services",
    url: "#"
  },
  {
    id: 2,
    link: "Projects",
    url: "#"
  },
  {
    id: 3,
    link: "About",
    url: "#"
  },
  {
    id: 4,
    link: "Contact",
    url: "#"
  },
 
]

const Navigation = () => (
    <nav>
      <ul>
        {
          navLinks.map(navLink => 
            <li key={navLink.id}>
              <a href={navLink.url}>
                {navLink.link}
              </a>
            </li>
          )
        }
      </ul>
    </nav>
  )

export default Navigation