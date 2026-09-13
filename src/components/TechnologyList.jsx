import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";


function TechnologyList({ stack, addToStack }) {


  const [technologies, setTechnologies] = useState([]);

  const [loading, setLoading] = useState(true);



  useEffect(() => {


    fetch("/technologies.json")

      .then(res => res.json())

      .then(data => {

        setTechnologies(data);

        setLoading(false);

      });


  }, []);




  if (loading) {

    return (

      <h2 className="
        text-center
        text-xl
        font-bold
        py-10
      ">
        Loading Technologies...
      </h2>

    );

  }




  return (

    <section className="
      max-w-7xl
      mx-auto
      px-5
      pt-20
      pb-16
    ">


      <h2 className="
        text-4xl
        font-bold
        mb-3
      ">

        <span className="text-[#111827]">
          Explore the
        </span>


        {" "}


        <span className="
          bg-gradient-to-r
          from-orange-500
          via-pink-500
          to-purple-600
          bg-clip-text
          text-transparent
        ">
          Technologies
        </span>


      </h2>



      <p className="
        text-gray-500
        text-base
        md:text-lg
        mb-8
      ">

        Pick one technology per category to build your ideal stack.

      </p>





      <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
      ">


        {
          technologies.map(technology => (

            <TechnologyCard

              key={technology.id}

              technology={technology}

              stack={stack}

              addToStack={addToStack}

            />

          ))
        }


      </div>



    </section>

  );


}


export default TechnologyList;