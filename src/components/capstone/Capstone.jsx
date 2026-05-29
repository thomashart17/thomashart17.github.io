import React from 'react'
import { Link } from 'react-router-dom'
import { BsGithub, BsArrowLeft, BsMortarboardFill } from 'react-icons/bs'
import KV260 from '../../assets/kv260.webp'
import Dashboard from '../../assets/risk-gateway-dashboard.png'
import './capstone.css'

const riskChecks = [
  { name: 'Kill switch', desc: 'Global emergency halt; one register write disables all order processing.' },
  { name: 'Unknown symbol', desc: 'Order references a symbol not present in the 8-entry lookup table.' },
  { name: 'Symbol disabled', desc: 'Symbol is known but currently suspended or halted.' },
  { name: 'Quantity exceeds global max', desc: 'Order size above the configured system-wide upper bound.' },
  { name: 'Quantity below global min', desc: 'Order size below the configured system-wide lower bound.' },
  { name: 'Per-symbol quantity limit', desc: 'Order size above the per-symbol maximum stored in the lookup table.' },
  { name: 'Price below collar min', desc: 'Limit price below the symbol\'s configured price floor.' },
  { name: 'Price above collar max', desc: 'Limit price above the symbol\'s configured price ceiling.' },
  { name: 'Notional value too high', desc: 'qty × price exceeds the per-order notional cap.' },
  { name: 'Notional value too low', desc: 'qty × price below the per-order notional floor.' },
  { name: 'Rate limit (token bucket)', desc: 'Order rate exceeds the token bucket threshold; bucket refills at millisecond granularity.' },
  { name: 'Daily cumulative notional', desc: 'Running daily notional total would exceed the configured daily limit.' },
]

