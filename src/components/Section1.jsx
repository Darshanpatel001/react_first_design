import title_img from "../images/tittle-img.svg"
import section_img from "../images/future-section-img.jpg"
let Bettar_future = () =>{
    return(
        <section class="better-future">
        <div class="container">
            <div class="shaping-future  ">
                <div class="tittle d-flex">
                    <img class="" src={title_img} alt="tittle-img"/>
                    <p class="pt-3  ps-2 text-uppercase ">SHAPING FUTURES
                    </p>
                </div>
                <h2>Building a Better Future</h2>
            </div>
            <div class="row">
                <div class="col-lg-8 col-md-6 col-12">
                    <div class="future-img">
                        <img class="h-100 w-100" src={section_img} alt="future-img"/>
                    </div>

                </div>
                <div class="col-lg-4 col-md-6 mt-4 col-12">
                    <div class="future-content d-flex flex-column justify-content-between   w-100">
                        <div class="future-top ms-2">
                            <p>We are a leading construction company dedicated to delivering exceptional projects that
                                surpass expectations.</p>
                            <div class="linee  "></div>
                            <p class="p">2023®</p>
                        </div>
                        <button class="btn ms-lg-0  mx-auto">
                            <a href="javascrip:void(0);" class="   cstm-btn-1">Discuss New Project</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    )
}
export default Bettar_future