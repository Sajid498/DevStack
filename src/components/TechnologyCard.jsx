function TechnologyCard({
  technology,
  stack,
  addToStack
}) {


  const isAdded = stack.some(
    item => item.id === technology.id
  );



  return (

    <div
      className={`
        rounded-xl
        shadow-md
        p-6
        transition-all
        duration-300
        border

        ${
          isAdded

          ?

          "bg-purple-50 border-purple-500 shadow-purple-200"

          :

          "bg-white border-gray-100 hover:shadow-xl"

        }

      `}
    >



      <img
        src={technology.icon}
        alt={technology.name}
        className="
          w-12
          h-12
          mb-5
          object-contain
        "
      />



      <span
        className="
          text-xs
          px-3
          py-1
          rounded-full
          bg-purple-100
          text-purple-600
          inline-block
        "
      >
        {technology.badge}
      </span>




      <h2
        className="
          text-xl
          font-bold
          mt-4
          text-gray-900
        "
      >
        {technology.name}
      </h2>





      <p
        className="
          text-gray-600
          mt-2
          text-sm
          leading-5
        "
      >
        {technology.description}
      </p>






      <div className="
        mt-5
        space-y-3
        text-sm
      ">


        <p>
          Category:

          <span className="font-semibold">
            {" "}{technology.category}
          </span>

        </p>



        <p>
          Level:

          <span className="font-semibold">
            {" "}{technology.difficulty}
          </span>

        </p>




        <p>
          ⭐ {technology.rating}
        </p>


      </div>






      <button

        disabled={isAdded}

        onClick={() => addToStack(technology)}

        className={`
          mt-5
          w-full
          py-2
          rounded-lg
          text-white
          font-medium
          transition-all


          ${
            isAdded

            ?

            "bg-green-500 cursor-not-allowed"

            :

            "bg-[#111827] hover:bg-black"

          }

        `}

      >

        {
          isAdded

          ?

          "✓ Added to Stack"

          :

          "Add to Stack"

        }


      </button>





    </div>

  )

}


export default TechnologyCard;