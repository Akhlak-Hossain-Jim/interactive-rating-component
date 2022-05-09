import styled from "styled-components";

export const AppCon = styled.main`
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  padding: 20px;
`;

export const RatingCardStyle = styled.div`
  margin: auto;
  background: linear-gradient(223.84deg, #171e27 0%, #1e252f 0.01%);
  border-radius: 30px;
  padding: 31px 33px 31px 38px;
  width: min(412px, 100%);
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  @media (max-width: 548px) {
    padding: 24px 24px 20px;
  }
  .top_star {
    background: #292d36;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    width: 49px;
    height: 49px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
    @media (max-width: 548px) {
      width: 38px;
      height: 38px;
      margin-bottom: 10px;
    }
    img {
      width: 16.75px;
      height: 16px;
      @media (max-width: 548px) {
        width: 12.99px;
        height: 12.41px;
      }
    }
  }
  h1 {
    padding-top: 16px;
    padding-bottom: 7px;
    font-weight: 700;
    font-size: 27px;
    line-height: 34px;
    letter-spacing: 0.01em;
    color: #fbffff;
    @media (max-width: 548px) {
      font-size: 25px;
      line-height: 32px;
      letter-spacing: -0.02em;
      padding-top: 10px;
      padding-bottom: 5px;
    }
  }
  p {
    padding-top: 6px;
    padding-bottom: 14px;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.03em;
    color: #8a919b;
    @media (max-width: 548px) {
      font-size: 14px;
      line-height: 157%;
      padding-top: 5px;
      padding-bottom: 13px;
    }
  }
  .rating_container {
    padding-top: 14px;
    padding-bottom: 16px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 24px;
    @media (max-width: 548px) {
      padding-top: 14px;
      padding-bottom: 12px;
      gap: 5px;
    }
    &__element {
      width: 50px;
      height: 50px;
      background: #262f38;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      font-weight: 700;
      font-size: 17px;
      padding-top: 2px;
      cursor: pointer;
      &:hover {
        background: #7c8898;
      }
      &.active {
        background: #f77616;
      }
      @media (max-width: 548px) {
        width: 42px;
        height: 42px;
      }
    }
  }
  button {
    margin-top: 17px;
    background: #fc7613;
    border-radius: 22.5px;
    width: 100%;
    padding: 12px 20px 9px;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    /* identical to box height, or 24px */
    letter-spacing: 0.08em;
    color: #ffffff;
    text-align: center;
    border: none;
    outline: none;
    &:hover {
      color: #fc7613;
      background: #ffffff;
    }
    @media (max-width: 548px) {
      padding-top: 12px;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: 0.08em;
      padding: 17px 20px 12px;
    }
  }
`;

export const ThankCardStyle = styled.div`
  margin: auto;
  background: linear-gradient(223.84deg, #171e27 0%, #1e252f 0.01%);
  border-radius: 30px;
  padding: 31px 33px 31px 38px;
  width: min(412px, 100%);
  padding: 45px 35px 47px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 162px;
    height: auto;
    margin: 0 auto;
    margin-bottom: 16px;
    @media (max-width: 548px) {
      width: 144px;
      margin-bottom: 12.33px;
    }
  }
  .show {
    margin-top: 16px;
    margin-bottom: 17px;
    background: #262f38;
    border-radius: 15px;
    padding: 5px 20px 3px;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    letter-spacing: -0.03em;
    color: #fc7614;
    @media (max-width: 548px) {
      margin-top: 12px;
      margin-bottom: 14px;
      padding: 5px 10px 3px 12px;
      letter-spacing: -0.05em;
    }
  }
  h1 {
    padding-top: 17px;
    padding-bottom: 5px;
    font-weight: 700;
    font-size: 27px;
    line-height: 34px;
    letter-spacing: 0.01em;
    text-align: center;
    color: #fbffff;
    @media (max-width: 548px) {
      padding-top: 13px;
      padding-bottom: 5px;
      font-size: 24px;
      line-height: 30px;
    }
  }
  p {
    padding-top: 6px;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    letter-spacing: -0.03em;
    color: #8a919b;
    @media (max-width: 548px) {
      font-size: 15px;
      line-height: 145%;
      letter-spacing: -0.03em;
    }
  }
`;
