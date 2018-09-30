$(function() {

  function appendProduct(product) {
    var html = `<li>
                  <a class="listview__element--right-icon" href="/products/${ product.id }/reviews/new" title="${ product.title }">
                    <div class="position-right p1em">
                      <i class="icon-chevron-right color-sub"></i>
                    </div>
                    <div class="row no-space-button">
                      <div class="col2">
                        <div class="thumbnail thumbnail--movies">
                          <div class="thubnail__figure" style="background-image: url(${ product.image });" title="${ product.title }"></div>
                        </div>
                      </div>
                      <div class="col6 push6">
                        <h3 class="text-middle text-break">
                          <span class="color-sub">${ product.title }</span>
                          </h3>
                          <p class="text-xsmall text-overflow">
                            ${ product.detail }
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>`
  }

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
    .done(function(products) {
      // サーバーエラーが起きていないときは、jbuilderからdoneの関数に映画情報が返ってくる
      // 今回はjbuilderでarray!を使用しているため、配列型で情報が返ってきており、その情報がproductsに代入されている
      $(".listview.js-lazy-load-images").empty();
      // インクリメンタルサーチでは、検索をする直前に映画情報のリストを削除してあげる必要がある
      // enptyメソッドは指定したDOM要素の子要素のみを削除するメソッド
      // 指定したDOM要素自体を削除するremoveメソッドとは異なる
      if (products.length !== 0) {
        // 取得したproductsが０でなければ関数実行
        products.forEach(function(product){
          // products配列の中身１つ１つにappendProduct関数実行
          // 引数にproducts配列の中身１つ分を持っていく
          // forEachメソッドは与えられた関数を配列に含まれる各要素に対して一度ずつ呼び出す
          appendProduct(product);
        });
      }
      else {
        appendNoProduct("一致する映画はありません");
        // それ以外の場合(取得したproductsが０の時)関数実行
      }
    })
  });
});
