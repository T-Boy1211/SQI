import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col-5 justify-between">
      <div>
        <h3 className="text-blue-400 text-2xl font-bold">Hello, we are SQI College of ICT</h3>
        <h4 className="mt-6">We provide and lead ohers in quality ICT education</h4>
        <h4 className="mt-15">Send us a mail</h4>
        <p className="text-blue-500">
          <a href="mailto">enquiry@edu.sqi.ng</a>
        </p>
      </div>
      <div className="py-3">
        <h6 className="mt-3 text-lg">Quick Links</h6>
        <p className="mt-10">Application Portal</p>
        <p>Student Portal</p>
        <p>Professional Courses</p>
        <p>NID Courses</p>
        <p>Campus Info</p>
        <p>Accomodation</p>
        <p>SQI Scholarship</p>
        <p>Donate</p>
      </div>
      <div className="py-3">
        <h6 className="mt-3 text-lg">Ogbomoso</h6>
        <p>Old Ilorin Road, Opposite Yoaco Filling Station, Yoaco, Ogbomoso.</p>
        <p>
          <strong>0906 281 9991, 0906 281 9993</strong>
        </p>
        <p>
          <a href="">Locate on the map</a>
        </p>
      </div>
      <div>
        <h6>Ibadan</h6>
        <p>
          First Floor, H25 Heritage Mall, Opposite Central Bank of Nigeria,
          Dugbe, Ibadan.
        </p>
        <p>
          <strong>0906 281 9994</strong>
        </p>
        <p>
          <a href="">Locate on the map</a>
        </p>
        <p>Christianah Oyinade Ajoke House, beside First Bank, Arisekola Central Mosque, Opposite Jaiz bank, Idi Ape, Iwo road, Ibadan.</p>
        <p>
          <strong>0906 281 9995</strong>
        </p>
        <p>
          <a href="">Locate on the map</a>
        </p>
        <p>Haier Thermocool Building, opposite SAO filling station, Challenge, Ibadan, Oyo State.</p>
        <p>
          <strong>0906 281 9992</strong>
        </p>
        <p>
          <a href="">Locate on the map</a>
        </p>
      </div>
      <div>
        <h6>Abeokuta</h6>
        <p>First floor, OPIC Tower building, Okeilewo, Abeokuta.</p>
        <p>
          <strong>0906 281 9996</strong>
        </p>
        <p>
          <a href="">Locate on the map</a>
        </p>
        <h6>Osogbo</h6>
        <p>Opposite Jaiz bank, Ogo-Oluwa, Osogbo</p>
        <p>
          <strong>0906 281 9997</strong>
        </p>
        
      </div>
    </footer>
  );
};

export default Footer;
