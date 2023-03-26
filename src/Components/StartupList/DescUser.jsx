import React from "react"

const DescUser = () => {
    return(
        <div className="w-full">
            <p>
              The Daily Grind is a trendy coffee shop with an industrial theme,
              providing a unique and inviting atmosphere for coffee enthusiasts.
              The interior design features exposed brick walls, concrete floors,
              and metal finishes, creating an industrial feel. The coffee shop
              offers a wide range of specialty coffees, from classic drip coffee
              to more complex espresso drinks, served in custom-made
              industrial-style cups. The shop also offers a variety of pastries,
              baked goods, and light snacks to complement the coffee.
              <br />
              The Daily Grind is an excellent place to spend time relaxing,
              socializing, or working. With plenty of seating options, including
              cozy sofas, communal tables, and bar seating, customers can enjoy
              their coffee and snacks in comfort. The coffee shop also offers
              free Wi-Fi and a welcoming ambiance, making it an ideal spot for
              remote workers or students to study or get work done. The Daily
              Grind's industrial theme sets it apart from other coffee shops,
              creating an exciting and unique experience for coffee lovers in
              the area.
            </p>
            <div className="flex flex-row w-full py-10 text-lg">
              <div className="left">
                <div className="font-bold mb-6">
                  <h1 className="text-Neutral60">Industries</h1>
                  <p className="bg-Blue20 rounded-full text-center text-Blue100">Food and Beverage</p>
                </div>

                <div className="font-bold mb-6">
                  <h1 className="text-Neutral60">Founded Date</h1>
                  <p>2020</p>
                </div>

                <div className="font-bold mb-6">
                  <h1 className="text-Neutral60">Number of Funding Rounds</h1>
                  <p>2</p>
                </div>

                <div className="font-bold mb-6">
                  <h1 className="text-Neutral60">Last Funding Type</h1>
                  <p>Series B</p>
                </div>

              </div>
              <div className="right ml-28">
                <div className="font-bold mb-6">
                  <h1 className="text-Neutral60">Headquarter Regions</h1>
                  <p>Silicon Valley</p>
                </div>

                <div className="font-bold mb-6">
                  <h1 className="text-Neutral60">Operating Status</h1>
                  <p>Active</p>
                </div>

                <div className="font-bold mb-6">
                  <h1 className="text-Neutral60">Total Funding Amount</h1>
                  <p>$30K</p>
                </div>

              </div>
            </div>
          </div>
    )
}
export default DescUser