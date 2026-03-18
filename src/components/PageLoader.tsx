import { motion } from "framer-motion";

const logoUrl = "https://cdn.builder.io/api/v1/image/assets%2Fd4fa75cea8dc4bea80ee4cb1488f6829%2Fc5b08b69ba0c4bc28267cbe9c0361757?format=webp&width=200&height=300";

const PageLoader = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    className="fixed inset-0 z-[999] flex items-center justify-center bg-background"
  >
    <div className="flex flex-col items-center gap-4">
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="flex items-center justify-center"
      >
        <img 
          src={logoUrl} 
          alt="Cell PWR" 
          className="h-24 w-auto"
        />
      </motion.div>
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-sm font-medium text-primary-foreground/60"
      >
        Loading...
      </motion.div>
    </div>
  </motion.div>
);

export default PageLoader;
