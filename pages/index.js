import Layout from "../components/layout";
export default function Index() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold">Welcome to My library</h1>
        <p className="text-xl">
          This is a collection of books on my reading list
        </p>
      </div>
    </Layout>
  );
}
