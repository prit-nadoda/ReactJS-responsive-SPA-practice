import React from "react";

function AboutSection() {
  return (
    <>
      <div className="about">
        <div className="left">
          <div className="up">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              reiciendis neque voluptate saepe libero soluta. Omnis, ducimus.
              Sed amet animi
            </p>
            <span>Read More <i class="fa fa-chevron-right" aria-hidden="true"></i></span>
          </div>
          <div className="down">
          <h1>Why Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              reiciendis neque voluptate saepe libero soluta. Omnis, ducimus.
              Sed amet animi vel quod corporis dolorem, alias sunt dolores,
              soluta, recusandae perferendis!
            </p>
            <span>Read More <i class="fa fa-chevron-right" aria-hidden="true"></i></span>
          </div>
        </div>
        <div className="right">
            <img src="https://c4.wallpaperflare.com/wallpaper/285/172/9/sunset-8k-forest-4k-wallpaper-preview.jpg" alt="Some Image" />
        </div>
      </div>
    </>
  );
}

export default AboutSection;
