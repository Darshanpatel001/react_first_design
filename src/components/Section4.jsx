import React from 'react'
import titlee_img from "../images/tittle-img.svg"
import riview_1 from "../images/review1 (1).jpg"
import riview_2 from "../images/review2 (1).jpg"
import riview_3 from "../images/review3 (1).jpg"
import riview_4 from "../images/review4.jpg"
import riview_5 from "../images/review5.jpg"
import riview_6 from "../images/review6.jpg"
import arrow_left from "../images/arrow-left.svg"
import arrow_right from "../images/arrow-right.svg"

function Section4() {
  return (
    <section class="testimonials">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="head d-flex flex-wrap justify-content-between">
                        <div class="shaping-future  ">
                            <div class="tittle d-flex">
                                <img class="" src={titlee_img} alt="tittle-img"/>
                                <p class="pt-3  ps-2 text-uppercase ">OUR BLOG
                                </p>
                            </div>
                            <h2>Latest Insights</h2>
                        </div>
                        <div class="customers my-sm-8 my-3 d-flex align-items-center">
                            <button class="rounded-circle bg-white me-2" data-bs-target="#demo" data-bs-slide="prev">
                                <span><img src={arrow_left} alt="left-arrow"/></span>
                            </button>
                            <button class="rounded-circle  bg-white" data-bs-target="#demo" data-bs-slide="next">
                                <span><img src={arrow_right} alt="right-arrow"/></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="demo" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row">
                            <div class="col-md-4 ab-nd-9 mb-3">
                                <div class="card rounded-0">
                                    <div class="card-img">
                                        <img src={riview_1} class="rounded-pill" alt="customers image"/>
                                    </div>
                                    <div class="card-body p-8">
                                        <p class="text-black lh-base fw-light mb-5 buid"> The level of craftsmanship
                                            and attention to detail was impressive. We would not hesitate to
                                            recommend Buildscape for any construction project.
                                        </p>
                                        <div class="card-info">
                                            <p class="mb-1 text-black fw-light text-capitalize">annette black
                                            </p>
                                            <p class="mb-8 text-capitalize">columbus, OH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 ab-nd-9 mb-3">
                                <div class="card rounded-0">
                                    <div class="card-img">
                                        <img src={riview_2} class="rounded-pill" alt="customers image"/>
                                    </div>
                                    <div class="card-body p-8">
                                        <p class="text-black lh-base fw-light mb-5 buid"> The level of craftsmanship
                                            and attention to detail was impressive. We would not hesitate to
                                            recommend Buildscape for any construction project.
                                        </p>
                                        <div class="card-info">
                                            <p class="mb-1 text-black fw-light text-capitalize">annette black
                                            </p>
                                            <p class="mb-8 text-capitalize">columbus, OH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 ab-nd-9 mb-3">
                                <div class="card rounded-0">
                                    <div class="card-img">
                                        <img src={riview_3} class="rounded-pill" alt="customers image"/>
                                    </div>
                                    <div class="card-body p-8">
                                        <p class="text-black lh-base fw-light mb-5 buid"> The level of craftsmanship
                                            and attention to detail was impressive. We would not hesitate to
                                            recommend Buildscape for any construction project.
                                        </p>
                                        <div class="card-info">
                                            <p class="mb-1 text-black fw-light text-capitalize">annette black
                                            </p>
                                            <p class="mb-8 text-capitalize">columbus, OH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item ">
                        <div class="row">
                            <div class="col-md-4 ab-nd-9 mb-3">
                                <div class="card rounded-0">
                                    <div class="card-img">
                                        <img src={riview_4} class="rounded-pill" alt="customers image"/>
                                    </div>
                                    <div class="card-body p-8">
                                        <p class="text-black lh-base fw-light mb-5 buid"> The level of craftsmanship
                                            and attention to detail was impressive. We would not hesitate to
                                            recommend Buildscape for any construction project.
                                        </p>
                                        <div class="card-info">
                                            <p class="mb-1 text-black fw-light text-capitalize">annette black
                                            </p>
                                            <p class="mb-8 text-capitalize">columbus, OH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 ab-nd-9 mb-3">
                                <div class="card rounded-0">
                                    <div class="card-img">
                                        <img src={riview_5} class="rounded-pill" alt="customers image"/>
                                    </div>
                                    <div class="card-body p-8">
                                        <p class="text-black lh-base fw-light mb-5 buid"> The level of craftsmanship
                                            and attention to detail was impressive. We would not hesitate to
                                            recommend Buildscape for any construction project.
                                        </p>
                                        <div class="card-info">
                                            <p class="mb-1 text-black fw-light text-capitalize">annette black
                                            </p>
                                            <p class="mb-8 text-capitalize">columbus, OH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 ab-nd-9 mb-3">
                                <div class="card rounded-0">
                                    <div class="card-img">
                                        <img src={riview_6} class="rounded-pill" alt="customers image"/>
                                    </div>
                                    <div class="card-body p-8">
                                        <p class="text-black lh-base fw-light mb-5 buid"> The level of craftsmanship
                                            and attention to detail was impressive. We would not hesitate to
                                            recommend Buildscape for any construction project.
                                        </p>
                                        <div class="card-info">
                                            <p class="mb-1 text-black fw-light text-capitalize">annette black
                                            </p>
                                            <p class="mb-8 text-capitalize">columbus, OH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item ">
                        <div class="row">
                            <div class="col-md-4 ab-nd-9 mb-3">
                                <div class="card rounded-0">
                                    <div class="card-img">
                                        <img src="img/review7.jpg" class="rounded-pill" alt="customers image"/>
                                    </div>
                                    <div class="card-body p-8">
                                        <p class="text-black lh-base fw-light mb-5 buid"> The level of craftsmanship
                                            and attention to detail was impressive. We would not hesitate to
                                            recommend Buildscape for any construction project.
                                        </p>
                                        <div class="card-info">
                                            <p class="mb-1 text-black fw-light text-capitalize">annette black
                                            </p>
                                            <p class="mb-8 text-capitalize">columbus, OH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 ab-nd-9 mb-3">
                                <div class="card rounded-0">
                                    <div class="card-img">
                                        <img src="img/review8.jpg" class="rounded-pill" alt="customers image"/>
                                    </div>
                                    <div class="card-body p-8">
                                        <p class="text-black lh-base fw-light mb-5 buid"> The level of craftsmanship
                                            and attention to detail was impressive. We would not hesitate to
                                            recommend Buildscape for any construction project.
                                        </p>
                                        <div class="card-info">
                                            <p class="mb-1 text-black fw-light text-capitalize">annette black
                                            </p>
                                            <p class="mb-8 text-capitalize">columbus, OH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 ab-nd-9 mb-3">
                                <div class="card rounded-0">
                                    <div class="card-img">
                                        <img src="img/review9.jpg" class="rounded-pill" alt="customers image"/>
                                    </div>
                                    <div class="card-body p-8">
                                        <p class="text-black lh-base fw-light mb-5 buid"> The level of craftsmanship
                                            and attention to detail was impressive. We would not hesitate to
                                            recommend Buildscape for any construction project.
                                        </p>
                                        <div class="card-info">
                                            <p class="mb-1 text-black fw-light text-capitalize">annette black
                                            </p>
                                            <p class="mb-8 text-capitalize">columbus, OH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
        
    </section>
  )
}

export default Section4