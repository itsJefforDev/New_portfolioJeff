import React from "react";

const GlowCard = ({ user, className = "" }) => {
  const [visible, setVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const cardRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const bounds = cardRef.current.getBoundingClientRect();

    setPosition({
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className={`relative backdrop-blur-2xl w-80 h-96 rounded-xl p-px bg-gray-900/1 z-10 overflow-hidden shadow-lg cursor-pointer ${className}`}
    >
      {/* Glow */}
      <div
        className={`pointer-events-none blur-3xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-300 size-60 absolute z-0 transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          top: position.y - 120,
          left: position.x - 120,
        }}
      />

      {/* Content */}
      <div className="relative z-10 bg-slate-900/75 p-6 h-full w-full rounded-[11px] flex flex-col items-center justify-center text-center">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-26 h-26 shadow-md my-4 object-cover"
        />

        <h2 className="text-2xl font-bold text-white mb-1">
          {user.name}
        </h2>

        <p className="text-sm text-indigo-500 font-medium mb-4">
          {user.role}
        </p>

        <p className="text-sm text-slate-400 mb-4 px-4">
          {user.description}
        </p>

        <div className="flex space-x-4 text-slate-400">
          {user.socials?.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:-translate-y-0.5 transition"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GlowCard;