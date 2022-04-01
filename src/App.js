import GiftCards from "./components/GiftCards";

function App() {
  return (
    <div className=" w-full min-h-[100vh] bg-[#E2D0F0] ">
      <header className=" px-8 text-center shadow-md shadow-black/30 sticky top-0 left-0 right-0 text-3xl font-semibold py-4 mb-12 bg-[#DBC1ED] text-[#76568A] tracking-wide ">
        GIFTCARDS
      </header>

      <div className=" mx-auto w-[90%] ">
        <GiftCards />
      </div>

    </div>
  );
}

export default App;