const ArchDiagram = () => (
  /*
   * viewBox 1100×330. Two PS regions (left + right) flank a central PL region.
   * Data flows left→right across all three. AXI-Lite config enters risk_core from below.
   *
   * PL block layout (symmetric, 10px margins, 15px gaps):
   *   AXI DMA RX  x=263–371  center=317
   *   RX FIFO     x=386–468  center=427
   *   risk_core   x=483–621  center=552  (PL center = 253+299 = 552 ✓)
   *   TX FIFO     x=636–718  center=677
   *   AXI DMA TX  x=733–841  center=787
   */
  <svg
    viewBox="0 0 1100 330"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="System architecture diagram showing data flow from TCP client through kernel driver and FPGA fabric back to TCP response"
    className="capstone__svg"
  >
    <defs>
      <marker id="arrowhead" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
        <polygon points="0 0, 7 3.5, 0 7" fill="rgba(77,181,255,0.85)" />
      </marker>
      {/* orient="0": marker already points up, no path-based rotation needed */}
      <marker id="arrowhead-up" markerWidth="7" markerHeight="7" refX="3.5" refY="0" orient="0">
        <polygon points="0 7, 3.5 0, 7 7" fill="rgba(77,181,255,0.85)" />
      </marker>
    </defs>

    {/* ── Region: Zynq PS (ARM) — left ─────────────────────────────── */}
    <rect x="3" y="48" width="248" height="200" rx="6"
      fill="rgba(44,44,108,0.35)" stroke="rgba(77,181,255,0.25)" strokeWidth="1" />
    <text x="127" y="68" textAnchor="middle" fill="rgba(255,255,255,0.5)"
      fontSize="10.5" fontFamily="Poppins,sans-serif" letterSpacing="0.3">Zynq PS (ARM)</text>

    {/* ── Region: PL — FPGA Fabric ──────────────────────────────────── */}
    <rect x="253" y="48" width="598" height="200" rx="6"
      fill="rgba(20,20,55,0.55)" stroke="rgba(77,181,255,0.2)" strokeWidth="1" />
    <text x="552" y="68" textAnchor="middle" fill="rgba(255,255,255,0.5)"
      fontSize="10.5" fontFamily="Poppins,sans-serif" letterSpacing="0.3">PL — Zynq UltraScale+ Fabric</text>

    {/* ── Region: Zynq PS (ARM) — right ────────────────────────────── */}
    <rect x="853" y="48" width="244" height="200" rx="6"
      fill="rgba(44,44,108,0.35)" stroke="rgba(77,181,255,0.25)" strokeWidth="1" />
    <text x="975" y="68" textAnchor="middle" fill="rgba(255,255,255,0.5)"
      fontSize="10.5" fontFamily="Poppins,sans-serif" letterSpacing="0.3">Zynq PS (ARM)</text>

    {/* ═══════════════════════════════════════════════════════════════
        Component boxes — left to right
    ════════════════════════════════════════════════════════════════ */}

    {/* 1. TCP Client */}
    <rect x="14" y="100" width="78" height="68" rx="5"
      fill="#252555" stroke="rgba(77,181,255,0.4)" strokeWidth="1" />
    <text x="53" y="130" textAnchor="middle" fill="#fff"
      fontSize="10" fontFamily="Poppins,sans-serif" fontWeight="500">TCP</text>
    <text x="53" y="144" textAnchor="middle" fill="#fff"
      fontSize="10" fontFamily="Poppins,sans-serif" fontWeight="500">Client</text>

    {/* 2. Kernel Driver (TX side) */}
    <rect x="104" y="88" width="138" height="96" rx="5"
      fill="#252555" stroke="rgba(77,181,255,0.4)" strokeWidth="1" />
    <text x="173" y="124" textAnchor="middle" fill="rgba(255,255,255,0.7)"
      fontSize="8.5" fontFamily="'Courier New',monospace">risk_gateway.ko</text>
    <text x="173" y="140" textAnchor="middle" fill="#fff"
      fontSize="10" fontFamily="Poppins,sans-serif" fontWeight="500">Kernel Driver</text>
    <text x="173" y="156" textAnchor="middle" fill="rgba(255,255,255,0.5)"
      fontSize="8.5" fontFamily="Poppins,sans-serif">DMA programming · TCP server</text>

    {/* 3. AXI DMA (RX) — x=263, center=317 */}
    <rect x="263" y="100" width="108" height="68" rx="5"
      fill="#252555" stroke="rgba(77,181,255,0.4)" strokeWidth="1" />
    <text x="317" y="130" textAnchor="middle" fill="#fff"
      fontSize="10" fontFamily="Poppins,sans-serif" fontWeight="500">AXI DMA</text>
    <text x="317" y="146" textAnchor="middle" fill="rgba(255,255,255,0.55)"
      fontSize="8.5" fontFamily="Poppins,sans-serif">RX path</text>

    {/* 4. RX FIFO — x=386, center=427 */}
    <rect x="386" y="100" width="82" height="68" rx="5"
      fill="#252555" stroke="rgba(77,181,255,0.4)" strokeWidth="1" />
    <text x="427" y="130" textAnchor="middle" fill="#fff"
      fontSize="10" fontFamily="Poppins,sans-serif" fontWeight="500">RX</text>
    <text x="427" y="146" textAnchor="middle" fill="#fff"
      fontSize="10" fontFamily="Poppins,sans-serif" fontWeight="500">FIFO</text>

    {/* 5. RISK CORE — x=483, center=552 */}
    <rect x="483" y="82" width="138" height="118" rx="6"
      fill="rgba(77,181,255,0.12)" stroke="#4db5ff" strokeWidth="1.5" />
    <text x="552" y="130" textAnchor="middle" fill="#4db5ff"
      fontSize="12" fontFamily="'Courier New',monospace" fontWeight="600">risk_core</text>
    <text x="552" y="148" textAnchor="middle" fill="rgba(77,181,255,0.75)"
      fontSize="8.5" fontFamily="Poppins,sans-serif">12 checks · parallel</text>
    <text x="552" y="162" textAnchor="middle" fill="rgba(77,181,255,0.75)"
      fontSize="8.5" fontFamily="Poppins,sans-serif">single-cycle decision</text>

    {/* 6. TX FIFO — x=636, center=677 */}
    <rect x="636" y="100" width="82" height="68" rx="5"
      fill="#252555" stroke="rgba(77,181,255,0.4)" strokeWidth="1" />
    <text x="677" y="130" textAnchor="middle" fill="#fff"
      fontSize="10" fontFamily="Poppins,sans-serif" fontWeight="500">TX</text>
    <text x="677" y="146" textAnchor="middle" fill="#fff"
      fontSize="10" fontFamily="Poppins,sans-serif" fontWeight="500">FIFO</text>

    {/* 7. AXI DMA (TX) — x=733, center=787 */}
    <rect x="733" y="100" width="108" height="68" rx="5"
      fill="#252555" stroke="rgba(77,181,255,0.4)" strokeWidth="1" />
    <text x="787" y="130" textAnchor="middle" fill="#fff"
      fontSize="10" fontFamily="Poppins,sans-serif" fontWeight="500">AXI DMA</text>
    <text x="787" y="146" textAnchor="middle" fill="rgba(255,255,255,0.55)"
      fontSize="8.5" fontFamily="Poppins,sans-serif">TX path</text>

    {/* 8. Kernel Driver (RX side) */}
    <rect x="858" y="88" width="138" height="96" rx="5"
      fill="#252555" stroke="rgba(77,181,255,0.4)" strokeWidth="1" />
    <text x="927" y="124" textAnchor="middle" fill="rgba(255,255,255,0.7)"
      fontSize="8.5" fontFamily="'Courier New',monospace">risk_gateway.ko</text>
    <text x="927" y="140" textAnchor="middle" fill="#fff"
      fontSize="10" fontFamily="Poppins,sans-serif" fontWeight="500">Kernel Driver</text>
    <text x="927" y="156" textAnchor="middle" fill="rgba(255,255,255,0.5)"
      fontSize="8.5" fontFamily="Poppins,sans-serif">DMA completion · TCP reply</text>

    {/* 9. TCP Response */}
    <rect x="1006" y="100" width="84" height="68" rx="5"
      fill="#252555" stroke="rgba(77,181,255,0.4)" strokeWidth="1" />
    <text x="1048" y="130" textAnchor="middle" fill="#fff"
      fontSize="10" fontFamily="Poppins,sans-serif" fontWeight="500">TCP</text>
    <text x="1048" y="144" textAnchor="middle" fill="#fff"
      fontSize="10" fontFamily="Poppins,sans-serif" fontWeight="500">Response</text>

    {/* ═══════════════════════════════════════════════════════════════
        Horizontal arrows (y=134 is the centre of standard boxes)
    ════════════════════════════════════════════════════════════════ */}

    {/* TCP Client → Kernel Driver */}
    <line x1="92" y1="134" x2="102" y2="134"
      stroke="rgba(77,181,255,0.85)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

    {/* Kernel Driver → AXI DMA (RX) — crosses PS/PL boundary */}
    <line x1="242" y1="134" x2="261" y2="134"
      stroke="rgba(77,181,255,0.85)" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arrowhead)" />

    {/* AXI DMA (RX) → RX FIFO */}
    <line x1="371" y1="134" x2="384" y2="134"
      stroke="rgba(77,181,255,0.85)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

    {/* RX FIFO → risk_core, with 256-bit label centred in the gap */}
    <line x1="468" y1="134" x2="481" y2="134"
      stroke="rgba(77,181,255,0.85)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
    <text x="448" y="92" textAnchor="middle" fill="rgba(77,181,255,0.85)"
      fontSize="8" fontFamily="Poppins,sans-serif">256-bit</text>

    {/* risk_core → TX FIFO, with 128-bit label centred in the gap */}
    <line x1="621" y1="134" x2="634" y2="134"
      stroke="rgba(77,181,255,0.85)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />
    <text x="656" y="92" textAnchor="middle" fill="rgba(77,181,255,0.85)"
      fontSize="8" fontFamily="Poppins,sans-serif">128-bit</text>

    {/* TX FIFO → AXI DMA (TX) */}
    <line x1="718" y1="134" x2="731" y2="134"
      stroke="rgba(77,181,255,0.85)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

    {/* AXI DMA (TX) → Kernel Driver — crosses PL/PS boundary */}
    <line x1="841" y1="134" x2="856" y2="134"
      stroke="rgba(77,181,255,0.85)" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arrowhead)" />

    {/* Kernel Driver → TCP Response */}
    <line x1="996" y1="134" x2="1004" y2="134"
      stroke="rgba(77,181,255,0.85)" strokeWidth="1.5" markerEnd="url(#arrowhead)" />

    {/* ═══════════════════════════════════════════════════════════════
        AXI-Lite config path: upward arrow into risk_core from below.
        orient="0" keeps the upward-pointing polygon in its natural
        orientation — no path-based rotation applied.
    ════════════════════════════════════════════════════════════════ */}
    <line x1="552" y1="290" x2="552" y2="200"
      stroke="rgba(77,181,255,0.85)" strokeWidth="1.5" markerEnd="url(#arrowhead-up)" />

    {/* AXI-Lite source box — centred under risk_core at x=552 */}
    <rect x="465" y="293" width="174" height="32" rx="4"
      fill="rgba(44,44,108,0.6)" stroke="rgba(77,181,255,0.3)" strokeWidth="1" />
    <text x="552" y="308" textAnchor="middle" fill="rgba(255,255,255,0.75)"
      fontSize="9.5" fontFamily="Poppins,sans-serif">AXI-Lite Config (from PS)</text>
    <text x="552" y="320" textAnchor="middle" fill="rgba(255,255,255,0.45)"
      fontSize="8" fontFamily="Poppins,sans-serif">runtime risk parameters</text>

    {/* Dashed vertical boundary lines between regions */}
    <line x1="252" y1="52" x2="252" y2="245"
      stroke="rgba(77,181,255,0.2)" strokeWidth="1" strokeDasharray="4 3" />
    <line x1="852" y1="52" x2="852" y2="245"
      stroke="rgba(77,181,255,0.2)" strokeWidth="1" strokeDasharray="4 3" />
  </svg>
)

