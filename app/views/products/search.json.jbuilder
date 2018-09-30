json.array! @products do |product|
  json.id product.id
  json.title product.title
  json.image product.image_url
  json.detail product.detail
end

# JSON形式のデータを配列で返したい場合は、上記のようにarray!を使用する
# array！を使用することで以下のように値を取ってくる
# [{"id":1, "title":"ケージダイブ", "image": "http://image~.jpeg"}]
