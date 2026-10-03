/**
 * Builds an SVG path describing a normal sinus rhythm pattern:
 * baseline → P wave → PR segment → QRS complex → ST segment → T wave → baseline.
 */
export function buildEcgPath(beats: number, beatWidth = 200, baseline = 50, amplitude = 1): string {
  const a = (v: number) => baseline - v * amplitude;
  let d = `M0 ${baseline}`;
  for (let i = 0; i < beats; i++) {
    const x = i * beatWidth;
    const s = beatWidth / 200;
    const px = (v: number) => (x + v * s).toFixed(1);
    d += ` L${px(40)} ${baseline}`;
    d += ` Q${px(50)} ${a(14)} ${px(60)} ${baseline}`; // P wave
    d += ` L${px(72)} ${baseline}`; // PR segment
    d += ` L${px(76)} ${a(-6)}`; // Q
    d += ` L${px(81)} ${a(40)}`; // R
    d += ` L${px(86)} ${a(-13)}`; // S
    d += ` L${px(90)} ${baseline}`;
    d += ` L${px(108)} ${baseline}`; // ST segment
    d += ` Q${px(123)} ${a(24)} ${px(140)} ${baseline}`; // T wave
    d += ` L${px(200)} ${baseline}`;
  }
  return d;
}