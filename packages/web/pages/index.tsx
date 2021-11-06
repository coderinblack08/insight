import { Button, Menu, MenuDivider, MenuItem } from "@insight/ui";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-900">
      <div className="flex h-screen items-center justify-center">
        <Menu trigger={<Button>Open Menu</Button>}>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuDivider />
          <MenuItem>Item 3</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Home;
