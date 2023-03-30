function Card(props) {
  return (
    <div className="bg-white max-w-[1200px] mt-[60px] mx-auto ">
      {props.children}
    </div>
  );
}

export default Card;
