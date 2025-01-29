const MemberCard = ({ data }) => {
  return (
    <div className="w-[320px] p-3 flex flex-col gap-y-1 text-sm outline-1 border-slate-300 border bg-white rounded-lg shadow-lg">
      <p>
        S.No.: <span className="font-bold">{data.SN}</span>
      </p>

      <p className="flex justify-between">
        <span>Name: {data["NAME"]}</span>
      </p>
      <p>
        <span>
          License No.: <span className="font-bold">{data.DLNO}</span>
        </span>
      </p>

      <p className="flex justify-between">
        <span>
          Category: {data.CATEGORY}
        </span>
      </p>
      <p>
        <span>Slot: {data.SLOTNO}</span>
      </p>
    </div>
  );
};

export default MemberCard;
