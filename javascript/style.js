let covid_section_card__row = document.querySelector(
  ".covid_section_card__row"
);
let Select_Options = document.querySelector(".Select_Options");
let Select_Options_value = document.querySelector(".Select_Options");
let loader_1 = document.querySelector(".loader_1");
let hide_1 = document.querySelector(".hide_1");
//----cart
let cart_Add_Product_count = document.querySelector(".cart_Add_Product_count");
let add_cart_all_btn = document.querySelectorAll(".add-cart-main-all");
let table_body_new = document.querySelector(".table_body_new");
let btn_increment = document.querySelectorAll(".btn_increment");
let btn_decrement = document.querySelectorAll(".btn_decrement");
let btn_rs_1 = document.querySelector(".btn_rs_1");
let btn_rs_2 = document.querySelector(".btn_rs_2");
let btn_rs_3 = document.querySelector(".btn_rs_3");
let btn_rs_4 = document.querySelector(".btn_rs_4");
let btn_rs_5 = document.querySelector(".btn_rs_5");
let btn_rs_6 = document.querySelector(".btn_rs_6");
let cartTotalPrice = document.querySelector(".cartTotalPrice");
let clearCart = document.querySelector(".clearCart");
let cartEmpty_logo = document.querySelector(".cartEmpty_logo");
let blurCartHeader = document.querySelector(".blurCartHeader");
let loader_add_cart = document.querySelector(".loader_add_cart");
let loader = document.getElementById("preloader");

//------------- loading page ------------------------
window.addEventListener("load", () => {
  loader.style.display = "none";
});

//--- api_varibales
let only_districts;
const alldata = {
  confirmed: "",
  deceased: "",
  recovered: "",
  vaccinated1: "",
  vaccinated2: "",
  state_Name: "",
  date_covid: "",
};
//--- product_varibales
let Total_Price;
let allPrice_add_to_Array = [];
let Cart_add_to_Array = [];
allPrice_add_to_Array.push(window.localStorage.getItem("Rs")?.split(","));
Cart_add_to_Array.push(window.localStorage.getItem("cart_row")?.split(","));

//----------------------------------------Api start
Select_Options_value?.addEventListener("change", () => {
  let selected_country = Select_Options_value.value;
  covidApi(selected_country);
});

const clear = () => {
  document.querySelector(".covid_section_card__row").innerHTML = "w";
};
// insert api data into html
const insertdata = () => {
  let covidcard = `<div class="col row_covi__cards text-center">
            <div class="card" style="width: 28rem">
              <div class="card-body">
                <h1 class="state text-center text-primary">${
                  alldata.state_Name
                }</h1>
                <h1>Date : <span>${
                  alldata.date_covid ?? "Not in Api"
                }</span></h1>
                <h1 class="confirmed">Confirmed : <span>${
                  alldata.confirmed
                }</span></h1>
                <h1 class="deceased">Deceased : <span>${
                  alldata.deceased
                }</span></h1>
                <h1 class="recovered">Recovered : <span>${
                  alldata.recovered
                }</span></h1>
                <h1>Vaccation-1 : <span>${alldata.vaccinated1}</span></h1>
                <h1>Vaccation-2 : <span>${alldata.vaccinated2}</span></h1>
              </div>
            </div>
          </div>`;
  covid_section_card__row.insertAdjacentHTML("afterbegin", covidcard);
};
// Set country data to object from api
const set_data_to_object = () => {
  alldata.confirmed = only_districts.total.confirmed;
  alldata.deceased = only_districts.total.deceased;
  alldata.recovered = only_districts.total.recovered;
  alldata.vaccinated1 = only_districts.total.vaccinated1;
  alldata.vaccinated2 = only_districts.total.vaccinated2;
  alldata.date_covid = only_districts.meta.tested?.date;
  insertdata();
};

