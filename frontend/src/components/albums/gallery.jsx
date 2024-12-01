import { motion } from "framer-motion";
const Gallery = () => {
  const images = [
    [
      "https://images.unsplash.com/photo-1507901747481-84a4f64fda6d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/uploads/1411160110892ab555b6f/80b0d25e?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    [
      "https://images.unsplash.com/photo-1521334726092-b509a19597c6?q=80&w=1802&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    [
      "https://img.freepik.com/free-photo/couple-talking-bartender_23-2147680615.jpg?t=st=1732716455~exp=1732720055~hmac=1bbd05d46af2d9c3312a4ba351ce52ca74a50fd3949934dcd887269dbfccd0f7&w=1060",
      "https://images.unsplash.com/photo-1507404684477-09c7f690976a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1564736676781-d0f57b29f67a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    [
      "https://images.unsplash.com/photo-1544785316-6e58aed68a50?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1693395460833-8f1969eb71a0?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://img.freepik.com/free-photo/saint-patrick-s-day-party-happy-friends-are-celebrating-drinking-green-beer-young-men-women-wearing-green-hats-pub-interior_155003-18361.jpg?t=st=1732716343~exp=1732719943~hmac=819da36e0fd2d0b339d9082e1a3d2f109105d52df8e80482fcc549f193074c1e&w=1060",
    ],
  ];

  return (
    <div className="max-w-[100vw] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-gradient-to-br from-[#211a10] to-[#161415] ">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-2"
      >
        {images.map((column, columnIndex) => (
          <div key={columnIndex} className="space-y-2">
            {column.map((src, index) => (
              <img
                key={index}
                className="w-full h-auto object-cover"
                src={src}
                alt={`Gallery Image ${columnIndex}-${index}`}
              />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Gallery;