const Capstone = () => {
  return (
    <main className="capstone">

      {/* ── Back navigation ─────────────────────────────────────────── */}
      <div className="capstone__back-bar">
        <div className="container">
          <Link to="/" state={{ scrollTo: 'projects' }} className="capstone__back-link">
            <BsArrowLeft size={14} />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <header className="capstone__hero">
        <div className="container">
          <h1>FPGA Pre-Trade Risk Gateway</h1>
          <p className="capstone__subtitle">
            Hardware-accelerated order validation for the NASDAQ OUCH protocol
          </p>
          <div className="capstone__stats">
            <div className="capstone__stat">
              <span className="capstone__stat-value">~5.5 µs</span>
              <span className="capstone__stat-label">Average latency</span>
            </div>
            <div className="capstone__stat">
              <span className="capstone__stat-value">12</span>
              <span className="capstone__stat-label">Parallel risk checks</span>
            </div>
            <div className="capstone__stat">
              <span className="capstone__stat-value">~45,000</span>
              <span className="capstone__stat-label">Orders / sec</span>
            </div>
            <div className="capstone__stat">
              <span className="capstone__stat-value">AMD KV260</span>
              <span className="capstone__stat-label">Zynq UltraScale+</span>
            </div>
          </div>
          <div className="capstone__hero-img">
            <img src={KV260} alt="AMD KV260 Starter Kit" />
          </div>
        </div>
      </header>

      <div className="container capstone__content">

        {/* ── Overview ──────────────────────────────────────────────── */}
        <section className="capstone__section">
          <h2>Overview</h2>
          <p>
            Pre-trade risk checks are a regulatory requirement in electronic trading. Every order must
            be validated against a set of risk limits before it reaches the exchange. In a typical
            software implementation, these checks run on the same CPU cores handling order flow, adding
            several microseconds of latency per order. This project moves all twelve checks into
            FPGA programmable logic so that the decision is made combinationally in a single clock
            cycle rather than sequentially in software.
          </p>
          <p>
            The system targets the NASDAQ OUCH 4.2 protocol. Orders arrive over TCP, are transferred
            to the FPGA via AXI DMA from a Linux kernel module running on the Zynq ARM cores, pass
            through the <code>risk_core</code> for evaluation, and return an accept or reject decision
            with a reason code. End-to-end latency (DMA submit → DMA complete, including FPGA
            processing) averages ~5.5 µs. Built as a 4th-year capstone project at the University of Waterloo.
          </p>
        </section>

        {/* ── Architecture ──────────────────────────────────────────── */}
        <section className="capstone__section">
          <h2>System Architecture</h2>
          <p className="capstone__section-intro">
            The Zynq SoC's PS/PL split maps naturally onto this design: the ARM cores handle TCP
            networking and DMA programming; the FPGA fabric handles the latency-critical evaluation.
            Dashed arrows cross the PS/PL boundary over the AXI interconnect.
          </p>
          <div className="capstone__diagram-wrap">
            <ArchDiagram />
          </div>
          <p className="capstone__diagram-caption">
            The kernel driver programs the AXI DMA engine, which moves the 256-bit order descriptor
            into the RX FIFO. <code>risk_core</code> evaluates all checks combinationally and writes
            a 128-bit result (accept/reject + reason code + echoed order ID) to the TX FIFO. The DMA
            reads it back and the driver returns the result to the TCP client.
          </p>
        </section>

        {/* ── Risk Checks ───────────────────────────────────────────── */}
        <section className="capstone__section">
          <h2>Risk Checks</h2>
          <p className="capstone__section-intro">
            All twelve checks evaluate combinationally in parallel. A priority encoder reports the first failing check.
             There are no pipeline stages and no bubbles; the result is ready one clock
            cycle after input is valid.
          </p>
          <ol className="capstone__checks">
            {riskChecks.map((check, i) => (
              <li key={i} className="capstone__check">
                <span className="capstone__check-num">{i + 1}</span>
                <span className="capstone__check-name">{check.name}</span>
                <span className="capstone__check-desc">{check.desc}</span>
              </li>
            ))}
          </ol>
          <p className="capstone__note">
            Checks 1–3 are single-bit flags configurable via AXI-Lite. Checks 7–10 involve
            comparators on 32-bit fixed-point values. Check 11 uses a token bucket counter 
            implemented in the PL with millisecond-granularity refill driven by a free-running 
            hardware counter. Check 12 accumulates a 64-bit running notional total reset at midnight.
          </p>
        </section>

        {/* ── Implementation Details ────────────────────────────────── */}
        <section className="capstone__section">
          <h2>Implementation Details</h2>

          <div className="capstone__impl-group">
            <h3>FPGA Design: <code>risk_core</code></h3>
            <ul>
              <li>
                Written in Verilog, targeting the KV260's Zynq UltraScale+ XCZU5EV
                (100 MHz target clock, timing closure achieved).
              </li>
              <li>
                AXI4-Stream slave interface for order data: 256-bit input carrying order type,
                symbol index, quantity, price, and order ID.
              </li>
              <li>
                AXI4-Stream master interface for results: 128-bit output carrying the accept/reject
                flag, reason code, and echoed order ID for correlation.
              </li>
              <li>
                AXI4-Lite register interface for runtime configuration of all risk parameters 
                (limit values can be updated without reloading the bitstream).
              </li>
              <li>
                Token bucket rate limiter with a configurable capacity and refill rate;
                millisecond-granularity refill driven by a free-running hardware counter in the PL.
              </li>
              <li>
                8-entry symbol lookup table (hardcoded for demo; production would use a CAM
                or TCAM for O(1) lookup across a larger symbol universe).
              </li>
              <li>
                32×32→64-bit notional multiply inferred as a DSP48E2 primitive to avoid routing
                the multiply through the fabric's LUT carry chain.
              </li>
            </ul>
          </div>

          <div className="capstone__impl-group">
            <h3>Kernel Driver: <code>risk_gateway.ko</code></h3>
            <ul>
              <li>
                Linux kernel module providing TCP connectivity and AXI DMA management for the
                Zynq PS, loaded via PetaLinux at boot.
              </li>
              <li>
                Uses <code>dma_alloc_coherent</code> for physically contiguous, cache-coherent DMA
                buffers; avoids the latency of explicit cache maintenance (<code>dma_sync_*</code>)
                on every transfer.
              </li>
              <li>
                Per-order latency measurement with <code>ktime_get_ns()</code> bracketing
                the DMA submit and DMA completion interrupt.
              </li>
              <li>
                Runtime statistics (order count, rejection breakdown by reason code, min/max/avg
                latency) exposed via a <code>/proc/risk_gateway</code> interface.
              </li>
              <li>
                Per-client kernel threads with reference-counted state and clean shutdown
                on TCP disconnect; no memory leaks under stress testing.
              </li>
            </ul>
          </div>

          <div className="capstone__impl-group">
            <h3>System Integration:</h3>
            <ul>
              <li>
                Vivado block design: Zynq PS → AXI Interconnect → AXI DMA + <code>risk_core</code>
                + AXI-Lite configuration path.
              </li>
              <li>
                PetaLinux image on the Cortex-A53 quad-core ARM, providing TCP/IP stack,
                driver loading, and the monitoring dashboard process.
              </li>
              <li>
                Python dashboard polling <code>/proc/risk_gateway</code> for real-time order
                throughput, per-reason-code rejection counts, and latency percentiles.
              </li>
              <li>
                Self-checking Verilog testbench: 43 test cases across 9 test groups covering
                all check boundaries and edge cases (e.g., exact limit values, simultaneous
                multiple failures, kill-switch interaction).
              </li>
            </ul>
          </div>
        </section>

        {/* ── Results ───────────────────────────────────────────────── */}
        <section className="capstone__section">
          <h2>Results</h2>

          <div className="capstone__results-grid">
            <div className="capstone__result">
              <div className="capstone__result-label">End-to-end latency (avg)</div>
              <div className="capstone__result-value">~5.5 µs</div>
              <div className="capstone__result-note">
                DMA submit → DMA completion interrupt; includes FPGA processing and AXI
                interconnect traversal.
              </div>
            </div>
            <div className="capstone__result">
              <div className="capstone__result-label">Peak throughput</div>
              <div className="capstone__result-value">~45,000 orders/sec</div>
              <div className="capstone__result-note">
              Bottleneck is the DMA round-trip overhead, not the FPGA logic. 
              The <code>risk_core</code> operates at 100 MHz with latency well 
              below the DMA transfer time.
              </div>
            </div>
            <div className="capstone__result">
              <div className="capstone__result-label">Testbench coverage</div>
              <div className="capstone__result-value">43 cases, 9 groups</div>
              <div className="capstone__result-note">
                All 12 checks verified; includes boundary conditions, simultaneous failure
                modes, and priority encoding correctness.
              </div>
            </div>
            <div className="capstone__result">
              <div className="capstone__result-label">Target device</div>
              <div className="capstone__result-value">XCZU5EV (KV260)</div>
              <div className="capstone__result-note">
                Zynq UltraScale+ with quad-core Cortex-A53 PS and UltraScale+ PL fabric
                (117,120 LUTs, 234,240 FFs, 144 BRAMs, 64 URAMs, 1,248 DSPs).
              </div>
            </div>
          </div>

          <h3 className="capstone__util-heading">FPGA Resource Utilization</h3>
          <div className="capstone__table-wrap">
            <table className="capstone__util-table">
              <thead>
                <tr>
                  <th>Resource</th>
                  <th>Used</th>
                  <th>Available (KV260)</th>
                  <th>Utilization</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>LUT</td>
                  <td>8,512</td>
                  <td>117,120</td>
                  <td>7.27%</td>
                </tr>
                <tr>
                  <td>FF</td>
                  <td>12,421</td>
                  <td>234,240</td>
                  <td>5.30%</td>
                </tr>
                <tr>
                  <td>BRAM (36K)</td>
                  <td>7</td>
                  <td>144</td>
                  <td>4.86%</td>
                </tr>
                <tr>
                  <td>URAM</td>
                  <td>6</td>
                  <td>64</td>
                  <td>9.38%</td>
                </tr>
                <tr>
                  <td>DSP48E2</td>
                  <td>4</td>
                  <td>1,248</td>
                  <td>0.32%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="capstone__note">Resource utilization numbers to be filled in from Vivado implementation report.</p>
          <div className="capstone__dashboard-caption">
            <h3>Monitoring Dashboard</h3>
            <p>Python dashboard polling <code>/proc/risk_gateway</code> in real time. Shows per-window order throughput, accepted/rejected counts, per-reason-code rejection breakdown, and FPGA latency percentiles.</p>
          </div>
          <img src={Dashboard} alt="Risk gateway monitoring dashboard" className="capstone__dashboard-img" />
        </section>

        {/* ── Credits ───────────────────────────────────────────────── */}
        <section className="capstone__section">
          <h2>Team</h2>
          <ul className="capstone__credits">
            <li><a href="https://linkedin.com/in/thomashart17" target="_blank" rel="noopener noreferrer">Thomas Hart</a></li>
            <li><a href="https://linkedin.com/in/nnasev" target="_blank" rel="noopener noreferrer">Nikola Nasev</a></li>
            <li><a href="https://linkedin.com/in/max-l-441341252" target="_blank" rel="noopener noreferrer">Max Long</a></li>
            <li><a href="https://linkedin.com/in/boris-jancic" target="_blank" rel="noopener noreferrer">Boris Jancic</a></li>
          </ul>
          <p className="capstone__note">
            My Contribution: RTL design (<code>risk_core</code> Verilog, AXI-Stream/AXI-Lite interfaces), Vivado block design and PL integration, and kernel driver (<code>risk_gateway.ko</code>).
          </p>
        </section>

        {/* ── Links ─────────────────────────────────────────────────── */}
        <section className="capstone__section capstone__links-section">
          <h2>Links</h2>
          <div className="capstone__links">
            <a
              href="https://uwaterloo.ca/capstone-design/project-abstracts/2026-capstone-design-projects/2026-electrical-and-computer-engineering-capstone-designs#59"
              target="_blank"
              rel="noopener noreferrer"
              className="btn capstone__link-btn"
            >
              <BsMortarboardFill size={16} />
              <span>UWaterloo Capstone Design</span>
            </a>
            <a
              href="https://github.com/thomashart17/pre-trade-risk-gateway"
              target="_blank"
              rel="noopener noreferrer"
              className="btn capstone__link-btn"
            >
              <BsGithub size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </section>

      </div>
    </main>
  )
}

export default Capstone