const extractDatat = (data_districts) => {
  for (const key in data_districts) {
    only_districts = data_districts[key];
    alldata.state_Name = key;
    set_data_to_object();
  }
};
const search_country_api = (data_districts) => {
  extractDatat(data_districts);
};
// COVID API
async function covidApi(selected_country) {
  try {
    loader_1?.classList.add("loader");
    hide_1?.classList.add("hide");
    const req = await fetch(
      "https://data.covid19india.org/v4/min/data.min.json"
    );
    data = await req.json();
    console.log(data);
    setTimeout(() => {
      loader_1?.classList.remove("loader");
      hide_1?.classList.remove("hide");
      console.log("Delayed for 1 second.");
      if (selected_country === "HR") {
        clear();
        const data_districts = data.HR.districts;
        search_country_api(data_districts);
      } else if (selected_country === "WB") {
        clear();
        const data_districts = data.WB.districts;
        search_country_api(data_districts);
      } else if (selected_country === "UT") {
        clear();
        const data_districts = data.UT.districts;
        search_country_api(data_districts);
      } else if (selected_country === "UP") {
        clear();
        const data_districts = data.UP.districts;
        search_country_api(data_districts);
      } else if (selected_country === "TR") {
        clear();
        const data_districts = data.TR.districts;
        search_country_api(data_districts);
      } else if (selected_country === "TG") {
        clear();
        const data_districts = data.TG.districts;
        search_country_api(data_districts);
      } else if (selected_country === "SK") {
        clear();
        const data_districts = data.SK.districts;
        search_country_api(data_districts);
      } else if (selected_country === "RJ") {
        clear();
        const data_districts = data.RJ.districts;
        search_country_api(data_districts);
      } else if (selected_country === "PY") {
        clear();
        const data_districts = data.PY.districts;
        search_country_api(data_districts);
      } else if (selected_country === "PB") {
        clear();
        const data_districts = data.PB.districts;
        search_country_api(data_districts);
      } else if (selected_country === "OR") {
        clear();
        const data_districts = data.OR.districts;
        search_country_api(data_districts);
      } else if (selected_country === "NL") {
        clear();
        const data_districts = data.NL.districts;
        search_country_api(data_districts);
      } else if (selected_country === "MZ") {
        clear();
        const data_districts = data.MZ.districts;
        search_country_api(data_districts);
      } else if (selected_country === "ML") {
        clear();
        const data_districts = data.ML.districts;
        search_country_api(data_districts);
      } else if (selected_country === "MH") {
        clear();
        const data_districts = data.MH.districts;
        search_country_api(data_districts);
      } else if (selected_country === "LD") {
        clear();
        const data_districts = data.LD.districts;
        search_country_api(data_districts);
      } else if (selected_country === "LA") {
        clear();
        const data_districts = data.LA.districts;
        search_country_api(data_districts);
      } else if (selected_country === "KL") {
        clear();
        const data_districts = data.KL.districts;
        search_country_api(data_districts);
      } else if (selected_country === "KA") {
        clear();
        const data_districts = data.KA.districts;
        search_country_api(data_districts);
      } else if (selected_country === "JK") {
        clear();
        const data_districts = data.JK.districts;
        search_country_api(data_districts);
      } else if (selected_country === "JH") {
        clear();
        const data_districts = data.JH.districts;
        search_country_api(data_districts);
      } else if (selected_country === "HR") {
        clear();
        const data_districts = data.HR.districts;
        search_country_api(data_districts);
      } else if (selected_country === "HP") {
        clear();
        const data_districts = data.HP.districts;
        search_country_api(data_districts);
      } else if (selected_country === "GJ") {
        clear();
        const data_districts = data.GJ.districts;
        search_country_api(data_districts);
      } else if (selected_country === "GA") {
        clear();
        const data_districts = data.GA.districts;
        search_country_api(data_districts);
      } else if (selected_country === "DN") {
        clear();
        const data_districts = data.DN.districts;
        search_country_api(data_districts);
      } else if (selected_country === "DL") {
        clear();
        const data_districts = data.DL.districts;
        search_country_api(data_districts);
      } else if (selected_country === "CT") {
        clear();
        const data_districts = data.CT.districts;
        search_country_api(data_districts);
      } else if (selected_country === "CH") {
        clear();
        const data_districts = data.CH.districts;
        search_country_api(data_districts);
      } else if (selected_country === "BR") {
        clear();
        const data_districts = data.BR.districts;
        search_country_api(data_districts);
      } else if (selected_country === "AS") {
        clear();
        const data_districts = data.AS.districts;
        search_country_api(data_districts);
      } else if (selected_country === "AR") {
        clear();
        const data_districts = data.AR.districts;
        search_country_api(data_districts);
      } else if (selected_country === "AP") {
        clear();
        const data_districts = data.AP.districts;
        search_country_api(data_districts);
      } else if (selected_country === "AN") {
        clear();
        const data_districts = data.AN.districts;
        search_country_api(data_districts);
      } else {
        clear();
        const data_districts = data.HR.districts;
        search_country_api(data_districts);
      }
    }, 1000);
  } catch (error) {
    console.log(error.message);
  }
}
covidApi();

