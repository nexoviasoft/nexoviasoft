    <motion.div
            className="absolute"
            animate={{ rotate: 360 }}
            transition={{
              duration: 60,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {images.map((img, index) => {
              const angle = (index * 360) / images.length;
              const radius = 450;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={img.id}
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "50%",
                    x: x - 64,
                    y: y - 64,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                >
                  <motion.div
                    className="relative w-32 h-32 rounded-3xl overflow-hidden shadow-2xl"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 60,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                    whileHover={{
                      scale: 1.15,
                      zIndex: 10,
                      boxShadow: "0 20px 60px rgba(59, 130, 246, 0.5)",
                    }}
                  >
                    <img
                      src={img.src}
                      alt={`Gallery image ${img.id}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>