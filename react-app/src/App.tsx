import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Ha Noi", "Nghe An", "Sai Gon", "London", "Paris"];
  const handleSelectItem = (items: string) => {
    console.log(items);
  };

  const [Alertvisible, setAlertvisiblity] = useState(false);


  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading={"Cities"}
          onSelectItem={handleSelectItem}
        />
      </div>

      <hr />

      <div>
        {/* <Alert text="Hello anh em "/> */}
        <Alert onClose={()=>console}>
          Hello <span>anh em</span>
        </Alert>
      </div>

      <hr />

      <div>
        {Alertvisible && <Alert onClose={()=>setAlertvisiblity(false)}>Hello hello moi nguoi</Alert>}
        <Button color='danger' onClick={() => setAlertvisiblity(true) }>
            Button
        </Button>
      </div>
    </>
  );
}

export default App;
