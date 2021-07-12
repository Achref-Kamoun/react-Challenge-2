
function Projet({Pro}) {
    return (
      <section id="projects">
      <h2 className="text-important">Projects</h2>
      <div className="projects-container">

{Pro.map((el,i) => 


<div className="project-card">
<img src={el.img} alt="project" />
<h3>{el.title}</h3>
<p>
  {el.desc}
</p>
<p><a href="#">{el.link}</a></p>

</div>
)}

      </div>
    </section>
      
    );
  }
  
  export default Projet;





