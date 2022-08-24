<template>
  <div class="mobile-container">
    <div class="mobile-landingpage1desktop">
      <div class="mobile-header">
        <img
          alt="Logotype"
          src="/playground_assets/icon-1500h.png"
          loading="lazy"
          class="mobile-logotype"
        />
      </div>
      <div class="mobile-container-header">
        <span class="mobile-title">
          <span>Build knowledge that lasts forever.</span>
          <br />
          <br />
        </span>
        <app-button rootClassName="button-root-class-name"></app-button>
        <span class="mobile-read-more">Read more &gt;</span>
        <div class="mobile-i-pad">
          <img
            alt="Shadow2122"
            src="/playground_assets/shadow2122-uoja-300h.png"
            class="mobile-shadow"
          />
          <img
            alt="ChangeColor2122"
            src="/playground_assets/changecolor2122-p8ui.svg"
            class="mobile-change-color"
          />
          <div class="mobile-mockup">
            <div class="mobile-mask2">
              <img
                alt="Vector2122"
                src="/playground_assets/vector2122-etw9.svg"
                class="mobile-vector"
              />
            </div>
            <img
              alt="Screen2123"
              src="/playground_assets/screen2123-9l9n-400w.png"
              class="mobile-screen"
            />
          </div>
          <img
            alt="Shadow2122"
            src="/playground_assets/shadow2122-lla-700h.png"
            class="mobile-shadow1"
          />
          <img
            alt="Reflection2122"
            src="/playground_assets/reflection2122-gd1c-700h.png"
            class="mobile-reflection"
          />
        </div>
      </div>
      <div class="mobile-container0">
        <div class="mobile-text03">
          <span class="mobile-title1">What is Evecloud?</span>
          <span class="mobile-content">
            <span>
              Evecloud is a simple yet powerful platform that utilises a technique
              which is proven to better learn and retain information. It is based
              on
              <span v-html="raw9bmy"></span>
            </span>
            <span class="mobile-text05">spaced repetition</span>
            <span>
              and
              <span v-html="rawymfd"></span>
            </span>
            <span class="mobile-text07">active recall</span>
            <span class="mobile-text08">.</span>
          </span>
        </div>
      </div>
      <div class="mobile-container1">
        <div class="mobile-text09">
          <span class="mobile-title2">1. Faster learning</span>
          <span class="mobile-content1">
            <span>
              Evecloud is a simple yet powerful platform that utilises a technique
              which is proven to better learn and retain information. It is based
              on
              <span v-html="rawzofv"></span>
            </span>
            <span class="mobile-text11">spaced repetition</span>
            <span>
              and
              <span v-html="rawqctv"></span>
            </span>
            <span class="mobile-text13">active recall</span>
            <span class="mobile-text14">.</span>
          </span>
        </div>
        <img
          alt="img-rocket"
          src="/playground_assets/image4725-o31n-1500w.png"
          class="mobile-image"
        />
      </div>
      <div class="mobile-container2">
        <img
          alt="image"
          src="/playground_assets/retain-knowledge.svg"
          class="mobile-image1"
        />
        <div class="mobile-text15">
          <span class="mobile-title3">2. Retain knowledge. </span>
          <span class="mobile-content2">
            Evecloud utilises a technique called spaced repetition to show you the
            right information at the right time in order to retain the knowledge.
          </span>
        </div>
      </div>
      <div class="mobile-footer">
        <div class="mobile-container-content-bottom">
          <span class="mobile-text16">
            <span>Made with ♥ in Sweden</span>
            <br />
            <span>
              © 2021-2022 Martin Jakobsson | Mail: hi@evecloud.io
              <span v-html="rawxjmj"></span>
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '../components/button'

export default {
  name: 'Mobile',
  components: {
    AppButton,
  },

  data() {
    return {
      raw9bmy: ' ',
      rawymfd: ' ',
      rawzofv: ' ',
      rawqctv: ' ',
      rawxjmj: ' ',
    }
  },

  metaInfo: {
    title: 'Evecloud: Knowledge that lasts.',
  },
}
</script>

