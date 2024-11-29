document.addEventListener("DOMContentLoaded", () => {
    const growthSlider = document.getElementById("growth-slider");
    const treeHeight = document.getElementById("tree-height");
    const carbonAmount = document.getElementById("carbon-amount");
    const waterNeeded = document.getElementById("water-needed");
    const growthProgress = document.getElementById("growth-progress");
    const challengeButton = document.getElementById("challenge-button");
    const treeTrunk = document.getElementById("tree-trunk");
  
    growthSlider.addEventListener("input", (e) => {
      const newHeight = e.target.value;
      treeHeight.textContent = newHeight + " см";
      
      // Рассчитываем углекислый газ (пример)
      const carbon = (newHeight * 0.02).toFixed(2);
      carbonAmount.textContent = carbon + " кг";
      
      // Рассчитываем воду для роста
      const water = (newHeight * 0.1).toFixed(2);
      waterNeeded.textContent = water + " литров";
      
      // Плавно изменяем высоту ствола
      treeTrunk.style.height = newHeight + "px";
    });
  
    challengeButton.addEventListener("click", () => {
      const startHeight = parseInt(growthSlider.value, 10);
      const goalHeight = 500;
  
      if (startHeight < goalHeight) {
        growthProgress.textContent = `${startHeight / 100} метров`;
        alert("Успех! Ваше дерево растет!");
      } else {
        alert("Поздравляем! Ваше дерево достигло своей максимальной высоты!");
      }
    });
  });
  