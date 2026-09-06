"use client";

import { useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setMuted(video.muted);

    if (video.paused) {
      video.play().catch(() => {});
    }
  };

  return (
    <div className="academy-media-layout">
      <div className="academy-video-wrap">
        <video
          ref={videoRef}
          className="academy-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/media/hero-solar.mp4" type="video/mp4" />
        </video>

        <div className="video-controls">
          <button
            type="button"
            className="round-control"
            onClick={toggleSound}
            aria-label={muted ? "Включи звук" : "Изключи звук"}
          >
            {muted ? "⌁" : "♪"}
          </button>
        </div>

        <div className="video-overlay-copy">
          <span>РЕАЛНИ ОБЕКТИ · USS-X SOLAR</span>
          <strong>Изграждане на фотоволтаични системи</strong>
        </div>
      </div>

      <div className="solar-info-column">
        <div className="solar-info-card">
          <span className="info-kicker">КАК РАБОТИ СИСТЕМАТА</span>

          <h3>От слънцето до вашия обект.</h3>

          <div className="solar-flow">
            <div>
              <span className="flow-icon">☀</span>
              <small>Слънце</small>
            </div>

            <span className="flow-arrow">→</span>

            <div>
              <span className="flow-icon panel-icon">▦</span>
              <small>Панели</small>
            </div>

            <span className="flow-arrow">→</span>

            <div>
              <span className="flow-icon">↻</span>
              <small>Инвертор</small>
            </div>

            <span className="flow-arrow">→</span>

            <div>
              <span className="flow-icon">⌂</span>
              <small>Дом / бизнес</small>
            </div>
          </div>

          <div className="storage-row">
            <span>＋</span>
            <div>
              <strong>Батерийно съхранение</strong>
              <p>Използвайте произведената енергия и когато слънцето не грее.</p>
            </div>
          </div>
        </div>

        <div className="info-card-footer">
          <p>
            Проектираме всяка система според реалното потребление и
            спецификата на обекта.
          </p>
          <a href="#services">Как работи системата ↗</a>
        </div>
      </div>
    </div>
  );
}
