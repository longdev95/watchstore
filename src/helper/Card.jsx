function Card({ classes, children }) {
  return (
    <div
      className={`bg-white max-w-[1200px] mt-[60px] mx-auto ${
        classes ? classes : ""
      }`}
    >
      {children}
    </div>
  );
}

export default Card;
