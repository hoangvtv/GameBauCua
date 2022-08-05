import styled from "styled-components";
import React from "react";

export const Link = ({ className, children, ...props }) => {
  return (
    <a className={className} {...props}>
      {children}
    </a>
  );
};

//chỉ định nghĩa css sytle cho các thẻ component cơ bản(div,p, a,..), không thể custom các component khâc
export const StyledLink = styled(Link)`
  background-color: blue;
  font-weight: bold;
`;
