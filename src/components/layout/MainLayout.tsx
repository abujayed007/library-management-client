import Books from "../books/Books";

const MainLayout = () => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Books />
    </div>
  );
};

export default MainLayout;
