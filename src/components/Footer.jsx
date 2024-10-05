const Footer = () => {
  return (
    <div className="footer">
      <div className="contaner flex justify-between  p-3 bg-sky-400 px-5">
        <p>
          <i class="fa-solid fa-copyright"></i>copyright By <span className="font-bold">Ngoding</span>
        </p>
        <div className="mediasocial items-center flex gap-3">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-square-whatsapp"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
