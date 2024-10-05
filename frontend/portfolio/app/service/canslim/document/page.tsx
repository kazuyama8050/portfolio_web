import {Title} from "@/app/ui/common/service_title"

export default async function Page() {
  return (
    <div className="flex-1 p-7">
      <h1 className="text-2xl font-bold mb-4 p-4">CanSlim ドキュメント</h1>
      <section id="section1" className="mb-8">
        <h2 className="text-1xl font-semibold mb-2 font-shin">CanSlimとは..</h2>
        <p>
          CanSlimとは、アメリカの投資家ウィリアム・オニールが提唱した株式投資法です。<br />
          株式投資において、株価が上昇する銘柄を選定するための7つの基本的な考え方を示しています。<br />
          このドキュメントでは、CanSlimの基本的な考え方を説明します。
        </p>
      </section>

      <section id="section2" className="mb-8">
        <h2 className="text-1xl font-semibold mb-2">[C] 当期四半期のEPSと売り上げ</h2>
        <p>下記のEPS増加率と売上増加率の両方の条件が揃っている必要がある</p>
        <h3 className="text-sm font-semibold mb-2 p-4">EPS増加率</h3>
        <div className="p-4 text-gray-600">
          <ul className="list-disc pl-6 space-y-2">
            <li>大化けした銘柄のほとんどが、大きな価格上昇の前に40~400%のEPS増加率を示している
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>このうち、平均すると70%のEPS増加率を示している</li>
              </ul>
            </li>
            <li>さらに2四半期連続で大幅なEPS上昇が起きていればなお良い</li>
            <li>アナリストが予測するEPS予測値も上昇予想であることも重要な要素</li>
          </ul>
        </div>

        <h3 className="text-sm font-semibold mb-2 p-4">売上高増加率</h3>
        <div className="p-4 text-gray-600">
          <ul className="list-disc pl-6 space-y-2">
            <li>売上が直近四半期に少なくとも25%以上増加していること</li>
            <li>売上増加率が直近3四半期で加速してること</li>
          </ul>
        </div>
      </section>

      <section id="section2" className="mb-8">
        <h2 className="text-1xl font-semibold mb-2">[A] 年間EPSの増加</h2>
        <p>どんな企業でも一時的に良い決算を発表することはあるため、大きく成長している銘柄を探すために年間EPSも確認する必要がある</p>
        
        <h3 className="text-sm font-semibold mb-2 p-4">過去3年連続で年間EPSが増加している</h3>
        <div className="p-4 text-gray-600">
          <p>たとえ、2年目のEPSが下がっている場合でも避けた方が良い</p>
        </div>
        <h3 className="text-sm font-semibold mb-2 p-4">年間EPSの増加率が25~50%以上</h3>
        <div className="p-4 text-gray-600">
          <ul className="list-disc pl-6 space-y-2">
            <li>売上が直近四半期に少なくとも25%以上増加していること</li>
            <li>売上増加率が直近3四半期で加速してること</li>
          </ul>
        </div>
        <h3 className="text-sm font-semibold mb-2 p-4">ROEが高い</h3>
        <div className="p-4 text-gray-600">
          <ul className="list-disc pl-6 space-y-2">
            <li>急成長を遂げたほぼ全銘柄が、最低でも17%のROEを示している</li>
            <li>中でも特に優れたものは25~50%のROEを示している</li>
          </ul>
        </div>
      </section>

      <section id="section2" className="mb-8">
        <h2 className="text-1xl font-semibold mb-2">[N] 新興企業、新製品、新経営陣、正しい株価ベースを抜けて新高値</h2>
        <p>株価がきちんとした正しいベース形成の揉み合いパターンから抜け出る時に、出来高の増加を伴って新高値をつけた銘柄を買う方が良い</p>
      </section>

      <section id="section2" className="mb-8">
        <h2 className="text-1xl font-semibold mb-2">[S] 重要なポイントで株式の需要が高いこと</h2>

        <h3 className="text-sm font-semibold mb-2 p-4">過度な株式分割には注意</h3>
        <div className="p-4 text-gray-600">
          <ul className="list-disc pl-6 space-y-2">
            <li>株式分割を2,3回行うと株価が天井を打つ傾向にある</li>
            <li>流通する株式数が減るとEPSが増加する</li>
            <li>※ ただし、収益が増加していて自社株買いをしている事実が重要</li>
          </ul>
        </div>

        <h3 className="text-sm font-semibold mb-2 p-4">公開市場で自社株買いをしている企業</h3>
        <div className="p-4 text-gray-600">
          <ul className="list-disc pl-6 space-y-2">
            <li>企業が今後の売り上げや収益の改善を見込んでいることを暗示している</li>
          </ul>
        </div>
      </section>

      <section id="section2" className="mb-8">
        <h2 className="text-1xl font-semibold mb-2">[L] 主導銘柄か、停滞銘柄か</h2>

        <h3 className="text-sm font-semibold mb-2 p-4">業界内で上位2~3位の銘柄を買う</h3>
        <div className="p-4 text-gray-600">
          <p>ここでいう上位企業とは、これまでに示したEPS増加率・ROE・利益率や売り上げ増活がずば抜けていて、株価の動きも活発な企業</p>
        </div>

        <h3 className="text-sm font-semibold mb-2 p-4">主導銘柄と停滞銘柄を見分ける方法</h3>
        <div className="p-4 text-gray-600">
          <p>レラティブストレングス指数を利用する</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>最高の値動きを記録した銘柄について、大きく株価が上昇する前のレラティブストレングス指数は平均で87だった</li>
            <li>レラティブストレングス指数が70以下の銘柄は買ってはならない</li>
            <li>レラティブストレングス指数が80~90台でベースを形成している銘柄を選ぶ</li>
          </ul>
        </div>

        <h3 className="text-sm font-semibold mb-2 p-4">マーケットの調整局面</h3>
        <div className="p-4 text-gray-600">
          <ul className="list-disc pl-6 space-y-2">
            <li>マーケットの調整局面では、魅力的な成長株は市場平均株価の1.5~2.5倍ほどの調整が入る</li>
            <li>反対に、強気相場時の一時的な調整の場合は、最も下落率が少ない銘柄が良い</li>
            <li>~市場全体の下落が最終局面を迎えた後に、最初に新高値を助けるまでに回復した銘柄は正真正銘の先導株である可能性が高い</li>
          </ul>
        </div>

        <h3 className="text-sm font-semibold mb-2 p-4">弱気の日に異常な強さを示す銘柄</h3>
        <div className="p-4 text-gray-600">
          <p>市場全体が弱気の日に出来高を伴って急激な株価増加をしている企業はその後も急上昇する可能性がある</p>
        </div>
      </section>
    

      <section id="section2" className="mb-8">
        <h2 className="text-1xl font-semibold mb-2">[I] 機関投資家による保有</h2>
        <p>株価を押し上げるには大きな買い需要が必要なため、その最大の需要源となる機関投資家は重要</p>

        <h3 className="text-sm font-semibold mb-2 p-4">株主の質と増加数</h3>
        <div className="p-4 text-gray-600">
          <ul className="list-disc pl-6 space-y-2">
            <li>機関投資家による保有が増加している銘柄</li>
            <li>直近四半期に機関投資家が買った銘柄</li>
          </ul>
        </div>
      </section>

      <section id="section2" className="mb-8">
        <h2 className="text-1xl font-semibold mb-2">[M] 株式市場の方向</h2>
        <p>たとえ、良い銘柄であっても弱気相場であれば下落していく可能性は高いため、マーケットの状況を把握することも大切</p>
        <p>※ 企業分析の範囲外なので詳細は割愛</p>
      </section>
    
    </div>
  );
};