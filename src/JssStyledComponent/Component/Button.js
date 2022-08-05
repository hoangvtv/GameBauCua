import styled from "styled-components";

export const Button = styled.button`
            background:${(props) => (props.bgPrimary ? "blue" : "orange")};
            color:#fff;
            font-size:${(props) => (props.fontSize2x ? "2em" : "1em")};
            border:none;
            border-radius:0.5rem;
            font-weight:bold;   
            padding:1rem;
            opacity:1;
                &:hover{ 
                    opacity:0.7;
                    transition: all 1s;
                }
                // &.button_style{
                //     font-size:25px;
                // }
`;

//kế thừa css và dịnh nghĩa
export const SmallButton = styled(Button)`
  background-color: orange;
  font-size: 0.4em;
`;