// ----------------------------------------Cart Product start
// Product Cart Increment
btn_increment.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.target.offsetParent.children[1].innerText =
      Number(e.target.offsetParent.children[1].innerText) + 1;
  });
});
// product cart decrement
btn_decrement.forEach((e) => {
  e.addEventListener("click", (e) => {
    if (e.target.offsetParent.children[1].innerText > 1) {
      e.target.offsetParent.children[1].innerText =
        Number(e.target.offsetParent.children[1].innerText) - 1;
    }
  });
});
// update cart
const Update_Cart_initially = () => {
  cart_Add_Product_count.innerText =
    window.localStorage.getItem("Rs")?.split(",").length - 1 || "0";

  allPrice_add_to_Array.forEach((e) => {
    Total_Price = e?.reduce((prev, curent) => {
      return Number(prev) + Number(curent);
    });
  });
  cartTotalPrice.innerText = Number(Total_Price) || "0";

  localStorage.getItem("cart_row")
    ? (table_body_new?.insertAdjacentHTML(
        "afterbegin",
        window.localStorage.getItem("cart_row")
      ),
      cartEmpty_logo.classList.add("hide"),
      blurCartHeader.classList.remove("blur"))
    : (loader_add_cart.classList.add("loader"),
      cartEmpty_logo.classList.add("hide"),
      blurCartHeader.classList.add("blur"),
      setTimeout(() => {
        loader_add_cart.classList.remove("loader");
        cartEmpty_logo.classList.remove("hide");
        clearCart.innerText = "Cart Empty";
        clearCart.style.backgroundColor = "red";
        clearCart = "red";
      }, 2000));
};
// Clear cart
clearCart?.addEventListener("click", () => {
  window.localStorage.clear();
});
// set data to local storage
const LocalStorage_set = () => {
  localStorage.setItem("cart_row", Cart_add_to_Array);
  localStorage.setItem("Rs", allPrice_add_to_Array);
};
// add to cart buton working
add_cart_all_btn.forEach((e) => {
  e.addEventListener("click", (e) => {
    console.log(e.target.offsetParent);
    const Current_img = e.target.offsetParent.children[0].src;
    const Current_Medicine =
      e.target.offsetParent.children[1].children[0].innerText;
    const Current_Card_Rs =
      e.target.offsetParent.children[1].children[2].children[0].innerText;
    const Current_Cart_count =
      e.target.offsetParent.children[1].children[3].children[1].innerText;
    console.log(Current_Cart_count);
    allPrice_add_to_Array.push(
      Number(Current_Card_Rs) * Number(Current_Cart_count)
    );
    Cart_add_to_Array.push(`<tr>
    <td class="text-center" scope="row"><img src=${Current_img} alt="" /></td>
    <td data-label="Product" >${Current_Medicine}</td>
    <td data-label="Price"  >${Current_Card_Rs}</td>
    <td data-label="Quantity"  >${Current_Cart_count}</td>
    <td data-label="Total"  >${
      Number(Current_Card_Rs) * Number(Current_Cart_count)
    }</td>
  </tr>`);
    LocalStorage_set();
    Update_Cart_initially();
  });
});
// initially triger
Update_Cart_initially();
