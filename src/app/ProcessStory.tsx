"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    label: "ОГЛЕД",
    title: "Оферта след оглед",
    text: "Посещаваме обекта, преценяваме реалните условия и необходимата мощност. След огледа изготвяме конкретна оферта за системата.",
  },
  {
    number: "02",
    label: "ДОГОВОР",
    title: "Договор и съдействие",
    text: "Уточняваме решението, сроковете и условията. Подписваме договор и съдействаме за необходимата организация и документация.",
  },
  {
    number: "03",
    label: "ДОСТАВКА",
    title: "Доставка на специализирано оборудване",
    text: "Доставяме оборудването за конкретния проект — панели, инвертор, батерии, конструкция, защити и необходимите компоненти.",
  },
  {
    number: "04",
    label: "МОНТАЖ",
    title: "Монтаж от наш сертифициран екип",
    text: "Монтажът се изпълнява от сертифициран екип на USS-X, а не се прехвърля към случаен външен изпълнител.",
  },
  {
    number: "05",
    label: "ПУСК",
    title: "Предаване и пускане в експлоатация",
    text: "Извършваме финални проверки, пускане в експлоатация и предаваме приемо-предавателен протокол и гаранционна карта.",
  },
  {
    number: "06",
    label: "МОНИТОРИНГ",
    title: "Дистанционен мониторинг и обслужване",
    text: "Следим работата на системата дистанционно и осигуряваме профилактика, гаранционно обслужване и техническа поддръжка.",
  },
];

