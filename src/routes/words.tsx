import NavBar from "@/components/nav-bar";
import { WordTable } from "@/components/word-table";

const Words = () => {
  return (
    <>
      <NavBar />

      <main className="container mb-4 mt-12">
        <div className="md:w-1/2 mx-auto">
          <WordTable />
        </div>
      </main>
    </>
  );
};

export default Words;
