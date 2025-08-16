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
    //newQuery اونی که انتخاب شده هست
    //اگه کاربر All رو انتخاب کرد
    //یعنی اگه تو کتگوری هندلر ما آل انتخاب شده بود بیا از آبجکت اول کتگوری رو جدا کن باقی مقادیر هم جدا کن ==رست
    const {category, ...rest}=currentQuery;
    return rest;
   };
    if(newQuery.search===""){
        const {search,...rest}=currentQuery;
        return rest;
    };
    return {...currentQuery,...newQuery};
}

export{ShortenText,SearchProducts,FilterProducts,CreateQueryObject};
