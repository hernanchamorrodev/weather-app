import Input from "./Input";
import ButtonSearch from "./ButtonSearch";

const InputSearch = () => {
  return (
    <div>
      <p className="pb-3">
        Enter below a place and select an option to know the weather.
      </p>
      <div className="flex">
        <Input type="text" placeholder="Search a place in the 🗺️" />
        <ButtonSearch />
      </div>
    </div>
  );
};

export default InputSearch;
