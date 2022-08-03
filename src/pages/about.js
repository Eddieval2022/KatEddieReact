
import Navbar from "../components/navbar";



const About = (user, setter) => {
    return ( 
<div>
<Navbar user={user} setter={setter} />
        <h1>About</h1>
        </div>
     );
}
 
export default About;