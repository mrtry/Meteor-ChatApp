## Setup Assets

```
$ meteor npm install
$ npm install
$ npm run build-css
```

## Run

```
$ npm run meteor
```

# Heroku へ Deploy
以下のページを参考にDeploy

MeteorをHerokuにデプロイする方法
- http://meteor-fan.axlight.com/deploy-meteor-on-heroku/

## Basic認証の設定
- デフォルトだと、`settings.json`の内容でusernameとpasswordが指定される
- Herokuだと、リポジトリがそのままデプロイされる都合、`setting.json`で任意に設定できない(公開リポジトリだと流出する)
- なので、Herokuの環境変数を書き換えることで、任意の値に設定する

```
heroku config:add METEOR_SETTINGS='{"auth":{"username":"setting_username","password":"setting_password"}}'
```
