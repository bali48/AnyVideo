function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Start Loader -->\n<!--<div class=\"section-loader\">\n      <div class=\"loader\">\n          <div></div>\n          <div></div>\n      </div>\n  </div>-->\n<!--\n        ===================\n           NAVIGATION\n        ===================\n        -->\n<header class=\"black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav wow fadeInUp\" id=\"mh-header\">\n    <div class=\"overlay\"></div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <nav class=\"navbar navbar-expand-lg mh-nav nav-btn\">\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                          <span class=\"navbar-toggler-icon icon\"></span>\n                      </button>\n\n                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n                    <ul class=\"navbar-nav mr-auto ml-auto\">\n                        <li class=\"nav-item active\">\n                            <a class=\"nav-link\" (click)=\"scrollToSection('mh-home')\">Home</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" (click)=\"scrollToSection('mh-about')\">About</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" (click)=\"scrollToSection('mh-skills')\">Skills</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" (click)=\"scrollToSection('mh-experience')\">Experiences</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" (click)=\"scrollToSection('mh-portfolio')\">Portfolio</a>\n                        </li>\n                        <!-- <li class=\"nav-item\">\n                                  <a class=\"nav-link\" href=\"#mh-pricing\">Pricing</a>\n                              </li>\n                              <li class=\"nav-item\">\n                                  <a class=\"nav-link\" href=\"#mh-blog\">Blog</a>\n                              </li> -->\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link\" (click)=\"scrollToSection('mh-contact')\">Contact</a>\n                        </li>\n                    </ul>\n                </div>\n            </nav>\n        </div>\n    </div>\n</header>\n\n<!--\n          ===================\n              HOME\n          ===================\n          -->\n<section class=\"mh-home\" id=\"mh-home\">\n    <div class=\"home-ovimg\">\n        <div class=\"container\">\n            <div class=\"row xs-column-reverse section-separator vertical-middle-content home-padding\">\n                <div class=\"col-sm-6\">\n                    <div class=\"mh-header-info\">\n                        <div class=\"mh-promo wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.1s\">\n                            <span>Hello I'm</span>\n                        </div>\n\n                        <h2 class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.2s\">Bilal Muhammad</h2>\n                        <h4 class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.3s\">FullStack Developer\n                        </h4>\n\n                        <ul>\n                            <li class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.4s\"><i class=\"fa fa-envelope\"></i><a href=\"mailto:\">m.bilal294@outlook.com</a></li>\n                            <li class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.5s\"><i class=\"fa fa-phone\"></i><a href=\"callto:\">+92 313 510 7625</a></li>\n                            <li class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.6s\"><i class=\"fa fa-map-marker\"></i>\n                                <address>Bharia Town, Lahore, Pakistan</address>\n                            </li>\n                        </ul>\n\n                        <ul class=\"social-icon wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.7s\">\n                            <li><a href=\"http://bit.ly/fb-bilal\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a>\n                            </li>\n                            <li><a href=\"http://bit.ly/twitter-Bilal\" target=\"_blank\"><i\n                                              class=\"fa fa-twitter\"></i></a></li>\n                            <li><a href=\"http://bit.ly/git-bilal\" target=\"_blank\"><i class=\"fa fa-github\"></i></a>\n                            </li>\n                            <li><a href=\"http://bit.ly/linkedin-Bilal\" target=\"_blank\"><i\n                                              class=\"fa fa-linkedin\"></i></a></li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"hero-img wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.6s\">\n                        <div class=\"img-border\">\n                            <img src=\"assets/images/bilal.jpg\" alt=\"Muhammad-Bilal\" class=\"img-fluid\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!--\n        ==================\n            ABOUT\n        =================\n        -->\n<section class=\"mh-about\" id=\"mh-about\">\n    <div class=\"container\">\n        <div class=\"row section-separator\">\n            <div class=\"col-sm-12 col-md-6\">\n                <div class=\"mh-about-img shadow-2 wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.4s\" style=\"margin-top: 8%;\">\n                    <img src=\"assets/images/ab-img.png\" alt=\"\" class=\"img-fluid\">\n                </div>\n            </div>\n            <div class=\"col-sm-12 col-md-6\">\n                <div class=\"mh-about-inner\">\n                    <h2 class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.1s\">About Me</h2>\n                    <p class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.2s\">\n                        Bilal is an enthusiastic professional having 3+ years of experience in web application development, who learns and adopts things quickly. Technology seeking and quick implementation in a challenging and competitive environment are one of his specialties.\n                        He has been working in a diverse range of Transportation Projects, Procurement Management, CRM solutions, Accounting projects, and Project Management. Moreover, he always emphasized and make sure to design the best possible solutions\n                        within a given time frame. He is very punctual and energetic in his field and always loves to accept challenges with a strong knowledge of Software Engineering concepts. He acquires strong implementation skills in developing web\n                        applications with an exposure of\n                    </p>\n                    <div class=\"mh-about-tag wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.3s\">\n                        <ul>\n                            <li><span>Javascript</span></li>\n                            <li><span>Node js</span></li>\n                            <li><span>Express js</span></li>\n                            <li><span>Angular</span></li>\n                            <li><span>Vue js</span></li>\n                            <li><span>PHP</span></li>\n                            <li><span>Laravel</span></li>\n                            <li><span>Codeigniter</span></li>\n                            <li><span>Wordpress</span></li>\n                            <li><span>Docker</span></li>\n                            <li><span>REST API's</span></li>\n                            <li><span>MicroServices</span></li>\n                        </ul>\n                    </div>\n                    <a href=\"#\" class=\"btn btn-fill wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.4s\">Downlaod CV <i class=\"fa fa-download\"></i></a>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!--\n      ===================\n         SKILLS\n      ===================\n      -->\n<section class=\"mh-skills\" id=\"mh-skills\">\n    <div class=\"container\">\n        <div class=\"row section-separator\">\n            <div class=\"section-title text-center col-sm-12\">\n                <!--<h2>Skills</h2>-->\n            </div>\n            <div class=\"col-sm-12 col-md-6\">\n                <div class=\"mh-skills-inner\">\n                    <div class=\"mh-professional-skill wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.3s\">\n                        <h3>Technical Skills</h3>\n                        <div class=\"each-skills\">\n                            <div class=\"candidatos\">\n                                <div class=\"parcial\">\n                                    <div class=\"info\">\n                                        <div class=\"nome\">Javascript</div>\n                                        <div class=\"percentagem-num\">86%</div>\n                                    </div>\n                                    <div class=\"progressBar\">\n                                        <div class=\"percentagem\" style=\"width: 86%;\"></div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"candidatos\">\n                                <div class=\"parcial\">\n                                    <div class=\"info\">\n                                        <div class=\"nome\">PHP</div>\n                                        <div class=\"percentagem-num\">90%</div>\n                                    </div>\n                                    <div class=\"progressBar\">\n                                        <div class=\"percentagem\" style=\"width: 90%;\"></div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"candidatos\">\n                                <div class=\"parcial\">\n                                    <div class=\"info\">\n                                        <div class=\"nome\">Docker-MicroServices</div>\n                                        <div class=\"percentagem-num\">80%</div>\n                                    </div>\n                                    <div class=\"progressBar\">\n                                        <div class=\"percentagem\" style=\"width: 80%;\"></div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"candidatos\">\n                                <div class=\"parcial\">\n                                    <div class=\"info\">\n                                        <div class=\"nome\">Node</div>\n                                        <div class=\"percentagem-num\">88%</div>\n                                    </div>\n                                    <div class=\"progressBar\">\n                                        <div class=\"percentagem\" style=\"width: 88%;\"></div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"candidatos\">\n                                <div class=\"parcial\">\n                                    <div class=\"info\">\n                                        <div class=\"nome\">Angular</div>\n                                        <div class=\"percentagem-num\">70%</div>\n                                    </div>\n                                    <div class=\"progressBar\">\n                                        <div class=\"percentagem\" style=\"width: 70%;\"></div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"candidatos\">\n                                <div class=\"parcial\">\n                                    <div class=\"info\">\n                                        <div class=\"nome\">Vue JS</div>\n                                        <div class=\"percentagem-num\">92%</div>\n                                    </div>\n                                    <div class=\"progressBar\">\n                                        <div class=\"percentagem\" style=\"width: 92%;\"></div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-12 col-md-6\">\n                <div class=\"mh-professional-skills wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.5s\">\n                    <h3>Professional Skills</h3>\n                    <ul class=\"mh-professional-progress\">\n                        <li>\n                            <div class=\"mh-progress mh-progress-circle\" data-progress=\"95\"></div>\n                            <div class=\"pr-skill-name\">Communication</div>\n                        </li>\n                        <li>\n                            <div class=\"mh-progress mh-progress-circle\" data-progress=\"90\"></div>\n                            <div class=\"pr-skill-name\">Team Work</div>\n                        </li>\n                        <li>\n                            <div class=\"mh-progress mh-progress-circle\" data-progress=\"80\"></div>\n                            <div class=\"pr-skill-name\">Project Management</div>\n                        </li>\n                        <li>\n                            <div class=\"mh-progress mh-progress-circle\" data-progress=\"95\"></div>\n                            <div class=\"pr-skill-name\">Creativity</div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!--\n      ===================\n         EXPERIENCES\n      ===================\n      -->\n<section class=\"mh-experince\" id=\"mh-experience\">\n    <div class=\"bolor-overlay\">\n        <div class=\"container\">\n            <div class=\"row section-separator\">\n                <div class=\"col-sm-12 col-md-6\">\n                    <div class=\"mh-education\">\n                        <h3 class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.2s\">Education</h3>\n                        <div class=\"mh-education-deatils\">\n                            <!-- Education Institutes-->\n                            <div class=\"mh-education-item dark-bg wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.3s\">\n                                <h4>Software Engineering <a href=\"https://www.umt.edu.pk/\">University of Management\n                                          &\n                                          Technology,Lahore</a></h4>\n                                <div class=\"mh-eduyear\">2012-2016</div>\n                                <span>What I Learn:</span>\n                                <ul class=\"work-responsibility\">\n                                    <li><i class=\"fa fa-circle\"></i>How to apply the basic principles of software engineering for providing reliable software</li>\n                                    <li><i class=\"fa fa-circle\"></i>design, implement, deploy and maintain practical software systems.</li>\n                                    <li><i class=\"fa fa-circle\"></i>verify and validate the software systems</li>\n                                    <li><i class=\"fa fa-circle\"></i>understand and apply software project management skills: measurement, estimation, costing, planning, deployment and tracking of resources</li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-12 col-md-6\">\n                    <div class=\"mh-work\">\n                        <h3>Work Experience</h3>\n                        <div class=\"mh-experience-deatils\">\n                            <!-- Education Institutes-->\n                            <div class=\"mh-work-item dark-bg wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.4s\">\n                                <h4>Software Engineer <a href=\"https://nextbridge.com/\">Nextbridge (PVT) LTD.</a>\n                                </h4>\n                                <div class=\"mh-eduyear\">Apr 2019 - Present</div>\n                                <span>Responsibility :</span>\n                                <ul class=\"work-responsibility\">\n                                    <li><i class=\"fa fa-circle\"></i>Work with development teams and product managers to ideate software solutions</li>\n                                    <li><i class=\"fa fa-circle\"></i>Meeting both technical and consumer needs.</li>\n                                    <li><i class=\"fa fa-circle\"></i>Working On Major In-House Software Development Projects</li>\n                                    <li><i class=\"fa fa-circle\"></i>Enhancing framework architecture, design and hands-on code review activities.</li>\n                                    <li><i class=\"fa fa-circle\"></i>Provide technical expertise.</li>\n                                </ul>\n                            </div>\n                            <!-- Education Institutes-->\n                            <div class=\"mh-work-item dark-bg wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.6s\">\n                                <h4>Software Engineer <a href=\"https://www.raaziq.com/\">Raaziq INT. (PVT) LTD.</a>\n                                </h4>\n                                <div class=\"mh-eduyear\">Jan 2018 – Apr 2019</div>\n                                <span>Responsibility :</span>\n                                <ul class=\"work-responsibility\">\n                                    <li><i class=\"fa fa-circle\"></i>Develop and execute a Enterprise Software Solution that support SOA and SaaS based Architecture</li>\n                                    <li><i class=\"fa fa-circle\"></i>Develops software solutions by studying information needs, conferring with users and studying systems flow prepared by BPM team</li>\n                                    <li><i class=\"fa fa-circle\"></i>Analyze system specifications and translate system requirements to task specifications for junior resources</li>\n                                    <li><i class=\"fa fa-circle\"></i>Develop features across multiple subsystems in enterprise applications, including collaboration in requirements definition, design, coding, testing and deployment in a spring environment</li>\n                                </ul>\n                            </div>\n                            <!-- Education Institutes-->\n                            <div class=\"mh-work-item dark-bg wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.7s\">\n                                <h4>Software Engineer <a href=\"https://www.linkedin.com/company/wali-systems-inc-/?originalSubdomain=pk\">WaliSystems INC.</a></h4>\n                                <div class=\"mh-eduyear\">Sep 2016 – Jan 2018</div>\n                                <span>Responsibility :</span>\n                                <ul class=\"work-responsibility\">\n                                    <li><i class=\"fa fa-circle\"></i>Architecture and redesign code for maintainability, scalability, security and efficiency.</li>\n                                    <li><i class=\"fa fa-circle\"></i>Reviewing front end, databases, application interfaces and logs to troubleshoot and fix problems</li>\n                                    <li><i class=\"fa fa-circle\"></i>Continuously learn and update product knowledge.</li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!--\n        ===================\n           PORTFOLIO\n        ===================\n        -->\n<section class=\"mh-portfolio\" id=\"mh-portfolio\">\n    <div class=\"container\">\n        <div class=\"row section-separator\">\n            <div class=\"section-title col-sm-12 wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.1s\">\n                <h3>Recent Portfolio</h3>\n            </div>\n            <div class=\"part col-sm-12\">\n                <div class=\"portfolio-nav col-sm-12\" id=\"filter-button\">\n                    <ul>\n                        <li data-filter=\"*\" class=\"current wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.1s\"> <span>All Categories</span></li>\n                        <li data-filter=\".user-interface\" class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.2s\"><span>Web Design</span></li>\n                        <li data-filter=\".branding\" class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.3s\"><span>Branding</span></li>\n                        <li data-filter=\".mockup\" class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.4s\"><span>Mockups</span></li>\n                        <li data-filter=\".ui\" class=\"wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.5s\">\n                            <span>Photography</span></li>\n                    </ul>\n                </div>\n                <div class=\"mh-project-gallery col-sm-12 wow fadeInUp\" id=\"project-gallery\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.5s\">\n                    <div class=\"portfolioContainer row\">\n                        <div class=\"grid-item col-md-4 col-sm-6 col-xs-12 user-interface\">\n                            <figure>\n                                <img src=\"assets/images/portfolio/fintransformer/1.jpg\" alt=\"img04\">\n                                <figcaption class=\"fig-caption\">\n                                    <i class=\"fa fa-search\"></i>\n                                    <h5 class=\"title\">Fintransformer</h5>\n                                    <span class=\"sub-title\">Web Development</span>\n                                    <!-- <a data-fancybox data-src=\"#mh\" ></a> -->\n                                    <a (click)=\"projectDetail(0)\"></a>\n                                </figcaption>\n                            </figure>\n                        </div>\n                        <div class=\"grid-item col-md-4 col-sm-6 col-xs-12 ui mockup\">\n                            <figure>\n                                <img src=\"assets/images/portfolio/GC/dashboard.jpg\" alt=\"img04\">\n                                <figcaption class=\"fig-caption\">\n                                    <i class=\"fa fa-search\"></i>\n                                    <h5 class=\"title\">Group Captain</h5>\n                                    <span class=\"sub-title\">Web Development</span>\n                                    <a (click)=\"projectDetail(1)\"></a>\n                                </figcaption>\n                            </figure>\n                        </div>\n                        <div class=\"grid-item col-md-4 col-sm-6 col-xs-12 user-interface\">\n                            <figure>\n                                <img src=\"assets/images/portfolio/eparking/index.jpg\" alt=\"img04\">\n                                <figcaption class=\"fig-caption\">\n                                    <i class=\"fa fa-search\"></i>\n                                    <h5 class=\"title\">Eparking</h5>\n                                    <span class=\"sub-title\">Web Development</span>\n                                    <a (click)=\"projectDetail(2)\"></a>\n                                </figcaption>\n                            </figure>\n                        </div>\n                        <div class=\"grid-item col-md-4 col-sm-6 col-xs-12 branding\">\n                            <figure>\n                                <img src=\"assets/images/portfolio/pepellio/1.png\" alt=\"img04\">\n                                <figcaption class=\"fig-caption\">\n                                    <i class=\"fa fa-search\"></i>\n                                    <h5 class=\"title\">agSolutions</h5>\n                                    <span class=\"sub-title\">Web Development</span>\n                                    <a (click)=\"projectDetail(3)\"></a>\n                                </figcaption>\n                            </figure>\n                        </div>\n                        <div class=\"grid-item col-md-4 col-sm-6 col-xs-12 user-interface\">\n                            <figure>\n                                <img src=\"assets/images/portfolio/selio/3.jpg\" alt=\"img04\">\n                                <figcaption class=\"fig-caption\">\n                                    <i class=\"fa fa-search\"></i>\n                                    <h5 class=\"title\">Creative Design</h5>\n                                    <span class=\"sub-title\">Photograpy</span>\n                                    <a href=\"assets/images/portfolio/g4.png\" data-fancybox data-src=\"#mh\"></a>\n                                </figcaption>\n                            </figure>\n                        </div>\n                        <div class=\"grid-item col-md-4 col-sm-6 col-xs-12 branding\">\n                            <figure>\n                                <img src=\"assets/images/portfolio/g6.png\" alt=\"img04\">\n                                <figcaption class=\"fig-caption\">\n                                    <i class=\"fa fa-search\"></i>\n                                    <h5 class=\"title\">Creative Design</h5>\n                                    <span class=\"sub-title\">Photograpy</span>\n                                    <a href=\"assets/images/portfolio/g6.png\" data-fancybox data-src=\"#mh\"></a>\n                                </figcaption>\n                            </figure>\n                        </div>\n                        <div class=\"grid-item col-md-4 col-sm-6 col-xs-12 branding\">\n                            <figure>\n                                <img src=\"assets/images/portfolio/g8.png\" alt=\"img04\">\n                                <figcaption class=\"fig-caption\">\n                                    <i class=\"fa fa-search\"></i>\n                                    <h5 class=\"title\">Creative Design</h5>\n                                    <span class=\"sub-title\">Photograpy</span>\n                                    <a href=\"assets/images/portfolio/g8.png\" data-fancybox data-src=\"#mh\"></a>\n                                </figcaption>\n                            </figure>\n                        </div>\n                        <div class=\"grid-item col-md-4 col-sm-6 col-xs-12 ui\">\n                            <figure>\n                                <img src=\"assets/images/portfolio/g9.png\" alt=\"img04\">\n                                <figcaption class=\"fig-caption\">\n                                    <i class=\"fa fa-search\"></i>\n                                    <h5 class=\"title\">Creative Design</h5>\n                                    <span class=\"sub-title\">Photograpy</span>\n                                    <a href=\"assets/images/portfolio/g9.png\" data-fancybox data-src=\"#mh\"></a>\n                                </figcaption>\n                            </figure>\n                        </div>\n                        <div class=\"grid-item col-md-4 col-sm-6 col-xs-12 branding\">\n                            <figure>\n                                <img src=\"assets/images/portfolio/g7.jpg\" alt=\"img04\">\n                                <figcaption class=\"fig-caption\">\n                                    <i class=\"fa fa-search\"></i>\n                                    <h5 class=\"title\">Creative Design</h5>\n                                    <span class=\"sub-title\">Photograpy</span>\n                                    <a href=\"assets/images/portfolio/g7.jpg\" data-fancybox=\"gallery\"></a>\n                                </figcaption>\n                            </figure>\n                        </div>\n                    </div>\n                    <!-- End: .grid .project-gallery -->\n                </div>\n                <!-- End: .grid .project-gallery -->\n            </div>\n            <!-- End: .part -->\n        </div>\n        <!-- End: .row -->\n    </div>\n\n</section>\n<!--\n        ===================\n           TESTIMONIALS\n        ===================\n        -->\n<section class=\"mh-testimonial\" id=\"mh-testimonial\">\n    <div class=\"home-v-img\">\n        <div class=\"container\">\n            <div class=\"row section-separator\">\n                <div class=\"col-sm-12 section-title wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.2s\">\n                    <h3>Client Reviews</h3>\n                </div>\n                <div class=\"col-sm-12 wow fadeInUp\" id=\"mh-client-review\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.3s\">\n                    <div class=\"each-client-item\">\n                        <div class=\"mh-client-item dark-bg black-shadow-1\">\n                            <img src=\"assets/images/elikent.jpg\" alt=\"\" class=\"img-fluid\">\n                            <p>Again an excellent result. Thank you for the great work !</p>\n                            <h4>Elikent</h4>\n                            <span>An Australian graphic designer</span>\n                        </div>\n                    </div>\n                    <div class=\"each-client-item\">\n                        <div class=\"mh-client-item dark-bg black-shadow-1\">\n                            <img src=\"assets/images/bitholly.jpg\" alt=\"\" class=\"img-fluid\">\n                            <p>Really Good guy to work with...so cooprative .outstanding experience as always</p>\n                            <h4>Mr. Anand Natara</h4>\n                            <span>Owner, bitholly.net</span>\n                        </div>\n                    </div>\n\n                    <div class=\"each-client-item\">\n                        <div class=\"mh-client-item dark-bg black-shadow-1\">\n                            <img src=\"assets/images/ahsan.jpg\" alt=\"\" class=\"img-fluid\">\n                            <p>We worked together on several complex WordPress,CI, Java and Android Projects and he did superb job on every project. This guy is highly recommended and I wish him success in his future endeavors.</p>\n                            <h4>Ahsan Ali</h4>\n                            <span>Project Manager, Renesis Tech (PVT) LTD.</span>\n                        </div>\n                    </div>\n                    <div class=\"each-client-item\">\n                        <div class=\"mh-client-item dark-bg black-shadow-1\">\n                            <img src=\"assets/images/sen.jpg\" alt=\"\" class=\"img-fluid\">\n                            <p>Excellent Developer. Always active and responsive. Fun to work with.</p>\n                            <h4>Seancastrini</h4>\n                            <span>CEO, Social Recipe</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--\n        ===================\n           FOOTER 1\n        ===================\n        -->\n<footer class=\"mh-footer\" id=\"mh-contact\">\n    <div class=\"map-image image-bg\">\n        <div class=\"container\">\n            <div class=\"row section-separator\">\n                <div class=\"col-sm-12 section-title wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.2s\">\n                    <h3>Contact Me</h3>\n                </div>\n                <div class=\"col-sm-12 mh-footer-address\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 col-md-4\">\n                            <div class=\"mh-address-footer-item dark-bg shadow-1 wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.3s\">\n                                <div class=\"each-icon\">\n                                    <i class=\"fa fa-location-arrow\"></i>\n                                </div>\n                                <div class=\"each-info\">\n                                    <h4>Address</h4>\n                                    <address>Bharia Town, Lahore, Pakistan</address>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <div class=\"mh-address-footer-item dark-bg shadow-1 wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.5s\">\n                                <div class=\"each-icon\">\n                                    <i class=\"fa fa-envelope-o\"></i>\n                                </div>\n                                <div class=\"each-info\">\n                                    <h4>Email</h4>\n                                    <a href=\"mailto:m.bilal294@outlook.com\">m.bilal294@outlook.com</a><br>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12 col-md-4\">\n                            <div class=\"mh-address-footer-item dark-bg shadow-1 wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.7s\">\n                                <div class=\"each-icon\">\n                                    <i class=\"fa fa-phone\"></i>\n                                </div>\n                                <div class=\"each-info\">\n                                    <h4>Phone</h4>\n                                    <a href=\"callto:+923135107625\">+92 313 510 7625</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-12 col-md-6 wow fadeInUp kwes-form\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.3s\">\n                    <form id=\"contactForm\" class=\"single-form quate-form wow fadeInUp\" data-toggle=\"validator\" method=\"POST\" action=\"https://kwes.io/api/foreign/forms/V89hNZwjOSnnevMTugU9\">\n                        <div id=\"msgSubmit\" class=\"h3 text-center hidden\"></div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6 col-sm-12\">\n                                <input name=\"F_name\" class=\"contact-name form-control\" id=\"name\" type=\"text\" placeholder=\"First Name\" required rules=\"required|max:255\">\n                            </div>\n                            <div class=\"col-md-6 col-sm-12\">\n                                <input name=\"L_name\" class=\"contact-email form-control\" id=\"L_name\" type=\"text\" placeholder=\"Last Name\" required rules=\"required|max:255\">\n                            </div>\n                            <div class=\"col-sm-12\">\n                                <input name=\"email\" class=\"contact-subject form-control\" id=\"email\" type=\"email\" placeholder=\"Your Email\" required rules=\"required|max:255\">\n                            </div>\n                            <div class=\"col-sm-12\">\n                                <textarea class=\"contact-message\" name=\"message\" id=\"message\" rows=\"6\" placeholder=\"Your Message\" required rules=\"required|max:500\"></textarea>\n                            </div>\n                            <!-- Subject Button -->\n                            <div class=\"btn-form col-sm-12\">\n                                <button type=\"submit\" class=\"btn btn-fill btn-block\" id=\"form-submit\">Send\n                                          Message</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n                <div class=\"col-sm-12 col-md-6 wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.5s\">\n                    <div class=\"mh-map\">\n                        <div id=\"mh-map\" class=\"shadow-1\"></div>\n                    </div>\n                </div>\n                <div class=\"col-sm-12 mh-copyright wow fadeInUp\" data-wow-duration=\"0.8s\" data-wow-delay=\"0.3s\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <div class=\"text-left text-xs-center\">\n                                <!-- <p><a href=\"templateshub.net\">Templates Hub</a></p> -->\n                            </div>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            <ul class=\"social-icon\">\n                                <li><a href=\"http://bit.ly/fb-bilal\" target=\"_blank\"><i\n                                                  class=\"fa fa-facebook\"></i></a>\n                                </li>\n                                <li><a href=\"http://bit.ly/twitter-Bilal\" target=\"_blank\"><i\n                                                  class=\"fa fa-twitter\"></i></a></li>\n                                <li><a href=\"http://bit.ly/git-bilal\" target=\"_blank\"><i\n                                                  class=\"fa fa-github\"></i></a>\n                                </li>\n                                <li><a href=\"http://bit.ly/linkedin-Bilal\" target=\"_blank\"><i\n                                                  class=\"fa fa-linkedin\"></i></a></li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/component/project-model/project-model.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/project-model/project-model.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentProjectModelProjectModelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-body portfolio-modal-body\">\n    <div class=\"mh-portfolio-modal\">\n        <!-- id=\"mh\" -->\n        <div class=\"container\">\n            <div class=\"row mh-portfolio-modal-inner\">\n                <div class=\"col-sm-5\">\n                    <h2>{{project.title}}</h2>\n                    <p>\n                        {{project.body}}\n                    </p>\n                    <div class=\"mh-about-tag\">\n                        <ul>\n                            <li *ngFor=\"let tag of project.tags\"><span>{{tag}}</span></li>\n                        </ul>\n                    </div>\n                    <!-- <a href=\"#\" class=\"btn btn-fill\">Live Demo</a> -->\n                </div>\n                <div class=\"col-sm-7\">\n                    <div class=\"mh-portfolio-modal-img\">\n                        <img src=\"{{project.image}}\" alt=\"\" class=\"img-fluid\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./component/home/home.component */
    "./src/app/component/home/home.component.ts");

    var routes = [{
      path: '',
      component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        anchorScrolling: 'enabled'
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'bilalmuhammad';
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _component_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./component/home/home.component */
    "./src/app/component/home/home.component.ts");
    /* harmony import */


    var _component_project_model_project_model_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./component/project-model/project-model.component */
    "./src/app/component/project-model/project-model.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _component_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _component_project_model_project_model_component__WEBPACK_IMPORTED_MODULE_6__["ProjectModelComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/component/home/home.component.css":
  /*!***************************************************!*\
    !*** ./src/app/component/home/home.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/component/home/home.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/component/home/home.component.ts ***!
    \**************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _project_model_project_model_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../project-model/project-model.component */
    "./src/app/component/project-model/project-model.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(ngbModal, viewPort) {
        _classCallCheck(this, HomeComponent);

        this.ngbModal = ngbModal;
        this.viewPort = viewPort;
        this.projectsArray = [{
          title: 'Fintransformer',
          body: "Fintransformer is an application that allows users and companies to convert their\n       financial statements from Russian or from any other language to English. Additionally,\n       it allows users to analyze the company's financial health and provide recommendations.",
          tags: ['Vue', 'MicroServices', 'Docker', 'javaScript', 'Bootstrap', 'Laravel', 'MySQL', 'RESTAPI'],
          image: 'assets/images/portfolio/fintransformer/1.jpg'
        }, {
          title: 'Group Captain',
          body: "Group Captain acquires rich architectural design to meet real-world problems and capable to handle the process management of macro organizations. The need for application is to simplify different platform's complexity and make application scalable with docker images.\n      Group Captain evolves PMS(Project Management System), Organizational Charts(Hierarchical Tree), daily employee work-logs, Access control on Application and Project levels.\n      It encapsulates multiple micro-frontend applications wrapped in a main application and behaves like a single application.",
          tags: ['Angular', 'NodeJS', 'ExpressJS', 'MongoDB', 'MicroServices', 'MicroFrontend', 'Javascript', 'Docker', 'RESTAPI'],
          image: 'assets/images/portfolio/GC/dashboard.jpg'
        }, {
          title: 'E Parking',
          body: "EParking a web application in which users can put a request for booking a vehicle by select location and time. He/ she can see list of available companies offering parking facilities in his choose time. user select company and put details of his vehicle and his address along with payment details for pay parking fee.\n      Application have three different role Admin, Company, User\n      Admin can see booking details of current day as well as whole parking's against each company. Overall revenue, users detail, companies information, dashboard charts representation, Admin can also make a roster for each day make charges plan for each company on each day just using drag&drop option. Companies can see their earnings as well the more booking against them the more revenue they get.",
          tags: ['Vue', 'PHP', 'Laravel', 'MySQL', 'Javascript', 'RESTAPI'],
          image: 'assets/images/portfolio/eparking/index.jpg'
        }, {
          title: 'agSolutions',
          body: "A web application in which the user wants a CRM base solution using Capsule CRM. Which includes invoicing, quotations system, sales History, sales parties, Notes/task, User Dashboard representing Graphs and Charts.",
          tags: ['Angular', 'NodeJS', 'MongoDB', 'Javascript', 'RESTAPI'],
          image: 'assets/images/portfolio/eparking/index.jpg'
        }];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "scrollToSection",
        value: function scrollToSection(sectionID) {
          this.viewPort.scrollToAnchor(sectionID);
        }
      }, {
        key: "projectDetail",
        value: function projectDetail(index) {
          var modalOptions = {
            size: 'xl'
          };
          var ref = this.ngbModal.open(_project_model_project_model_component__WEBPACK_IMPORTED_MODULE_3__["ProjectModelComponent"], modalOptions);
          ref.componentInstance.project = this.projectsArray[index];
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["ViewportScroller"]
      }];
    };

    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/home/home.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.component.css */
      "./src/app/component/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/component/project-model/project-model.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/component/project-model/project-model.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentProjectModelProjectModelComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mh-portfolio-modal {\n    display: block;\n}\n\n.portfolio-modal-body {\n    /* position: relative;\n    padding: 24px;\n    margin: 44px 0;\n    border-width: 0;\n    text-align: left;\n    background-color: #fff;\n    overflow: auto;\n    box-sizing: border-box; */\n}\n\n.mh-portfolio-modal-inner {\n    max-height: auto;\n    overflow-y: auto;\n    padding: 15px;\n}\n\n.mh-portfolio-modal-img {\n    padding-top: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3Byb2plY3QtbW9kZWwvcHJvamVjdC1tb2RlbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJOzs7Ozs7OzZCQU95QjtBQUM3Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wcm9qZWN0LW1vZGVsL3Byb2plY3QtbW9kZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taC1wb3J0Zm9saW8tbW9kYWwge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucG9ydGZvbGlvLW1vZGFsLWJvZHkge1xuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIG1hcmdpbjogNDRweCAwO1xuICAgIGJvcmRlci13aWR0aDogMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgKi9cbn1cblxuLm1oLXBvcnRmb2xpby1tb2RhbC1pbm5lciB7XG4gICAgbWF4LWhlaWdodDogYXV0bztcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5taC1wb3J0Zm9saW8tbW9kYWwtaW1nIHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/component/project-model/project-model.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/component/project-model/project-model.component.ts ***!
    \********************************************************************/

  /*! exports provided: ProjectModelComponent */

  /***/
  function srcAppComponentProjectModelProjectModelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectModelComponent", function () {
      return ProjectModelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProjectModelComponent =
    /*#__PURE__*/
    function () {
      function ProjectModelComponent() {
        _classCallCheck(this, ProjectModelComponent);
      }

      _createClass(ProjectModelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectModelComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProjectModelComponent.prototype, "project", void 0);
    ProjectModelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-project-model',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./project-model.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/component/project-model/project-model.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./project-model.component.css */
      "./src/app/component/project-model/project-model.component.css")).default]
    })], ProjectModelComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /var/www/html/bilalmuhammad/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map