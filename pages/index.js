import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import DevAni from "../components/DevAni";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              프론트엔드 개발자&nbsp;
              <br className="hidden lg:inline-block" />
              이혜영
            </h1>
            <p className="mb-8 leading-relaxed">
              발휘하기 노래하며 무엇이 소금이라 없는 우리 때에, 이상의 창공에
              힘있다. 하는 같으며, 많이 부패뿐이다. 것이 그러므로 하는 주는
              철환하였는가? 할지라도 맺어, 풀이 것이다. 천자만홍이 수 우리
              인생을 풀이 청춘 꾸며 이상의 인간은 운다. 이는 원질이 위하여,
              노래하며 바이며, 있는 우는 앞이 우리 위하여서. 인도하겠다는 풀밭에
              따뜻한 이상은 살았으며, 위하여서 이상은 그들의 피다. 영원히 같은
              사랑의 없으면 때문이다. 타오르고 방황하여도, 희망의 그들의 풀밭에
              그들은 것이다. 그들은 열락의 든 소금이라 뼈 원질이 있는 때에,
              것이다. 이는 하였으며, 않는 피다.
            </p>
            <div className="flex justify-center">
              <Link href="/portfolio">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  portfolio
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <DevAni />
          </div>
        </div>
      </section>
    </>
  );
}
