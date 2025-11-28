/* eslint-disable react/prop-types */
import { motion, useSpring } from "framer-motion";
import { distance } from "popmotion";
import skills_svg from "./skills_svg";

const Skills = ({ active, setActive, colIndex, rowIndex, x, y }) => {
  const grid = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ];
  const isDragging = colIndex === active.col && rowIndex === active.row;
  const d = distance(
    { x: active.col, y: active.row },
    { x: colIndex, y: rowIndex },
  );
  const springConfig = {
    stiffness: Math.max(700 - d * 100, 0),
    damping: 20 + d * 5,
  };
  const dx = useSpring(x, springConfig);
  const dy = useSpring(y, springConfig);

  const size = 65;
  const gap = 25;

  const svgIndex = rowIndex * grid[0].length + colIndex;
  const { name: Skill_name, icon: Skill_svg } =
    skills_svg[svgIndex % skills_svg.length];

  const delay = (colIndex + rowIndex) * 1;

  return (
    <motion.div
      id="draggable-svg"
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      dragElastic={1}
      onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
      style={{
        width: size,
        height: size,
        top: rowIndex * (size + gap),
        left: colIndex * (size + gap),
        position: "absolute",
        borderRadius: "50%",
        x: isDragging ? x : dx,
        y: isDragging ? y : dy,
        zIndex: isDragging ? 1 : 0,
      }}
    >
      <motion.div
        animate={{
          scale: [1, 1.07, 1], // Scaling up and down
        }}
        transition={{
          duration: 2, // Duration of one cycle
          repeat: Infinity, // Repeat infinitely
          ease: "easeInOut", // Smooth easing
          delay,
        }}
      >
        <Skill_svg />
      </motion.div>
      <p className="text-center text-sm">{Skill_name}</p>
    </motion.div>
  );
};

export default Skills;
