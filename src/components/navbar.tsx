import NavigationLink from "./elements/NavigationLink";
import content from "../data/navigation.json";

const Navbar = () => {
  return (
    <header className="p-12 py-8  mx-auto bg-white text-black">
      <div className="grid grid-cols-2 lg:grid-cols-[20%_60%_20%]">
        <div className="">logo</div>
        <div className="navigation hidden lg:grid text-center">
          <div className="">
            {content.map((item) => {
              return (
                <NavigationLink
                  title={item.title}
                  url={item.url}
                  external={item.external}
                />
              );
            })}
          </div>
        </div>
        <div className="socials hidden lg:block pl-6 text-right">Socials</div>
        <div className="navigation-mobile lg:hidden text-right">
          Mobile Navigation
        </div>
      </div>
    </header>
  );
};

export default Navbar;
