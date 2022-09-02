<template>
  <div class="sky">
    <div id="cloud" class="cloud1"></div>
    <div id="cloud" class="cloud2"></div>
    <b-row class="rooftop">
      <b-img
        :src="require('~/static/logo-maximatech-300x76.png')"
        fluid
        alt="Logo Maxima"
      ></b-img>
    </b-row>
    <b-container class="building">
      <b-row
        v-for="(floor, floorIndex) in floors"
        :key="`floor-${floorIndex}`"
        class="floor"
      >
        <b-col
          v-for="(window, windowIndex) in floor.windows"
          :key="`floor-${floorIndex}--window-${windowIndex}`"
          class="window"
          cols="4"
        >
          <div
            :class="
              window.solded
                ? 'window_inside solded'
                : 'window_inside not_solded'
            "
            @mouseover="window.hover = true"
            @mouseleave="window.hover = false"
          >
            <transition name="fade">
              <b-img
                v-show="window.hover"
                :src="require(`~/static/${window.src}`)"
                fluid
                alt="Logo Maxima"
                :class="window.link ? 'pointer' : ''"
                @click="goToLink(window.link)"
              />
            </transition>
          </div>
          <div class="parapet">{{ window.parapetName }}</div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'MaximaVerse',
  data() {
    return {
      floors: [
        {
          windows: [
            { src: 'venda.png', hover: false },
            { src: 'venda.png', hover: false },
            { src: 'venda.png', hover: false },
          ],
        },
        {
          windows: [
            { src: 'venda.png', hover: false },
            { src: 'venda.png', hover: false },
            { src: 'venda.png', hover: false },
          ],
        },
        {
          windows: [
            {
              src: 'lifeapps.png',
              hover: false,
              link: 'https://www.kumospace.com/lifeapps',
              parapetName: 'LifeApps',
              solded: true,
            },
            {
              src: 'pedido-de-venda.png',
              hover: false,
              link: 'https://www.kumospace.com/torrepedidodevenda1',
              parapetName: 'Pedido de Venda',
              solded: true,
            },
            {
              src: 'ic_caminhao-180x180.png',
              hover: false,
              link: 'https://www.kumospace.com/logisticamaxima',
              parapetName: 'Logística',
              solded: true,
            },
          ],
        },
      ],
    }
  },
  methods: {
    goToLink(link) {
      if (link) {
        window.open(link, '_blank')
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sky {
  background-color: skyblue;
}

.pointer {
  cursor: pointer;
}

.parapet {
  position: absolute;
  background-color: saddlebrown;
  height: 30px;
  text-align: center;
  color: #ffebb3;
  width: 50%;
  bottom: 0;
  border-radius: 3px;
}

.rooftop {
  margin-top: 50px;
  width: 49vw;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  background-color: #e8e8e8;
  border-radius: 8px;
  display: flex;
  justify-content: center;
}

.building {
  width: 48vw;
  max-width: none;
  height: calc(100vh - 130px);
  margin-left: auto;
  margin-right: auto;
  background-color: silver;
  background-image: linear-gradient(335deg, #b00 23px, transparent 23px),
    linear-gradient(155deg, #d00 23px, transparent 23px),
    linear-gradient(335deg, #b00 23px, transparent 23px),
    linear-gradient(155deg, #d00 23px, transparent 23px);
  background-size: 58px 58px;
  background-position: 0px 2px, 4px 35px, 29px 31px, 34px 6px;
}

.window {
  display: flex;
  justify-content: center;
}

.window_inside {
  background-image: linear-gradient(180deg, #333, #444);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  aspect-ratio: 1 / 1;
  border-radius: 8px;
  -webkit-transition: background 8s;
  transition: background 8s;
}

.solded:hover {
  background-image: linear-gradient(180deg, #ffebb3, rgb(220, 184, 73));
}

.not_solded:hover {
  background-image: linear-gradient(180deg, #982525, rgb(170, 6, 6));
}

.window_inside img {
  max-width: 80%;
}

.floor {
  padding: 50px 30px;
}

#cloud {
  position: absolute;
  background: rgba(255, 255, 255);
  width: 300px;
  height: 100px;
  border-radius: 150px;
  box-shadow: 10px 10px rgba(0, 0, 0, 0.2);
}

.cloud1 {
  top: 150px;
  left: 300px;
  animation: move 8s infinite;
  z-index: 90;
}

.cloud2 {
  top: 300px;
  right: 140px;
  animation: move 8s infinite;
}

#cloud:after {
  content: '';
  background: rgba(255, 255, 255);
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  top: -50px;
  left: 50px;
}

#cloud:before {
  content: '';
  background: rgba(255, 255, 255);
  position: absolute;
  width: 170px;
  height: 150px;
  border-radius: 50%;
  top: -90px;
  right: 40px;
}

@keyframes move {
  0% {
    transform: translatex(0);
  }
  50% {
    transform: translatex(-80px);
  }
}

@media only screen and (max-width: 1024px) {
  .building {
    width: 60vw;
  }

  .rooftop {
    width: 62vw;
  }

  .floor {
    margin: 10px 10px;
    height: 150px;
  }
}

@media only screen and (max-width: 768px) {
  .building {
    width: 70vw;
  }

  .rooftop {
    width: 72vw;
  }

  .floor {
    margin: 10px 10px;
    height: 150px;
  }
}

@media only screen and (max-width: 425px) {
  .building {
    width: 80vw;
  }

  .rooftop {
    width: 82vw;
  }

  .floor {
    margin: 10px 10px;
    height: 80px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
</style>
