import InputSearch from "./InputSearch";

function IndexSearch() {
  return (
    <section className="border border-blue-800 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 p-32">
      <h1 className="text-3xl pb-5 uppercase font-semibold">
        Weather Forecast
      </h1>
      <InputSearch />
    </section>
  );
}

export default IndexSearch;
