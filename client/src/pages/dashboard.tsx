import Footer from "@/component/footer";
import Navbar from "@/component/navbar";

function Dashboard(){
    return(
        <>
        <Navbar />
        <div>
        <div>
            {/* depends on data */}
            <div>
            One of three columns
            </div>
        </div>
        </div>
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="previtem"><a href="#">Previous</a></li>
                {/* iterate & multiply it! */}
                <li className="item"><a href="#">1</a></li>
                <li className="nextitem"><a href="#">Next</a></li>
            </ul>
        </nav>
        <Footer />
        </>
    )
}

export default Dashboard;