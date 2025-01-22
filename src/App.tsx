import { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [show, setShow] = useState(false);
  const [hideButton, setHideButton] = useState(false);
  const handleClick = () => {
    setShow(!show);
    setHideButton(!hideButton);
  };

  return (
    <main className="w-full h-screen grid place-items-center">
      <div className="relative w-[300px] h-[300px] flex items-center justify-center overflow-hidden">
        <motion.button
          animate={{
            opacity: show ? 0 : 1,
            scaleY: show ? 2 : 1,
            scaleX: show ? 2 : 1,
            transition: {
              duration: 0.7,
              type: "spring",
              bounce: 0.4
            },
            display: show ? "none" : "flex",
          }}
          initial={{ opacity: 1, scaleY: 1, scaleX: 1 }}
          className="absolute z-20 w-fit cursor-pointer flex items-center rounded-full border-none bg-back_1 px-8 py-5"
          onClick={() => setShow(!show)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="m15 21l-6-2.1l-4.65 1.8q-.5.2-.925-.112T3 19.75v-14q0-.325.188-.575T3.7 4.8L9 3l6 2.1l4.65-1.8q.5-.2.925.113T21 4.25v14q0 .325-.187.575t-.513.375zm-1-2.45V6.85l-4-1.4v11.7z"/></svg>
          &nbsp;&nbsp;View on Map
        </motion.button>

        <motion.div
          animate={{
            opacity: show ? 1 : 0,
            scaleY: show ? 1 : 0,
            transition:{
              duration: 0.7,
              type: "spring",
              bounce: 0.3
            }
          }}
          initial={{ opacity: 0, scaleY: 1 }}
          className="absolute z-10 w-full h-full bg-back_1 rounded-div"
        >
          <button
            className="float-right mt-3 mr-3 flex items-center justify-center bg-white rounded-full text-cross cursor-pointer"
            onClick={handleClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="currentColor" d="m12 13.4l-2.917 2.925q-.277.275-.704.275t-.704-.275q-.275-.275-.275-.7t.275-.7L10.6 12L7.675 9.108Q7.4 8.831 7.4 8.404t.275-.704q.275-.275.7-.275t.7.275L12 10.625L14.892 7.7q.277-.275.704-.275t.704.275q.3.3.3.713t-.3.687L13.375 12l2.925 2.917q.275.277.275.704t-.275.704q-.3.3-.712.3t-.688-.3z"/></svg>
          </button>
        </motion.div>
      </div>
    </main>
  );
}
