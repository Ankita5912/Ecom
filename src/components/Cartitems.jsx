import Counter from "./Counter";

const Cartitem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="flex justify-between items-center p-8 gap-[60px] bg-white shadow rounded mb-4">
      <div>
        <img src={item.images} alt={item.title} className="w-20" />
        <h4 className="font-bold text-md w-[200px] mt-3">{item.title}</h4>
        <div className="flex items-start gap-1 flex-col">
          <p className="text-lg mt-1 text-gray-600">
            Price: ₹ {item.price * 80}
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <Counter />
        <button
          className="bg-black text-white px-4 py-2 rounded"
          onClick={() => {
            onRemove(item.id);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Cartitem;
