import Button from "./components/Button";

function App() {
  return (
    <>
      <h1 className="mt-40">Components</h1>
      <div>
        <Button>test</Button>
        <Button variant={"danger"}>test2 </Button>
        <Button variant={"secondary"} size={"lg"}>
          test2{" "}
        </Button>
      </div>
    </>
  );
}

export default App;
