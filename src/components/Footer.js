import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col pt-16">
      <div className="px-30 flex flex-5 justify-around space-x-20">
        <div>
          <h3 className="text-blue-400 text-2xl font-bold w-50">
            Hello, we are SQI College of ICT
          </h3>
          <h4 className="mt-6">
            We provide and lead ohers in quality ICT education
          </h4>
          <h4 className="mt-15 text-stone-600">Send us a mail</h4>
          <p className="text-blue-500">
            <a href="mailto">enquiry@edu.sqi.ng</a>
          </p>
        </div>
        <div className="py-3 space-y-5">
          <h6 className="mt-3 text-lg w-50 font-bold">Quick Links</h6>
          <p className="mt-10 text-stone-600">Application Portal</p>
          <p className="text-stone-600">Student Portal</p>
          <p className="text-stone-600">Professional Courses</p>
          <p className="text-stone-600">NID Courses</p>
          <p className="text-stone-600">Campus Info</p>
          <p className="text-stone-600">Accomodation</p>
          <p className="text-stone-600">SQI Scholarship</p>
          <p className="text-stone-600">Donate</p>
        </div>
        <div className="py-3 space-y-5">
          <h6 className="mt-3 text-lg font-bold w-50">Ogbomoso</h6>
          <p className="text-stone-600">
            Old Ilorin Road, Opposite Yoaco Filling Station, Yoaco, Ogbomoso.
          </p>
          <p className="text-stone-600">
            <strong>0906 281 9991, 0906 281 9993</strong>
          </p>
          <p>
            <a href="" className="text-blue-500">Locate on the map</a>
          </p>
        </div>
        <div className="space-y-5">
          <h6 className="mt-3 text-lg font-bold w-50">Ibadan</h6>
          <p className="text-stone-600">
            First Floor, H25 Heritage Mall, Opposite Central Bank of Nigeria,
            Dugbe, Ibadan.
          </p>
          <p className="text-stone-600">
            <strong>0906 281 9994</strong>
          </p>
          <p>
            <a href="" className="text-blue-500">Locate on the map</a>
          </p>
          <p className="text-stone-600">
            Christianah Oyinade Ajoke House, beside First Bank, Arisekola
            Central Mosque, Opposite Jaiz bank, Idi Ape, Iwo road, Ibadan.
          </p>
          <p className="text-stone-600">
            <strong>0906 281 9995</strong>
          </p>
          <p>
            <a href="" className="text-blue-500">Locate on the map</a>
          </p>
          <p className="text-stone-600">
            Haier Thermocool Building, opposite SAO filling station, Challenge,
            Ibadan, Oyo State.
          </p>
          <p className="text-stone-600">
            <strong>0906 281 9992</strong>
          </p>
          <p>
            <a href="" className="text-blue-500">Locate on the map</a>
          </p>
        </div>
        <div className="space-y-5">
          <h6 className="mt-3 text-lg font-bold w-50">Abeokuta</h6>
          <p className="text-stone-600">First floor, OPIC Tower building, Okeilewo, Abeokuta.</p>
          <p className="text-stone-600">
            <strong>0906 281 9996</strong>
          </p>
          <p>
            <a href="" className="text-blue-500">Locate on the map</a>
          </p>
          <h6 className="text-stone-600">Osogbo</h6>
          <p>Opposite Jaiz bank, Ogo-Oluwa, Osogbo</p>
          <p className="text-stone-600">
            <strong>0906 281 9997</strong>
          </p>
          <p>
            <a href="" className="text-blue-500">Locate on the map</a>
          </p>
        </div>
      </div>
      <div className="bg-[#040036] mt-10">
        <div>
          <div className="px-40 pt-5">
            <div>Copyright © {new Date().getFullYear()} | SQI ICT Consultants. All Right Reserved</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
