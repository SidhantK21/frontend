import { motion } from 'framer-motion';
import comp from '../images/comp.png';

const PawCure = () => {
  return (
    <div className="p-6">
      {/* Image container with hover animation */}
      <motion.div
        className="w-96 h-48 border border-gray-300 shadow-sm mt-10 mb-10 rounded-xl bg-cover bg-center"
        style={{ backgroundImage: `url(${comp})` }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
      </motion.div>
      
      <span className="text-sm text-slate-200 leading-relaxed block">
        A companion more than a website where you can visit and help people who are in need of care and love. This website mainly focuses on the people who are suffering from bad mental health and want to take out their feelings and seek help and answers to the questions which are troubling them.
      </span>
      
      <div className="flex justify-end ">
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Visit me
          </span>
        </button>
      </div>
    </div>
  );
};

export default PawCure;
