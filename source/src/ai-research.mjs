export function aiResearchSection() {
  return `<article class="featured-study" id="ai-research">
    <div class="study-title"><span class="study-number">03</span><div><p class="eyebrow">AGENTIC AI FOR ENVIRONMENTAL MODELING · ONGOING</p><h2>Making research more efficient.</h2><p class="study-meta">Sep 2026 – Present · Independent project<br>Conceived and led by Jiangzi Chen<br>Supported by Dr. Ruijie Zeng, Arizona State University</p></div></div>
    <p class="study-opening">I conceived and lead an independent project to develop an agentic AI system for environmental modeling. The goal is to reduce the burden of routine modeling tasks so researchers can spend more time on scientific questions and interpretation.</p>
    <div class="research-results">
      <p class="results-method">The system currently runs SWAT and VIC, supporting hydrological and land-surface modeling workflows. Development is ongoing, with a focus on automating model configuration, execution, and input/output format alignment across models.</p>
      <figure class="research-figure">
        <a href="/assets/ai-research-workflow.jpg" aria-label="View the full-size AI research workflow diagram"><img src="/assets/ai-research-workflow.jpg" width="1680" height="1120" loading="lazy" alt="Conceptual workflow: a user defines a task for a coordinating frontier model, which selects specialist agents for land, atmosphere, groundwater, and other domains. The same model and selected team discuss and review their work, then integrate the results."></a>
        <figcaption><strong>A conceptual vision for AI-assisted research.</strong>The diagram illustrates a broader workflow of task definition, specialist work, shared review, and integration. Current implementation runs SWAT and VIC; the other domains shown represent the wider vision.<div class="figure-tools"><a href="/assets/ai-research-workflow.jpg">View full-size diagram ↗</a></div></figcaption>
      </figure>
    </div>
    <div class="study-detail-grid">
      <section><h3>Connecting modeling workflows</h3><p>Different models use different configurations and data formats. I am developing the system to handle these practical steps across model runs, reducing repeated setup and format-conversion work while keeping the scientific question at the center.</p></section>
      <section><h3>Building on hands-on model experience</h3><p>I also have hands-on experience with WRF and Noah-MP workflows and data structures. This experience informs my understanding of modeling requirements. Researchers remain responsible for framing questions, checking the evidence, and interpreting results.</p></section>
    </div>
  </article>`;
}
