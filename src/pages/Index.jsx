import PopularPick from "../components/PopularPick";
import Trending from "../components/Trending";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.section
      className="mt-10"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PopularPick />
      <Trending />
    </motion.section>
  );
};

export default Index;