export default function ProcessStory() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top - window.innerHeight * 0.45) -
              Math.abs(b.boundingClientRect.top - window.innerHeight * 0.45)
          );

        if (visible.length) {
          const index = Number(
            (visible[0].target as HTMLElement).dataset.step
          );
          setActive(index);
        }
      },
      {
        rootMargin: "-35% 0px -40% 0px",
        threshold: 0,
      }
    );

    refs.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="process-story" id="process">
      <div className="process-story__intro">
        <span className="process-story__eyebrow">
          ОТ ПЪРВИЯ ОГЛЕД ДО РАБОТЕЩАТА СИСТЕМА
        </span>

        <h2>
          Шест стъпки. <em>Един отговорен екип.</em>
        </h2>
      </div>

      <div className="process-story__layout">

        <div className="process-visual-wrap">
          <div className="process-map">

            <div className="process-map__heading">
              <span>USS X SOLAR</span>
              <small>ПЪТЯТ НА ВАШИЯ ПРОЕКТ</small>
            </div>

            <svg
              className="process-map__svg"
              viewBox="0 0 760 570"
              role="img"
              aria-label="Процес по изграждане на фотоволтаична система"
            >
              <defs>
                <filter id="processGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="10" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <marker
                  id="arrow"
                  markerWidth="10"
                  markerHeight="10"
                  refX="8"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L0,6 L9,3 z" />
                </marker>
              </defs>

              {/* основна линия на процеса */}
              <path
                className="process-route"
                d="M135 145 C235 145 250 145 315 145
                   C410 145 430 145 515 145
                   C610 145 630 205 630 275
                   C630 365 555 405 475 405
                   C375 405 350 405 270 405
                   C185 405 130 390 125 330"
              />

              {/* 01 ОГЛЕД */}
              <g className={`process-object ${active === 0 ? "is-active" : ""}`}>
                <circle className="process-glow" cx="125" cy="145" r="70" />

                <path
                  className="process-shape"
                  d="M68 154 L125 103 L182 154 V218 H68 Z"
                />
                <path className="process-detail" d="M91 218 V164 H126 V218" />
                <path className="process-detail" d="M143 166 H164 V188 H143 Z" />

                <circle className="process-icon-ring" cx="168" cy="107" r="22" />
                <circle className="process-detail" cx="168" cy="107" r="10" />
                <path className="process-detail" d="M184 123 L200 139" />

                <text className="process-number" x="72" y="76">01</text>
                <text className="process-label" x="72" y="94">ОГЛЕД</text>
              </g>

              {/* 02 ДОГОВОР */}
              <g className={`process-object ${active === 1 ? "is-active" : ""}`}>
                <circle className="process-glow" cx="325" cy="145" r="70" />

                <rect
                  className="process-shape"
                  x="280"
                  y="87"
                  width="91"
                  height="118"
                  rx="7"
                />
                <path className="process-detail" d="M300 116 H350" />
                <path className="process-detail" d="M300 137 H350" />
                <path className="process-detail" d="M300 158 H334" />
                <path className="process-detail" d="M300 179 C314 165 326 192 349 170" />

                <text className="process-number" x="285" y="56">02</text>
                <text className="process-label" x="285" y="74">ДОГОВОР</text>
              </g>

              {/* 03 ДОСТАВКА */}
              <g className={`process-object ${active === 2 ? "is-active" : ""}`}>
                <circle className="process-glow" cx="525" cy="145" r="75" />

                <rect
                  className="process-shape"
                  x="463"
                  y="116"
                  width="85"
                  height="60"
                  rx="5"
                />
                <path
                  className="process-shape"
                  d="M548 132 H586 L608 154 V176 H548 Z"
                />
                <circle className="process-wheel" cx="491" cy="185" r="12" />
                <circle className="process-wheel" cx="579" cy="185" r="12" />

                <rect className="process-detail" x="478" y="127" width="24" height="35" />
                <rect className="process-detail" x="506" y="127" width="24" height="35" />

                <text className="process-number" x="468" y="83">03</text>
                <text className="process-label" x="468" y="101">ДОСТАВКА</text>
              </g>

              {/* 04 МОНТАЖ */}
              <g className={`process-object ${active === 3 ? "is-active" : ""}`}>
                <circle className="process-glow" cx="580" cy="322" r="78" />

                <path
                  className="process-panel"
                  d="M506 278 L610 266 L635 330 L526 342 Z"
                />
                <path className="process-detail" d="M532 275 L551 338" />
                <path className="process-detail" d="M560 272 L579 335" />
                <path className="process-detail" d="M588 269 L607 332" />
                <path className="process-detail" d="M516 298 L620 287" />
                <path className="process-detail" d="M522 319 L628 307" />

                <circle className="process-worker" cx="488" cy="288" r="16" />
                <path className="process-worker-line" d="M488 304 V346" />
                <path className="process-worker-line" d="M488 317 L465 335" />
                <path className="process-worker-line" d="M488 317 L510 329" />
                <path className="process-worker-line" d="M488 346 L470 370" />
                <path className="process-worker-line" d="M488 346 L507 370" />

                <text className="process-number" x="550" y="233">04</text>
                <text className="process-label" x="550" y="251">МОНТАЖ</text>
              </g>

              {/* 05 ПУСК */}
              <g className={`process-object ${active === 4 ? "is-active" : ""}`}>
                <circle className="process-glow" cx="385" cy="405" r="72" />

                <circle className="process-shape" cx="385" cy="405" r="48" />
                <path className="process-check" d="M355 405 L376 426 L418 381" />

                <path className="process-detail" d="M447 383 H476" />
                <path className="process-detail" d="M447 402 H488" />
                <path className="process-detail" d="M447 421 H471" />

                <text className="process-number" x="337" y="494">05</text>
                <text className="process-label" x="337" y="512">ПУСК</text>
              </g>

              {/* 06 МОНИТОРИНГ */}
              <g className={`process-object ${active === 5 ? "is-active" : ""}`}>
                <circle className="process-glow" cx="155" cy="405" r="76" />

                <rect
                  className="process-shape"
                  x="92"
                  y="350"
                  width="126"
                  height="83"
                  rx="9"
                />

                <path
                  className="process-chart"
                  d="M111 408 L132 389 L151 398 L177 371 L199 382"
                />

                <path className="process-detail" d="M139 433 V451" />
                <path className="process-detail" d="M171 433 V451" />
                <path className="process-detail" d="M120 451 H191" />

                <path
                  className="process-signal"
                  d="M126 332 Q155 307 184 332"
                />
                <path
                  className="process-signal"
                  d="M137 339 Q155 323 173 339"
                />
                <circle className="process-signal-dot" cx="155" cy="344" r="4" />

                <text className="process-number" x="95" y="494">06</text>
                <text className="process-label" x="95" y="512">МОНИТОРИНГ</text>
              </g>
            </svg>

            <div className="process-map__footer">
              <span>АКТИВЕН ЕТАП</span>
              <strong>
                {steps[active].number} — {steps[active].label}
              </strong>
            </div>
          </div>
        </div>

        <div className="process-copy">
          {steps.map((step, index) => (
            <div
              key={step.number}
              data-step={index}
              ref={(el) => {
                refs.current[index] = el;
              }}
              className={`process-copy__step ${
                active === index ? "is-active" : ""
              }`}
            >
              <span className="process-copy__number">{step.number}</span>
              <div className="process-copy__line" />
              <span className="process-copy__label">{step.label}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
