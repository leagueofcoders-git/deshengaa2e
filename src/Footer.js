import React from 'react'

const Footer = () => {
  return (
    <div>
              {/* Footer*/}
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    {/* Footer Location*/}
                    <div className="col-lg-4 mb-5 mb-lg-0">

                    </div>
                    {/* Footer Social Icons*/}
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Hook me up</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/desheng.z" target="_blank"><i className="fab fa-fw fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/desheng-zhao-98705915b" target="_blank"><i className="fab fa-fw fa-linkedin-in"></i></a>
                    </div>
                    {/* Footer About Text*/}
                    <div className="col-lg-4">

                    </div>
                </div>
            </div>
        </footer>
        {/* Copyright Section*/}
        <div className="copyright py-4 text-center text-white">
            <div className="container"><small>Copyright &copy; Zhao Desheng 2023</small></div>
        </div>
    </div>
  )
}

export default Footer
