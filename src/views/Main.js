import React, { useEffect, useState } from "react";
import LeftColumn from "../components/leftColumn/LeftColumn";
import Portal from "../components/portal/Portal";
import request from "axios";

const Main = () => {
  
  const [clientInformation, setClientInformation] = useState({accounts: []});
  const [activeAccount, setActiveAccount] = useState(0);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([])
  
  const getProducts = (categories, products = []) => {
    categories.forEach(cat => {
      if(cat['prods']){
        cat.prods.forEach(prod => {
          prod.cat_id = cat.cat_id;
          if(cat.sub_id){
            prod.sub_id = cat.sub_id;
          }
          products.push(prod);
        })
      }
      if(cat['subcats']){
        cat['subcats'].forEach(subCat => {
          subCat.cat_id = cat.cat_id;
        })
        getProducts(cat['subcats'], products);
      }
      
    })
    return products;
  }
  
  useEffect(() => {
    console.log("Getting client information");
    const clientInfo = {
      clientName: "30dps",
      email: "admin@30pps.com",
      clientId: Math.ceil( Math.random() * 1400),
      accounts: [Math.ceil(Math.random() * 1400),Math.ceil(Math.random() * 1400), Math.ceil(Math.random() * 1400) ],
    }
    console.log("Getting product information.");
    request.get('https://plans.eldoradosprings.com/api/getProds.cfm?home=0').then(res => {
      const prods = getProducts(res.data);
      setProducts(prods);
      setCategories(res.data);
    }).catch(err => {
      console.log(err);
    });
    setClientInformation(clientInfo)
    setActiveAccount(clientInfo.accounts[0]);
  }, [])
  
  return ( <div className='main-body'>
    <LeftColumn clientInformation={clientInformation} setActiveAccount={setActiveAccount}/>
    <Portal products={products} categories={categories} account={activeAccount}/>
  </div> );
};

export default Main;
