
//ボタンを押すごとに画面が切り替わる関数
$(function () {
    $(".btn").on("click", function () {
      //btnクラスをクリック後の関数処理
      $(this).closest("div").css("display", "none");
      //質問画面にあたらる親要素divをdisplay:none;にする
      id = $(this).attr("href");
      //次の質問hrefをidに格納
      $(id).addClass("fit").fadeIn("slow").show();
      //次の質問にfitをつけて出力。
    });

    //選択ボタンデータを配列に入れてカウントする関数
    var countA;
    //data-value="a"を選択した数を入れる変数
    var countB;
    //data-value="b"を選択した数を入れる変数
    var countC;
    //data-value="c"を選択した数を入れる変数
    var countD;
    //data-value="d"を選択した数を入れる変数
    var countE;
    //data-value="e"を選択した数を入れる変数
    var box =[];
    //それぞれのデータを配列に入れるための変数box
  $(".btn").each(function(){
    $(this).on('click',function(){
      var value = $(this).data("value");
       box.push(value);
       //data-value値をboxに入れる。(配列に値を入れるときはpush()を使用)

      countA = box.filter(function(A){
                    return A === "a"
                  }).length;
      //aの数を変数countAへ入れる
      countB = box.filter(function(B){
                      return B === "b"
                  }).length;
      //bの数を変数countBへ入れる
      countC = box.filter(function(C){
                    return C === "c"
                  }).length;
      //cの数を変数countCへ入れる
      countD = box.filter(function(D){
                      return D === "d"
                  }).length;
      //eの数を変数countDへ入れる
      countE = box.filter(function(E){
                      return E === "e"
    }).length;
      //dの数を変数countEへ入れる
    });
  });

//結果を出力する関数
$('.end').on('click',function(){
    //endクラスをクリックしたときの関数
    var val_max= Math.max(countA, countB, countC, countD, countE)
    if(val_max === countA) {
      $('#answer_01').css("display",""); //回答1
    //answer_01のdisplayを""へ
    }

    else if (val_max === countB) {
      $('#answer_02').css("display","");//回答2
    //answer_02のdisplayを""へ
    }

    else if (val_max === countC) {
      $('#answer_03').css("display","");//回答3
    //answer_03のdisplayを""へ
    }

    else if (val_max === countD) {
      $('#answer_04').css("display","");//回答4
    //answer_04のdisplayを""へ
    }

    else {
      $('#answer_05').css("display","");//回答5
    //answer_05のdisplayを""へ
  }

// もう一度診断する、ホーム画面に戻る
res-btn, home-btn.addEventListener('click', () => {
  resultContainer.classList.add('hide')
  startButton.classList.remove('hide')
  currentQuestionIndex = 0;
  scoreArray = [];
  resetState()
})

})});
