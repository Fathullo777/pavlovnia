document.addEventListener("DOMContentLoaded", () => {
  const growthSlider = document.getElementById("growth-slider");
  const treeHeightElement = document.getElementById("tree-height");
  const carbonAmount = document.getElementById("carbon-amount");
  const waterNeeded = document.getElementById("water-needed");
  const growthProgress = document.getElementById("growth-progress");
  const challengeButton = document.getElementById("challenge-button");
  const treeTrunk = document.getElementById("tree-trunk");
  const growthTimeElement = document.getElementById("growth-time");
  const carbonAbsorbedElement = document.getElementById("carbon-absorbed");

  // Функция для обновления роста дерева, времени и поглощенного углекислого газа
  function updateTreeGrowth() {
    const newHeight = growthSlider.value;
    treeHeightElement.textContent = newHeight + " см";

    // Рассчитываем углекислый газ
    const carbon = (newHeight * 0.02).toFixed(2);  // 0.02 кг CO2 за 1 см роста
    carbonAmount.textContent = carbon + " кг";

    // Рассчитываем воду для роста
    const water = (newHeight * 0.1).toFixed(2);  // 0.1 литра на 1 см роста
    waterNeeded.textContent = water + " литров";

    // Плавно изменяем высоту ствола
    treeTrunk.style.height = newHeight + "px";

    // Расчет времени роста
    const months = Math.floor((newHeight - 50) / 10) + 16; // 16 месяцев начальный период
    const years = Math.floor(months / 12);
    const monthsLeft = months % 12;
    growthTimeElement.textContent = `${years} лет ${monthsLeft} месяцев`;

    // Расчет поглощенного углекислого газа
    const carbonAbsorbed = ((newHeight - 50) * 0.05).toFixed(2); // 0.05 кг CO2 за 1 см роста
    carbonAbsorbedElement.textContent = `Углекислый газ поглощен: ${carbonAbsorbed} кг`;
  }

  // Обработчик для слайдера
  growthSlider.addEventListener("input", updateTreeGrowth);

  // Инициализация слайдера при загрузке страницы
  updateTreeGrowth();

  // Челлендж
  challengeButton.addEventListener("click", () => {
    const startHeight = parseInt(growthSlider.value, 10);
    const goalHeight = 500;  // Максимальная высота дерева

    if (startHeight < goalHeight) {
      growthProgress.textContent = `${startHeight / 100} метров`;
      alert("Успех! Ваше дерево растет!");
    } else {
      alert("Поздравляем! Ваше дерево достигло своей максимальной высоты!");
    }
  });
});
