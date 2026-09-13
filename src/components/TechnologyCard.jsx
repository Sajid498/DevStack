function TechnologyCard({
  technology,
  stack,
  addToStack
}) {


  return (

    <div className="
      bg-white
      rounded-xl
      shadow-md
      p-6
      hover:shadow-xl
      transition
    ">


      {/* Icon */}

      <img
        src={technology.icon}
        alt={technology.name}
        className="
          w-16
          h-16
          mb-4
        "
      />


      {/* Badge */}

      <span className="
        text-sm
        px-3
        py-1
        rounded-full
        bg-purple-100
        text-purple-600
      ">
        {technology.badge}
      </span>


      {/* Name */}

      <h2 className="
        text-xl
        font-bold
        mt-4
      ">
        {technology.name}
      </h2>


      {/* Description */}

      <p className="
        text-gray-600
        mt-2
        text-sm
      ">
        {technology.description}
      </p>



      {/* Details */}

      <div className="mt-4 space-y-2">


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



      {/* Button */}
<button

disabled={
  stack.some(
    item => item.id === technology.id
  )
}

onClick={() => addToStack(technology)}

className={`
mt-5
w-full
py-2
rounded-lg
text-white

${
stack.some(
 item => item.id === technology.id
)

?

"bg-gray-400 cursor-not-allowed"

:

"bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600"

}

`}
>

{

stack.some(
 item => item.id === technology.id
)

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