function YourStack({
  stack,
  removeFromStack,
  removeAll
}) {


return (

<aside className="
bg-white
shadow-md
rounded-xl
p-5
h-fit
sticky
top-24
">


<h2 className="
text-xl
font-bold
">

Your Stack

</h2>


<p className="mt-2 text-gray-600">

{stack.length} Technology Selected

</p>



{

stack.length === 0 ?

(

<p className="mt-5 text-gray-500">

No technology selected yet

</p>

)

:

(

<div className="mt-5 space-y-4">


{

stack.map(item=>(

<div
key={item.id}
className="
flex
items-center
justify-between
border
p-3
rounded-lg
">


<div className="flex items-center gap-3">


<img
src={item.icon}
className="w-8 h-8"
/>


<div>

<h3 className="font-semibold">
{item.name}
</h3>

<p className="text-sm text-gray-500">
{item.category}
</p>


</div>


</div>



<button

onClick={()=>
removeFromStack(item.id)
}

className="text-red-500"

>

✕

</button>


</div>

))


}


<button

onClick={removeAll}

className="
w-full
mt-4
py-2
rounded-lg
bg-red-500
text-white
"

>

Remove All

</button>


</div>

)

}


</aside>


)

}


export default YourStack;