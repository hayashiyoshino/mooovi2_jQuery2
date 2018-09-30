$(function() {
  $(".search__query").on("keyup", function() {
    // テキストフィールドにキーが入力されたら関数実行
    var input = $(".search__query").val();
    // テキストフィールドに入力された値を取得し、inputという変数に代入
    console.log(input);
  });
});
