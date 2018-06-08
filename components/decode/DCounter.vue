<template>
  <div class="counter">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "DCounter"
};
</script>

<style lang="scss">
.counter {
  margin-bottom: 50px;
  text-align: center;
  color: #fff;
  opacity: 0.95;

  i {
    display: inline-block;
    margin-bottom: 20px;
    color: #c2c2c2;
    font-size: 70px;
    line-height: 70px;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
  }

  &.small-icon i {
    margin-bottom: 10px;
    font-size: 42px;
    line-height: 42px;
  }

  .counter-value {
    color: #ffffff;
    font-size: 65px;
    line-height: 90px;
    font-weight: 300;
  }

  .counter-value:before {
    content: attr(data-symbol-before);
  }

  .counter-value:after {
    content: attr(data-symbol-after);
  }

  .counter-details {
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .counter-details h6 {
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
  }

  &:hover i {
    color: #00f0d1;
    background: -webkit-linear-gradient(51deg, #00f0d1, #a966ee);
    background: -ms-linear-gradient(51deg, #00f0d1, #a966ee);
    background: linear-gradient(51deg, #00f0d1, #a966ee);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &.style-2 {
    text-align: left;
  }

  &.style-2 i {
    display: block;
    margin-bottom: 20px;
    color: #00f0d1;
  }

  &.style-2 .counter-value {
    float: left;
  }

  &.style-2 .counter-details {
    padding-top: 15px;
    margin-left: 140px;
    font-weight: 400;
    text-transform: none;
    text-align: left;
  }

  @media (min-width: 1600px) {
    &.style-2 {
      text-align: center;
    }

    &.style-2 i {
      float: left;
      margin-right: 15px;
    }

    &.style-2 .counter-details {
      margin-left: 230px;
    }
  }

  @media (max-width: 991px) {
    &.style-2 {
      text-align: center;
    }

    &.style-2 .counter-value {
      float: none;
    }

    &.style-2 .counter-details {
      margin-left: 0;
      text-align: center;
    }
  }
}

/* ODOMETER */
.odometer-container {
  margin-bottom: 50px;
  text-align: center;

  i {
    display: block;
    margin-bottom: 15px;
    color: #00f0d1;
    font-size: 48px;
    line-height: 48px;
    -webkit-transition: all 0.25s;
    transition: all 0.25s;
  }

  .odometer:after,
  .odometer:before {
    color: #252525;
    font: 300 72px/72px "Open Sans", sans-serif;
    vertical-align: middle;
  }

  .odometer:before {
    content: attr(data-symbol-before);
  }

  .odometer:after {
    content: attr(data-symbol-after);
  }

  .odometer-inside {
    display: inline-block;
  }

  .odometer-digit {
    margin-top: 6px;
    color: #252525;
    font: 300 72px/72px "Open Sans", sans-serif;
  }

  .odometer-formatting-mark {
    display: none;
  }

  .odometer-details {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
  }
}

/* DARK SECTION */
.full-section.dark-section .counter i,
.full-section.dark-section .counter-value,
.full-section.dark-section .odometer-digit,
.full-section.dark-section .odometer:after,
.full-section.dark-section .odometer:before {
  color: inherit;
}
</style>
