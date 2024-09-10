function BillReceipt() {
  return (
    <div className="">
      <div className="absolute top-[8%] left-[35%] bg-white border border-black h-[530px] w-[410px] shadow-xl shadow-x-slate-500 shadow-y-slate-500 rounded-3xl">
        <div className="flex justify-center items-center flex-col mt-[50px] gap-3">
          <img
            className="w-[100px]"
            src="https://www.nomi.co.uk/wp-content/uploads/2021/12/GreenTick.png"
            alt=""
          />
          <h1 className="text-2xl text-gray-600">Payment Success !</h1>
          <h1 className="text-4xl font-bold">INR 3,499</h1>
        </div>
        <hr className="mt-5 border-slate-400" />
        <div className="flex ml-7 mt-8 gap-10 items-center">
          <div className="text-lg font-bold text-gray-600">
            <h1>Ref Number</h1>
            <h1>Payment Time</h1>
            <h1>Payment Method</h1>
            <h1>Sender Name</h1>
          </div>
          <div className="text-lg font-bold text-gray-600">
            <p>7876554627357</p>
            <p>25-02-2024, 13:22:16</p>
            <p>Bank Transfer</p>
            <p>Yash Saraswat</p>
          </div>
        </div>
        <div className=" flex gap-24 ml-7 mt-7 text-lg font-bold text-gray-600">
          <div>
            <h1>Amount</h1>
            <h1>Admin Fee</h1>
          </div>
          <div>
            <h1>INR 3,499</h1>
            <h1>INR 193.45</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillReceipt;
