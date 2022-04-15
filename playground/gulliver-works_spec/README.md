# モックサーバー
NameSpaceごとにモックサーバーを立ててあります。
下記のオリジンをbaseURLにして、各エンドポイントにリクエストを送れば、レスポンスが返ってきます。

## NameSpace
### Application
Origin: 'https://fed79e73-d600-4c5a-8f45-dfa52cb9d13a.mock.pstmn.io'
### Enterprise
Origin: 'https://39433c59-d57e-4fd0-8e4e-11ca5ddf1743.mock.pstmn.io'
### Auth
Origin: 'https://6a64a158-9913-44ab-8b6f-3e7e5422dcf1.mock.pstmn.io'
### EnterpriseAuth
Origin: 'https://6915e998-6c2b-4bc0-a07b-d9fee6165b5d.mock.pstmn.io'

## Exp
Applicationのエンドポイントで「都道府県一覧一覧を取得する」の場合、
`GET https://fed79e73-d600-4c5a-8f45-dfa52cb9d13a.mock.pstmn.io/prefectures`
で以下のレスポンスが返ってくる。

{
    "prefectures": [
        {
            "id": "velit ad id",
            "name": "東京"
        }
    ]
}

## 注意点
実際のエンドポイントの実装では、バージョニングとNameSpaceがあるので、
 - Applicationであれば、`/v1/prefectures` 
 - Enterpriseであれば、`/enterprise/v1/prefectures`
というURIになります。
