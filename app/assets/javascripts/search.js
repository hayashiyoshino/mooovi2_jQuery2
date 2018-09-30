$(function() {
  $(".search__query").on("keyup", function() {
    // テキストフィールドにキーが入力されたら関数実行
    var input = $(".search__query").val();
    // テキストフィールドに入力された値を取得し、inputという変数に代入
    $.ajax({
      // ajax通信を行う
      type: 'GET',
      // HTTPメソッドはGET
      url: '/products/search',
      // 送り先のurlは/products/search
      data: { keyword: input },
      // 送るデータは{ keyword: input }
      dataType: 'json'
      // サーバーから返す値はjson形式
    })
  });
});
