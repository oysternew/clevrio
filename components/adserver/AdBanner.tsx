// components/AdbBanner.tsx
import Image from "next/image";
import React from "react";

const AdbBanner: React.FC = () => {
  const randomNumber = Math.floor(Math.random() * 10000) + 1;
  const adId = "aedb2ba7";
  const zoneId = "8";

  const adLink = `https://dxp.onreman.tech/revive-adserver/www/delivery/ck.php?n=${adId}&cb=${randomNumber}`;
  const adImage = `https://dxp.onreman.tech/revive-adserver/www/delivery/avw.php?zoneid=${zoneId}&cb=${randomNumber}&n=${adId}`;

  return (
    <div className="adb-banner">
      <a href={adLink} target="_blank" rel="noopener noreferrer">
        <Image width={720} height={300} src={adImage} alt="" />
      </a>
    </div>
  );
};

export default AdbBanner;
