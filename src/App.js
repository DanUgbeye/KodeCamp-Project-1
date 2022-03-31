import GiftCards from "./components/GiftCards";

function App() {
  return (
    <div className=" w-full ">
      <header className=" px-8 text-center shadow-md shadow-black/40 sticky top-0 left-0 right-0 text-2xl font-semibold py-4 mb-12 bg-green-500 text-white tracking-wide ">
        GiftCards
      </header>

      <div className=" mx-auto w-[90%] ">
        <GiftCards />
      </div>

    </div>
  );
}

export default App;
