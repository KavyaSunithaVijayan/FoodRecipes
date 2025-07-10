function Footer() {
  return (
    <div className="bg-blue-100 w-full fixed bottom-0">
      <div className=" items-center text-center py-2">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="mx-auto w-15 sm:w-20 h-15 sm:h-20"
        />
        Designed and developed by{" "}
        <span className="text-pink-400">Kavya Vijayan</span>
      </div>
    </div>
  );
}

export default Footer;