<style scoped>
.mobile-container {
  min-height: 100vh;
}
.mobile-landingpage1desktop {
  width: 100%;
  height: 4802px;
  display: flex;
  position: relative;
  flex-grow: 1;
  max-width: auto;
  align-self: stretch;
  box-sizing: border-box;
  align-items: center;
  border-color: transparent;
  border-radius: 0px 0px 0px 0px;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 1);
}
.mobile-header {
  width: 100%;
  display: flex;
  padding: 5%;
  position: relative;
  max-width: 800px;
  box-sizing: border-box;
  max-height: 200px;
  align-items: center;
  flex-shrink: 0;
  padding-top: 10%;
  border-color: transparent;
  margin-right: 0;
  padding-left: 10%;
  border-radius: 0px 0px 0px 0px;
  padding-right: 10%;
  padding-bottom: 10%;
  justify-content: center;
}
.mobile-logotype {
  width: 8em;
  height: 8em;
  position: relative;
  align-self: center;
  box-sizing: border-box;
  border-color: transparent;
  margin-right: 0px;
  margin-bottom: 0;
}
.mobile-container-header {
  width: 100%;
  display: flex;
  padding: 5%;
  position: relative;
  max-width: 800px;
  align-self: center;
  box-sizing: border-box;
  max-height: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: 10%;
  border-color: transparent;
  margin-right: 0;
  padding-left: 10%;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0px;
  padding-right: 10%;
  flex-direction: column;
  padding-bottom: 10%;
  justify-content: center;
  background-color: rgba(255, 255, 255, 1);
}
.mobile-title {
  color: var(--dl-color-default-black80);
  height: auto;
  font-size: 3em;
  align-self: auto;
  font-style: Bold;
  text-align: center;
  font-family: Poppins;
  font-weight: 700;
  line-height: 72px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.mobile-read-more {
  color: #52a9ff;
  height: auto;
  font-size: 1em;
  align-self: auto;
  font-style: normal;
  text-align: center;
  font-family: Poppins;
  font-weight: 500;
  line-height: 72px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.mobile-i-pad {
  width: 619px;
  height: 745.9885864257812px;
  display: flex;
  padding: 0;
  position: relative;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.mobile-shadow {
  top: 531.927734375px;
  left: 36.493408203125px;
  width: 582px;
  height: 214px;
  position: absolute;
  box-sizing: border-box;
  border-color: transparent;
}
.mobile-change-color {
  top: 44.22567367553711px;
  left: 70.26698303222656px;
  width: 377px;
  height: 632px;
  position: absolute;
  box-sizing: border-box;
}
.mobile-mockup {
  top: 69.51850891113281px;
  left: 88.99360656738281px;
  width: 325.1972351074219px;
  height: 577.0917358398438px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.mobile-mask2 {
  top: 0px;
  left: 0px;
  width: 325.1972351074219px;
  height: 577.0917358398438px;
  display: flex;
  padding: 0;
  position: absolute;
  align-self: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-shrink: 1;
  border-color: transparent;
  border-style: none;
  border-width: 0;
  border-radius: 0px 0px 0px 0px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: transparent;
}
.mobile-vector {
  top: 0px;
  left: 0px;
  width: 325px;
  height: 577px;
  position: absolute;
  box-sizing: border-box;
}
.mobile-screen {
  top: -3.8280277252197266px;
  left: -1.8378703594207764px;
  width: 330px;
  height: 585px;
  position: absolute;
  box-sizing: border-box;
  border-color: transparent;
}
.mobile-shadow1 {
  top: 44.01141357421875px;
  left: 70.04585266113281px;
  width: 378px;
  height: 632px;
  position: absolute;
  box-sizing: border-box;
  border-color: transparent;
}
.mobile-reflection {
  top: 0px;
  left: 0px;
  width: 378px;
  height: 632px;
  position: absolute;
  box-sizing: border-box;
  border-color: transparent;
}
.mobile-container0 {
  width: var(--dl-size-size-maxwidth);
  display: flex;
  position: relative;
  flex-grow: 1;
  max-width: 800px;
  align-self: center;
  box-sizing: border-box;
  max-height: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: 10%;
  border-color: transparent;
  margin-right: 0;
  padding-left: 10%;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0px;
  padding-right: 10%;
  flex-direction: row;
  padding-bottom: 10%;
  justify-content: center;
}
.mobile-text03 {
  display: flex;
  padding: 0px;
  position: relative;
  flex-grow: 1;
  align-self: center;
  box-sizing: border-box;
  align-items: flex-start;
  border-color: transparent;
  margin-right: 0px;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: column;
  justify-content: center;
}
.mobile-title1 {
  color: var(--dl-color-default-black80);
  width: 100%;
  height: auto;
  font-size: 2.5em;
  align-self: stretch;
  font-style: Bold;
  text-align: left;
  font-family: Poppins;
  font-weight: 700;
  line-height: 42px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0px;
  text-decoration: none;
}
.mobile-content {
  color: var(--dl-color-default-black80);
  width: 100%;
  height: auto;
  font-size: 1em;
  align-self: center;
  font-style: Regular;
  text-align: left;
  font-family: Poppins;
  font-weight: 400;
  line-height: 42px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.mobile-container1 {
  width: var(--dl-size-size-maxwidth);
  display: flex;
  position: relative;
  flex-grow: 1;
  max-width: 800px;
  align-self: center;
  box-sizing: border-box;
  max-height: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: 10%;
  border-color: transparent;
  margin-right: 0;
  padding-left: 10%;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0px;
  padding-right: 10%;
  padding-bottom: 10%;
  justify-content: center;
}
.mobile-text09 {
  display: flex;
  padding: 0px;
  position: relative;
  flex-grow: 1;
  align-self: center;
  box-sizing: border-box;
  align-items: flex-start;
  border-color: transparent;
  margin-right: 0px;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: column;
  justify-content: center;
}
.mobile-title2 {
  color: var(--dl-color-default-black80);
  width: 100%;
  height: auto;
  font-size: 2.5em;
  align-self: stretch;
  font-style: Bold;
  text-align: left;
  font-family: Poppins;
  font-weight: 700;
  line-height: 42px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0px;
  text-decoration: none;
}
.mobile-content1 {
  color: var(--dl-color-default-black80);
  width: 100%;
  height: auto;
  font-size: 1em;
  align-self: center;
  font-style: Regular;
  text-align: left;
  font-family: Poppins;
  font-weight: 400;
  line-height: 42px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
.mobile-image {
  width: 8em;
  height: 8em;
  position: relative;
  box-sizing: border-box;
  border-color: transparent;
  margin-right: 0px;
  margin-bottom: 0;
}
.mobile-container2 {
  width: var(--dl-size-size-maxwidth);
  display: flex;
  position: relative;
  flex-grow: 1;
  max-width: 800px;
  align-self: center;
  box-sizing: border-box;
  max-height: var(--dl-size-size-maxwidth);
  align-items: center;
  padding-top: 10%;
  border-color: transparent;
  margin-right: 0;
  padding-left: 10%;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0px;
  padding-right: 10%;
  padding-bottom: 10%;
  justify-content: center;
}
.mobile-image1 {
  width: 8em;
  height: 8em;
  object-fit: cover;
  margin-right: 42px;
}
.mobile-text15 {
  display: flex;
  position: relative;
  flex-grow: 1;
  align-self: center;
  box-sizing: border-box;
  align-items: flex-start;
  padding-top: 0px;
  border-color: transparent;
  margin-right: 0px;
  padding-left: 0px;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  padding-right: 0px;
  flex-direction: column;
  padding-bottom: 0px;
  justify-content: center;
}
.mobile-title3 {
  color: var(--dl-color-default-black80);
  width: 100%;
  height: auto;
  font-size: 42px;
  align-self: stretch;
  font-style: Bold;
  text-align: left;
  font-family: Poppins;
  font-weight: 700;
  line-height: 42px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0px;
  text-decoration: none;
}
.mobile-content2 {
  color: var(--dl-color-default-black80);
  height: auto;
  font-size: 18px;
  align-self: stretch;
  font-style: Regular;
  text-align: left;
  font-family: Poppins;
  font-weight: 400;
  line-height: 42px;
  font-stretch: normal;
  text-decoration: none;
}
.mobile-footer {
  width: var(--dl-size-size-maxwidth);
  height: auto;
  display: flex;
  max-width: 800px;
  align-self: center;
  box-sizing: border-box;
  max-height: var(--dl-size-size-maxwidth);
  align-items: center;
  flex-shrink: 0;
  padding-top: 10%;
  border-color: transparent;
  padding-left: 10%;
  border-radius: 0px 0px 0px 0px;
  padding-right: 10%;
  flex-direction: column;
  padding-bottom: 10%;
  justify-content: center;
  background-color: rgba(255, 255, 255, 1);
}
.mobile-container-content-bottom {
  display: flex;
  position: relative;
  flex-grow: 1;
  align-self: center;
  box-sizing: border-box;
  align-items: center;
  border-color: transparent;
  margin-right: 0;
  border-radius: 0px 0px 0px 0px;
  margin-bottom: 0;
  flex-direction: column;
  justify-content: center;
}
.mobile-text16 {
  color: var(--dl-color-default-black80);
  height: auto;
  flex-grow: 1;
  font-size: 1em;
  align-self: center;
  font-style: Regular;
  text-align: center;
  font-family: Poppins;
  font-weight: 400;
  line-height: 32px;
  font-stretch: normal;
  margin-right: 0;
  margin-bottom: 0;
  text-decoration: none;
}
@media(max-width: 1600px) {
  .mobile-header {
    width: 100%;
    padding: 5%;
    align-self: center;
    max-height: 200px;
    align-items: center;
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10%;
    justify-content: center;
  }
  .mobile-logotype {
    width: 8em;
    height: 8em;
  }
  .mobile-container-header {
    align-self: center;
    max-height: var(--dl-size-size-maxwidth);
    align-items: center;
    padding-top: 10%;
    margin-right: 0px;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10%;
    justify-content: center;
  }
  .mobile-title {
    color: var(--dl-color-default-black80);
    font-size: 3em;
  }
  .mobile-read-more {
    color: #1f98ff;
    width: 100%;
    height: auto;
    font-size: 1em;
    align-self: center;
    font-style: normal;
    text-align: center;
    font-family: Poppins;
    font-weight: 500;
    line-height: 72px;
    text-decoration: none;
  }
  .mobile-container0 {
    width: 100%;
    align-self: center;
    max-height: var(--dl-size-size-maxwidth);
    align-items: center;
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10%;
  }
  .mobile-text03 {
    padding-left: 0px;
    padding-right: 0px;
  }
  .mobile-title1 {
    width: 100%;
    font-size: 2.5em;
    align-self: center;
  }
  .mobile-content {
    width: 100%;
    font-size: 1em;
    align-self: center;
    text-transform: lowercase;
  }
  .mobile-container1 {
    width: 100%;
    align-self: center;
    max-height: var(--dl-size-size-maxwidth);
    align-items: center;
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10%;
  }
  .mobile-text09 {
    padding-left: 0px;
    padding-right: 0px;
  }
  .mobile-title2 {
    width: 100%;
    font-size: 2.5em;
    align-self: center;
  }
  .mobile-content1 {
    width: 100%;
    font-size: 1em;
    align-self: center;
    text-transform: lowercase;
  }
  .mobile-image {
    width: 8em;
    height: 8em;
    margin-left: 42px;
    margin-right: 0px;
  }
  .mobile-container2 {
    width: 1528px;
    align-self: center;
    max-height: var(--dl-size-size-maxwidth);
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10%;
  }
  .mobile-image1 {
    width: 8em;
    height: 8em;
    margin-right: 42px;
  }
  .mobile-text15 {
    align-self: center;
    padding-left: 0px;
    padding-right: 0px;
  }
  .mobile-title3 {
    width: 100%;
    font-size: 2.5em;
    align-self: center;
  }
  .mobile-content2 {
    font-size: 1em;
    align-self: center;
  }
  .mobile-footer {
    width: 100%;
    height: auto;
    align-self: center;
    max-height: var(--dl-size-size-maxwidth);
    align-items: center;
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10%;
    justify-content: center;
  }
  .mobile-container-content-bottom {
    width: 100%;
    height: 100%;
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  .mobile-text16 {
    width: 100%;
    height: 100%;
    font-size: 1em;
    align-self: center;
  }
}
@media(max-width: 1200px) {
  .mobile-header {
    width: 100%;
    align-self: center;
    align-items: center;
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10%;
    justify-content: center;
  }
  .mobile-logotype {
    width: 8em;
    height: 8em;
    align-self: center;
  }
  .mobile-container-header {
    width: 100%;
    align-self: center;
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10%;
  }
  .mobile-title {
    color: var(--dl-color-default-black80);
    width: 100%;
    align-self: center;
  }
  .mobile-read-more {
    width: 100%;
    font-size: 1em;
    align-self: center;
  }
  .mobile-container0 {
    width: 100%;
    height: auto;
    align-self: center;
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10%;
  }
  .mobile-text03 {
    align-self: center;
    align-items: flex-start;
    padding-left: 0px;
    padding-right: 0px;
    justify-content: center;
  }
  .mobile-title1 {
    width: 100%;
  }
  .mobile-content {
    color: rgb(19, 20, 21);
    font-size: 18px;
    font-family: Poppins;
    font-weight: 400;
    line-height: 42px;
    text-transform: lowercase;
    text-decoration: none;
  }
  .mobile-text05 {
    font-weight: 700;
  }
  .mobile-text07 {
    font-weight: 700;
  }
  .mobile-text08 {
    font-weight: 700;
  }
  .mobile-container1 {
    width: 100%;
    height: auto;
    align-self: center;
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10%;
  }
  .mobile-text09 {
    align-self: center;
    padding-left: 0px;
    padding-right: 0px;
  }
  .mobile-title2 {
    width: 100%;
  }
  .mobile-content1 {
    color: rgb(19, 20, 21);
    font-size: 18px;
    font-family: Poppins;
    font-weight: 400;
    line-height: 42px;
    text-transform: lowercase;
    text-decoration: none;
  }
  .mobile-text11 {
    font-weight: 700;
  }
  .mobile-text13 {
    font-weight: 700;
  }
  .mobile-text14 {
    font-weight: 700;
  }
  .mobile-image {
    width: 8em;
    height: 8em;
    align-self: center;
    margin-right: 0px;
  }
  .mobile-container2 {
    width: 100%;
    height: auto;
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10%;
  }
  .mobile-image1 {
    width: 8em;
    height: 8em;
  }
  .mobile-text15 {
    padding-left: 0px;
    padding-right: 0px;
  }
  .mobile-title3 {
    width: 100%;
  }
  .mobile-content2 {
    width: 100%;
    align-self: stretch;
  }
  .mobile-footer {
    width: 100%;
    align-self: center;
    align-items: center;
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10%;
    justify-content: center;
  }
  .mobile-container-content-bottom {
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  .mobile-text16 {
    font-size: 1em;
  }
}
@media(max-width: 991px) {
  .mobile-header {
    align-self: center;
    align-items: center;
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    flex-direction: row;
    padding-bottom: 10%;
    justify-content: center;
  }
  .mobile-logotype {
    width: 8em;
  }
  .mobile-container-header {
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10%;
  }
  .mobile-title {
    color: var(--dl-color-default-black80);
    width: 100%;
    font-size: 3em;
    align-self: center;
    text-align: center;
    font-family: Poppins;
    font-weight: 700;
    line-height: 72px;
    text-decoration: none;
  }
  .mobile-read-more {
    width: 100%;
    font-size: 1em;
    align-self: center;
    text-align: center;
  }
  .mobile-container0 {
    height: auto;
    align-self: center;
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10%;
  }
  .mobile-text03 {
    width: auto;
    align-self: center;
    border-color: var(--dl-color-gray-black);
    border-width: 0px;
    padding-left: 0px;
    padding-right: 0px;
  }
  .mobile-title1 {
    color: var(--dl-color-default-black80);
    width: 100%;
    font-size: 2em;
  }
  .mobile-content {
    color: var(--dl-color-default-black80);
    width: 100%;
    font-size: 1em;
  }
  .mobile-container1 {
    height: auto;
    align-self: center;
    align-items: center;
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    flex-direction: row;
    padding-bottom: 10%;
    justify-content: center;
  }
  .mobile-text09 {
    width: 100%;
    height: 100%;
    align-self: center;
    border-color: var(--dl-color-gray-black);
    border-width: 0px;
    padding-left: 0px;
    padding-right: 0px;
  }
  .mobile-title2 {
    color: var(--dl-color-default-black80);
    width: 100%;
    font-size: 2em;
  }
  .mobile-content1 {
    color: var(--dl-color-default-black80);
    width: 100%;
    font-size: 1em;
  }
  .mobile-image {
    width: 8em;
    height: 8em;
    align-self: center;
    margin-left: 24px;
  }
  .mobile-container2 {
    height: auto;
    align-self: center;
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10%;
  }
  .mobile-image1 {
    width: 8em;
    height: 8em;
    margin-right: 24px;
  }
  .mobile-text15 {
    width: 100%;
    height: 100%;
    align-self: center;
    padding-left: 0px;
    padding-right: 0px;
    flex-direction: column;
  }
  .mobile-title3 {
    color: var(--dl-color-default-black80);
    width: 100%;
    font-size: 2em;
    align-self: center;
    font-family: Poppins;
    font-weight: 700;
    line-height: 42px;
    text-decoration: none;
  }
  .mobile-content2 {
    color: var(--dl-color-default-black80);
    width: 100%;
    font-size: 1em;
    align-self: stretch;
    font-family: Poppins;
    font-weight: 400;
    line-height: 42px;
    text-decoration: none;
  }
  .mobile-footer {
    height: auto;
    align-self: center;
    align-items: center;
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    flex-direction: column;
    padding-bottom: 10%;
    justify-content: center;
  }
  .mobile-container-content-bottom {
    width: 100%;
    height: 100%;
    align-self: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .mobile-text16 {
    width: 100%;
    font-size: 1em;
    font-style: normal;
    text-align: center;
    font-weight: 400;
  }
}
@media(max-width: 479px) {
  .mobile-header {
    width: 100%;
    height: auto;
    position: 0px;
    max-width: var(--dl-size-size-maxwidth);
    margin-top: 0px;
    align-items: center;
    margin-left: 0px;
    padding-top: 0px;
    margin-right: 0px;
    padding-left: 0px;
    margin-bottom: 0px;
    padding-right: 0px;
    flex-direction: column;
    padding-bottom: 0px;
    justify-content: center;
  }
  .mobile-container2 {
    width: 100%;
    height: 100%;
    position: 0px;
    max-width: var(--dl-size-size-maxwidth);
    margin-top: 0px;
    align-items: center;
    margin-left: 0px;
    padding-top: 0px;
    margin-right: 0px;
    padding-left: 0px;
    margin-bottom: 0px;
    padding-right: 0px;
    flex-direction: row;
    padding-bottom: 0px;
    justify-content: center;
  }
  .mobile-footer {
    width: 100%;
    height: auto;
    position: 0px;
    max-width: var(--dl-size-size-maxwidth);
    align-self: center;
    margin-top: 0px;
    align-items: center;
    margin-left: 0px;
    padding-top: 0px;
    margin-right: 0px;
    padding-left: 0px;
    margin-bottom: 0px;
    padding-right: 0px;
    flex-direction: row;
    padding-bottom: 0px;
    justify-content: center;
  }
}
@media(max-width: 390px) {
  .mobile-header {
    height: auto;
    max-width: 800px;
    align-self: center;
    align-items: center;
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    flex-direction: column;
    padding-bottom: 10%;
    justify-content: center;
  }
  .mobile-logotype {
    width: 8em;
    height: 8em;
  }
  .mobile-container-header {
    width: 100%;
    max-width: 800px;
    align-self: center;
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10%;
  }
  .mobile-title {
    color: var(--dl-color-default-black80);
    width: 100%;
    height: auto;
    font-size: 3em;
    align-self: center;
    text-align: center;
  }
  .mobile-read-more {
    width: 100%;
    height: auto;
    font-size: 1em;
    align-self: center;
  }
  .mobile-i-pad {
    display: none;
  }
  .mobile-container0 {
    height: auto;
    max-width: 800px;
    align-self: center;
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10%;
  }
  .mobile-text03 {
    width: auto;
    align-self: center;
  }
  .mobile-title1 {
    color: rgba(0, 0, 0, 0.8);
    font-size: 2em;
    align-self: center;
    font-style: normal;
    font-weight: 700;
  }
  .mobile-content {
    color: rgba(0, 0, 0, 0.8);
    font-size: 1em;
    align-self: center;
    font-style: normal;
    font-weight: 400;
  }
  .mobile-container1 {
    height: auto;
    max-width: 800px;
    align-self: center;
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10%;
  }
  .mobile-text09 {
    width: auto;
    align-self: center;
  }
  .mobile-title2 {
    color: rgba(0, 0, 0, 0.8);
    font-size: 3em;
    align-self: center;
    font-style: normal;
    font-family: Poppins;
    font-weight: 700;
    line-height: 42px;
    text-decoration: none;
  }
  .mobile-content1 {
    color: rgba(0, 0, 0, 0.8);
    font-size: 1em;
    align-self: center;
    font-style: normal;
    font-weight: 400;
  }
  .mobile-image {
    width: 72px;
    height: 72px;
    margin-left: 0px;
    margin-right: 0px;
  }
  .mobile-container2 {
    height: auto;
    position: 0px;
    max-width: 800px;
    align-self: center;
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 10%;
  }
  .mobile-image1 {
    display: none;
  }
  .mobile-text15 {
    width: 100%;
    align-self: center;
  }
  .mobile-title3 {
    color: rgba(0, 0, 0, 0.8);
    width: 100%;
    font-size: 2.5em;
    align-self: stretch;
    font-style: normal;
    text-align: left;
    font-weight: 700;
  }
  .mobile-content2 {
    color: rgba(0, 0, 0, 0.8);
    width: 100%;
    font-size: 1em;
  }
  .mobile-footer {
    height: auto;
    max-width: 800px;
    align-self: center;
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    flex-direction: column;
    padding-bottom: 10%;
  }
  .mobile-container-content-bottom {
    width: 100%;
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  .mobile-text16 {
    color: rgba(0, 0, 0, 0.8);
    font-size: 1em;
    text-align: center;
    padding-top: 0%;
    padding-left: 0%;
    padding-right: 0%;
    padding-bottom: 0%;
  }
}
@media(max-width: 320px) {
  .mobile-landingpage1desktop {
    height: 100%;
    max-width: var(--dl-size-size-maxwidth);
    min-height: 128px;
  }
  .mobile-header {
    width: 100%;
    height: auto;
    padding: 10%;
    max-width: 800px;
    align-self: flex-start;
    max-height: 200px;
    min-height: auto;
    align-items: center;
    padding-top: 10%;
    padding-left: 10%;
    padding-right: 10%;
    flex-direction: row;
    padding-bottom: 10%;
    justify-content: center;
  }
  .mobile-logotype {
    width: 8em;
    height: 8em;
    align-self: center;
    margin-left: 0px;
  }
  .mobile-container-header {
    width: 100%;
    height: 100%;
    margin: 24pxpx;
    padding: 10%;
    position: 0px;
    max-width: 800px;
    align-self: center;
    margin-top: 0px;
    min-height: 0px;
    align-items: center;
    margin-left: 0px;
    padding-top: 10%;
    margin-right: 0px;
    padding-left: 10%;
    margin-bottom: 0px;
    padding-right: 10%;
    flex-direction: column;
    padding-bottom: 10%;
    justify-content: center;
  }
  .mobile-title {
    color: var(--dl-color-default-black80);
    font-size: 3em;
    padding-left: 0px;
    padding-right: 0px;
  }
  .mobile-read-more {
    font-size: 1em;
  }
  .mobile-i-pad {
    width: 100%;
    height: 100%;
    align-self: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .mobile-container0 {
    width: 100%;
    height: 100%;
    padding: 10%;
    position: 0px;
    max-width: 800px;
    align-self: center;
    margin-top: 0px;
    min-height: 0px;
    align-items: center;
    margin-left: 0px;
    padding-top: 0px;
    margin-right: 0px;
    padding-left: 0px;
    margin-bottom: 0px;
    padding-right: 0px;
    flex-direction: row;
    padding-bottom: 0px;
    justify-content: center;
  }
  .mobile-text03 {
    width: 100%;
    height: 100%;
    align-self: center;
    align-items: center;
    padding-top: 10%;
    border-width: 0px;
    padding-left: 10%;
    padding-right: 10%;
    flex-direction: column;
    padding-bottom: 10%;
    justify-content: center;
  }
  .mobile-title1 {
    color: var(--dl-color-default-black80);
    width: 100%;
    font-size: 42px;
    align-self: center;
    font-family: Poppins;
    font-weight: 700;
    line-height: 42px;
    text-decoration: none;
  }
  .mobile-content {
    color: var(--dl-color-default-black80);
    width: 100%;
    font-size: 18px;
    align-self: center;
    font-family: Poppins;
    font-weight: 400;
    line-height: 42px;
    text-decoration: none;
  }
  .mobile-text05 {
    font-weight: 700;
  }
  .mobile-text07 {
    font-weight: 700;
  }
  .mobile-container1 {
    width: 100%;
    height: 100%;
    padding: 10%;
    position: 0px;
    max-width: 800px;
    align-self: center;
    margin-top: 0px;
    min-height: 0px;
    align-items: center;
    margin-left: 0px;
    padding-top: 0px;
    margin-right: 0px;
    padding-left: 0px;
    margin-bottom: 0px;
    padding-right: 0px;
    flex-direction: row;
    padding-bottom: 0px;
    justify-content: center;
  }
  .mobile-text09 {
    width: 100%;
    height: 100%;
    padding: 10%;
    align-self: center;
    align-items: center;
    border-width: 0px;
    flex-direction: column;
    justify-content: center;
  }
  .mobile-title2 {
    color: var(--dl-color-default-black80);
    width: 100%;
    font-size: 42px;
    align-self: center;
    font-family: Poppins;
    font-weight: 700;
    line-height: 42px;
    text-decoration: none;
  }
  .mobile-content1 {
    color: var(--dl-color-default-black80);
    width: 100%;
    font-size: 18px;
    align-self: center;
    font-family: Poppins;
    font-weight: 400;
    line-height: 42px;
    text-decoration: none;
  }
  .mobile-text11 {
    font-weight: 700;
  }
  .mobile-text13 {
    font-weight: 700;
  }
  .mobile-image {
    width: 100%;
    height: auto;
    display: none;
    align-self: center;
    margin-left: 0px;
    margin-right: 0px;
  }
  .mobile-container2 {
    height: 100%;
    margin: 0px;
    padding: 10%;
    max-width: 800px;
    align-self: center;
    min-height: 0px;
    align-items: center;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    justify-content: center;
  }
  .mobile-image1 {
    width: var(--dl-size-size-large);
    display: none;
    margin-left: 0px;
    margin-right: 0px;
  }
  .mobile-text15 {
    width: 100%;
    height: auto;
    align-self: center;
    align-items: center;
    margin-left: 0px;
    padding-top: 128px;
    margin-right: 0x;
    padding-left: 24px;
    padding-right: 24px;
    flex-direction: column;
    padding-bottom: 128px;
    justify-content: center;
  }
  .mobile-title3 {
    align-self: center;
    margin-right: 0px;
  }
  .mobile-content2 {
    align-self: center;
  }
  .mobile-footer {
    padding: 10%;
    max-width: 800px;
    align-self: center;
    min-height: 0px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .mobile-container-content-bottom {
    align-self: center;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
  .mobile-text16 {
    color: rgb(19, 20, 21);
    font-size: 1em;
    align-self: center;
    font-family: Poppins;
    font-weight: 400;
    line-height: 32px;
    padding-top: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    text-decoration: none;
  }
}
</style>
