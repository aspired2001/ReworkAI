import React from "react";
import { Text, Img } from "./..";
import { Menu, Sidebar } from "react-pro-sidebar";

export default function Sidebar1({ ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <Sidebar
      {...props}
      width="272px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      onClick={() => {
        setCollapsed(!collapsed);
      }}
    >
      <Img
        src="images/img_screenshot_2024_02_27.png"
        alt="screenshot2024"
        className="w-[49%] mt-3 ml-[50px] mr-[90px] object-cover"
      />
      <Menu
        menuItemStyles={{
          button: {
            padding: " ",
            borderRadius: "5px",
            margin: " ",
            [`&:hover, &.ps-active`]: {
              color: "#8358ff",
              fontWeight: "500 !important",
              backgroundColor: "#ffffff !important",
            },
          },
        }}
        className="flex flex-col items-center justify-start w-full mt-[49px] mb-[880px] pl-10 pr-8 gap-[55.50px]"
      >
        <div className="flex flex-row justify-start items-center w-full gap-[17px] p-[7px]">
          <Img src="images/img_material_symbol.svg" alt="materialsymbol" className="h-6 w-6 my-px" />
          <Text size="s" as="p" className="!text-white-A700">
            Dashboard
          </Text>
        </div>
        <div className="flex flex-row justify-start items-center w-full gap-5 p-[9px]">
          <Img src="images/img_vector.svg" alt="vector_one" className="h-5 ml-px" />
          <Text size="s" as="p" className="!text-white-A700">
            Customers
          </Text>
        </div>
        <div className="flex flex-row justify-start items-center w-full gap-5 p-[9px] rounded-[5px]">
          <Img src="images/img_vector_deep_purple_a200.svg" alt="vector_three" className="h-5 ml-px" />
          <Text size="s" as="p" className="!text-white-A700">
            Jobs
          </Text>
        </div>
        <div className="flex flex-row justify-start items-center w-full gap-5 p-[9px]">
          <Img src="images/img_vector_white_a700.svg" alt="vector_five" className="h-[17px] ml-px" />
          <Text size="s" as="p" className="!text-white-A700">
            Candidates
          </Text>
        </div>
        <div className="flex flex-row justify-start items-center w-full gap-5 p-[9px]">
          <Img src="images/img_vector_white_a700_20x17.svg" alt="vector_seven" className="h-[17px] ml-px" />
          <Text size="s" as="p" className="mr-3.5 !text-white-A700">
            Invite Candidates
          </Text>
        </div>
        <div className="flex flex-row justify-start items-center w-full gap-5 p-[9px]">
          <Img src="images/img_vector_white_a700_20x20.svg" alt="vector_nine" className="h-5 w-5 ml-px" />
          <Text size="s" as="p" className="!text-white-A700">
            Integration
          </Text>
        </div>
        <div className="flex flex-row justify-start items-center w-full gap-5 p-[9px]">
          <Img src="images/img_vector_20x20.svg" alt="vector_eleven" className="h-5 w-5 ml-px" />
          <Text size="s" as="p" className="!text-white-A700">
            Help & Support
          </Text>
        </div>
      </Menu>
    </Sidebar>
  );
}
