export default function ScrollDownIndicator() {
  return (
    <div className="flex flex-col items-center">
      {/* Mouse container */}
      <div
        className="
        relative w-[34px] h-[56px] 
        rounded-full border-[3px] border-[#a18458]
        bg-white
      "
      >
        <div
          className="
            absolute bottom-9 left-1/2 
            size-2.5 rounded-full 
            bg-[#a18458]
            animate-[scroll_3s_infinite]
        "
        />
      </div>
    </div>
  );
}
