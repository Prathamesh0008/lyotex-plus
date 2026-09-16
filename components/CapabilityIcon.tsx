import { useId } from "react";

export default function CapabilityIcon({ name }: { name: string }) {
  const id = useId();
  const blue = `url(#${id})`;
  return <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
    <defs><linearGradient id={id} x1="18" y1="14" x2="62" y2="67" gradientUnits="userSpaceOnUse"><stop stopColor="#28b5ec"/><stop offset="1" stopColor="#1154a1"/></linearGradient></defs>
    <ellipse cx="40" cy="69" rx="25" ry="4" fill="#dae9f4"/>
    {name === "R&D" && <>
      <path d="M28 13h21v6h-4v18l16 25c2 4 0 6-4 6H22c-4 0-6-3-4-6l15-25V19h-5Z" fill="#e5f4fd" stroke="#8ac5e8" strokeWidth="1.5"/>
      <path d="m28 47-9 15c-1 2 0 4 3 4h35c3 0 4-2 2-4l-9-15c-8 5-14-5-22 0Z" fill={blue}/>
      <path d="M28 13h21v6H28Z" fill={blue}/><circle cx="35" cy="53" r="3" fill="#c4efff"/><circle cx="45" cy="59" r="2" fill="#c4efff"/><circle cx="42" cy="32" r="3" fill="#55b8e5"/><circle cx="55" cy="22" r="4" fill="#b4e2f8"/>
    </>}
    {name === "Manufacturing" && <>
      <path d="M16 36 33 27v14l16-9v34H16Z" fill={blue}/><path d="M49 17h11l5 49H49Z" fill="#95d1ef"/><path d="M49 17h11v6H49Z" fill="#1263ab"/>
      <path d="M23 47h6v6h-6zm12 0h6v6h-6z" fill="#c8eeff"/><path d="M34 58h8v8h-8" fill="#0c4887"/><path d="M54 30h5m-4 9h5m-4 9h5" stroke="white" strokeWidth="2"/><path d="M14 66h53" stroke="#145a9a" strokeWidth="3" strokeLinecap="round"/>
    </>}
    {name === "Quality" && <>
      <path d="m40 11 25 10v19c0 16-11 25-25 31C26 65 15 56 15 40V21Z" fill="#d6edfb" stroke="#99cbe9"/><path d="m40 17 19 8v15c0 12-8 21-19 26-11-5-19-14-19-26V25Z" fill={blue}/><path d="m29 40 8 8 16-19" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </>}
    {name === "Regulatory" && <>
      <path d="M21 12h28l12 12v41H21Z" fill="#e6f4fd" stroke="#9dcde9"/><path d="M49 12v13h12" fill="#82c6e9"/><path d="M29 27h12m-12 9h23m-23 8h17" stroke="#3387bf" strokeWidth="3" strokeLinecap="round"/><path d="m52 54-7 17 10-4 6 5 3-19" fill="#82c6e9"/><circle cx="56" cy="51" r="12" fill={blue}/><path d="m51 51 4 4 6-8" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </>}
    {name === "cGMP" && <>
      <rect x="19" y="17" width="43" height="49" rx="5" fill={blue}/><rect x="24" y="24" width="33" height="37" rx="2" fill="#f3faff"/><rect x="30" y="12" width="21" height="13" rx="4" fill="#a8d9f2" stroke="#458fbf"/><path d="m30 37 3 3 6-7m-9 18 3 3 6-7" stroke="#1685c4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M44 37h7m-7 14h7" stroke="#8abbd9" strokeWidth="2.5" strokeLinecap="round"/>
    </>}
    {name === "Technology Transfer" && <>
      <path d="M20 27c9-16 32-17 43-1m-9-1 10 3 1-11M60 54c-9 16-32 17-43 1m9 0-10-3-1 11" stroke="#2689c6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="m14 33 13-6 13 6v16l-13 7-13-7Z" fill="#b6e1f6"/><path d="m27 40 13-7v16l-13 7Z" fill="#65b5df"/><path d="m41 39 13-6 13 6v16l-13 7-13-7Z" fill={blue}/><path d="m41 39 13 7 13-7m-13 7v16" stroke="#a7def7" strokeWidth="1.5"/>
    </>}
  </svg>;
}
