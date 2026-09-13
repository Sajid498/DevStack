import logo from "../assets/logo-text.png";


function Footer() {

  return (

    <footer className="
      bg-white
      mt-20
      px-6
      py-10
      border-t
      border-gray-200
    ">


      <div className="
        max-w-7xl
        mx-auto
      ">


        {/* Top Section */}

        <div className="
          grid
          grid-cols-1
          md:grid-cols-4
          gap-10
        ">


          {/* Brand */}

          <div>

            <img
              src={logo}
              alt="Dev Stack"
              className="
                w-36
              "
            />


            <p className="
              mt-5
              text-gray-500
              text-sm
              leading-6
              max-w-sm
            ">

              Curated tools, technologies, and resources
              for developers building modern software.

            </p>


            <div className="
              flex
              gap-6
              mt-7
              text-gray-700
              font-medium
            ">

              <a href="#">
                GitHub
              </a>

              <a href="#">
                Twitter
              </a>

              <a href="#">
                LinkedIn
              </a>


            </div>


          </div>




          {/* Product */}

          <div>

            <h3 className="
              font-semibold
              text-gray-900
              mb-5
            ">
              PRODUCT
            </h3>


            <ul className="
              space-y-3
              text-gray-500
              text-sm
            ">

              <li>Home</li>

              <li>Technologies</li>

              <li>Projects</li>


            </ul>


          </div>





          {/* Company */}

          <div>

            <h3 className="
              font-semibold
              text-gray-900
              mb-5
            ">
              COMPANY
            </h3>


            <ul className="
              space-y-3
              text-gray-500
              text-sm
            ">

              <li>About</li>

              <li>Contact</li>

              <li>Careers</li>


            </ul>


          </div>





          {/* Legal */}

          <div>

            <h3 className="
              font-semibold
              text-gray-900
              mb-5
            ">
              LEGAL
            </h3>


            <ul className="
              space-y-3
              text-gray-500
              text-sm
            ">

              <li>Privacy Policy</li>

              <li>Terms of Service</li>


            </ul>


          </div>



        </div>





        {/* Bottom Bar */}

        <div className="
          border-t
          border-gray-200
          mt-14
          pt-6
          flex
          justify-between
          text-sm
          text-gray-400
        ">


          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>


          <div className="
            flex
            gap-8
          ">

            <span>
              Privacy
            </span>

            <span>
              Terms
            </span>


          </div>


        </div>


      </div>


    </footer>

  )

}


export default Footer;