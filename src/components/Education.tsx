import { motion } from "framer-motion";

export const Edu = () => {
  return (
    <div className="md:hidden"> {/* Show only on screens smaller than md (768px) */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-72 mx-auto py-6 px-8 bg-gray-800 rounded-lg shadow-lg"
    >
      <h2 className="text-cyan-600 font-bold text-lg mb-4">Education</h2>
      <div className="grid grid-cols-1 gap-4">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="border-l-4 border-cyan-600 pl-2"
        >
          <h3 className="text-white font-semibold">10th Grade</h3>
          <p className="text-gray-300">
            Wendy High School, ICSE Board <br />
            Kanpur, Uttar Pradesh
          </p>
        </motion.div>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="border-l-4 border-cyan-600 pl-2"
        >
          <h3 className="text-white font-semibold">12th Grade</h3>
          <p className="text-gray-300">
            Wendy High School, ISC Board <br />
            Kanpur, Uttar Pradesh
          </p>
        </motion.div>
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="border-l-4 border-cyan-600 pl-2"
        >
          <h3 className="text-white font-semibold">Bachelor's Degree</h3>
          <p className="text-gray-300">
            B.Tech in Computer Science <br />
            Lovely Professional University, Punjab
          </p>
        </motion.div>
      </div>
    </motion.div>
  </div>
  
  );
};
