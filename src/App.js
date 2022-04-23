import './App.css';
import './custom.scss'
import Navbar from './Component/Navbar';
import Masthead from './Component/Masthead';
import Services from './Component/Aboutme';
import Working_experience from './Component/Working_experience';
import Contactme from './Contactme';

function App() {
  return (
    <>
    {/* <!-- Navigation--> */}
    <Navbar/>
    {/* <!-- Masthead--> */}
    <Masthead/>
    {/* <!-- Services--> */}
    <Services />
    {/* <!-- Portfolio Grid--> */}
    <section class="page-section bg-light" id="portfolio">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Base Skills</h2>
                <h3 class="section-subheading text-muted">Here list of my Skill</h3>
            </div>
            <div class="row">
                <div class="col-lg-4 col-sm-6 mb-4">
                    {/* <!-- Portfolio item 1--> */}
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/katalon.jpg" alt="..." />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Katalon</div>
                            <div class="portfolio-caption-subheading text-muted">Level 7/10</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4">
                    {/* <!-- Portfolio item 2--> */}
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/selenium.png" alt="..." />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Selenium</div>
                            <div class="portfolio-caption-subheading text-muted">Level 7/10</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4">
                    {/* <!-- Portfolio item 3--> */}
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/office.png" alt="..." />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Microsoft Office</div>
                            <div class="portfolio-caption-subheading text-muted">Level 9/10</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                    {/* <!-- Portfolio item 4--> */}
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/postman.png" alt="..." />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Postman</div>
                            <div class="portfolio-caption-subheading text-muted">Level 8/10</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                    {/* <!-- Portfolio item 5--> */}
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/NPM.png" alt="..." />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Newman</div>
                            <div class="portfolio-caption-subheading text-muted">Level 8/10</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    {/* <!-- Portfolio item 6--> */}
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/jira.png" alt="..." />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Jira</div>
                            <div class="portfolio-caption-subheading text-muted">Level 8/10</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4">
                    {/* <!-- Portfolio item 7--> */}
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal7">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/conflunce.jpg" alt="..." />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">Confluence</div>
                            <div class="portfolio-caption-subheading text-muted">Level 7/10</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4">
                    {/* <!-- Portfolio item 8--> */}
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal8">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/mysql.png" alt="..." />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">MySQL</div>
                            <div class="portfolio-caption-subheading text-muted">Level 7/10</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6 mb-4">
                    {/* <!-- Portfolio item 9--> */}
                    <div class="portfolio-item">
                        <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal9">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img class="img-fluid" src="assets/img/portfolio/QA documentation.jpg" alt="..." />
                        </a>
                        <div class="portfolio-caption">
                            <div class="portfolio-caption-heading">QA Documentation</div>
                            <div class="portfolio-caption-subheading text-muted">Level 8/10</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- working experience--> */}
<Working_experience />
    {/* <!-- Team--> */}
    <Contactme />
    {/* <!-- Clients--> */}
    

    {/* <!-- Footer--> */}
    {/* <footer class="footer py-4"> */}
        
    {/* </footer> */}
    {/* <!-- Portfolio Modals--> */}
    {/* <!-- Portfolio item 1 modal popup--> */}
    <div class="portfolio-modal modal fade" id="portfolioModal1x" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                {/* <!-- Project details--> */}
                                <h2 class="text-uppercase">Project Name</h2>
                                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/1.jpg" alt="..." />
                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>Client:</strong>
                                        Threads
                                    </li>
                                    <li>
                                        <strong>Category:</strong>
                                        Illustration
                                    </li>
                                </ul>
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    Close Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Portfolio item 2 modal popup--> */}
    <div class="portfolio-modal modal fade" id="portfolioModal2x" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                {/* <!-- Project details--> */}
                                <h2 class="text-uppercase">Project Name</h2>
                                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/2.jpg" alt="..." />
                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>Client:</strong>
                                        Explore
                                    </li>
                                    <li>
                                        <strong>Category:</strong>
                                        Graphic Design
                                    </li>
                                </ul>
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    Close Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Portfolio item 3 modal popup--> */}
    <div class="portfolio-modal modal fade" id="portfolioModal3x" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                {/* <!-- Project details--> */}
                                <h2 class="text-uppercase">Project Name</h2>
                                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/3.jpg" alt="..." />
                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>Client:</strong>
                                        Finish
                                    </li>
                                    <li>
                                        <strong>Category:</strong>
                                        Identity
                                    </li>
                                </ul>
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    Close Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Portfolio item 4 modal popup--> */}
    <div class="portfolio-modal modal fade" id="portfolioModal4x" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                {/* <!-- Project details--> */}
                                <h2 class="text-uppercase">Project Name</h2>
                                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/4.jpg" alt="..." />
                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>Client:</strong>
                                        Lines
                                    </li>
                                    <li>
                                        <strong>Category:</strong>
                                        Branding
                                    </li>
                                </ul>
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    Close Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Portfolio item 5 modal popup--> */}
    <div class="portfolio-modal modal fade" id="portfolioModal5x" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                {/* <!-- Project details--> */}
                                <h2 class="text-uppercase">Project Name</h2>
                                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/5.jpg" alt="..." />
                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>Client:</strong>
                                        Southwest
                                    </li>
                                    <li>
                                        <strong>Category:</strong>
                                        Website Design
                                    </li>
                                </ul>
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    Close Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Portfolio item 6 modal popup--> */}
    <div class="portfolio-modal modal fade" id="portfolioModal6x" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-bs-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="modal-body">
                                {/* <!-- Project details--> */}
                                <h2 class="text-uppercase">Project Name</h2>
                                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                <img class="img-fluid d-block mx-auto" src="assets/img/portfolio/6.jpg" alt="..." />
                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                <ul class="list-inline">
                                    <li>
                                        <strong>Client:</strong>
                                        Window
                                    </li>
                                    <li>
                                        <strong>Category:</strong>
                                        Photography
                                    </li>
                                </ul>
                                <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                    <i class="fas fa-xmark me-1"></i>
                                    Close Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default App;
