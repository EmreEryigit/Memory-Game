import { createSlice } from "@reduxjs/toolkit";
const imgs = [
  {
    src: "https://angular.io/assets/images/logos/angular/angular.svg",
    matched: false,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    matched: false,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
    matched: false,
  },
  {
    src: "https://erdincuzun.com/wp-content/uploads/svg/nodejs.svg",
    matched: false,
  },
  {
    src: "https://camo.githubusercontent.com/92ec9eb7eeab7db4f5919e3205918918c42e6772562afb4112a2909c1aaaa875/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313630373535343338352f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6c6f676f2e706e67",
    matched: false,
  },
  {
    src: "http://store-images.s-microsoft.com/image/apps.26737.9007199266244427.c75d2ced-a383-40dc-babd-1ad2ceb13c86.ed1d047e-03d9-4cd8-a342-c4ade1e58951",
    matched: false,
  },


];

const memoSlice = createSlice({
  name: "memo",
  initialState: {
    cards: [],
    selectedCards: [],
    choice1: null,
    choice2: null,
    puan: 0
  },
  reducers: {
    shuffleCard: (state, action) => {
      let shuffledCards = [...imgs, ...imgs]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));
        state.cards = shuffledCards;
        state.puan = 0
    },
    handleChoice: (state, action) => {
      if (!state.choice1) {
        state.choice1 = action.payload;
      } else if (!state.choice2) {
        state.choice2 = action.payload;
      }
    },
    
    validateCards: (state, action) => {
      if (state.choice1 && state.choice2) {
        if (state.choice1.src === state.choice2.src) {
            state.cards =  state.cards.map(card => card.src === state.choice1.src ? {...card, matched: true}: card)
            state.puan += 50;
        } else {
            state.puan -= 10;
        }
        state.choice1 = null;
        state.choice2 = null;
        
      }
    },
    
  },
});

export default memoSlice;
export const memoSliceActions = memoSlice.actions;
