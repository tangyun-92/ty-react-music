import styled from 'styled-components'

export const ListHeaderWrapper = styled.div`
  height: 40px;
  display: flex;
  align-items: center;

  .left {
    display: flex;
    justify-content: space-between;
    width: 560px;
    padding-right: 30px;

    .play-list {
      font-size: 14px;
      color: #e2e2e2;
      padding-left: 25px;
    }

    .left-opera {
      display: flex;
      align-items: center;

      .opera {
        display: flex;
        align-items: center;
        color: #ccc;

        .icon {
          display: inline-block;
          width: 16px;
          height: 16px;
          margin: 0 4px 0 0;
        }

        .icon-collect {
          background-position: -24px 0;
        }

        .icon-clear {
          background-position: -51px 0;
        }

        &:hover {
          color: #fff;
        }

        &:hover .icon-collect {
          background-position: -24px -20px;
        }

        &:hover .icon-clear {
          background-position: -51px -20px;
        }
      }

      .line {
        display: block;
        height: 15px;
        border-left: 1px solid #000;
        border-right: 1px solid #2c2c2c;
        margin: 0 10px;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;

    .song-name {
      width: 400px;
      text-align: center;
      font-size: 14px;
      color: #fff;
    }

    .close {
      width: 30px;
      height: 30px;
      cursor: pointer;
      display: inline-block;
      background-position: -195px 9px;
    }
  }
`
