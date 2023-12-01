import Link from '@/components/Link'

const gradientText = 'bg-gradient-to-b from-sky-300 to-sky-600 bg-clip-text text-transparent'
const discList = 'pl-1 list-inside list-disc marker:text-xl marker:text-stone-200'
const discPosition = 'before:mr-[-0.5rem] mb-1 lg:mb-2'
const strongStyle = 'font-semibold text-sky-500'
const subTitle = 'text-md font-bold text-stone-700 lg:text-xl'
const buttonStyle =
  'rounded-xl bg-stone-100 px-3 py-2 text-xs font-bold text-stone-700 hover:bg-stone-200'

export default function Resume() {
  return (
    <>
      <article className="mt-24 lg:mt-20">
        <h1
          className={`text-4xl font-extrabold leading-snug tracking-tight lg:text-6xl lg:leading-snug ${gradientText}`}
        >
          안녕하세요.
          <br />
          이시윤입니다
        </h1>
        <ul
          className={`mt-14 text-base font-semibold tracking-tight text-stone-500 lg:text-xl ${discList}`}
        >
          <li className={`${discPosition}`}>주어진 작업의 의도를 중요하게 생각합니다.</li>
          <li className={`${discPosition}`}>
            UI, UX에 대해 이야기하고 개선하는 과정을 좋아합니다.
          </li>
          <li className={`${discPosition}`}>
            더 나은 협업을 위한 방법론에 대해 고민하는 것을 좋아합니다.
          </li>
          <li className={`${discPosition}`}>도전적이고 투명하며 화기애애한 조직을 좋아합니다.</li>
        </ul>
      </article>
      <section className="mt-14">
        <h2 className={`${subTitle}`}>기술 및 역량 요약</h2>
        <ul
          className={`mt-4 text-base font-light tracking-tight text-stone-600 lg:text-xl ${discList}`}
        >
          <li className={`leading-snug ${discPosition}`}>
            <strong className={`${strongStyle}`}>Javascript ES6+</strong>와
            <strong className={`${strongStyle}`}> Typescript</strong>에 익숙합니다
          </li>
          <li className={`leading-snug ${discPosition}`}>
            <strong className={`${strongStyle}`}>React</strong>기반의
            <strong className={`${strongStyle}`}> CSR 프론트엔드 개발</strong>에 익숙하고, 리렌더링
            최적화, 번들 경량화 등 기본적인 웹 성능 최적화 경험이 있습니다
          </li>
          <li className={`leading-snug ${discPosition}`}>
            <strong className={`${strongStyle}`}>Cypress</strong>을 이용한
            <strong className={`${strongStyle}`}> E2E테스트</strong> 경험이 있습니다
          </li>
          <li className={`leading-snug ${discPosition}`}>
            <strong className={`${strongStyle}`}>Figma, Abobe XD</strong>와 같은
            <strong className={`${strongStyle}`}> 프로토타이핑 툴</strong>에 능숙하여 디자이너와
            긴밀하고 효율적으로 협업할 수 있습니다
          </li>
        </ul>
        <p className="mt-4 text-base font-light tracking-tight text-stone-600 lg:text-xl">
          그 외에도 Apollo Client, Sentry, d3, three.js 등 어떤 기술이든 적극적으로 탐구하여
          도입합니다.
        </p>
      </section>
      <section className="mt-14">
        <h2 className={`${subTitle}`}>커리어 요약</h2>
        <ul className="mt-4">
          <li>
            <h3 className="mb-1 text-3xl font-bold text-stone-800">friendli AI</h3>
            <p className="mb-2 text-stone-700">프론트엔드 엔지니어</p>
            <span className="mb-3 block text-sm font-bold text-stone-700">2023.01 ~ 현재</span>
            <Link href="/career/friendliai">
              <button className={`block ${buttonStyle}`}>자세히 보기 </button>
            </Link>
          </li>
        </ul>
      </section>
      <section className="mt-12">
        <h2 className={`${subTitle}`}>개인 프로젝트</h2>
        <ul className="mt-4">
          <li className="mb-6">
            <h3 className="mb-1 text-2xl font-bold text-stone-800">Migration Stories</h3>
            <p className="mb-3 text-sm font-light text-stone-400">22.12</p>
            <table className="mb-3 table-auto text-stone-400">
              <tbody>
                <tr>
                  <td className="pr-6">간단 소개</td>
                  <td className="text-stone-500">미술 전시를 위한 웹사이트</td>
                </tr>
                <tr>
                  <td>사용 기술</td>
                  <td className="text-stone-500">React, three.js, styled-components</td>
                </tr>
                <tr>
                  <td>역할</td>
                  <td className="text-stone-500">1인 개발, 웹 디자인(Figma)</td>
                </tr>
              </tbody>
            </table>
            <Link href="https://github.com/Lee-Si-Yoon/2022-migration-stories">
              <button className={`block ${buttonStyle}`}>자세히 보기</button>
            </Link>
          </li>
          <li>
            <h3 className="mb-1 text-2xl font-bold text-stone-800">Ziphockey</h3>
            <p className="mb-3 text-sm font-light text-stone-400">22.11 ~ 22.12</p>
            <table className="mb-3 table-auto text-stone-400">
              <tbody>
                <tr>
                  <td className="pr-6">간단 소개</td>
                  <td className="text-stone-500">멀티플레이어 에어하키 모바일 웹게임</td>
                </tr>
                <tr>
                  <td>사용 기술</td>
                  <td className="text-stone-500">Node.js, Socket.io, 웹 디자인(Figma)</td>
                </tr>
                <tr>
                  <td>역할</td>
                  <td className="text-stone-500">1인 개발, 기획, 디자인</td>
                </tr>
              </tbody>
            </table>
            <Link href="https://github.com/Lee-Si-Yoon/ziphockey-2p/tree/main" className="inline">
              <button className={`block ${buttonStyle}`}>자세히 보기</button>
            </Link>
          </li>
        </ul>
      </section>
      <section className="mt-12">
        <h2 className={`${subTitle}`}>오픈소스 기여</h2>
        <ul className="mt-4">
          <li>
            <p className="mb-4 text-stone-600">
              리액트 기반의 pixel editor인 <strong className={`${strongStyle}`}>dotting</strong>의
              contributor로 활동하고 있습니다
            </p>
            <div className="flex gap-3">
              <Link href="https://github.com/hunkim98/dotting">
                <button className={`${buttonStyle}`}>Dotting Github</button>
              </Link>
              <Link href="https://github.com/hunkim98/dotting/pulls?q=is%3Apr+author%3ALee-Si-Yoon+is%3Aclosed">
                <button className={`${buttonStyle}`}>기여한 PR 목록</button>
              </Link>
            </div>
          </li>
        </ul>
      </section>
      <section className="mt-12">
        <h2 className={`${subTitle}`}>학력 요약</h2>
        <ul className="mt-4">
          <li>
            <h3 className="mb-1 text-2xl font-bold text-stone-800">서울대학교</h3>
            <p className="mb-4 text-sm text-stone-600">서양화과 & 시각디자인과 복수전공</p>
            <div>
              <p className="text-sm text-stone-600">
                <strong className="mr-1 font-bold">총학점평균</strong> 3.69/4.30
              </p>
            </div>
          </li>
        </ul>
      </section>
    </>
  )
}
