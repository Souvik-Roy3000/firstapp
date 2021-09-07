import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom'

const About = () => {
  const history=useHistory();
  const callAboutPage=async ()=>{
    try {
      const res=await fetch('/about',{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
      });
      const data= await res.json();

      if(!res.status===200){
        const error=new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      history.push("/login");
    }
  }

  useEffect(() => {
   callAboutPage();
  }, [])

    return (
        <>
      <section className="main-sec">
       <div className="container"> 
       <form method="GET">
         <div className="row">
           <div className="col-md-12">
            <div className="col-md-12">
              <div className="profile-head">
                <h4>company name</h4>
                <h6>director name</h6>
                <p className="details">any details</p>
              </div>
              <div className="table-div">
              <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    
  </tbody>
</table>
              </div>
            </div>
           </div>
         </div>
       </form>
       </div>
      </section>
        </>
    )
}

export default About
