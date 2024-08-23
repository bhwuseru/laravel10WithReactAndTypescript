## プロジェクト追加設定項目

1. viteを使用する場合は.envファイルにviteポートを設定する。
何も設定しない場合はデフォルトポートはvite.config.tsファイル内の server.portのデフォルトポートで定義されている値になる。<br>
**注意点** Dockerを使用する場合はホストの公開ポートとdockerコンテナ内のviteポート番号を一致させる必要がある。<br>
例<br>
ブラウザでアクセスするポート5173 <br>
コンテナ内でnpm run devで実行するときのポート5173

- .とvite.config.tsの15行目のポートと .envrcのexport VITE_PORTのポート番号を合わせる
  
``` port: 5173, // .envrcの export VITE_PORTのポート番号を設定```

