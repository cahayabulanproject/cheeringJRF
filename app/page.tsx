'use client'

import { useState } from 'react'
import { Gift, Heart, LockKeyhole, Medal, Play, Sparkles, Timer, Trophy } from 'lucide-react'

const cheers = [
  'Pace boleh pelan, tapi pesonamu selalu ngebut.',
  'Satu langkah lagi. Aku di sini, paling depan, cheering buat kamu.',
  'Lari yang kuat, pulang bawa cerita. Aku tunggu senyummu.',
]

export default function Page() {
  const [cheerIndex, setCheerIndex] = useState(0)
  const [pb, setPb] = useState('')
  const [showGift, setShowGift] = useState(false)

  const handleCheck = () => {
    const time = Number(pb)
    if (time > 0 && time <= 30) setShowGift(true)
  }

  return (
    <main className="site-shell">
      <nav className="topbar">
        <a className="brand" href="#home" aria-label="Pace & Perasaan home">
          <span className="brand-mark"><Heart size={16} fill="currentColor" /></span>
          pace & perasaan
        </a>
        <a className="nav-link" href="#hadiah">hadiah PB <span>↗</span></a>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> a little note before your run</p>
          <h1>Run your <em>heart</em> out.</h1>
          <p className="hero-intro">Untuk kamu yang selalu berani mulai, meski belum tahu finish line-nya di mana. Hari ini, biar aku yang jadi alasan kamu tersenyum di tiap kilometer.</p>
          <a className="primary-button" href="#cheers">baca cheering-ku <span>↓</span></a>
          <p className="micro-copy"><Sparkles size={13} /> dibuat khusus untuk pelari favoritku</p>
        </div>
        <div className="hero-visual">
          <div className="photo-frame">
            <img src="/running-cheer.png" alt="Pelari menikmati lari di bawah cahaya matahari" />
            <span className="photo-tag">for my favorite runner ♡</span>
          </div>
          <div className="pace-sticker"><span>keep</span><strong>moving</strong><i>♡</i></div>
          <div className="route-line" aria-hidden="true" />
        </div>
      </section>

      <section id="cheers" className="cheer-section section-block">
        <div className="section-heading">
          <p className="eyebrow">01 / tiny reminders</p>
          <h2>Kalimat kecil,<br /><em>semangat besar.</em></h2>
        </div>
        <div className="quote-card">
          <div className="quote-number">0{cheerIndex + 1}<span>/03</span></div>
          <blockquote>“{cheers[cheerIndex]}”</blockquote>
          <button className="circle-button" onClick={() => setCheerIndex((cheerIndex + 1) % cheers.length)} aria-label="Lihat semangat berikutnya"><Play size={16} fill="currentColor" /></button>
          <div className="quote-progress"><span style={{ width: `${((cheerIndex + 1) / cheers.length) * 100}%` }} /></div>
        </div>
      </section>

      <section id="hadiah" className="reward-section section-block">
        <div className="reward-icon"><Trophy size={28} /></div>
        <div className="reward-content">
          <p className="eyebrow">02 / the little promise</p>
          <h2>Kalau kamu <em>PB,</em><br />ada hadiah kecil.</h2>
          <p>Masukkan waktu 5K terbaikmu. Kalau berhasil pecah personal best, traktiran ini resmi jadi milikmu.</p>
          <div className="pb-form">
            <label htmlFor="pb-time">Waktu PB 5K kamu</label>
            <div className="input-row"><input id="pb-time" type="number" min="1" max="30" placeholder="00:00" value={pb} onChange={(e) => setPb(e.target.value)} /><span>menit</span><button onClick={handleCheck}>cek janji <span>→</span></button></div>
          </div>
        </div>
        <div className={`gift-card ${showGift ? 'is-unlocked' : ''}`}>
          {showGift ? <><div className="gift-burst">✦</div><Gift size={32} /><strong>kopi + pastry</strong><span>untuk recovery date kita</span><small>PB kamu valid. Jangan lupa tagih, ya.</small></> : <><LockKeyhole size={27} /><strong>mystery reward</strong><span>terkunci sampai kamu PB</span></>}
        </div>
      </section>

      <footer><span>made with <Heart size={13} fill="currentColor" /> and a little crush</span><span>see you at the finish line.</span></footer>
    </main>
  )
}
