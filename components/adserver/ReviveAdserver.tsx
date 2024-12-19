"use client";

import React, { useEffect } from "react";
import Script from "next/script";
import Image from "next/image";

type ReviveAdProps = {
  zoneId: number;
};

const ReviveAd: React.FC<ReviveAdProps> = ({ zoneId }) => {
  // This effect runs when the component mounts
  useEffect(() => {
    // This function can be used to refresh or apply ads if needed
    const reviveAsync = (window as any).reviveAsync;
    if (reviveAsync) {
      reviveAsync[zoneId].refresh();
    }
  }, [zoneId]);

  return (
    <>
      {/* Revive Adserver Script */}
      <Script
        id="revive-adserver"
        strategy="afterInteractive" // Load after the page is interactive
        dangerouslySetInnerHTML={{
          __html: `
                        var m3_u = (location.protocol=='https:' ? 
                            'https://dxp.onreman.tech/revive-adserver/www/delivery/ajs.php' : 
                            'http://dxp.onreman.tech/revive-adserver/www/delivery/ajs.php');
                        var m3_r = Math.floor(Math.random() * 99999999999);
                        if (!document.MAX_used) document.MAX_used = ',';
                        document.write("<scr"+"ipt type='text/javascript' src='" + m3_u + "?zoneid=${zoneId}&cb=" + m3_r + 
                            (document.MAX_used != ',' ? "&exclude=" + document.MAX_used : "") + 
                            (document.charset ? '&charset=' + document.charset : (document.characterSet ? '&charset=' + document.characterSet : '')) + 
                            "&loc=" + escape(window.location) + 
                            (document.referrer ? "&referer=" + escape(document.referrer) : "") + 
                            (document.context ? "&context=" + escape(document.context) : "") + 
                            "'><\\/scr"+"ipt>");
                    `,
        }}
      />
      <noscript>
        <a
          href={`https://dxp.onreman.tech/revive-adserver/www/delivery/ck.php?n=a29f1446&cb=INSERT_RANDOM_NUMBER_HERE`}
          target="_blank"
        >
          <Image
            src={`https://dxp.onreman.tech/revive-adserver/www/delivery/avw.php?zoneid=${zoneId}&cb=INSERT_RANDOM_NUMBER_HERE&n=a29f1446`}
            width={720}
            height={300}
            alt=""
          />
        </a>
      </noscript>
    </>
  );
};

export default ReviveAd;
