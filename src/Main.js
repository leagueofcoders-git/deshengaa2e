import React, {useEffect} from 'react'

const Main = () => {
  return (
    <div id="page-top">
       {/* Masthead*/}
        <header className="masthead bg-primary text-white text-center" style={{height:"100vh"}} id="home">
            <div className="container d-flex align-items-center flex-column">
                {/* Masthead Avatar Image*/}
                <img className="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="..." />
                {/* Masthead Heading*/}
                <h1 className="masthead-heading text-uppercase mb-0">Zhao Desheng</h1>
                {/* Icon Divider*/}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* Masthead Subheading*/}
                <p className="masthead-subheading font-weight-light mb-0">Software Engineer - Systems Analyst</p>
            </div>
        </header>
        <section className="page-section portfolio" id="experience" style={{height:"100vh"}}>
            <div className="container">
                {/* Portfolio Section Heading*/}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Experience</h2>
                {/* Icon Divider*/}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-8">
                                <div><h5>Senior System Analyst</h5></div>
                                <div><h6>Housing Development Board</h6></div>
                                <p>Oversee the operation of 4 systems while engaging in substantial collaboration with various stakeholders to ensure the successful and timely implementation of policy changes.</p>
                        </div>

                        <div className="col-md-4 col-lg-4">
                                <div style={{textAlign: 'right'}}>
                                    Dec 2019 - Current
                                </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                <div className="col-md-8 col-lg-8">
                        <div><h5>Technology Executive</h5></div>
                        <div><h6>DBS Bank</h6></div>
                        <p>Designed, developed and adapted DataLoader on Linux and orchestrated a successful migration out of Solaris/SPARC physical machine.</p>
                </div>

                <div className="col-md-4 col-lg-4">
                        <div style={{textAlign: 'right'}}>
                            Aug 2018 - Feb 2019
                        </div>
                </div>
                </div>
                </div>


            </div>
        </section>
        {/* Education*/}
        <section className="page-section bg-primary text-white mb-0" id="education">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white">Education</h2>
                
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-8">
                                <div><h5>Singapore Institute of Technology - University of Glasgow</h5></div>
                                <div><h6>Bachelor of Science(Hons): Computing Science (First Class Honours)</h6></div>
                        </div>

                        <div className="col-md-4 col-lg-4">
                                <div style={{textAlign: 'right'}}>
                                    Sep 2016 - June 2018
                                </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        {/* Portfolio Section*/}
        <section className="page-section portfolio" id="publications">
            <div className="container">
                {/* Portfolio Section Heading*/}
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Publications</h2>
                {/* Icon Divider*/}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* Portfolio Grid Items*/}
                <div className="row justify-content-center">
                    {/* Portfolio Item 1*/}
                    <div className="col-md-6 col-lg-4 mb-5">
                        <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                            </div>
                            <img className="img-fluid" src="assets/img/GameLight.JPG" alt="..." />
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* About Section*/}
        <section className="page-section bg-primary text-white mb-0" id="about">
            <div className="container">
                {/* About Section Heading*/}
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                {/* Icon Divider*/}
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                {/* About Section Content*/}
                <div className="row">
                    <div className="col-lg-4 ms-auto"><p className="lead">I am a self-motivated individual always looking for ways to improve. I am a big believer that as long as one is willing to put in the effort, one can be succesful.</p></div>
                    <div className="col-lg-4 me-auto"><p className="lead">During my free time, I love exercising, catching the latest news, watching football and travelling.</p></div>
                </div>
            </div>
        </section>
        {/* Portfolio Modals*/}
        {/* Portfolio Modal 1*/}
        <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    {/* Portfolio Modal - Title*/}
                                    
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">GameLight - Gamification of the Outdoor Cycling Experience</h2>
                                    {/* Icon Divider*/}
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    <div className="embed-responsive embed-responsive-1by1">
                                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/4Sp-Ojq4nrU"></iframe>
                                    </div>
                                    
                                    {/* Portfolio Modal - Text*/}
                                    <p className="mb-4">GameLight is a smart bicycle light that overlays a virtual game projected on the ground, within the user's natural field of view while cycling. The system aims to enhance the cycling exertion experience by augmenting it with various game elements presented in two game modes: (1) an "Arcade" mode that implements a virtual coin collecting mechanic, and (2) a "Challenge" mode that provides timed effort challenges. The system consists of a pico-projector and mobile phone wirelessly connected to cadence, speed and heart rate sensors that serve as input to the virtually projected game to achieve a fun and playful effect while cycling in a controlled environment. </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
