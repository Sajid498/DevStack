import heroImage from "../assets/banner-stack.png";


function Hero() {

  return (
    <section className="max-w-7xl mx-auto px-5 py-16">

      <div className="
        flex 
        flex-col-reverse
        lg:flex-row
        items-center
        justify-between
        gap-10
      ">


        <div className="flex-1">


         <h1 className="
 text-4xl
 md:text-5xl
 lg:text-6xl
 font-bold
 leading-tight
">

Build Your Ideal

<br />

<span className="
 bg-gradient-to-r
 from-orange-500
 via-pink-500
 to-purple-600
 bg-clip-text
 text-transparent
">

Development Stack

</span>

</h1>


         <p className="
mt-6
text-gray-600
text-lg
max-w-xl
">

Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that
fits your next project.

</p>




          <div className="
            mt-8
            flex
            gap-4
            flex-wrap
          ">


            <button className="
              px-6
              py-3
              rounded-full
              text-white
              font-semibold
              bg-gradient-to-r
              from-orange-500
              via-pink-500
              to-purple-600
            ">
              Explore Technologies
            </button>


            <button className="
              px-6
              py-3
              rounded-full
              border
              border-purple-500
              text-purple-600
              font-semibold
            ">
              Learn More
            </button>


          </div>


        </div>





        <div className="flex-1">

          <img
            src={heroImage}
            alt="banner-stack.png"
             className="
   w-full
   max-w-md
   mx-auto
 "
          />

        </div>



      </div>


    </section>
  );
}


export default Hero;