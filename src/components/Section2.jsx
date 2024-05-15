import Section_1 from "./Section1"
import titlee_img from "../images/tittle-img.svg"
import service_1 from "../images/service-thumb.svg"
import service_2 from "../images/service-thumb-3.svg"
import service_3 from "../images/service-thumb-3 (1).svg"
function Section2() {
  return (
    <section class="service">
    <div class="container">
        <div class="shaping-future d-flex justify-content-between align-items-sm-end  ">
            <div>
                <div class="tittle d-flex">
                    <img class="" src={titlee_img} alt="tittle-img"/>
                    <p class="pt-3  ps-2 text-uppercase ">WHAT WE DO
                    </p>
                </div>
                <h2>Our Services</h2>
            </div>
            <button class="btn  ms-lg-0">
                <a href="javascrip:void(0);" class="   cstm-btn-1">View All Services</a>
            </button>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-6 col-12 mb-5">
                <div class="card features-card rounded-0">
                    <div class="icon-box">
                        <img src={service_1} alt="service-thumb"/>
                    </div>
                    <div class="card-body p-0 mt-4">
                        <h5>Energy Efficiency Upgrades</h5>
                        <p> We implement eco-friendly solutions, such as insulation and efficient lighting.</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12 mb-5">
                <div class="card features-card rounded-0">
                    <div class="icon-box">
                        <img src={service_2} alt="service-thumb"/>
                    </div>
                    <div class="card-body p-0 mt-4">
                        <h5>Energy Efficiency Upgrades</h5>
                        <p> We implement eco-friendly solutions, such as insulation and efficient lighting.</p>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12 mb-5">
                <div class="card features-card rounded-0">
                    <div class="icon-box">
                        <img src={service_3} alt="service-thumb"/>
                    </div>
                    <div class="card-body p-0 mt-4">
                        <h5>Energy Efficiency Upgrades</h5>
                        <p> We implement eco-friendly solutions, such as insulation and efficient lighting.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Section2