import styled from 'styled-components'

export const DjRadioListWrapper = styled.div`
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .item {
      width: 435px;
      height: 160px;
      padding: 20px 0;
      display: flex;

      :nth-child(1),
      :nth-child(2) {
        border-bottom: 1px solid #e7e7e7;
      }

      .left {
        width: 120px;
        height: 120px;
        cursor: pointer;
      }

      .right {
        margin: 0 0 0 15px;

        .name {
          width: 280px;
          margin: 16px 0 20px;
          color: #333;
          font-size: 20px;
          display: block;
        }

        .dec {
          color: #999;
        }
      }
    }
  }
`
