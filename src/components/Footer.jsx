function Footer() {

  return (

    <footer className="
      bg-gray-900
      text-white
      mt-20
      px-6
      py-12
    ">


      <div className="
        max-w-7xl
        mx-auto
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        gap-10
      ">


        {/* Brand */}

        <div>

          <h2 className="
            text-2xl
            font-bold
            bg-gradient-to-r
            from-orange-500
            via-pink-500
            to-purple-600
            bg-clip-text
            text-transparent
          ">
            Dev Stack
          </h2>


          <p className="
            mt-4
            text-gray-400
          ">
            Explore modern technologies and build
            your professional developer stack.
          </p>


          <div className="
            flex
            gap-4
            mt-5
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

          <h3 className="font-bold text-lg">
            Product
          </h3>


          <ul className="
            mt-4
            space-y-3
            text-gray-400
          ">

            <li>Technologies</li>
            <li>Projects</li>
            <li>Features</li>

          </ul>

        </div>



        {/* Company */}

        <div>

          <h3 className="font-bold text-lg">
            Company
          </h3>


          <ul className="
            mt-4
            space-y-3
            text-gray-400
          ">

            <li>About</li>
            <li>Contact</li>
            <li>Career</li>

          </ul>


        </div>



        {/* Legal */}

        <div>

          <h3 className="font-bold text-lg">
            Legal
          </h3>


          <ul className="
            mt-4
            space-y-3
            text-gray-400
          ">

            <li>Privacy</li>
            <li>Terms</li>

          </ul>

        </div>



      </div>



      {/* Bottom */}

      <div className="
        border-t
        border-gray-700
        mt-10
        pt-6
        text-center
        text-gray-400
      ">

        © 2026 Dev Stack. All rights reserved.

      </div>


    </footer>

  )

}


export default Footer;