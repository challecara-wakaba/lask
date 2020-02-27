# このディレクトリについて

Redux で必要となるファイルを用意するディレクトリ

hooks と Redux Tool Kit を使って楽に書きたい

## この階層に用意するディレクトリ

- modules: redux の Action, ActionCreator, Reducer がセットになったファイルをおく。Redux Tool Kit を使って楽に生成できる。
- middleware: dispatch から Reducer に流す前に行いたい処理(通常 API との通信とか)を書く。でも今回 FireStore との通信は Page コンテナで行おうと思ってるのであんまり使わないかも。
