import React from 'react'
import section1 from "./Section1"
import titlee_img from "../images/tittle-img.svg"
import project_1 from "../images/project1.jpg"
import project_2 from "../images/project2.jpg"
import project_3 from "../images/project3.jpg"
import project_4 from "../images/project4.jpg"
function Section3() {
  return (
    <section class="projectt">
    <div class="container">
        <div class="row">
            <div class="shaping-future d-flex justify-content-between align-items-sm-end  ">
                <div>
                    <div class="tittle d-flex">
                        <img class="invert" src={titlee_img} alt="tittle-img"/>
                        <p class="pt-3  ps-2 text-uppercase ">work
                        </p>
                    </div>
                    <h2 class="text-white">Latest Projects</h2>
                </div>
                <button class="btn  ms-lg-0">
                    <a href="javascrip:void(0);" class="   cstm-btn-1">View All Services</a>
                </button>
            </div>
            <div class="col-lg-6 col-md-6 col-12 mb-4">
                <div class="cardd position-relative">
                    <img src={project_1} alt="project1"/>
                    <div class="location position-absolute end-0 bottom-0 m-4 d-inline text-white  ">
                        Thailand
                    </div>
                </div>
                <h5 class="mt-3 ">Uptown Residences</h5>
            </div>

            <div class="col-lg-6 col-md-6 col-12 mb-4">
                <div class="cardd position-relative">
                    <img src={project_2} alt="project1"/>
                    <div class="location position-absolute end-0 bottom-0 m-4 d-inline text-white  ">
                        Austin
                    </div>
                </div>
                <h5 class="mt-3">Seaside Serenity</h5>
            </div>

            <div class="col-lg-6 col-md-6 col-12 ">
                <div class="cardd position-relative">
                    <img src={project_3} alt="project1"/>
                    <div class="location position-absolute end-0 bottom-0 m-4 d-inline text-white  ">
                        Las Vegas
                    </div>
                </div>
                <h5 class="mt-3">The Elements</h5>
            </div>

            <div class="col-lg-6 col-md-6 col-12">
                <div class="cardd position-relative">
                    <img src={project_4} alt="project1"/>
                    <div class="location position-absolute end-0 bottom-0 m-4 d-inline text-white  ">
                        Malaysia
                    </div>
                </div>
                <h5 class="mt-3">Harmony Gardens</h5>
            </div>

        </div>
    </div>
</section>
  )
}

export default Section3