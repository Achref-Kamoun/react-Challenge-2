import Style from'./style.css';
import Navbar from './Navbar.js'
import About from './About.js'
import Projet from './Project.js'
import Form from './Form.js'
import Footer from './Footer.js'
function App() {
  const Pro = [{ img:"/proj1.jpg",title:'Project 1',desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
  aliquam.`,link : "Github Link"},{ img:"/proj2.jpg",title:'Project 1',desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
  aliquam.`,link : "Github Link"},{ img:"/proj3.jpg",title:'Project 1',desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
  aliquam.`,link : "Github Link"},{ img:"/proj4.jpg",title:'Project 1',desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
  aliquam.`,link : "Github Link"}

]
  return (
    <div>
    <Navbar/>
    <About name = "John doe"  img = '/John-Doe.jpg' />
    <Projet Pro={Pro} />
    <Form/>
    <Footer p= 'Copyritghts &copy; GOMYCODE 2021'/>
    </div>
  );
}

export default App;
