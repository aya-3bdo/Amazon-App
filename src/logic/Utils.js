// Handle Resizing TopNav select-input of middle section.
export const hanleResizingInput = () => {
  const selectMenu = document.querySelector("#select-menu");
  if (selectMenu.value.length < 4) {
    selectMenu.style.width = `${selectMenu.value.length * 17}px`;
  } else if (selectMenu.value.length < 7) {
    selectMenu.style.width = `${selectMenu.value.length * 14.5}px`;
  } else if (selectMenu.value.length <= 14) {
    selectMenu.style.width = `${selectMenu.value.length * 11}px`;
  } else if (selectMenu.value.length < 20) {
    selectMenu.style.width = `${selectMenu.value.length * 10}px`;
  } else if (selectMenu.value.length < 35) {
    selectMenu.style.width = `${selectMenu.value.length * 8}px`;
  }
};
// Handle Showing TopNav signIn list 
export const handleShowSignInSliceList = () => {
  const dropdownArrowSignIn = document.querySelector("#dropDown-arrow-signIn");
  const languageListSignIn = document.querySelector("#sign-in-menu");
  dropdownArrowSignIn.style.display = "block";
  languageListSignIn.style.display = "block";
};
// Handle Hiding TopNav signIn list 

export const handleHideSignInSliceList = () => {
  const dropdownArrowSignIn = document.querySelector("#dropDown-arrow-signIn");
  const languageListSignIn = document.querySelector("#sign-in-menu");
  dropdownArrowSignIn.style.display = "none";
  languageListSignIn.style.display = "none";
};
// Handle Showing TopNav middle select-wapper div.

export const handleShowSelectWrapperStyle = () => {
  const selectWrapper = document.querySelector(".select-wrapper");
  selectWrapper.style.cssText = `
     cursor: pointer !important;
  border: 3px solid #f90;
   height: 93%;
  top: 1%;
  z-index: 3;
    `;
};
// Handle removing TopNav middle select-wapper div.

export const handleRemoveSelectWrapperStyle = () => {
  const selectWrapper = document.querySelector(".select-wrapper");
  selectWrapper.style.cssText = `
     cursor: pointer !important;
  border: 3px solid transparent;
  height: 85%;
  top: 6%;
  z-index: 1;
    `;
};
// Handle Showing TopNav lang-slice list.
export const handleShowLangSliceList = () => {
  const dropdownArrow = document.querySelector("#dropDown-arrow");
  const languageList = document.querySelector("#lang-dropdown");

  dropdownArrow.style.display = "block";
  languageList.style.display = "block";
};
// Handle hiding TopNav lang-slice list.
export const handleHideLangSliceList = () => {
  const dropdownArrow = document.querySelector("#dropDown-arrow");
  const languageList = document.querySelector("#lang-dropdown");
  dropdownArrow.style.display = "none";
  languageList.style.display = "none";
};
// Handle Showing Footer lang-slice list.
 export  const handleShowFooterLangMenu = () => {
    const dropdownArrow = document.querySelector("#footer-dropDown-arrow");
    const dropdownMenu =
      document.querySelector(".footer-lang-slice").children[3].lastElementChild;
    dropdownArrow.style.display = "block";
    dropdownMenu.style.display = "block";
 };
  // Handle hiding Footer lang-slice list.
 export const handleHideFooterLangMenu = () => {
    const dropdownArrow = document.querySelector("#footer-dropDown-arrow");
    const dropdownMenu =
      document.querySelector(".footer-lang-slice").children[3].lastElementChild;
    dropdownArrow.style.display = "none";
    dropdownMenu.style.display = "none";
  };