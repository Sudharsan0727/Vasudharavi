export default function GoldDivider() {
  return (
    <div className="w-full flex justify-center py-16 opacity-80">
      <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 12H45" stroke="#C9A84C" strokeWidth="1" />
        <path d="M75 12H120" stroke="#C9A84C" strokeWidth="1" />
        <circle cx="60" cy="12" r="4" fill="#C9A84C" />
        <circle cx="50" cy="12" r="2" fill="#F5D67B" />
        <circle cx="70" cy="12" r="2" fill="#F5D67B" />
      </svg>
    </div>
  );
}
