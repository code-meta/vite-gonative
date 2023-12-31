import NavBar from "@/components/nav-bar";
import PageLinks from "@/components/page-links";

const Root = () => {
  return (
    <>
      <NavBar />

      <main className="container mb-4 mt-12">
        <div className="md:w-1/2 mx-auto">
          <PageLinks />
        </div>
      </main>
    </>
  );
};

export default Root;
