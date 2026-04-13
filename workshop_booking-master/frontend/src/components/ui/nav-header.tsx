import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Workshop Statistics", href: "/statistics/public" },
    { label: "Workshop Status", href: "/workshop/status" },
    { label: "Propose Workshop", href: "/workshop/propose/" },
    { label: "Workshop Types", href: "/workshop/types/" }
  ];

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-md p-2 gap-2"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      style={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center' }}
    >
      {navItems.map((item) => (
        <Tab key={item.label} setPosition={setPosition} href={item.href}>
          {item.label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({
  children,
  setPosition,
  href,
}: {
  children: React.ReactNode;
  setPosition: any;
  href: string;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-2 py-1 text-xs uppercase text-white md:px-3 md:py-2 md:text-xs font-semibold tracking-wider whitespace-nowrap"
      style={{ fontSize: '0.75rem' }}
    >
      <a href={href} className="block hover:text-blue-300 transition-colors" style={{ color: 'inherit' }}>
        {children}
      </a>
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-blue-500/20 md:h-8"
    />
  );
};

export default NavHeader;
