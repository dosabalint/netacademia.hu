<template>
  <div>
    <DPageHeader
      asset-image="~/assets/kapcsolat/kapcsolat-bg.svg"
      icon="decode-icon-placeholder"
    >
      <h1>Kapcsolat</h1>
    </DPageHeader>
    <DFullSection theme="light">
      <Container>
        <Row class="flex-center mb-5">
          <h3>Elérhetőségeink</h3>
        </Row>
        <Row>
          <Column class="col-6">
            <DWidget type="contact" class="mt-4">
              <ul>
                <p><b>Cégadatok:</b></p>
                <li class="email">
                  <i class="decode-icon-coding"></i> NetAcademia Oktatóközpont Korlátolt Felelősségű Társaság
                </li>
                <li class="address">
                  <i class="decode-icon-placeholder2"></i> 1074 Budapest, Rákóczi út 70-72.
                  <br class="d-block d-md-none d-lg-block"> T3 torony, 1. emelet
                </li>
                <li class="address">
                  <i class="decode-icon-information"></i> Adószám: 13702355-2-42
                </li>
                <li class="address">
                  <i class="decode-icon-information"></i> Cégjegyzékszám: 01-09-868776
                </li>
              </ul>
            </DWidget>
          </Column>
          <Column class="col-6">
            <DWidget type="contact" class="mt-4">
              <ul>
                <p><b>Számlázással, általános kérdésekkel, adminisztrációval kapcsolatban:</b></p>
                <li class="phone">
                  <i class="decode-icon-phone-call"></i> +36 20 385 3332
                </li>
                <li class="email">
                  <i class="decode-icon-multimedia"></i>
                  <a href="mailto:iroda@netacademia.net">iroda@netacademia.net</a>
                </li>
                <p><b>Szakmai és tanfolyamspecifikus kérdésekkel kapcsolatban:</b></p>
                <li class="email">
                  <i class="decode-icon-multimedia"></i>
                  <a href="mailto:oktatok@netacademia.hu">oktatok@netacademia.hu</a>
                </li>
                <p><b>Technikai segítség (közvetítés/videók megtekintése):</b></p>
                <li class="email">
                  <i class="decode-icon-multimedia"></i>
                  <a href="mailto:support@netacademia.hu">support@netacademia.hu</a>
                </li>
                <li class="phone">
                  <i class="decode-icon-phone-call"></i> +36 21 252 5556
                </li>
              </ul>
            </DWidget>
          </Column>
        </Row>
      </Container>
    </DFullSection>
    <DFullSection theme="light">
      <Container>
        <Row class="flex-center mb-5 pb-5">
          <DHeadline class="text-center">
            <h3>Munkatársaink</h3>
          </DHeadline>
        </Row>
        <Row class="justify-content-around mb-5">
          <Column class="col-8 col-lg-2 col-sm-5 px-lg-0">
            <div class="about-me">
              <div class="about-me-thumbnail rounded-circle">
                <img src="~/assets/kapcsolat/arvai-annamaria.jpg" alt="Árvai Annamária">
              </div>
              <!-- about-me-thumbnail -->
              <h6>Árvai Annamária</h6>
              <span>Frontend fejlesztő, oktató</span>
              <p>
                <small>arvai.annamaria@netacademia.hu</small>
              </p>
            </div>
            <!-- about-me -->
          </Column>
          <Column class="col-8 col-lg-2 col-sm-5 px-lg-0">
            <div class="about-me">
              <div class="about-me-thumbnail rounded-circle">
                <img src="~/assets/kapcsolat/barcsi-tamas.jpg" alt="Barcsi Tamás">
              </div>
              <!-- about-me-thumbnail -->
              <h6>Barcsi Tamás</h6>
              <span>Vezető oktató, műszaki igazgató</span>
              <p>
                <small>barcsi.tamas@netacademia.hu</small>
              </p>
            </div>
            <!-- about-me -->
          </Column>
          <Column class="col-8 col-lg-2 col-sm-5 px-lg-0">
            <div class="about-me">
              <div class="about-me-thumbnail rounded-circle">
                <img src="~/assets/kapcsolat/avatar-man.png" alt="Bardóczi Ákos">
              </div>
              <!-- about-me-thumbnail -->
              <h6>Bardóczi Ákos</h6>
              <span>Méregkeverő && zugfilozófus</span>
              <p>
                <small>bardoczi.akos@netacademia.hu</small>
              </p>
            </div>
            <!-- about-me -->
          </Column>
          <Column class="col-8 col-lg-2 col-sm-5 px-lg-0">
            <div class="about-me">
              <div class="about-me-thumbnail rounded-circle">
                <img src="~/assets/kapcsolat/dosa-balint.jpg" alt="Dósa Bálint">
              </div>
              <!-- about-me-thumbnail -->
              <h6>Dósa Bálint</h6>
              <span>Frontend felesztő, oktató</span>
              <p>
                <small>dosa.balint@netacademia.hu</small>
              </p>
            </div>
            <!-- about-me -->
          </Column>
        </Row>
        <Row class="justify-content-around mb-5">
          <Column class="col-8 col-lg-2 col-sm-5 px-lg-0">
            <div class="about-me">
              <div class="about-me-thumbnail rounded-circle">
                <img src="~/assets/kapcsolat/kovari-balint.jpg" alt="Kővári Bálint">
                <!-- about-me-hover -->
              </div>
              <!-- about-me-thumbnail -->
              <h6>Kővári Bálint</h6>
              <span>Oktatásszervező</span>
              <p><small>kovari.balint@netacademia.hu</small></p>
            </div>
            <!-- about-me -->
          </Column>
          <Column class="col-8 col-lg-2 col-sm-5 px-lg-0">
            <div class="about-me">
              <div class="about-me-thumbnail rounded-circle">
                <img src="~/assets/kapcsolat/nagy-gergo.jpg" alt="Nagy Gergő">
              </div>
              <!-- about-me-thumbnail -->
              <h6>Nagy Gergő</h6>
              <span>Full-stack fejlesztő, oktató</span>
              <p><small>nagy.gergo@netacademia.hu</small></p>
            </div>
            <!-- about-me -->
          </Column>

          <Column class="col-8 col-lg-2 col-sm-5 px-lg-0">
            <div class="about-me">
              <div class="about-me-thumbnail rounded-circle">
                <img src="~/assets/kapcsolat/novreczky-lajos.jpg" alt="Novreczky Lajos">
              </div>
              <!-- about-me-thumbnail -->
              <h6>Novreczky Lajos</h6>
              <span>C# fejlesztő, oktató</span>
              <p><small>novreczky.lajos@netacademia.hu</small></p>
            </div>
            <!-- about-me -->
          </Column>
          <Column class="col-8 col-lg-2 col-sm-5 px-lg-0">
            <div class="about-me">
              <div class="about-me-thumbnail rounded-circle">
                <img src="~/assets/kapcsolat/plesz-gabor.jpg" alt=">Plesz Gábor">
              </div>
              <!-- about-me-thumbnail -->
              <h6>Plesz Gábor</h6>
              <span>C# fejlesztő, oktató</span>
              <p><small>plesz.gabor@netacademia.hu</small></p>
            </div>
            <!-- about-me -->
          </Column>
        </Row>
        <Row class="justify-content-around mb-5">
          <Column class="col-8 col-lg-2 col-sm-5 px-lg-0">
            <div class="about-me">
              <div class="about-me-thumbnail rounded-circle">
                <img src="~/assets/kapcsolat/szubally-bruno.jpg" alt="Szubally Brúnó">
              </div>
              <!-- about-me-thumbnail -->
              <h6>Szubally Brúnó</h6>
              <span>Marketing Manager, Oktató</span>
              <p><small>szubally.bruno@netacademia.hu</small></p>
            </div>
            <!-- about-me -->
          </Column>

          <Column class="col-8 col-lg-2 col-sm-5 px-lg-0">
            <div class="about-me">
              <div class="about-me-thumbnail rounded-circle">
                <img src="~/assets/kapcsolat/vincze-adam.jpg" alt="Vincze Ádám">
              </div>
              <!-- about-me-thumbnail -->
              <h6>Vincze Ádám</h6>
              <span>IT technikus</span>
              <p><small>vincze.adama@netacademia.hu</small></p>
            </div>
            <!-- about-me -->
          </Column>

          <Column class="col-8 col-lg-2 col-sm-5 px-lg-0">
            <div class="about-me">
              <div class="about-me-thumbnail rounded-circle">
                <img src="~/assets/kapcsolat/hevesi-attila.jpg" alt="Hevesi Attila">
              </div>
              <!-- about-me-thumbnail -->
              <h6>Hevesi Attila</h6>
              <span>Értékesítő</span>
              <!--p class="mb-0">+3620 329 6179</p-->
              <p><small>hevesi.attila@netacademia.hu</small></p>
            </div>
          </Column>
        </Row>
        <Row class="justify-content-around mb-5">
          <div class="col-8 col-lg-2 col-sm-5 px-lg-0">
            <div class="about-me">
              <div class="about-me-thumbnail rounded-circle">
                <img src="~/assets/kapcsolat/litkei-peter.jpg" alt="Litkei Péter">
              </div>
              <!-- about-me-thumbnail -->
              <h6>Litkei Péter</h6>
              <span>Ügyvezető igazgató</span>
              <p><small>litkei.peter@netacademia.net</small></p>
            </div>
            <!-- about-me -->
          </div>
          <!-- col -->
          <div class="col-8 col-lg-2 col-sm-5 px-lg-0">
            <div class="about-me">
              <div class="about-me-thumbnail rounded-circle">
                <img src="~/assets/kapcsolat/foti-marcell.jpg" alt="Fóti Marcell">
                <!-- about-me-hover -->
              </div>
              <!-- about-me-thumbnail -->
              <h6>Fóti Marcell</h6>
              <span>Nem cipész!!!</span>
              <p><small>foti.marcell@netacademia.net</small></p>
            </div>
            <!-- about-me -->
          </div>
        </Row>
      </Container>
    </DFullSection>
  </div>
