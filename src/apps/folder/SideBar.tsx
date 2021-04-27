import * as React from "react";
import styled from "styled-components";

import SideNav from "molecules/sideNav";
import { Stack, Text } from "atoms/styled";
import { IApp } from "base/interfaces";
import Image from "atoms/styled/appImage";

const Wrapper = styled(Stack)`
  width: 240px;
`;

const items = [
  {
    name: "My PC",
    icon: "myPc",
    children: [
      { name: "My PC", icon: "myPc" },
      { name: "My PC", icon: "myPc" },
    ],
  },
];

interface IProps {
  app: IApp;
}

const SideBar = ({ app }: IProps) => {
  return (
    <Wrapper flexDirection="column" paddingX={16} paddingY={8}>
      <Stack alignItems="center">
        <Image height={24} name={app.icon} style={{ paddingRight: 8 }} />
        <Text weight={700} variant="mediumPlus">
          {app.appName}
        </Text>
      </Stack>
      <SideNav items={items} />
    </Wrapper>
  );
};

export default SideBar;
