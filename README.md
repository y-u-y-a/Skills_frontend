## URL
https://skills-product.web.app/

## dev環境
```
$ yarn dev
```
stg, prod環境に関しては随時更新

## 規約(気をつけたいこと)
- pagesではロジック処理のみ
- templatesではAPI通信などの処理は行わない
- API通信はpagesかorganismsで

CSS -> atoms, molecules, organisms
ロジック, API -> organisms, pages

- TemplatesとOrganismsはスロットによって要素を受け取り、属性によりデータを受け取らないこと
- MoleculesとAtomsは属性によってデータを受け取り、スロットにより要素を受け取らないこと
* `属性`: データを挿入するインターフェース
* `スロット`: コンポーネントを挿入するインターフェース

- Store, Routerにアクセスするのは、Pagesのみにすること
- PagesはTemplates・Organism・Moleculesに依存し、Atomsに依存しないこと
- 同じ階層は相互に依存し合わないこと
- Templatesはネストしてはならない

- Templates・Organism・Atomsは他の階層に依存しないこと
- MoleculesはAtomsのみに依存すること
- atomsはグローバルコンポーネントへの登録を避けること
