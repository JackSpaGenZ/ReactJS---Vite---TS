import { MouseEvent, useState } from "react";

// { items: [], heading: string }

interface Props {
  items: string[];
  heading: string;
  // ( items : string ) => void
  onSelectItem: (item : string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // let items = ["Ha Noi", "Nghe An", "Sai Gon", "London", "Paris"];

  // let selectedIndex = 0;

  // // Hook
  // const arr = useState(-1);
  // arr[0] // avariable (selectedIndex)
  // arr[1] // updater function

  /* A hook. It is a function that returns an array with two elements. The first element is the current
  value of the state. The second element is a function that allows you to update the state. */
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const message = items.length === 0 ? <p>No Item found </p> : null;

  // // Event handler
  // const handleClicked = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
