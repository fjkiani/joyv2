import { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`




:root{
   --background: #eff7f9;
   --black:#0a0b10;
   --purple:#803bec;
   --pink:#e5a1f8;
   --white:#fff;
   --nav:#35353f;
   --nav2:#3f3d56;
}


*,*::before,*::after{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Koulen', cursive;}

    html{
  ${"" /* overflow-y: scroll; */}
  scroll-behavior:smooth;
  
}
    body,
    html,
    a {
        font-family: 'Poppins', sans-serif;
            }
    body {

        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: var(--background);

        overflow-x: hidden;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin:0;
        padding:0;
        color: white;
    }
    a {

        text-decoration: none;
        outline: none;
    }
    button{
        border:none;
        outline:none;
        &:focus{
            outline:none;
        }
    }
    h5 {
        color: black;
    }

    *:focus {
        outline: none;
    }

    img,svg{
        width:100%;
        height:auto;
    }


`;

//  /* Colors */
