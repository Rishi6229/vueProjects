<template>
  <div id="wrapper">
    <food-item
      food-name="Apples"
      food-desc="One of the best fruits out there, each as much as you like"
      :is-favorite-="true"
    />
    <food-item
      food-name="Pizza"
      food-desc="Literally a piece of Dogshit"
      :is-favorite-="false"
    />
    <food-item
      food-name="Paratha"
      food-desc="Pride of India , each as much as you like"
      :is-favorite-="true"
    />
    <food-item
      food-name="Burger"
      food-desc="Another Piece of Dogshit"
      :is-favorite-="false"
    />
  </div>

  <div id="wrapper-2">
    
    <p>This is a section for supplement</p>
    <supplement-item
      supplement-name="Whey Protein"
      supplement-desc="One of the best protein sources out there"
    />
    <supplement-item
      supplement-name="Creatine Monohydrate"
      supplement-desc="Safest and most researched supplement"
    />
    <supplement-item
      supplement-name="Citruline Malate"
      supplement-desc="Increases the blood flow in the veins."
    />
    <supplement-item
      supplement-name="Fat Burners"
      supplement-desc="Another peice of dog shit."
    />
  </div>
</template>

<style>
#app > div {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
}

#app > div:hover {
  cursor: pointer;
}
</style>
