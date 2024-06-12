import Search from "./search";

// depends on data!
function Blog(){
    return(
        <article  className='main-section'>
            <Search />
            <div>
                <img src="" alt="" />
                <div>
                    <h5 className="title">Card title</h5>
                    <p className="body">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn">Go somewhere</a>
                </div>
            </div>
        </article> 
    )
}

export default Blog;