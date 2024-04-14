import React from "react";

const Footer = () => {
  const foot1 = [
    {
      head: "Location",

      text: "Surat, Gujarat, India - Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur impedit enim inventore quibusdam corrupti odit laboriosam perferendis id, porro ea.",
    },
    {
      head: "About Us",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur impedit enim inventore quibusdam corrupti odit laboriosam perferendis id, porro ea.",
    },
  ];
  const foot2 = [
    {
      head: "Navigate",
      text: ["Home", "About", "Services", "Contact", "Profile"],
    },
    {
      head: "Services",
      text: [
        "Home Delivery",
        "More Personalization",
        "Long term Support",
        "Easy Contact",
        "Other Benefits",
      ],
    },
  ];

  return (
    <>
      <div className="footer">
        <div className="up">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.Q4H6aTA5hs7XkGkeboNA7gHaCP&pid=Api&P=0&h=180"
            alt="logo"
            border="0"
          />
        </div>
        <div className="mid">
          {foot1.map((data,index) => {
            return (
              <div className="foot-card" key={index}>
                <h2>{data.head}</h2>
                <p>{data.text}</p>
              </div>

            );
          })}
          {foot2.map((data,index)=>{
            return(
                <div className="foot-card" key={index}>
                <h2>{data.head}</h2>
                {data.text.map((list,i)=>{
                    return(
                        <p key={i}>{list}</p>
                    )
                })}
              </div>
            )
          })}
        </div>
        <div className="down">
        <i class="fa fa-facebook-official" aria-hidden="true"></i>
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
        <i class="fa fa-pinterest-square" aria-hidden="true"></i>
        <i class="fa fa-twitter-square" aria-hidden="true"></i> 
        </div>
      </div>
    </>
  );
};

export default Footer;
