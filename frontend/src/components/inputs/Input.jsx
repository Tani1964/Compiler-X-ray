const Input = () => {
  return (
    <div className="w-[100%] h-[10%]">
        <form action="" method="post" className="w-1/2 flex gap-2">
            <input className="w-1/2 py-2 px-2 border-2 border-green-400" type="text" placeholder="Enter your arithmetic expression:" autoFocus />
            <button className="py-2 px-2 bg-green-400 text-white rounded-lg">Submit</button>
            
        </form>
    </div>
  )
}

export default Input