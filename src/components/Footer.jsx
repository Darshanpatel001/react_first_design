  import React from 'react'
  import footer_logo from "../images/64d1d80ca1c16dc450b1061b_footer-main-logo.svg"
  import footer_img from "../images/footer-img.jpg"
  
  function footer() {
    return (
        <footer>
        <div class="container">
            <div class="footer-top d-flex">
                <div class="row">
                    <div class="col-lg-12   col-12 ">
                        <div class="footerr">
                            <div class="footer-title">
                                <img src={footer_logo} alt="logo"/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-3 col-sm-4 col-6  ">
                        <ul class="list   mt-5 p-0">
                            <li class="mb-1  "><a href="javascript:void(0);">About us</a>
                            </li>
                            <li class="mb-1 "><a href="javascript:void(0);">Our Projects</a>
                            </li>
                            <li class="mb-1 "><a href="javascript:void(0);">Services</a>
                            </li>
                            <li class="mb-1 "><a href="javascript:void(0);">News</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-4 col-md-3 text-sm-center col-sm-4 col-6  ">
                        <ul class="list    mt-5 p-0">
                            <li class="mb-1  "><a href="javascript:void(0);">Inquiry</a>
                            </li>
                            <li class="mb-1 "><a href="javascript:void(0);">Privacy
                                    Policy</a></li>
                            <li class="mb-1 "><a href="javascript:void(0);">Terms &
                                    Condition</a></li>
                            <li class="mb-1 "><a href="javascript:void(0);">Cookie
                                    Policy</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-4 col-md-3 col-sm-4 text-sm-center col-6  ">
                        <ul class="list    mt-5 p-0">
                            <li class="mb-1  "><a href="javascript:void(0);">Instagram</a>
                            </li>
                            <li class="mb-1 "><a href="javascript:void(0);">Facebook</a>
                            </li>
                            <li class="mb-1 "><a href="javascript:void(0);">Linkedin</a>
                            </li>
                            <li class="mb-1 "><a href="javascript:void(0);">Twitter</a></li>
                        </ul>

                    </div>

                    <div class="col-lg-9 col-md-6 mt-5 col-12">
                        <div class="footer-bottom d-lg-flex text-center  justify-content-between ">
                            <div class="copyright mb-3">
                                Designed by
                                <a href="javascript:void(0);">Nixar</a>
                                . Powered by
                                <a href="javascript:(0);">Webflow.</a>
                            </div>
                            <p>Copyright © 2023 BuildScape. All rights reserved.</p>
                        </div>
                    </div>

                </div>        
                    <div class="footer-img ">
                        <img src={footer_img} alt="footer-img"/>
                    </div>           
            </div>
        </div>
    </footer>
    )
  }
  
  export default footer