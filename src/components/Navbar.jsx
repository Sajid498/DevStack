import logo from "../assets/logo-text.png";

function Navbar() {
  return (
   <nav className="
sticky
top-0
z-50
bg-white
border-b
border-gray-100
">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">


        <img
  src={logo}
  alt="Dev Stack"
  className="
    w-40
    h-auto
  "
/>


        <div className="hidden md:flex gap-8 font-medium">
          <a href="#">Home</a>
          <a href="#">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>


      
        <div className="hidden md:flex gap-3">
          <button className="font-medium">
            Sign In
          </button>

          <button className="
            px-5 py-2 rounded-full
            bg-gradient-to-r 
            from-orange-500 
            via-pink-500 
            to-purple-600
            text-white
          ">
            Sign Up
          </button>
        </div>



       <div className="
md:hidden
flex
items-center
justify-between
w-full
">

          <button className="text-2xl">
            ☰
          </button>

      <img
  src={logo}
  alt="Dev Stack"
  className="w-28"
/>

          <div className="flex gap-2">
            <button className="text-sm">
              In
            </button>

            <button className="
            px-3 py-1 rounded-full text-sm
            bg-purple-600 text-white
            ">
              Up
            </button>
          </div>

        </div>


      </div>
    </nav>
  );
}

export default Navbar;