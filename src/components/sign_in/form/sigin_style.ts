import styled from "styled-components";

export const MainSignIn = styled.main`
  color: white;

  span {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 40px;
    margin: 20px 0;
  }
`;

export const FormSignIn = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--dark_base);
  margin-top: 50px;

  div {
    width: 300px;
    background-color: #c2bfc2;
    padding: 40px 30px;
    border-radius: 8px;

    h1 {
      text-align: center;
      margin-bottom: 20px;
    }

    label, input{
    display: block;
    margin: 10px 0;
    width: 270px;
    }

    label {
      font-size: 18px;
    }

    input {
      padding: 10px;
      font-size: 16px;
      font-weight: 600;
      border: none;
      border-radius: 4px;
    }

    section#buttons {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      
      button {
        width: 100%;
        padding: 10px 0;
        background-color: var(--primary_green);
        border: none;
        border-radius: 4px;
        color: white;
        font-weight: 700;
        cursor: pointer;

        &:hover{
          background-color:  #1d6414;
        }
      }

      a {
        font-size: 14px;
      }
    }
  }

`;