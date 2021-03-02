import styled from 'styled-components'

export const DjRadioShowWrapper = styled.div`
  width: 426px;

  .list {
    height: 600px;
    border: 1px solid #e2e2e2;
    border-top: none;

    .item {
      width: 424px;
      height: 60px;
      padding: 10px 0;
      display: flex;
      align-items: center;

      :nth-of-type(even) {
        background-color: #f7f7f7;
      }

      &:hover {
        background-color: #eee;

        .left i {
          display: inline-block;
          position: absolute;
          width: 22px;
          height: 22px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-position: 0 -85px;
        }
      }

      .left {
        width: 40px;
        height: 40px;
        margin: 0 0 0 20px;
        position: relative;
        cursor: pointer;
      }

      .con {
        width: 254px;
        margin: 1px 0 0 10px;
        line-height: 20px;

        .name {
          display: block;

          &:hover {
            color: #000;
          }
        }

        .dec {
          display: block;
          color: #999;
        }
      }

      .right {
        .btn {
          margin: 1px 0 0 10px;
          color: #999;
          border: 1px solid #999;
          padding: 0 6px;
          height: 18px;
          line-height: 18px;
          cursor: pointer;

          &:hover {
            border: 1px solid #666;
            color: #666;
          }
        }
      }
    }
  }
`