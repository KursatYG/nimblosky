const Footer = () => {
  return (
    <footer className="flex flex-row flex-wrap items-center gap-2 justify-center pb-4">
      <p className="flex items-center gap-2">
        Bu site <span className="font-bold">KursatYG</span>tarafından yapılmıştır.
      </p>
      <p className="flex items-center gap-2 textColor">
        <a href="https://openweathermap.org/api" target="_blank">
          <img src="openweather.png" alt="openweather" width={80} height={120} />
        </a>
        tarafından desteklenmektedir.
      </p>
    </footer>
  );
};

export default Footer;
