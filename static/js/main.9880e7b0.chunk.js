(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={App:"App_App__1bMQH"}},11:function(e,t,a){e.exports={button:"Button_button__38axn"}},12:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1GbHA"}},14:function(e,t,a){e.exports={loader:"Loader_loader__1e0y4"}},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(4),o=a.n(n),l=a(3),i=a(6),s=(a(19),a(10)),u=a.n(s),b=a(11),m=a.n(b),j=a(1),h=function(e){var t=e.onClick;return Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"button",onClick:t,className:m.a.button,children:"Load more"})})};var d={data:function(e,t){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=21647427-119fc9e63c06e8167cfe2cce4&image_type=photo&orientation=horizontal&per_page=15")).then((function(e){return e.ok?e.json():Promise.reject(new Error("\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e \u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 "))}))}},_=a(5),f=a.n(_),g=function(e){var t=e.onSubmit,a=Object(r.useState)(""),c=Object(l.a)(a,2),n=c[0],o=c[1];return Object(j.jsx)("div",{children:Object(j.jsx)("header",{className:f.a.Searchbar,children:Object(j.jsxs)("form",{className:f.a.SearchForm,onSubmit:function(e){e.preventDefault(),""!==n?t(n):i.b.error("Please enter your request!")},children:[Object(j.jsx)("button",{type:"submit",className:f.a.SearchForm_button,children:Object(j.jsx)("span",{className:f.a.SearchForm_button__label,children:"Search"})}),Object(j.jsx)("input",{className:f.a.SearchForm_input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:n,onChange:function(e){o(e.currentTarget.value)}})]})})})},O=a(8),p=a.n(O),S=document.querySelector("#root"),x=function(e){var t=e.imageURL,a=e.toggleModal,c=void 0===a?null:a;Object(r.useEffect)((function(){return document.addEventListener("keydown",o),function(){document.removeEventListener("keydown",o)}}));var o=function(e){"Escape"===e.code&&c()};return Object(n.createPortal)(Object(j.jsx)("div",{className:p.a.overlay,onClick:function(e){e.target===e.currentTarget&&c()},children:Object(j.jsx)("div",{className:p.a.modal,children:Object(j.jsx)("img",{src:t,alt:""})})}),S)},v=a(12),y=a.n(v),I=a(9),k=a.n(I);function F(e){var t=e.onClick,a=e.webformatURL,r=e.largeImageURL,c=e.id;return Object(j.jsx)("div",{children:Object(j.jsx)("li",{className:k.a.ImageGalleryItem,onClick:function(){t(r)},id:c,children:Object(j.jsx)("img",{src:a,alt:"",className:k.a.ImageGalleryItem_image})})})}var C=function(e){var t=e.images,a=e.onClick;return Object(j.jsx)("ul",{className:y.a.ImageGallery,children:t.length>0&&t.map((function(e){var t=e.id,r=e.webformatURL,c=e.largeImageURL;return Object(j.jsx)(F,{webformatURL:r,largeImageURL:c,onClick:a},t)}))})},G=a(13),L=a.n(G),w=(a(41),a(14)),N=a.n(w),E=function(){return Object(j.jsxs)("div",{className:N.a.loader,children:[Object(j.jsx)(L.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}),"Loading ..."]})},R=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(r.useState)(1),o=Object(l.a)(n,2),s=o[0],b=o[1],m=Object(r.useState)([]),_=Object(l.a)(m,2),f=_[0],O=_[1],p=Object(r.useState)(null),S=Object(l.a)(p,2),v=S[0],y=S[1],I=Object(r.useState)(!1),k=Object(l.a)(I,2),F=k[0],G=k[1],L=Object(r.useState)(null),w=Object(l.a)(L,2),N=w[0],R=w[1],U=Object(r.useState)(!1),A=Object(l.a)(U,2),M=A[0],H=A[1];Object(r.useEffect)((function(){if(""!==a){G(!0);G(!0),d.data(a,s).then((function(e){var t=e.total,a=e.hits;0===t&&i.b.error("\u041f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e! \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441"),O(a),window.scrollTo({top:document.documentElement.offsetHeight,behavior:"smooth"})})).catch((function(e){return y(e.message)})).finally(G(!1))}}),[s,a]);return Object(j.jsxs)("div",{className:u.a.App,children:[Object(j.jsx)(g,{onSubmit:function(e){c(e),O([]),b(1),y(null)}}),v&&Object(j.jsx)("h1",{children:v}),Object(j.jsx)(C,{images:f,onClick:function(e){H((function(e){return!e})),R(e)}}),M&&Object(j.jsx)(x,{imageURL:N,toggleModal:function(){H(!M)}}),f.length>0&&Object(j.jsx)(h,{onClick:function(){b((function(e){return e+1}))}}),F&&Object(j.jsx)(E,{}),Object(j.jsx)(i.a,{position:"top-right",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})};a(42);o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(R,{})}),document.getElementById("root"))},5:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2j-kb",SearchForm:"Searchbar_SearchForm__1accT",SearchForm_button:"Searchbar_SearchForm_button__2EhCI","SearchForm-button":"Searchbar_SearchForm-button__2GS_H",SearchForm_button__label:"Searchbar_SearchForm_button__label__3DRds",SearchForm_input:"Searchbar_SearchForm_input__2bzA5"}},8:function(e,t,a){e.exports={overlay:"Modal_overlay__2l4yj",modal:"Modal_modal__3GCUk"}},9:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2c1LD",ImageGalleryItem_image:"ImageGalleryItem_ImageGalleryItem_image__pNibb"}}},[[43,1,2]]]);
//# sourceMappingURL=main.9880e7b0.chunk.js.map