import Footer from "@/component/footer";
import Navbar from "@/component/navbar";

// depends on data!
function Signup(){
    return(
        <>
            <Navbar />
            <form>
                <div>
                    <label htmlFor="email">Enter your email</label>
                    <input type="text" name="email" id="email" placeholder="Email id" required/>
                </div>
                <div>
                    <label htmlFor="passwd">Enter your email</label>
                    <input type="text" name="passwd" id="passwd" placeholder="Password" required/>
                </div>
                <div>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            <Footer />
        </>
    )
}

export default Signup;