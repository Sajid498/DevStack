function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-orange-500">Dev</span>
          <span className="text-purple-600"> Stack</span>
        </div>


        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#">Home</a>
          <a href="#">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>


        {/* Buttons */}
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


        {/* Mobile */}
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

          <div className="font-bold text-lg">
            Dev Stack
          </div>

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