const IframeWithHTML = () => {
  const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ad Content</title>
      </head>
      <body>
        <a href='https://dxp.onreman.tech/revive-adserver/www/delivery/ck.php?n=a9c9a301&amp;cb=234' target='_blank'>
          <img src='https://dxp.onreman.tech/revive-adserver/www/delivery/avw.php?zoneid=8&amp;cb=234&amp;n=a9c9a301' border='0' alt='' />
        </a>
        <script type='text/javascript'>
          (function() {
            var OX_f841f4a8 = '';
            OX_f841f4a8 += "<a href='https://dxp.onreman.tech/revive-adserver/www/delivery/cl.php?bannerid=19&amp;zoneid=12&amp;sig=36f2f88e4f8e86fa3834bfc5254d790bbc5b572dfffd98d3e6efbb3447cd5005&amp;dest=https%3A%2F%2Fcapitalrevo.com' target='_blank' rel='noopener nofollow'><img src='https://dxp.onreman.tech/revive-adserver/www/images/de6941c950f685e14f573eedbef0018c.jpg' width='500' height='500' alt='' title='' border='0' /></a><div id='beacon_1c41ae6164' style='position: absolute; left: 0px; top: 0px; visibility: hidden;'><img src='https://dxp.onreman.tech/revive-adserver/www/delivery/lg.php?bannerid=19&amp;campaignid=9&amp;zoneid=12&amp;loc=about%3Asrcdoc&amp;cb=1c41ae6164' width='0' height='0' alt='' style='width: 0px; height: 0px;' /></div>";
            
            // Create a container for the ad content
            var container = document.createElement('div');
            container.innerHTML = OX_f841f4a8;
            document.body.appendChild(container);
          })();
        </script>
      </body>
      </html>
    `;

  return (
    <iframe
      srcDoc={htmlContent}
      width="100%"
      height="500px"
      style={{ border: "none" }}
      title="Custom HTML Content"
    />
  );
};

export default IframeWithHTML;
