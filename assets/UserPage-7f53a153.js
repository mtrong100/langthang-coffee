import{t as s,j as e,a as t,w as l}from"./index-cce9519e.js";const i=()=>{const{imageSrc:a,handleFileInputChange:r}=s();return e("section",{className:"pt-32 py-20 md:pt-[150px]",children:t("div",{className:"flex flex-col items-center justify-center gap-10 page-container",children:[e("div",{className:"w-[250px] h-[250px] flex justify-center items-center border-[6px] border-solid border-primary rounded-full",children:e("img",{className:"rounded-full img-cover",src:a||l,alt:"user-avatar"})}),e("input",{className:"hidden",id:"change-avt",type:"file",accept:"image/*",onChange:r}),e("label",{className:"inline-flex items-center justify-center px-10 py-4 font-semibold text-black uppercase rounded-lg cursor-pointer bg-primary",htmlFor:"change-avt",children:"Change Profile"})]})})};export{i as default};