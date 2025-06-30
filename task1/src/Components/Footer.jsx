import React from "react";

function Footer() {
  return (
    <div className="bg-[#000000] py-8 text-[#888888] text-xs pb-8">
      <div className="flex justify-center flex-col items-center w-[96%] md:w-10/12 mx-auto ">
        <p>©2016-2025 Copyright Automate Channels. All Rights Reserved</p>
        <p>
          <span className="text-[#188BEE]">Privacy Policy </span>|
          <span className="text-[#188BEE]">Terms of Use/Service</span>{" "}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-10/12 mx-auto text-center pb-14">
        <p>
          This site is not a part of the Facebook, Google, or YouTube website or
          Facebook/Google/YouTube Inc. Additionally, This site is NOT endorsed
          by those platforms.
        </p>
        <p>
          Disclaimer: Results not typical. Your results will vary based on many
          factors like timing, work ethic, trends, team, budget, etc. From
          October 2022 - October 2023 our research suggests the average client
          made $9,444 per month. This average does not mean guarantee of your
          result, simply what others have been able to do. Joining a program or
          building a side hustle can be risky and does not always work out, you
          should do your own research before hand. Caleb Boxx & Automate
          Channels is also NOT affiliated or partnered with YouTube (or Google)
          the company.
        </p>
      </div>
    </div>
  );
}

export default Footer;
