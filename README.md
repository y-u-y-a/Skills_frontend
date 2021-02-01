## URL

https://skills-product.web.app/

## dev 環境

```
$ yarn dev
```

stg, prod 環境に関しては随時更新

## 規約(気をつけたいこと)

- state の変更は mutation でのみ行う
- pages ではロジック処理のみ
- templates では API 通信などの処理は行わない
- API 通信は pages か organisms で

CSS -> atoms, molecules, organisms
ロジック, API -> organisms, pages

- Templates と Organisms はスロットによって要素を受け取り、属性によりデータを受け取らないこと
- Molecules と Atoms は属性によってデータを受け取り、スロットにより要素を受け取らないこと

* `属性`: データを挿入するインターフェース
* `スロット`: コンポーネントを挿入するインターフェース

- Store, Router にアクセスするのは、Pages のみにすること
- Pages は Templates・Organism・Molecules に依存し、Atoms に依存しないこと
- 同じ階層は相互に依存し合わないこと
- Templates はネストしてはならない

- Templates・Organism・Atoms は他の階層に依存しないこと
- Molecules は Atoms のみに依存すること
- atoms はグローバルコンポーネントへの登録を避けること
