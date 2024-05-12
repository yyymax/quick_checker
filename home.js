//ホーム画面の表示と「診断スタート」クリックでQ１へ飛ぶ関数
str-btn.addEventListener('click', () => {
  resultContainer.classList.add('hide')
  startButton.classList.remove('hide')
  currentQuestionIndex = 0;
  scoreArray = [];
  resetState()
})
