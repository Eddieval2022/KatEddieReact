import Navbar from "../components/navbar";

const Eddie = (user, setter) => {
    return ( 

        <div>
            <Navbar user={user} setter={setter} />
            <h1>Eddie</h1>
        </div>
     );
}
 
export default Eddie;