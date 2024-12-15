// import { motion } from "framer-motion";

// const Marquee = () => {
//   return (
//     <div className="mt-4 w-full bg-lime-300 text-black lg:py-6">
//       {/* Ensure the container is wide enough and the text does not break */}
//       <div className="flex overflow-hidden whitespace-nowrap w-screen">
//         {/* Looping to create two identical text elements */}
//         {[...Array(2)].map((_, i) => (
//           <motion.h1
//             key={`marquee-${i}`}  // Ensure each element has a unique key
//             initial={{ x: "-100%" }}  // Start offscreen on the left
//             animate={{ x: "0" }}  // Move to the normal position
//             transition={{
//               repeat: Infinity,  // Loop infinitely
//               ease: "linear",     // Smooth constant speed
//               duration: 12,       // Adjust duration for scroll speed
//             }}
//             className="py-2 text-3xl font-bold leading-none tracking-tighter lg:text-7xl"
//           >
//             React, JavaScript, Next.js, Java, Spring Boot, C#, Python, ML, SQL, PLSQL,&nbsp;
//           </motion.h1>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Marquee;


import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="mt-4 w-full bg-lime-300 text-black lg:py-6">
      <div className="flex overflow-hidden whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <motion.h1
            initial={{ x:"-100%" }}
            animate={{ x:"0" }}
            transition={{ repeat: Infinity, ease: "linear", duration:10 }}
            key={i}
            className="py-2 text-3xl font-bold leading-none tracking-tighter lg:text-7xl"
          >
            React, JavaScript, Next.js, Java, Spring Boot, C#, Python, ML, SQL, PLSQL,&nbsp;
          </motion.h1>
        ))}
      </div>
    </div>
  );
};

export default Marquee;

