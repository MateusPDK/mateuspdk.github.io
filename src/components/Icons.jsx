import React from "react";

export const Edit = ({ color = "#fff" }) => (
  <svg version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(179 382)">
      <path fill={color} d="M-168.2-328l3.7-14.9 22.7-22.7 11.2 11.2-22.7 22.7-14.9 3.7zm6.3-13.5l-2.4 9.6 9.6-2.4 20.2-20.2-7.2-7.2-20.2 20.2z" />
      <path fill={color} d="M-155.7-332.6c-1-3.9-4-6.9-7.9-7.9l.7-2.8c4.9 1.2 8.7 5 9.9 9.9l-2.7.8" />
      <path fill={color} d="M-156-338.1l-2-2.1 19.9-19.9 2 2-19.9 20" />
      <path fill={color} d="M-166.2-330l4.4-1.1c-.4-1.6-1.7-2.9-3.3-3.3l-1.1 4.4" />
      <path fill={color} d="M-129.5-355.5l-11.2-11.2 4.5-4.5.7.1c5.4.7 9.7 5 10.4 10.4l.1.7-4.5 4.5zm-7.1-11.2l7.2 7.2 1.4-1.4c-.8-3.6-3.6-6.4-7.2-7.2l-1.4 1.4z" />
    </g>
  </svg>
);

export const Delete = ({ color = "#fff" }) => (
  <svg version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(232 228)">
      <path fill={color} d="M-207.5-205.1h3v24h-3z" />
      <path fill={color} d="M-201.5-205.1h3v24h-3z" />
      <path fill={color} d="M-195.5-205.1h3v24h-3z" />
      <path fill={color} d="M-219.5-214.1h39v3h-39z" />
      <path fill={color} d="M-192.6-212.6h-2.8v-3c0-.9-.7-1.6-1.6-1.6h-6c-.9 0-1.6.7-1.6 1.6v3h-2.8v-3c0-2.4 2-4.4 4.4-4.4h6c2.4 0 4.4 2 4.4 4.4v3" />
      <path fill={color} d="M-191-172.1h-18c-2.4 0-4.5-2-4.7-4.4l-2.8-36 3-.2 2.8 36c.1.9.9 1.6 1.7 1.6h18c.9 0 1.7-.8 1.7-1.6l2.8-36 3 .2-2.8 36c-.2 2.5-2.3 4.4-4.7 4.4" />
    </g>
  </svg>
);

export const Hamburguer = ({ color = "#fff" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 17">
    <g>
      <path fill={color} d="M0 0h25v3H0z" />
      <path fill={color} d="M0 7h25v3H0z" />
      <path fill={color} d="M0 14h25v3H0z" />
    </g>
  </svg>
);

export const Close = ({ color = "#fff" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.698 29.699">
    <g fill="none" stroke={color} stroke-width="2">
      <path d="M28.992.708L.707 28.992" />
      <path d="M28.992 28.992L.707.708" />
    </g>
  </svg>
);
