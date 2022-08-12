import styled from "styled-components";
import { Color } from "../Theme/Variable";

export const Button = styled.button`
 background: radial-gradient(circle, rgba(242,113,39,1) 0%, rgba(242,134,39,1) 100%);
 border-radius: 24px;
 border: none;
 color: ${Color.white};
 font-size: 16px;
 padding:11px 26px ;
 box-shadow: 2px 2px 14px 14px rgba(50, 115, 85, 0.62);
 &:hover{
        cursor: pointer;
        color: #F27127;
        background: #ffff;
        border: 2px solid #F27127 ;
    }
`