import * as React from "react";
import styled from "styled-components";

import { IApp } from "base/interfaces";
import { IFile } from "apps/folder/interfaces";
import IconLayout from "molecules/iconInterface";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.offWhite};
`;

interface IProps {
  files: IFile[];
  user: string;
  fileAction: (path: string) => void;
  app: IApp;
  route: string;
}

const Content = ({ files, user, fileAction, route }: IProps) => {
  return (
    <>
      <Wrapper>
        <IconLayout
          fileAction={fileAction}
          route={route}
          user={user}
          files={files}
        />
      </Wrapper>
    </>
  );
};

export default Content;
