export function lidarResearchSection() {
  return `<article class="featured-study" id="lidar">
    <div class="study-title"><span class="study-number">04</span><div><p class="eyebrow">LIDAR TERRAIN ANALYSIS · ONGOING</p><h2>Reading the landscape in finer detail.</h2><p class="study-meta">Oct 2026 – Present<br>Arizona State University<br>Supervisor: Ruijie Zeng</p></div></div>
    <p class="study-opening">How can we reduce noise in a detailed terrain model while preserving the features that shape water movement? I am investigating this question using sub-meter LiDAR-derived digital elevation models (DEMs), with a focus on identifying sinkholes and drainage networks.</p>
    <div class="study-detail-grid">
      <section><h3>Building on earlier experiments</h3><p>I am redesigning experiments from a prior doctoral study in our group that applied partial differential equation (PDE)-based anisotropic diffusion to LiDAR-derived DEMs. This smoothing approach is being investigated for suppressing noise while preserving terrain edges needed to identify fine-scale hydrologic features.</p></section>
      <section><h3>Knowing when to stop smoothing</h3><p>My current work seeks a stopping threshold for the number of smoothing iterations that balances noise suppression with edge preservation. The aim is to make the method generalize across datasets and landscapes without case-by-case manual tuning.</p></section>
    </div>
    <div class="study-takeaway"><span class="eyebrow">THE RESEARCH AIM</span><p>A transferable approach to terrain smoothing could make high-resolution elevation data more useful for understanding how water moves through a landscape.</p></div>
  </article>`;
}
