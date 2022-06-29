import React from "react";
import { useNavigate } from "react-router-dom";

const Buttons = (props) => {
 
    let { name } = props;

    const navigate = useNavigate()

   const handelLink = (input) => {
    
    navigate(`/about/${input.toLowerCase()}`)
    
   }

  return (
    <div>
      <button onClick={() => handelLink(name)}
        class="  relative inline-block px-8 py-3 overflow-hidden border border-blue group focus:outline-none ">
        <span class="absolute inset-x-0 bottom-0 h-[2px] transition-all bg-blue group-hover:h-full group-active:bg-blue"></span>

        <span class="relative text-base font-bold text-blue dark:text-green transition-colors group-hover:text-white">
          {name}
        </span>
      </button>
    </div>
  );
};

export default Buttons;
