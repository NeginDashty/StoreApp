 const ShortenText=(text)=>{
    return text.split(" ").slice(0,3).join("");
};

 const SearchProducts=(products,search)=>{
    if(!search) return products;
    const searchProducts=products.filter((p)=>{
        return p.title.toLowerCase().includes(search)
    });
    return searchProducts;

};

const FilterProducts=(products,category)=>{
if (!category) return products;
const filterProducts=products.filter(p=>p.category===category);
return filterProducts;
}

const CreateQueryObject=(currentQuery,newQuery)=>{
   if (newQuery.category==='all') {
    const {category, ...rest}=currentQuery;
    return rest;
   };
    if(newQuery.search===""){
        const {search,...rest}=currentQuery;
        return rest;
    };
    return {...currentQuery,...newQuery};
};


const getInitialQuery=(searchParams)=>{
const query={};
    const category=searchParams.get('category');
    const search=searchParams.get('search');
    if(category) query.category=category;
    if(search) query.search=search;
    return query;

};

const SumProducts = (products) => {
  const itemCounter = products.reduce((acc, cur) => acc + cur.quantity, 0);

  const totalPrice = products
    .reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
    .toFixed(2);

  return { itemCounter, totalPrice };
};


export{ShortenText,SearchProducts,FilterProducts,CreateQueryObject,getInitialQuery,SumProducts};
