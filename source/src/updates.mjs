import p from './profile.mjs';
const e = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

export function newsSection() {
  return `<section class="news-section" aria-labelledby="news-title"><div class="news-heading"><p class="eyebrow">NEWS</p><h2 id="news-title">Recent work. <br>What’s next.</h2></div><ol class="news-list">
    <li><div class="news-date"><time datetime="${p.conference.dateISO}">Dec 2026</time><span class="status-badge">Upcoming</span></div><div><h3>Sharing our Arizona wastewater research at AGU.</h3><p>Our ADEQ research has been accepted for a poster presentation at ${e(p.conference.meeting)} in ${e(p.conference.location)}. I am scheduled to present on ${e(p.conference.date)}, in Session H43P.</p><a class="text-link" href="/publications/#conference-presentations">Poster details <span aria-hidden="true">›</span></a></div></li>
    <li><div class="news-date"><time datetime="2026-10">Oct 2026</time></div><div><h3>Looking closer at terrain with LiDAR.</h3><p>I started a project on fine-scale hydrologic feature detection from LiDAR-derived DEMs, redesigning experiments to explore how terrain smoothing can generalize across landscapes.</p><a class="text-link" href="/research/#lidar">Explore the project <span aria-hidden="true">›</span></a></div></li>
    <li><div class="news-date"><time datetime="2026-09">Sep 2026</time></div><div><h3>Making routine modeling work more efficient.</h3><p>I started developing an agentic AI system for hydrological and atmospheric modeling workflows, automating model configuration, execution, and data-format alignment.</p><a class="text-link" href="/research/#ai-research">Explore the project <span aria-hidden="true">›</span></a></div></li>
  </ol></section>`;
}

export function conferenceSection() {
  const c = p.conference;
  return `<section class="publication-section" id="conference-presentations" aria-labelledby="conference-title"><h2 class="section-label" id="conference-title">Conference presentations <span>01</span></h2><article class="publication-card conference-card"><div class="publication-topline"><span class="status-badge">${e(c.status)}</span><span>${e(c.meeting)}</span></div><h3>${e(c.title)}</h3><p class="authors"><strong>Jiangzi Chen</strong> and Ruijie Zeng</p><p class="journal"><time datetime="${c.dateISO}">${e(c.date)}</time> · ${e(c.location)}</p><div class="publication-details"><div><h4>Poster session</h4><p>${e(c.session)}</p></div><div><h4>Related research</h4><p>Spatial identification of potentially unpermitted on-site wastewater treatment facilities in rural Arizona, in a project with ADEQ.</p><a class="text-link" href="/research/#wastewater">Explore the ADEQ project <span aria-hidden="true">›</span></a></div></div><div class="publication-actions"><a class="text-link" href="${c.url}">AGU meeting information <span aria-hidden="true">↗</span></a></div></article></section>`;
}
