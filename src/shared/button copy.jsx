
const Button = (props) => {
  return (
    <button className="bg-[#9b7d3e] px-6 py-2 rounded-md  text-white  cursor-pointer hover:-translate-y-1 hover:scale-110 hover:duration-100 ">
      {props.text}
    </button>
  );
};

export default Button;
