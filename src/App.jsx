import { toast } from "react-toastify";
import { useState } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";
import YourStack from "./components/YourStack";


function App() {


  const [stack, setStack] = useState([]);



  const addToStack = (technology) => {


    const exists = stack.find(
      item => item.id === technology.id
    );


    if (exists) {

      toast.warning(
        "Technology already added!"
      );

      return;
    }



    setStack([
      ...stack,
      technology
    ]);



    toast.success(
      `${technology.name} added to stack`
    );


  };



  const removeFromStack = (id) => {


    const removed = stack.find(
      item => item.id === id
    );


    const updatedStack = stack.filter(
      item => item.id !== id
    );


    setStack(updatedStack);



    if (removed) {

      toast.error(
        `${removed.name} removed`
      );

    }


  };



  const removeAll = () => {


    if (stack.length === 0) {

      toast.warning(
        "Stack is already empty"
      );

      return;

    }


    setStack([]);


    toast.info(
      "All technologies removed"
    );


  };



  return (

    <>

      <Navbar />


      <Hero />



      <div className="
        max-w-7xl
        mx-auto
        px-5
        grid
        grid-cols-1
        lg:grid-cols-4
        gap-8
      ">



        <div className="
          lg:col-span-3
        ">


          <TechnologyList

            stack={stack}

            addToStack={addToStack}

          />


        </div>





        <YourStack

          stack={stack}

          removeFromStack={removeFromStack}

          removeAll={removeAll}

        />



      </div>




      <Footer />


    </>

  );

}


export default App;