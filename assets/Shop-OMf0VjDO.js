import{r as c,P as u,j as e,C as f,a as P,b as j,i as b,m as v,c as k,d as A,e as T,f as C,g as N,h as w,k as B,l as S,n as R,o as M,p as I,s as L}from"./index-jGcLpXGz.js";const G="/E-comm/assets/apple-pencil-1st-generation-BC7zg83O.png";let p=[{image:b,title:"11-inch iPad Pro 512GB Space Gray",description:"The 11-inch iPad Pro features an immersive, edge-to-edge Liquid Retina display.",price:"799.00",category:"ipad"},{image:v,title:"13-inch Macbook Air 256GB Space Gray",description:"The 13-inch MacBook Air features 8GB of memory, a fifth-generation Intel Core processor, Thunderbolt 2, great built-in apps, and all-day battery life.",price:"999.00",category:"laptop"},{image:k,title:"14-inch Macbook Pro 12-Core 1TB Space Black",description:"The 14-inch MacBook Pro features a stunning Retina display with over 5 million pixels.",price:"1999.00",category:"laptop"},{image:A,title:"15-inch Macbook Air 2TB Midnight",description:"The 15-inch MacBook Air features a Retina display, Touch ID, a Magic Keyboard, and all-day battery life.",price:"2499.00",category:"laptop"},{image:T,title:"AirPods Max",description:"AirPods Max reimagine over-ear headphones.",price:"549.00",category:"accessory"},{image:C,title:"AirPods Pro 2nd Generation",description:"AirPods Pro have been designed to deliver Active Noise Cancellation for immersive sound.",price:"249.00",category:"accessory"},{image:N,title:"Apple iPad Air 256GB Purple",description:"The all-new iPad Air features an all-screen design with a 10.9-inch Liquid Retina display.",price:"599.00",category:"ipad"},{image:w,title:"Apple iPhone 14 128GB Blue",description:"The iPhone 14 features a 6.1-inch Super Retina XDR display.",price:"699.00",category:"phone"},{image:B,title:"Apple iPhone 15 Pro 1TB Blue Titanium",description:"The iPhone 15 Pro features a 6.1-inch Super Retina XDR display.",price:"999.00",category:"phone"},{image:S,title:"Apple iPhone 15 Pro Max 256GB Natural Titanium",description:"The iPhone 15 Pro Max features a 6.7-inch Super Retina XDR display.",price:"1099.00",category:"phone"},{image:G,title:"Apple Pencil 1st Generation",description:"The Apple Pencil delivers pixel-perfect precision and industry-leading low latency.",price:"99.00",category:"accessory"},{image:R,title:"Apple TV 4K WiFi",description:"The Apple TV 4K delivers a stunning cinematic experience at home.",price:"179.00",category:"Tv"},{image:M,title:"Apple Watch Series 9 Aluminum",description:"The Apple Watch Series 9 features a stunning new design and a larger display.",price:"399.00",category:"watch"},{image:I,title:"Apple Watch Ultra 2",description:"The Apple Watch Ultra 2 features a new design and a larger display.",price:"499.00",category:"watch"},{image:L,title:"Silver Lamicall Adjustable Laptop Riser",description:"The Silver Lamicall Adjustable Laptop Riser is designed to elevate your laptop to a comfortable and ergonomic viewing height.",price:"29.99",category:"accessory"}];function D(){const[g,o]=c.useState([]),[i,s]=c.useState(null),{currentPage:t,postPerPage:l,SetCurrentPage:d,SetPostPerPage:h}=c.useContext(u);c.useEffect(()=>{const a=t*l,n=a-l;o(p.slice(n,a)),h(9)},[l,t]);const r=a=>{if(i===a)s(null),o(p);else{s(a);const n=p.filter(x=>x.category.toLowerCase()===a.toLowerCase());o(n)}},m=()=>{t<2&&(d(t+1),s(null))},y=()=>{t>1&&(d(t-1),s(null))};return e.jsxs("section",{className:"flex text-center md:text-left mt-10 sm:mx-[4rem] mx-10 flex-col md:flex-row",children:[e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"font-semibold text-[rem] mb-5",children:"Product Categories"}),e.jsxs("div",{className:"flex transition-all duration-[3000] ease-in gap-2 items-center md:items-start justify-center mb-4 md:flex-col md:gap-4",children:[e.jsxs("div",{className:"flex gap-2 ",children:[e.jsx("input",{type:"checkbox",id:"category1",name:"category1",value:"category1",onClick:()=>r("watch"),checked:i==="watch"}),e.jsx("label",{htmlFor:"category1",children:"Watches"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"checkbox",id:"category2",name:"category2",value:"category2",onClick:()=>r("Tv"),checked:i==="Tv"}),e.jsx("label",{htmlFor:"category2",children:"Tv & Home "}),e.jsx("br",{})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"checkbox",id:"category3",name:"category3",value:"category3",onClick:()=>r("ipad"),checked:i==="ipad"}),e.jsx("label",{htmlFor:"category3",children:"Ipads"}),e.jsx("br",{})]})]}),e.jsxs("div",{className:"flex gap-2 md:gap-4 transition-all duration-[3000] ease-in  mb-10 md:flex-col  justify-center",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"checkbox",id:"category4",name:"category4",value:"category4",onClick:()=>r("accessory"),checked:i==="accessory"}),e.jsx("label",{htmlFor:"category4",children:"Accessories"}),e.jsx("br",{})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"checkbox",id:"category5",name:"category5",value:"category5",onClick:()=>r("laptop"),checked:i==="laptop"}),e.jsx("label",{htmlFor:"category5",children:"Laptops"}),e.jsx("br",{})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("input",{type:"checkbox",id:"category6",name:"category6",value:"category6",onClick:()=>r("phone"),checked:i==="phone"}),e.jsx("label",{htmlFor:"category6",children:"Phones"}),e.jsx("br",{})," "]})]})]}),e.jsxs("div",{className:"md:ml-20",children:[" ",e.jsx("div",{className:"grid grid-cols-1 ssm:grid-cols-2 lg:grid-cols-3  gap-5 bg-[#E6E5E5",children:g.map(a=>e.jsx(f,{image:a.image,title:a.title,Description:a.Description,Price:a.price},a.image))}),e.jsxs("div",{className:"flex mt-3 mb-[8rem] justify-center",children:[e.jsx("img",{onClick:y,className:"pr-2 w-6 cursor-pointer",src:P,alt:""})," ",e.jsxs("p",{children:["Page ",t," of 2"]})," ",e.jsx("img",{onClick:m,className:"pl-2 cursor-pointer",src:j,alt:""})]})]})]})}export{D as default};
