# NestJS trial repository
## NestJS
- https://nestjs.com/

## 必要なものDocker Desktop
- https://www.docker.com/products/docker-desktop

## 以下のコンテナが動いています
- node,mysql,memcached

##  docker-composerの操作
- 1.ビルド docker-compose build --no-cache
- 2.コンテナイメージ作成起動 docker-compose up -d
- 3.コンテナ状態確認 docker-compose ps
- 4.コンテナ起動 docker-compose start
- 5.コンテナ停止 docker-compose stop
- 6.コンテナ削除(永続化したデータごと) docker-compose down --volume

## 確認用URL
- コンテナイメージ作成起動後に`http://localhost:3000`にアクセス

## ユーザー情報取得API
MySQL内のデータを取り出しレスポンスを返却しています
- `http://localhost:3000/api/v1/users?limit=3` 
- 格納データは`./mysql/initdb.d/schema.sql`を参照

## この先のチャレンジはご自由に
- 新しくPOSTエンドポイントを作成してMySQLにユーザ情報格納
- リクエストパラメーターのバリデーション
- memcachedコンテナにレスポンスをキャッシュさせて取り出す
- カスタムロガー導入
- swagger導入
- Unitテスト,E2Eテスト
- TypeORMを使いこなす
- GraphQLサーバ構築
- gRPCサーバー構築
- などなど

## 構成もご自由に変更してください
```
現在の構成
src
├── main.ts
├── app.controller.ts
├── app.service.ts
├── app.module.ts
├── controllers
│   ├── 
│
├── services
│   ├── 
│
├── modules
│   ├── 
│
├── domain
│   ├── interfaces
│   │     ├── users/
│   │
│   ├── repositories
│   │     ├── users/
│   │
│   ├── entities
│   │     ├── users/
│   │
│   ├── dtos
│   │     ├── users/ 
│
│   
├── infrastructure
│   ├── mysql/
│   ├── memcached/
│
│
├── package.json
│
略
```


## 準備するにあたって参考にさせていただきました
- https://qiita.com/ucan-lab/items/b094dbfc12ac1cbee8cb
- https://qiita.com/tktcorporation/items/e8a6d2310d548ac48671

## 備考
リポジトリ更新予定はないです。
