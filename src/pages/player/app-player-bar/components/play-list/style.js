import styled from 'styled-components'

export const PlayListWrapper = styled.div`
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 47px;
    z-index: 10;
  }

  .container {
    position: absolute;
    left: 50%;
    bottom: 47px;
    width: 986px;
    height: 300px;
    transform: translate(-50%);
    z-index: 30;
  }

  .content {
    position: relative;
    display: flex;
    width: 100%;
    height: 260px;
    background-position: -1014px 0;
    background-repeat: repeat-y;
    background-image: url(${require('@/assets/img/playpanel_bg.png').default});
    overflow: hidden;

    .img-bg {
      position: absolute;
      left: 2px;
      z-index: 1;
      width: 980px;
      height: auto;
      opacity: 0.2;
    }

    .line {
      position: absolute;
      top: 0;
      left: 555px;
      width: 6px;
      height: 260px;
      background-color: #000;
      opacity: 0.5;
    }
  }
`

export const ListHeaderWrapper = styled.div`
  width: 100%;
  height: 40px;
  background-image: url(${require('@/assets/img/playpanel_bg.png').default});
  background-position: 0 0;
  padding: 0 5px;
  color: #fff;
`

export const SongListWrapper = styled.div`
  width: 553px;
  height: 260px;
  color: #aaa;
  z-index: 2;
`

export const ListLyricWrapper = styled.div`
  width: 424px;
  height: 260px;
  padding: 20px;
  color: #989898;
  z-index: 2;
`
