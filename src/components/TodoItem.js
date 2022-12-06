import React from "react";
import DoneItem from "./DoneItem";

const TodoItem = (props) => {
  const { item, deleteItem, toggleStatus } = props;
  return (
    <tbody className=" text-silver text-start">
      <tr className="bg-color1  ">
        <td className="p-3 pl-10 grid grid-cols-3  duration-20 hover:border-l-4 hover:border-silver">
          {item.item}
          <div className="pl-36 grid grid-cols-2 gap-10 ">
            {/* Check */}
            <button
              onClick={() => toggleStatus(item._id)}
              className="
            text-silver        
              rounded-lg 
              transition 
              ease-in-out 
              delay-20
              hover:-translate-y-1 
              hover:scale-110            
              
         "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </button>
            {/* Delete */}
            <button
              onClick={() => deleteItem(item._id)}
              className="
              
            text-silver                            
              rounded-lg
              transition 
              ease-in-out 
              delay-20
              hover:-translate-y-1 
              hover:scale-110             
              
         "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        </td>
      </tr>
    </tbody>

    // <div>
    //   {/* Todo Items */}
    //   {itemStatus === false ? (
    //     <div
    //       className="
    //     bg-silver
    //     w-96
    //     h-9
    //     my-1
    //     rounded-lg

    //   "
    //     >
    //       <div className="pl-5 pt-2 flex items-start gap-32">
    //         <span
    //           className="
    //     text-midnight
    //     text-sm
    //     font-normal"
    //         >
    //           {item.item}
    //         </span>
    //         <div className="flex  justify-between gap-3 ">
    //           {/* Check */}

    //           <button
    //             type="submit"
    //             onClick={() => toggleStatus(item._id)}
    //             class="
    //         text-light-blue

    //           rounded-lg

    //      "
    //           >
    //             {itemStatus === true ? (
    //               " "
    //             ) : (
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 stroke-width="1.5"
    //                 stroke="currentColor"
    //                 class="w-6 h-6"
    //               >
    //                 <path
    //                   stroke-linecap="round"
    //                   stroke-linejoin="round"
    //                   d="M6 18L18 6M6 6l12 12"
    //                 />
    //               </svg>
    //             )}
    //           </button>
    //           {/* Delete */}
    //           <button
    //             type="submit"
    //             onClick={() => deleteItem(item._id)}
    //             class="
    //         text-light-blue

    //           rounded-lg

    //      "
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke-width="1.5"
    //               stroke="currentColor"
    //               class="w-6 h-6"
    //             >
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    //               />
    //             </svg>
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   ) : (
    //     <DoneItem item={item} itemStatus={itemStatus} deleteItem={deleteItem} />
    //   )}
    // </div>
  );
};

export default TodoItem;
