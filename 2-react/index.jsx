import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

const SimpleButton = () => {
  const [name, setName] = useState("");

  return (
    <div className="todos">
      <h1>{name}</h1>
      <h1>3213</h1>
      <Button
        onClick={() => {
          setName("ok" + Math.random());
        }}
      >
        button
      </Button>
    </div>
  );
};

const FooLS = () => {
  const [name, setName] = useState(
    localStorage.getItem("name") || "empty_name"
  );
  const [users, setUsers] = useState(localStorage.getItem("user") || []);

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("users", JSON.stringify(users));
    // localStorage.setItem("name3", name);
    console.log("name:", name);
  }, [name]);

  return (
    <div className="todos">
      <h1>{name}</h1>
      <h1>3213</h1>
      <Button
        onClick={() => {
          setName("ok" + Math.random());
        }}
      >
        button
      </Button>
    </div>
  );
};

const FilterApp = () => {
  let filterMap = {
    all: "Все",
    active: "Активные",
    completed: "Завершенные",
  };

  let [filterState, setFilterSTate] = useState("all");
  const [users, setUsers] = useState([
    { done: true, text: "Hey", id: 1 },
    { done: false, text: "There", id: 2 },
    { done: false, text: "Dima", id: 3 },
  ]);

  let filteredUser = users.filter((user) => {
    if (filterState === "active") {
      return !user.done;
    }
    if (filterState === "completed") {
      return user.done;
    }
    return true;
  });

  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {filterMap[filterState]}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => setFilterSTate("all")}>Все</MenuItem>
          <MenuItem onClick={() => setFilterSTate("active")}>Активные</MenuItem>
          <MenuItem onClick={() => setFilterSTate("completed")}>
            Завершенные
          </MenuItem>
        </MenuList>
      </Menu>

      <br />

      <pre>filterState: {JSON.stringify(filterState, null, 2)}</pre>
      <br />
      <pre>{JSON.stringify(filteredUser, null, 2)}</pre>
    </div>
  );
};

ReactDOM.render(
  <>
    <ChakraProvider>
      <div style={{ padding: 20 }}>
        <SimpleButton />
        <br />
        <hr />
        <br />
        <FooLS />
        <hr />
        <br />
        <FilterApp />
      </div>
    </ChakraProvider>
  </>,
  document.getElementById("todos")
);
