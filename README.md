# portfolio_web
ポートフォリオ管理_webアプリケーション

## 画面環境（ローカルに構築）
基本[ここ](https://chat.openai.com/c/f55add5a-b7c9-4a2b-820e-58914193a0bd)を参照

1. nodeが入った状態で`npx create-next-app`でnextjsの雛形作成
2. `npm run dev`でローカルサーバ構築


## Dockerコンテナ構築
### portfolio-web

[こちら](https://qiita.com/yuito723/items/84e7fd31582c807b9e2d)を参考にsystemdが動くubuntuコンテナイメージを生成

別で以下のパッケージをインストール（apt-get）
- curl
- zip

#### java（kotlin）
[こちら](https://qiita.com/otokichi3/items/6132ecaa066066bc1602)を参考に
