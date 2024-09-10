import { CiSearch, CiHeart, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
function Header({ searchItem, setSearchItem, counter }) {
  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
  };

  return (
    <div className="">
      <div className="h-[70px] flex justify-between py-5 px-4">
        <div className="">
          <h1 className="text-2xl font-bold cursor-pointer ml-4">ECOM</h1>
        </div>
        <div className="flex gap-6 text-lg">
          <Link to="/">
            {" "}
            <p className="cursor-pointer">Home</p>
          </Link>
          <p className="cursor-pointer">Men</p>
          <p className="cursor-pointer">Women</p>
          <p className="cursor-pointer">Kids</p>
          <p className="cursor-pointer">Trending</p>
          <p className="cursor-pointer">Collection</p>
        </div>
        <div className="flex gap-4 items-center">
          <CiSearch size={"28px"} className="cursor-pointer" />
          <input
            type="search"
            value={searchItem}
            onChange={handleInputChange}
            placeholder="Search Products..."
            className="border border-none w-[250px] px-4 py-2 text-lg "
          />
          <Link to="/Login">
            <CgProfile size={"28px"} />
          </Link>
          <Link to="/wishlist">
            <CiHeart size={"28px"} className="cursor-pointer" />
          </Link>
          <Link to="/cart">
            <div className="bg-black h-[20px] text-white text-center w-[20px] rounded-full absolute ml-3 top-4">
              {counter}
            </div>
            <CiShoppingCart size={"28px"} className="cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
