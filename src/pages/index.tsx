import {type NextPage} from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col gap-8 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-[hsl(280,100%,70%)] sm:text-[5rem]">
            Wisharray
          </h1>
          <p className="text-2xl text-white">
            Here is my wishlist for the 30 EUR limit Secret Santa:
          </p>
          <ul className="flex flex-col gap-10">
            <li className="rounded-md bg-gray-100 drop-shadow-sm lg:w-1/2">
              <header className="mb-2 bg-gray-200 px-2 py-4">
                <a
                  className="hover:text-gray-600"
                  href="https://www.worten.pt/cartoes-presente-e-gift-cards/cartoes-nintendo-switch/codigo-digital-para-fundos-da-nintendo-eshop-25-euros-7139879"
                >
                  Nintendo eShop Card - €25,00
                </a>
              </header>
              <p className="px-2 py-4">
                É um cartão que serve para colocar créditos na loja do Nintendo
                Switch. Com os créditos poderei comprar, por exemplo, jogos.
              </p>
            </li>
            <li className="rounded-md bg-gray-100 drop-shadow-sm lg:w-1/2">
              <header className="mb-2 bg-gray-200 px-2 py-4">
                <a
                  className="hover:text-gray-600"
                  href="https://www.worten.pt/tv-video-e-som/som-portatil/colunas-portateis/coluna-bluetooth-jbl-go-3-autonomia-ate-5-h-rosa-7291985"
                >
                  Coluna Bluetooth JBL Go 3 - €33,99
                </a>
              </header>
              <p className="px-2 py-4">
                Uma coluna bluetooth super portátil e fácil de levar para
                qualquer lugar.
              </p>
            </li>
            <li className="rounded-md bg-gray-100 drop-shadow-sm lg:w-1/2">
              <header className="mb-2 bg-gray-200 px-2 py-4">
                <a
                  className="hover:text-gray-600"
                  href="https://www.fnac.pt/SearchResult/ResultList.aspx?SCat=0&Search=the+ego+is+the+enemy&sft=1&sa=1#ID1282051"
                >
                  Ego is the Enemy - €12,99
                </a>
              </header>
              <p className="px-2 py-4">
                Um livro que já tenho em mente há um bom tempo!
              </p>
            </li>
            <li className="rounded-md bg-gray-100 drop-shadow-sm lg:w-1/2">
              <header className="mb-2 bg-gray-200 px-2 py-4">
                <a
                  className="hover:text-gray-600"
                  href="https://www.nike.com/pt/en/t/dri-fit-fitness-t-shirt-VPtMtp/DX0977-010"
                >
                  Nike Dri-FIT - €28,47
                </a>
              </header>
              <p className="px-2 py-4">
                Adoraria receber roupas para exercício. Tenho poucas e pretendo
                voltar a fazer com frequência. Tamanho M.
              </p>
            </li>
            <li className="rounded-md bg-gray-100 drop-shadow-sm lg:w-1/2">
              <header className="mb-2 bg-gray-200 px-2 py-4">
                <a
                  className="hover:text-gray-600"
                  href="https://www2.hm.com/pt_pt/productpage.1038173001.html"
                >
                  Conjunto de 2 peças Relaxed Fit (fato de treino) - €29,99
                </a>
              </header>
              <p className="px-2 py-4">
                Gosto muito de vestir fatos de treino, porque são confortáveis,
                aquecem um bocadinho e ainda são versáteis. Não tenho nem preto
                nem bege ainda! Tamanho M.
              </p>
            </li>
            <li className="rounded-md bg-gray-100 drop-shadow-sm lg:w-1/2">
              <header className="mb-2 bg-gray-200 px-2 py-4">
                <a
                  className="hover:text-gray-600"
                  href="https://www2.hm.com/pt_pt/productpage.1035207008.html"
                >
                  T-shirt preta em algodão Oversized Fit - €14,99
                </a>
              </header>
              <p className="px-2 py-4">
                Sempre gosto de ter t-shirts básicas, principalmente pretas. No
                entanto, atualmente estou com poucas básicas de verdade, sem
                estampas. Além disso, gosto muito dessa coleção, a Black
                Staples. As peças são confortáveis e algumas são oversized, o
                que gosto bastante. Tamanho M
              </p>
            </li>
            <li className="rounded-md bg-gray-100 drop-shadow-sm lg:w-1/2">
              <header className="mb-2 bg-gray-200 px-2 py-4">
                <a
                  className="hover:text-gray-600"
                  href="https://www.sprintersports.com/pt/leggings-nike-chllgr-tight-0304224"
                >
                  Leggings Nike - €29,99
                </a>
              </header>
              <p className="px-2 py-4">
                Leggins para corrida. Acho que seriam de grande ajuda durante o
                inverno. Tamanho M.
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  )
}

export default Home