</template>

<script>
  //TODO: about-me componentet kiszervezno. Most mashova nem kell, ugyhogy jo itt
  import DPageHeader from "@/components/decode/DPageHeader";
  import DFullSection from "@/components/decode/DFullSection";
  import DWidget from "@/components/decode/DWidget";
  import Container from "@/components/base/Container";
  import Row from "@/components/base/Row";
  import Column from "@/components/base/Column";
  import DHeadline from "@/components/decode/DHeadline";

  export default {
    name: "kapcsolat",
    components: {
      DHeadline,
      Column,
      Row,
      Container,
      DFullSection,
      DPageHeader,
      DWidget
    },
    layout: "decode"
  };
</script>

<style scoped>
  .about-me {
    margin-bottom: 50px;
    text-align: center;
  }

  .about-me-thumbnail {
    position: relative;
    overflow: hidden;
    margin-bottom: 50px;
  }

  .about-me-hover a {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #00f0d1;
    background: -webkit-linear-gradient(15deg, #a966ee, #00f0d1);
    background: -ms-linear-gradient(15deg, #a966ee, #00f0d1);
    background: linear-gradient(15deg, #a966ee, #00f0d1);
    color: #fff;
    opacity: 0;
    cursor: url('~/assets/kapcsolat/zoom.png'), auto;
    -webkit-transform: scale(0.5);
    -ms-transform: scale(0.5);
    transform: scale(0.5);
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }

  .about-me-thumbnail.rounded-circle .about-me-hover a {
    border-radius: 50%;
  }

  .about-me h6 {
    margin-bottom: 0;
    font-weight: 600;
  }

  .about-me h6 + span {
    display: inline-block;
    margin-bottom: 20px;
    color: #00f0d1;
    font-size: 13px;
  }

  .about-me > a {
    display: inline-block;
    color: #252525;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1.2px;
    text-decoration: none;
    text-transform: uppercase;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
  }

  .about-me > a:after {
    display: block;
    width: auto;
    height: 2px;
    margin-top: -5px;
    background: #00f0d1;
    background: -webkit-linear-gradient(90deg, #00f0d1, #a966ee);
    background: -ms-linear-gradient(90deg, #00f0d1, #a966ee);
    background: linear-gradient(90deg, #00f0d1, #a966ee);
    content: "";
  }

  .about-me > a:hover {
    color: #00f0d1;
  }

  .about-me:hover .about-me-hover a {
    opacity: 0.7;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  .about-me > *:last-child {
    margin-bottom: 0;
  }

  /* STYLE 2 */
  .about-me.style-2 {
    text-align: left;
  }

  .about-me.style-2 .about-me-thumbnail {
    float: left;
    width: 30%;
    margin-right: 30px;
  }

  .about-me.style-2:after {
    display: table;
    clear: both;
    content: "";
  }

  @media (max-width: 991px) {

    .about-me.style-2 .about-me-thumbnail {
      float: none;
      width: 50%;
    }

  }
</style>
