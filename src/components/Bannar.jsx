import arrow from "../images/arrow.svg"
let   Banner=()=>{
    return(
        <section class="banner position-relative">
        <div class="container">
            <div class="row">
                <div class="banner-data  ">
                    <h1 class="h1">Experience the Art of Construction</h1>
                    <p class="text-white fs-2 ">Welcome to BuildScape</p>
                </div>
                <div class="line "></div>
            </div>
        </div>
        <div class="boxx position-absolute end-0 bottom-0  mx-auto d-flex ">
            <div class="d-flex ">
                Explore our <br/>
                Work
                <img src={arrow} class="ps-5" alt="arrow"/>
            </div>
        </div>
    </section>
    )
}
export default Banner