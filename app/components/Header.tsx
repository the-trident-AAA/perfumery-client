import Logo from "./Logo";
import Search from "./Search";
import User from "./User";
import LittleCar from "./LittleCar";

const Header = () => {
  return (
    <div>
      <header className="bg-slate-800">
        <div className="flex h-16 md:h-24 items-center px-6 w-4/5 mx-auto gap-4">
          {/* Logo con más espacio a la derecha */}
          <div className="mr-4">
            <Logo />
          </div>

          {/* Search con espacio extra en los lados */}
          <div className="flex-1 mx-4">
            <Search />
          </div>

          {/* User y LittleCar más juntos */}
          <div className="flex items-center gap-2">
            <User />
            <LittleCar />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
