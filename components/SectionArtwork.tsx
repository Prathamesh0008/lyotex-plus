import styles from "./SectionArtwork.module.css";

export default function SectionArtwork({ kind }: { kind: "molecule" | "quality" | "process" | "conversation" }) {
  return <div className={`${styles.art} ${styles[kind]}`} aria-hidden="true">
    <svg viewBox={kind === "process" ? "0 60 360 90" : "0 0 360 220"} fill="none" xmlns="http://www.w3.org/2000/svg">
      {kind === "molecule" && <>
        <circle cx="186" cy="104" r="86" stroke="#d8e9f8"/><ellipse cx="186" cy="104" rx="132" ry="56" transform="rotate(-30 186 104)" stroke="#cee3f5"/>
        <g stroke="#72afd8" strokeWidth="3"><path d="m77 148 61-74 70 54 78-74M138 74l-14-44m84 98-24 61m24-61 86 42"/></g>
        <g fill="#e2f2ff" stroke="#81bce5" strokeWidth="2"><circle cx="77" cy="148" r="17"/><circle cx="138" cy="74" r="24"/><circle cx="208" cy="128" r="32"/><circle cx="286" cy="54" r="21"/><circle cx="184" cy="189" r="16"/><circle cx="294" cy="170" r="13"/><circle cx="124" cy="30" r="11"/></g>
        <g fill="#fff" opacity=".9"><circle cx="130" cy="65" r="7"/><circle cx="198" cy="117" r="10"/><circle cx="280" cy="48" r="6"/></g>
      </>}
      {kind === "quality" && <>
        <circle cx="180" cy="108" r="81" fill="#f2f8fd" stroke="#d6e7f5"/><circle cx="180" cy="108" r="101" stroke="#dcebf5" strokeDasharray="3 7"/>
        <path d="m180 51 45 17v41c0 29-24 49-45 60-21-11-45-31-45-60V68Z" fill="#e1f1fe" stroke="#338bc4" strokeWidth="2"/>
        <path d="m158 105 16 16 30-34" stroke="#0674bb" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        {[ [77,108], [283,108], [180,207] ].map(([x,y])=><g key={x}><circle cx={x} cy={y} r="12" fill="white" stroke="#a8d0ea"/><path d={`m${x-5} ${y} 3 3 7-7`} stroke="#1787bf" strokeWidth="2"/></g>)}
        <path d="M35 108h28m234 0h28" stroke="#adcde4"/>
      </>}
      {kind === "process" && <>
        <path d="M57 105h244" stroke="#bdd8eb" strokeWidth="2"/><path d="m121 99 6 6-6 6m110-12 6 6-6 6" stroke="#2585c0" strokeWidth="2"/>
        {[60,180,300].map(x=><circle key={x} cx={x} cy="105" r="31" fill="#eff8ff" stroke="#b9daef"/>)}
        <g stroke="#1477b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M55 85h10m-8 0v13l-12 22h30L63 98V85m-12 24h18"/><path d="M163 122V99l11 6V93l11 9V87h9l3 35h-34m8-9h2m10 0h2"/><path d="m300 84 18 7v14c0 12-9 19-18 24-9-5-18-12-18-24V91Zm-9 21 6 6 12-15"/></g>
      </>}
      {kind === "conversation" && <>
        <circle cx="180" cy="110" r="94" fill="#edf6fd"/>
        <rect x="91" y="53" width="130" height="86" rx="18" fill="white" stroke="#a6cde8" strokeWidth="2"/>
        <path d="m113 138-7 25 34-24" fill="white" stroke="#a6cde8" strokeWidth="2"/>
        <rect x="161" y="104" width="110" height="69" rx="15" fill="#dceffc" stroke="#529cd0" strokeWidth="2"/>
        <path d="m249 173 7 20-27-20" fill="#dceffc" stroke="#529cd0" strokeWidth="2"/>
        <path d="M116 80h78m-78 19h52" stroke="#74afd6" strokeWidth="4" strokeLinecap="round"/>
        {[189,216,243].map(x=><circle key={x} cx={x} cy="139" r="4" fill="#1477b7"/>)}
      </>}
    </svg>
  </div>;
}
