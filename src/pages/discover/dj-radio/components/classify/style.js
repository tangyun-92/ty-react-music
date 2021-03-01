import styled from 'styled-components'

export const ClassifyWrapper = styled.div`
  .list {
    display: flex;
    flex-wrap: wrap;

    .item {
      width: 70px;
      height: 70px;
      margin: 0 29px 25px 0;
      cursor: pointer;
      text-align: center;
      border: 2px solid #fff;
      position: relative;

      .to-problem {
        width: 70px;
        height: 70px;
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        text-indent: -9999px;
      }

      &:hover {
        background-color: #f4f4f4;
        border-radius: 5px;
      }

      &.active {
        width: 70px;
        height: 70px;
        color: #d35757;
        border: 2px solid #d35757;
        border-radius: 5px;

        .icon0,
        .icon1,
        .icon2,
        .icon3,
        .icon4,
        .icon5,
        .icon6,
        .icon7,
        .icon8,
        .icon9,
        .icon10,
        .icon11 {
          background-position: -48px 0;
        }
      }

      i {
        display: inline-block;
        width: 48px;
        height: 48px;
        background-position: 0 0;
      }

      .text {
        margin: -7px 0 0 0;
      }

      &:nth-child(14) .text {
        color: #5ab5e7;
      }

      .icon0 {
        background-image: url('http://p1.music.126.net/icULXvfqWJMFvcjTrXSLeA==/109951165406422565.jpg');
      }
      .icon1 {
        background-image: url('http://p3.music.126.net/fWonYYR8sORR2mEKZfYqjQ==/109951165406418703.jpg');
      }
      .icon2 {
        background-image: url('http://p4.music.126.net/pBodB8v8tbQxsoC1UCZfEw==/109951165406412456.jpg');
      }
      .icon3 {
        background-image: url('https://p1.music.126.net/GqeTI3A_g4FFzm_4MoNSsQ==/109951165406411412.jpg');
      }
      .icon4 {
        background-image: url('https://p1.music.126.net/nEQJH0QRoLbcHho11tsQrw==/109951165406409464.jpg');
      }
      .icon5 {
        background-image: url('https://p1.music.126.net/LIkzDiW_ktaSbk_s6MgMkg==/109951165406441809.jpg');
      }
      .icon6 {
        background-image: url('https://p1.music.126.net/DzeP-S6FMZYzjwppwY3-Jw==/109951165406417278.jpg');
      }
      .icon7 {
        background-image: url('https://p2.music.126.net/3qyLawhgmTyHNabhuaKYTg==/109951165406422635.jpg');
      }
      .icon8 {
        background-image: url('https://p2.music.126.net/RgtBB0IPWuzAK5KMKEFCgg==/109951165406425027.jpg');
      }
      .icon9 {
        background-image: url('https://p2.music.126.net/VrBtcrNXRb6lIogyGLtfkQ==/109951165406414913.jpg');
      }
      .icon10 {
        background-image: url('https://p2.music.126.net/CPvQ2tG9oV1FngMOYyyziA==/109951165406424089.jpg');
      }
      .icon11 {
        background-image: url('https://p2.music.126.net/ULDTiR13aSOEzB3RBh7NdQ==/109951165406416867.jpg');
      }
      .icon12 {
        background-image: url('https://music.163.com/style/web2/img/index_radio/radio_faq.png');
      }
      .icon13 {
        background-image: url('https://music.163.com/style/web2/img/index_radio/radio_apply.png');
      }
    }
  }
`
