'use client'
// can use either name funtion or arrow function

const MyButton = () => {
  const handleClick = () => {
    alert("Hello I am button, Click");
  }

    return (
      <div className="flex gap-5 p-3 flex-col">
<div> <button className ="bg-red-100 rounded-md p-1" onClick = {handleClick}>I am a button </button> </div> 
      {`Web events and React hooks are Client Components
      Note: To make a client component, always use "use client" on top of the file`}
      </div>
    );
  }

  export default MyButton;