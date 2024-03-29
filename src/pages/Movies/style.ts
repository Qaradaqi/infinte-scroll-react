import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
  .title {
    font-size: 2.5rem;
    color: ${pallete.whiteColor};
    font-weight: 800;
    padding: 20px 0;
    margin-bottom: 10px;
    border-bottom: 2px solid ${pallete.primaryColor};
  }
  .items {
    flex-wrap: wrap;
    overflow: hidden;
    gap: 20px 10px;
    .item {
      padding: 10px 10px 35px;
      border-radius: 8px;
      position: relative;
      cursor: pointer;
      .item__bg {
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        background: ${pallete.blueColor};
        backdrop-filter: blur(16px);
        transform: scale(0.6);
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(16px);
          transform: scale(0.6);
          transition: all 0.1s ease-in-out;
        }
      }
      .item__poster {
        position: relative;
        .img {
          z-index: 1;
          width: 242px;
          aspect-ratio: 2/3;
          border-radius: 8px;
          transform: scale(1);
          transition: all 0.1s ease-in-out;
        }
        .poster__btn {
          position: absolute;
          bottom: 5%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: all 0.1s ease-in-out;
          font-size: 6rem;
          i {
            color: ${pallete.primaryColor};
            border-radius: 50%;
            background: ${pallete.darkColor};
            transition: all 0.1s ease-in-out;
          }
          &:hover {
            font-size: 6.5rem;
            bottom: 2%;
          }
        }
        .item__title {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          z-index: 0;
          font-size: 2.2rem;
          font-weight: 700;
          overflow: hidden;
          text-overflow: ellipsis;
          text-wrap: nowrap;
          color: ${pallete.primaryColor};
          opacity: 0;
          transform: translateY(-50px);
          transition: all 0.1s ease-in-out;
        }
      }
      &:hover {
        .item__bg {
          border: 2px solid ${pallete.primaryColor};
          border-radius: 8px;
          transform: scale(1);
          &:before {
            border-radius: 8px;
            transform: scale(1);
          }
        }
        .item__poster {
          .img {
            z-index: 3;
            transform: scale(1);
          }
          .poster__btn {
            opacity: 1;
          }
          .item__title {
            opacity: 1;
            transform: translateY(25px);
          }
        }
      }
    }
  }
  .loading {
    font-size: 2rem;
    font-weight: 800;
    color: ${pallete.blueColor};
  }
`;
