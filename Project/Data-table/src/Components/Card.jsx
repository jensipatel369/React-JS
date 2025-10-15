export default function Card({ img, name }) {
  return (
    <div className="w-[115.5px] h-[105.5px] flex flex-col items-center justify-between cursor-pointer mt-9">
      <img src={img} alt="" className="w-[78.5px] h-[78.5px] rounded-full border-1 border-[#d6d6d6]" />
      <h1 className="text-[13px] text-[#222222] hover:text-[#f05a22]">{name}</h1>
    </div>
  );
}
