import React from "react";
import { TopNav } from "./TopNav";
import { BottomNav } from "./BottomNav";
import "../../styling/header.css";

function Header() {
  $(function () {
    $(" .lang-slice").on("mouseover", () => {
      $("#dropDown-arrow").show();
      $("#lang-dropdown").show();
    }),
      $(" .lang-slice").on("mouseleave", () => {
        $("#dropDown-arrow").hide();
        $("#lang-dropdown").hide();
      }),
      $(" .sign-in-slice").on("mouseover", () => {
        $("#dropDown-arrow-signIn ").show();
        $("#sign-in-menu").show();
      }),
      $(" .sign-in-slice").on("mouseleave", () => {
        $("#dropDown-arrow-signIn ").hide();
        $("#sign-in-menu").hide();
      }),

      $(".select-wrapper").on("click", () => {
        $(".select-wrapper").css({
          'border': "3px solid #f90",
          " height": "93%",
          " top": "1%",
          "z-index": "3",

        })
  
      })
      
    $(".outlet").on("click", () => {
      $(".select-wrapper").css({
        'border': "3px solid transparent",
          'background': '#e6e6e6',
         ' border': '3px solid transparent',
          'border-top-left-radius': '6px',
          'border-bottom-left-radius': '6px',
          'padding': '0.25em',
          'font-family': 'var(--regular-font)',
          'height': '85%',
          'width': '98%',
         ' position': 'relative',
         ' left': '9px',
         ' top': '6%',
         ' cursor': 'pointer',
          'z-index': '1',
      })
    
    }),
      
       $(".cart-container").on("click", () => {
      $(".select-wrapper").css({
        'border': "3px solid transparent",
          'background': '#e6e6e6',
         ' border': '3px solid transparent',
          'border-top-left-radius': '6px',
          'border-bottom-left-radius': '6px',
          'padding': '0.25em',
          'font-family': 'var(--regular-font)',
          'height': '85%',
          'width': '98%',
         ' position': 'relative',
         ' left': '9px',
         ' top': '6%',
         ' cursor': 'pointer',
          'z-index': '1',
      })
    
    }),

      $(".select-wrapper").on('mouseover', () => {
        $('.fa-caret-down ').css('color', 'black');
        $('.select-wrapper').children("select").css('color', 'black');

      }),

 $(".select-wrapper").on('mouseleave', () => {
        $('.fa-caret-down ').css('color', '#666');
        $('.select-wrapper').children("select").css('color', '#666');

      })
    //////////////////////////////////////////
  });

  return (
    <div id="Header" className="header w-100">
      <TopNav />
      <BottomNav />
    </div>
  );
}

export default Header;
